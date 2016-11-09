import React from 'react'

const updateInterval = 1000 / 60

export const generateData = (resolution, offset = 1) => {
  const data = new Array(resolution)
  let index = 0
  for (let i=offset; i<resolution + offset; i++) {
    const x = (8 * Math.PI) * (i / resolution)
    data[index] = {
      x,
      y: Math.sin(x),
    }
    index++
  }

  return data
}

export class SinDataSource extends React.Component {
  constructor(props) {
    super(props)
    this.updateData = this.updateData.bind(this)
    this.state = {
      data: [],
      offset: 1,
    }
  }

  updateData() {
    const { resolution } = this.props
    const duration = 5000
    const totalNumberOfUpdates = duration / updateInterval
    const offsetIncrement = resolution / totalNumberOfUpdates
    const { offset } = this.state
    const newOffset = offset + offsetIncrement
    const data = generateData(resolution, newOffset)
    this.setState({
      data,
      offset: newOffset,
    }, () => {
      window.requestAnimationFrame(this.updateData)
    })
  }

  componentDidMount() {
    this.animationId = window.requestAnimationFrame(this.updateData)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationId)
  }

  render() {
    const { children } = this.props
    const { data } = this.state

    return children(data)
  }
}
