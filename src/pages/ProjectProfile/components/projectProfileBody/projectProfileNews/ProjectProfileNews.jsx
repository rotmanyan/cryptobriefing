import React from 'react';
import './projectProfileNews.scss'

export const ProjectProfileNews = ({props, props: {news}}) =>
  <>
    <div className='projectNews'>
      <h2 className='projectNews__title'>News</h2>
      {news.map((el, id) => {
        return (
          <div key={id} className="projectNews__item">
            <div className="projectNews__date">
              a 1 day ago
              {/*{(+el.created_at) - (+el.event_date)}*/}
            </div>
            <a
              href={el.url}
              target='_blank'
              rel="noopener noreferrer"
              className='projectNews__link'>
              {el.title}
              <span className='projectNews__source'>
                    test source
                </span>
            </a>
          </div>
        )
      })}
    </div>
  </>