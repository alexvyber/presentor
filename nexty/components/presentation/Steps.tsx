import React from 'react'

export const Steps = ({ children }: React.PropsWithChildren) => {
  const renderChildren = () => {
    return React.Children.map(children, (element, index) => {
      if (isReactElement(element)) return <element.type order={index} {...element.props} />

      return <></>
    })
  }

  return <div>{renderChildren()}</div>
}

function isReactElement(element: unknown): element is React.ReactElement {
  // TODO: implement check
  return true
}
