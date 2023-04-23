import { useSwipeable } from 'react-swipeable'

export const Swipeable = ({ children, ...props }: React.ComponentProps<'div'>) => {
  const handlers = useSwipeable(props)

  return <div {...handlers}>{children}</div>
}

export default Swipeable
