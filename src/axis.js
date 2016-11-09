import React from 'react'
import { select } from 'd3-selection'

export class Axis extends React.Component {
  constructor(props) {
    super(props)
    this.renderAxis = this.renderAxis.bind(this)
  }

  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    const { scale, axis, tickCount } = this.props
    const node = this.refs.axis
    const axisFn = axis(scale).ticks(tickCount)
    axisFn(select(node))
  }

  render() {
    const { transform } = this.props
    return (
      <g
        ref="axis"
        transform={transform}
      ></g>
    )
  }
}
