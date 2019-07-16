import React from 'react';

export const CustomTooltip = (props) => {
  return props.active
    ? <div className="custom-tooltip" style={{transform: `translate(1rem, ${props.coordinate.y}px)`}}>
      <p className="label">{`${props.payload[0].value}`}</p>
    </div>
    : null
}