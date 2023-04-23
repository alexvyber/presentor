import clsx from 'clsx'
import stripe from './stripe.module.css'
import stripes from './stripes.module.css'
// import stripes from "./pink.module.css"

type Props = {
  className?: string
  stripesClasses: string[]
  backgroundColor: string
}

// const stripesClasses = [
//   "ring ring-orange-200 dark:ring-orange-700",
//   "bg-orange-800",
//   "ring ring-orange-500 dark:ring-orange-900",
//   "bg-orange-700 dark:bg-orange-500",
//   "bg-orange-300 dark:bg-orange-400",
//   "bg-orange-500 dark:bg-orange-900",
//   "bg-orange-800 dark:bg-orange-800",
//   "bg-orange-500 dark:bg-orange-600",
//   "bg-orange-100 dark:bg-orange-700",
//   "ring ring-orange-500",
//   "bg-orange-300 dark:bg-orange-500",
// ]

export const Stripes = ({ className, stripesClasses, backgroundColor }: Props) => (
  <div className={clsx(stripe['StripeGrid'], className, 'h-[1000px]  overflow-hidden')}>
    <aside className={stripe['backgroundContainer']}>
      <section className={stripe['grid']}>
        <main className={clsx(stripe['background'], backgroundColor)}></main>
      </section>
    </aside>
    <main className={stripe['stripeContainer']}>
      <section className={stripe['grid']}>
        {stripesClasses.map((item, index) => (
          <div key={index} className={clsx(stripes['stripe'], item)}></div>
        ))}
      </section>
    </main>
  </div>
)
