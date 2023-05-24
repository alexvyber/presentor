import { CSSProperties } from 'react'
import stripe from './stripe.module.css'
import { cx } from 'cvax'

export type StripesProps = {
  className?: string
  stripesClasses: Record<string, CSSProperties>
  backgroundColor: string
}

export const Stripes = ({ className, stripesClasses, backgroundColor }: StripesProps) => (
  <div
    className={cx(
      stripe['StripeGrid'],
      className,
      'h-[1000px] pointer-events-none -z-10 absolute my-auto -mx-4 top-0 lg:w-full w-[calc(100%+1rem)] lg:m-auto'
    )}>
    <div
      style={{
        gridTemplateColumns: '1fr',
        minWidth: '0',
      }}>
      <div className={cx(stripe['gridy'], 'grid absolute w-full h-[100%] -top-48 -skew-y-[10deg]')}>
        <div className={cx('row-span-full -z-10', backgroundColor)} style={{ gridColumn: '1/-1' }}></div>
      </div>
    </div>

    <div className={cx('flex justify-end absolute flex h-full w-full  flex-col items-center align-middle -skew-y-[10deg] overflow-hidden')}>
      <div className={cx(stripe['gridy'], 'grid absolute w-full h-[100%]')}>
        {Object.entries(stripesClasses).map(([item, style], index) => (
          <div key={index} className={cx('rounded-lg', item)} style={style}></div>
        ))}
      </div>
    </div>
  </div>
)
