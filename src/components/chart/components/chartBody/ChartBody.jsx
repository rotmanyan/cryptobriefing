import React, {Component} from 'react'
import {Bar, BarChart, ResponsiveContainer, CartesianGrid, Line, LineChart, Tooltip, YAxis, XAxis} from 'recharts'
import {CustomizedDot} from '../chartCustom/CustomizedDot'
import {CustomTooltip} from '../chartCustom/CustomTooltip';
import './chartBody.scss'

class ChartBody extends Component {
  render() {
    const {
      data,
      colorsStroke
    } = this.props

    return (
      data.length > 0 && <>
        <ResponsiveContainer
          width='100%'
          className='chartBody__linearContainer'
        >
          <LineChart
            syncId='anyId'
          >
            <Tooltip
              className='tooltipChart'
              content={<CustomTooltip/>}
              position={{x: 980, y: -15}}
            />
            <XAxis
              dataKey="created_at"
              type="category"
              allowDuplicatedCategory={false}
              tick={{
                fontSize: '0.0125px',
                fill: 'transparent'
              }}/>
            <YAxis
              orientation='right'
              stroke='#979797'
              strokeDasharray='1 1'
            />
            <CartesianGrid stroke='#97979752' vertical={false} strokeDasharray='1 1'/>
            {data.map((el, id) => (
              <Line
                stroke={colorsStroke[id]}
                dataKey="current_price"

                data={el.prices}
                key={el.name}

                activeDot={{stroke: '#fff', strokeWidth: 3, r: 7}}
                dot={<CustomizedDot news={el.news}/>}

              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <div
          className='responsiveBlock'
        >
          <BarChart
            width={991.59}
            height={70}
            syncId='anyId'
            data={data[0].prices}
          >
            <XAxis/>
            <Bar
              type='linear'
              barSize={1}
              dataKey='current_price'
              fill={'#21eb00'}
            />
            )}
          </BarChart>
        </div>
      </>
    )
  }
}

export default ChartBody