import PreloaderBehavior from './PreloaderBehavior'

/**
 * Preloader — the white curtain that splits open on page load.
 * Markup is server-rendered; the DOMContentLoaded handler lives in
 * <PreloaderBehavior /> which renders nothing.
 */
export default function Preloader() {
  return (
    <>
      <div className="preloader" data-preloader>
        <span className="line" />
      </div>
      <PreloaderBehavior />
    </>
  )
}
