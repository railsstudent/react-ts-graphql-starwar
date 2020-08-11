import React, { FunctionComponent } from "react";

const X: FunctionComponent<{ name: string }> = (props) => {
  if (!props.name) {
    return null
  }

  return (
    <h1>{ props.name }</h1>
  )
}

export default X
