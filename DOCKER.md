### DOCKER CONTAINERIZATION & DEPLOYMENT GUIDE (portfolioAG)

![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-v2-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22--alpine-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-12.3.4-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.2.12-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-3.21-0D597F?style=for-the-badge&logo=alpinedotlinux&logoColor=white)

Comprehensive guide and command reference for containerizing, building, running, and managing the **portfolioAG** Next.js application using Docker and Docker Compose.

**Developer:** Aaditya Gunjal - Full Stack Developer  
**Framework:** Next.js 16.2.12 (App Router — Standalone Production Output)  
**Package Manager:** pnpm 12.3.4 (Corepack Enabled)

---

## Core Container Features

**Multi-Stage Build Pipeline** - Leverages a highly optimized 3-stage `Dockerfile` (`deps`, `builder`, `runner`) to separate dependency installation, application compilation, and production execution. Result: a minimal, ultra-fast production container image (~150MB).

**Standalone Next.js Output** - Utilizes Next.js 16 standalone server output (`output: 'standalone'`), bundling only the necessary node modules required in production, completely eliminating build-tool bloat.

**Non-Root Security Hardening** - Runs the container process under a restricted system user (`nextjs:nodejs`, GID/UID 1001) rather than root, following strict enterprise container security standards.

**Automated Docker Compose Workflow** - Fully configured `docker-compose.yml` for single-command orchestration, port mapping (`3000:3000`), restart policies (`unless-stopped`), and environment configuration.

**WSL 2 & Cross-Platform Optimization** - Native support for Docker Desktop on Windows (WSL 2 backend), Linux, and macOS environments with zero host dependency requirements.

---

## Technology Stack

| Technology / Layer | Version   | Purpose in Container Setup                                        |
| :----------------- | :-------- | :---------------------------------------------------------------- |
| **Docker Engine**  | 29.x+     | Core containerization runtime engine                              |
| **Docker Compose** | v2.x      | Multi-container service orchestration                             |
| **Alpine Linux**   | 3.21      | Lightweight, security-hardened Linux base distribution            |
| **Node.js**        | 22-alpine | JavaScript runtime environment for server components              |
| **pnpm**           | 12.3.4    | Fast, disk-space-efficient package manager activated via Corepack |
| **Next.js**        | 16.2.12   | App Router framework compiled into standalone production server   |

---

## Multi-Stage Docker Architecture

The container is constructed using a 3-tier build lifecycle defined in [Dockerfile](file:///c:/SharedData/Projects/Aaditya/portfolioAG/Dockerfile):

```
┌─────────────────────────────────────────────────────────┐
│ Stage 1: deps (node:22-alpine)                          │
│ ├── Enable Corepack & prepare pnpm                      │
│ └── Copy package.json, pnpm-lock.yaml -> pnpm install   │
└──────────────────────────┬──────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│ Stage 2: builder (node:22-alpine)                       │
│ ├── Copy node_modules from Stage 1                      │
│ └── Copy source files -> RUN pnpm build                 │
└──────────────────────────┬──────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│ Stage 3: runner (node:22-alpine) — FINAL IMAGE          │
│ ├── Create non-root system user (nextjs:1001)           │
│ ├── Copy standalone server & static assets from Stage 2 │
│ └── CMD ["node", "server.js"]                           │
└─────────────────────────────────────────────────────────┘
```

---

## Quick Start Guide

### Using Docker Compose (Recommended)

The easiest way to build and run the application is via Docker Compose:

```bash
# 1. Build and start the container in detached (background) mode
docker compose up -d

# 2. View real-time container logs
docker compose logs -f

# 3. Stop and clean up containers
docker compose down
```

Access the application in your browser at: **[http://localhost:3000](http://localhost:3000)**

---

### Manual Docker CLI Workflow

If you prefer building and executing images manually using the Docker CLI:

```bash
# 1. Build the production Docker image
docker build -t portfolio-app .

# 2. Run the container on port 3000
docker run -d -p 3000:3000 --name portfolio-container portfolio-app

# 3. Check container logs
docker logs -f portfolio-container

# 4. Stop and remove the container
docker rm -f portfolio-container
```

---

## Complete Docker Command Reference

### Container Operations

| Command                            | Description                                                  |
| :--------------------------------- | :----------------------------------------------------------- |
| `docker compose up -d`             | Builds, creates, and starts the container in background mode |
| `docker compose up -d --build`     | Forces a rebuild of the image before starting the container  |
| `docker compose down`              | Stops and removes containers, networks, and volumes          |
| `docker compose restart`           | Restarts the running portfolio container                     |
| `docker compose ps`                | Displays the status of services managed by Docker Compose    |
| `docker stop portfolio-container`  | Gracefully stops the specified container                     |
| `docker start portfolio-container` | Starts a previously stopped container                        |
| `docker rm -f portfolio-container` | **Forcefully stops and deletes** the container               |

---

### Image Operations

| Command                              | Description                                                  |
| :----------------------------------- | :----------------------------------------------------------- |
| `docker build -t portfolio-app .`    | Builds the Docker image tagged as `portfolio-app`            |
| `docker images`                      | Lists all Docker images currently stored on the host machine |
| `docker rmi portfolio-app`           | Deletes the `portfolio-app` image from local storage         |
| `docker image inspect portfolio-app` | Displays detailed metadata and layer info for the image      |

---

### Monitoring & Diagnostics

| Command                                  | Description                                                    |
| :--------------------------------------- | :------------------------------------------------------------- |
| `docker compose logs -f`                 | Follows live stdout/stderr log output from Docker Compose      |
| `docker logs -f portfolio-container`     | Follows live stdout/stderr log output for a specific container |
| `docker exec -it portfolio-container sh` | Opens an interactive Linux shell inside the container          |
| `docker stats`                           | Shows real-time CPU, Memory, and Network usage statistics      |
| `docker info`                            | Displays system-wide Docker engine and WSL 2 configuration     |

---

### System Maintenance & Cleanup

| Command                               | Description                                                                 |
| :------------------------------------ | :-------------------------------------------------------------------------- |
| `docker builder prune -f`             | Cleans up temporary build cache to free disk space                          |
| `docker image prune -f`               | Removes dangling (unnamed) images                                           |
| `docker system prune -a --volumes -f` | **Deep Clean**: Deletes all unused images, stopped containers, and networks |

---

## Configuration & Environment Variables

Environment variables are passed into the container via [docker-compose.yml](file:///c:/SharedData/Projects/Aaditya/portfolioAG/docker-compose.yml) or specified during `docker run`:

| Variable           | Default Value | Description                                           |
| :----------------- | :------------ | :---------------------------------------------------- |
| `NODE_ENV`         | `production`  | Sets Next.js runtime mode to production optimization  |
| `PORT`             | `3000`        | Port served inside the container                      |
| `HOSTNAME`         | `0.0.0.0`     | Binds server to listen on all IPv4 network interfaces |
| `MAINTENANCE_MODE` | `false`       | Toggles application-wide maintenance banner           |

### Example: Running with Custom Environment Variables

```bash
docker run -d \
  -p 8080:3000 \
  -e NODE_ENV=production \
  -e MAINTENANCE_MODE=true \
  --name portfolio-maintenance \
  portfolio-app
```

---

## Troubleshooting & FAQ

### Issue 1: Port 3000 Conflict (`port is already allocated`)

If another application is using port 3000 on your machine:

```bash
# Map container port 3000 to host port 8080 instead
docker run -d -p 8080:3000 --name portfolio-container portfolio-app
```

Access the application at `http://localhost:8080`.

---

### Issue 2: Docker Desktop Engine Hung on Windows

If Docker Desktop becomes unresponsive or named pipes fail:

```cmd
wsl --shutdown
taskkill /F /IM "Docker Desktop.exe" /T
"C:\Users\Admin\AppData\Local\Programs\DockerDesktop\Docker Desktop.exe"
```

---

### Issue 3: Rebuilding After Code Updates

If changes made to React components or Next.js pages do not appear in the container:

```bash
# Force a clean rebuild bypassing cached layers
docker compose up -d --build
```

---

## Verification Protocol

To verify that your Docker container is functioning properly:

1. **HTTP Response Check**:

   ```bash
   curl -I http://localhost:3000
   ```

   _Expected Output:_ `HTTP/1.1 200 OK`

2. **Container Status Check**:

   ```bash
   docker ps --filter "name=portfolio"
   ```

   _Expected Output:_ Status `Up X minutes`

3. **Log Audit**:
   ```bash
   docker logs portfolio-container
   ```
   _Expected Output:_ `▲ Next.js 16.2.12` `Ready in Xms` `Listening on http://0.0.0.0:3000`
