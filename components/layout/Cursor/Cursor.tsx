import CursorBehavior from './CursorBehavior'

/**
 * Custom cursor — dot + outline. Hidden on <768px via CSS.
 * Markup is server-rendered; tracking logic lives in <CursorBehavior />.
 */
export default function Cursor() {
  return (
    <>
      <span className="cursor-dot" data-cursor aria-hidden="true" role="presentation" />
      <span className="cursor-outline" data-cursor aria-hidden="true" role="presentation" />
      <CursorBehavior />
    </>
  )
}
