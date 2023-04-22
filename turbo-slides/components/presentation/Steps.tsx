import React from 'react'

export const Steps = ({ children }: React.PropsWithChildren) => {
  const renderChildren = () => {
    return React.Children.map(children, (element, index) => {
      return <element.type order={index} {...element.props} />
    })
  }

  return <div>{renderChildren()}</div>
}

export default Steps
