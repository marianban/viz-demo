import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { Line } from './line'
import { SinDataSource } from './sin-data-source'
import { findMinMax } from './find-min-max'
import { Axis } from './axis'

class App extends Component {
  render() {
    const width = 600
    const height = 300
    const padding = 35

    return (
      <div>
        <svg
          width={width + padding}
          height={height + padding}
        >
          <SinDataSource resolution={100000}>
            {
              (data) => {
                const { minX, maxX, minY, maxY } = findMinMax(data)

                const xScale = scaleLinear()
                .domain([minX.toFixed(2), maxX.toFixed(2)])
                .range([padding, width - padding])

                const yScale = scaleLinear()
                .domain([minY.toFixed(2), maxY.toFixed(2)])
                .range([height - padding, padding])

                return (
                  <g>
                    <Line
                      xScale={xScale}
                      yScale={yScale}
                      data={data}
                    />
                    <Axis
                      scale={xScale}
                      axis={axisBottom}
                      tickCount={5}
                      transform={`translate(0,${height/2})`}
                    />
                    <Axis
                      scale={yScale}
                      axis={axisLeft}
                      tickCount={5}
                      transform={`translate(${padding},0)`}
                    />
                  </g>
                )
              }
            }
          </SinDataSource>
        </svg>
      </div>
    )
  }
}

export default App
