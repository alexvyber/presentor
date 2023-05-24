import { SwipeableProps, useSwipeable } from 'react-swipeable'

export const Swipeable = ({ children, ...props }: SwipeableProps & React.PropsWithChildren) => {
  const handlers = useSwipeable(props)

  return <div {...handlers}>{children}</div>
}

export default Swipeable
