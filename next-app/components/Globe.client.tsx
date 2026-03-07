"use client"

import React, { useEffect, useRef } from 'react'

export default function Globe() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let THREE: any = null
    let OrbitControls: any = null
    let gsap: any = null

    let scene: any = null
    let camera: any = null
    let renderer: any = null
    let controls: any = null
    let raycaster: any = null
    let mouse: any = null
    let isIntersecting = false
    let twinkleTime = 0.03
    let material: any = null
    let instancedMesh: any = null
    let baseMesh: any = null
    let minMouseDownFlag = false
    let mouseDown = false
    let grabbing = false
    let requestId: number | null = null

    const c = containerRef.current
    if (!c) return

    const vertex = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  uniform float u_time;
  uniform float u_maxExtrusion;
  attribute float a_offset;
  varying float v_offset;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    v_offset = a_offset;
    vec3 newPosition = position;
    
    vNormal = normalize(normalMatrix * (instanceMatrix * vec4(normal, 0.0)).xyz);
    
    float time = u_time + a_offset;
    if(u_maxExtrusion > 1.0) {
        newPosition.xyz = newPosition.xyz * u_maxExtrusion + sin(time) * 0.05;
    } else {
        newPosition.xyz = newPosition.xyz * u_maxExtrusion;
    }

    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4( newPosition, 1.0 );
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`

    const fragment = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  uniform float u_time;
  varying float v_offset;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  vec3 colorA = vec3(0.11, 0.28, 0.32);
  vec3 colorB = vec3(0.18, 0.42, 0.45);

  void main() {
    float time = u_time + v_offset;
    float pct = abs(sin(time));
    vec3 baseColor = mix(colorA, colorB, pct);
    
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    vec3 rimColor = vec3(0.5, 0.8, 0.8) * fresnel * 0.4;
    
    gl_FragColor = vec4(baseColor + rimColor, 1.0);
  }
`

    const init = async () => {
      const threeModule = await import('three')
      THREE = threeModule
      const oc = await import('three/examples/jsm/controls/OrbitControls')
      OrbitControls = oc.OrbitControls
      gsap = (await import('gsap')).gsap

      const sizes = {
        width: c.offsetWidth,
        height: c.offsetHeight,
      }

      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 1, 1000)
      camera.position.z = window.innerWidth > 700 ? 100 : 140

      renderer = new THREE.WebGLRenderer({ canvas: c.querySelector('.globe-canvas'), antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const pointLight = new THREE.PointLight(0x081b26, 12, 200)
      pointLight.position.set(-50, 0, 60)
      scene.add(pointLight)
      scene.add(new THREE.HemisphereLight(0x88ccff, 0x050810, 0.8))

      raycaster = new THREE.Raycaster()
      mouse = new THREE.Vector2()

      setControls()
      setBaseSphere()
      setShaderMaterial()
      setMap()
      resize()
      listenTo()
      render()
    }

    const setControls = () => {
      controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 4
      controls.enableDamping = true
      controls.enableRotate = true
      controls.enablePan = false
      controls.enableZoom = false
      controls.minPolarAngle = (Math.PI / 2) - 0.5
      controls.maxPolarAngle = (Math.PI / 2) + 0.5
    }

    const setBaseSphere = () => {
      const baseSphere = new THREE.SphereGeometry(22, 50, 50)
      const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x030a0d, transparent: true, opacity: 0.95 })
      baseMesh = new THREE.Mesh(baseSphere, baseMaterial)
      scene.add(baseMesh)
    }

    const setShaderMaterial = () => {
      twinkleTime = 0.03
      material = new THREE.ShaderMaterial({
        uniforms: { u_time: { value: 1.0 }, u_maxExtrusion: { value: 1.0 } },
        vertexShader: vertex,
        fragmentShader: fragment,
      })
    }

    const setMap = () => {
      const dotSphereRadius = 24
      let mapData: any = null

      const visibilityForCoordinate = (lon: number, lat: number) => {
        if (!mapData) return false
        const x = Math.floor(((lon + 180) / 360) * mapData.width)
        const y = Math.floor(((90 - lat) / 180) * mapData.height)
        const clampedX = Math.max(0, Math.min(mapData.width - 1, x))
        const clampedY = Math.max(0, Math.min(mapData.height - 1, y))

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const sx = Math.max(0, Math.min(mapData.width - 1, clampedX + dx))
            const sy = Math.max(0, Math.min(mapData.height - 1, clampedY + dy))
            const index = (sy * mapData.width + sx) * 4
            if (mapData.data[index] < 80) return true
          }
        }
        return false
      }

      const calcPosFromLatLonRad = (lon: number, lat: number) => {
        var phi = (90 - lat) * (Math.PI / 180)
        var theta = (lon + 180) * (Math.PI / 180)
        const x = -(dotSphereRadius * Math.sin(phi) * Math.cos(theta))
        const z = dotSphereRadius * Math.sin(phi) * Math.sin(theta)
        const y = dotSphereRadius * Math.cos(phi)
        return new THREE.Vector3(x, y, z)
      }

      const setDots = () => {
        const dotDensity = 2.5
        const positions: any[] = []
        const offsets: number[] = []
        const dummy = new THREE.Object3D()

        for (let lat = 90; lat > -90; lat -= 1) {
          const radius = Math.cos(Math.abs(lat) * (Math.PI / 180)) * dotSphereRadius
          const circumference = radius * Math.PI * 2
          const dotsForLat = Math.max(1, Math.floor(circumference * dotDensity))

          for (let x = 0; x < dotsForLat; x++) {
            const long = -180 + x * 360 / dotsForLat
            if (!visibilityForCoordinate(long, lat)) continue
            const pos = calcPosFromLatLonRad(long, lat)
            positions.push(pos)
            offsets.push(Math.random() * Math.PI * 2)
          }
        }

        const dotGeometry = new THREE.CircleGeometry(0.12, 5)
        const instancedDotMesh = new THREE.InstancedMesh(dotGeometry, material, positions.length)

        const offsetAttribute = new THREE.InstancedBufferAttribute(new Float32Array(offsets), 1)
        // attach instanced attribute
        instancedDotMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
        dotGeometry.setAttribute('a_offset', offsetAttribute)

        positions.forEach((pos, i) => {
          dummy.position.copy(pos)
          dummy.lookAt(0, 0, 0)
          dummy.rotation.y += Math.PI
          dummy.updateMatrix()
          instancedDotMesh.setMatrixAt(i, dummy.matrix)
        })

        instancedMesh = instancedDotMesh
        scene.add(instancedMesh)
      }

      const image = new Image()
      image.crossOrigin = 'Anonymous'
      image.onload = () => {
        const imageCanvas = document.createElement('canvas')
        imageCanvas.width = image.width
        imageCanvas.height = image.height
        const context = imageCanvas.getContext('2d')!
        context.drawImage(image, 0, 0)
        const imageData = context.getImageData(0, 0, imageCanvas.width, imageCanvas.height)

        mapData = { data: imageData.data, width: imageCanvas.width, height: imageCanvas.height }
        setDots()
      }
      image.src = '/assets/images/world_alpha_mini.jpg'
    }

    const resize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.offsetWidth
      const height = containerRef.current.offsetHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      if (window.innerWidth > 700) camera.position.z = 100
      else camera.position.z = 140
    }

    const mousemove = (event: MouseEvent) => {
      isIntersecting = false
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(baseMesh)
      if (intersects[0]) isIntersecting = true
      else isIntersecting = false
    }

    const mousedown = () => {
      if (!isIntersecting || !material) return
      gsap.to(material.uniforms.u_maxExtrusion, { value: 1.07 })
      mouseDown = true
      minMouseDownFlag = false
      setTimeout(() => {
        minMouseDownFlag = true
        if (!mouseDown) mouseup()
      }, 500)
      grabbing = true
    }

    const mouseup = () => {
      mouseDown = false
      if (!minMouseDownFlag) return
      gsap.to(material.uniforms.u_maxExtrusion, { value: 1.0, duration: 0.15 })
      grabbing = false
    }

    const listenTo = () => {
      window.addEventListener('resize', resize)
      window.addEventListener('mousemove', mousemove)
      window.addEventListener('mousedown', mousedown)
      window.addEventListener('mouseup', mouseup)
    }

    const render = () => {
      if (material && material.uniforms) material.uniforms.u_time.value += twinkleTime
      if (controls) controls.update()
      renderer.render(scene, camera)
      requestId = requestAnimationFrame(render)
    }

    init()

    return () => {
      // cleanup
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mousedown', mousedown)
      window.removeEventListener('mouseup', mouseup)
      if (requestId) cancelAnimationFrame(requestId)
      try {
        if (instancedMesh) {
          instancedMesh.geometry.dispose()
          instancedMesh.material.dispose()
          scene.remove(instancedMesh)
        }
        if (baseMesh) {
          baseMesh.geometry.dispose()
          baseMesh.material.dispose()
          scene.remove(baseMesh)
        }
        if (renderer) {
          renderer.dispose()
        }
      } catch (e) {
        // ignore cleanup errors
      }
    }
  }, [])

  return (
    <figure className="skilset1 img-holder" style={{ '--width': '570' } as React.CSSProperties} id="globe-mask">
      <div id="globe-container" ref={containerRef}>
        <canvas className="globe-canvas" />
      </div>
    </figure>
  )
}
