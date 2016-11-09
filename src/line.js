import React from 'react'
import { line, curveLinear } from 'd3-shape'
import simplify from 'simplify-js'

export const Line = (props) => {
  const { xScale, yScale, data } = props

  if (!data.length) {
    return null
  }

  for (let i=0; i<data.length; i++) {
    data[i].x = xScale(data[i].x)
    data[i].y = yScale(data[i].y)
  }

  const lineFunction = line()
    .curve(curveLinear)
    .x(d => d.x)
    .y(d => d.y)

  const path = lineFunction(simplify(data))

  return (
    <path
      d={path}
      style={{ stroke: 'blue', strokeWidth: 3, fill: 'none' }}
    />
  )
}
