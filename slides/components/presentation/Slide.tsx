import { cx } from 'cvax'

export default function Slide({ children, id, className }) {
  return (
    <div id={id} className={cx('overflow-hidden ', className)}>
      {children}
    </div>
  )
}
