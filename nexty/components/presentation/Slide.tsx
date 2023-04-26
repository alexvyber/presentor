import clsx from 'clsx'

type Props = Pick<React.HTMLAttributes<HTMLElement>, 'children' | 'id' | 'className'>

export function Slide({ children, id, className }: Props) {
  return (
    <div id={id} className={clsx('w-full', className)}>
      {children}
    </div>
  )
}
