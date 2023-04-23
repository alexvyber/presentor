import { cx } from 'class-variance-authority'

export function Container({ children, className }: React.ComponentProps<'div'>) {
  return <div className={cx('mx-auto 2xl:max-w-6xl px-2 2xs:px-3 xs:px-4 2xl:px-0', className)}>{children}</div>
}
