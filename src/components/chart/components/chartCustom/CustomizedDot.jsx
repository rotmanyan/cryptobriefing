import React from 'react';


const formatData = data => data.split(':')[0].split('T')[0];
export const CustomizedDot = ({cx, cy, stroke, payload, news}) => news.map(el => {
    const payloadCreatedAt = formatData(payload.created_at);
    const elCreatedAt = formatData(el.created_at);

    if (payloadCreatedAt === elCreatedAt) {
      switch (el.article_type) {
        case 'external':
          return <svg x={cx - 7.48576} y={cy - 7.48576} width={15} height={15}>
            <ellipse fill="#ff5f00" strokeWidth="1.5" cx="7.48576" cy="7.48576" id="svg_1" rx="6.62587" ry="6.66583"
                     stroke="#ff5f00"/>
            <text
              fill="#ffffff" strokeWidth="0" fillOpacity="null" stroke="#ff5f00"
              x="-2.050835" y="-10.248979" id="svg_3" fontSize="24" fontFamily="Arial, sans-serif"
              transform="matrix(0.4571309432093837,0,0,0.38560972272814853,4.709772942144815,14.701110127575447) "
            >
              E
            </text>
          </svg>
        case 'report':
          return <svg x={cx - 7.48576} y={cy - 7.48576} width={15} height={15}>
            <ellipse fill="#840bac" strokeWidth="1.5" cx="7.48576" cy="7.48576" id="svg_1" rx="6.62587" ry="6.66583"
                     stroke="#840bac"/>
            <text fill="#ffffff" strokeWidth="0" strokeOpacity="null" fillOpacity="null" x="-2.050835" y="-10.248979"
                  id="svg_3" fontSize="24" fontFamily="Arial, sans-serif"
                  transform="matrix(0.4571309432093837,0,0,0.38560972272814853,4.709772942144815,14.701110127575447) "
                  stroke="#ff5f00">R
            </text>
          </svg>
        case 'L':
          return <svg x={cx - 7.48576} y={cy - 7.48576} width={15} height={15}>
            <ellipse fill="#00a655" strokeWidth="1.5" cx="7.48576" cy="7.48576" id="svg_1" rx="6.62587" ry="6.66583"
                     stroke="#00a655"/>
            <text fill="#ffffff" strokeWidth="0" fillOpacity="null" x="0" y="-10.248979" id="svg_3" fontSize="24"
                  fontFamily="Arial, sans-serif"
                  transform="matrix(0.4571309432093837,0,0,0.38560972272814853,4.709772942144815,14.701110127575447)">L
            </text>
          </svg>
        case 'ARROW':
          return <svg x={cx - 7.48576} y={cy - 7.48576} width={15} height={15}>
            <ellipse fill="#01b6bd" strokeWidth="1.5" cx="7.48576" cy="7.48576" id="svg_1" rx="6.62587" ry="6.66583"
                     stroke="#01b6bd"/>
            <text fill="#ffffff" strokeWidth="0" strokeOpacity="null" fillOpacity="null" x="0" y="-10" id="svg_3"
                  fontSize="24" fontFamily="Arial, sans-serif"
                  transform="matrix(0.4571309432093837,0,0,0.38560972272814853,4.709772942144815,14.701110127575447)">
              ^
            </text>
          </svg>
        case 'internal':
          return false
        default:
          return false
      }
    }
    return false
  }
)