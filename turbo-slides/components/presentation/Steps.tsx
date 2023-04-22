import React from 'react'

export const Steps = ({ children }: React.PropsWithChildren) => {
  const renderChildren = () => {
    return React.Children.map(children, (element, index) => {
      if (!element) return <></>

      return <element.type order={index} {...element.props} />
    })
  }

  return <div>{renderChildren()}</div>
}

export default Steps
