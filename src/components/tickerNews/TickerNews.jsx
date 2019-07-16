import React, {Component} from 'react'
import Ticker from 'react-ticker'
import {ticker} from '../../data/dashboard/selectors'
import {connect} from "react-redux";

class TickerNews extends Component {
  render() {
    const {ticker} = this.props

    return (
      <div className="newsLine">
        {this.props && ticker.length > 0 &&
        <Ticker
          move={true}
          speed={4}
          mode='smooth'
        >
          {() => (<ul className="newsLine__list">
            {ticker.map((el, id) => (<li className="newsLine__item" key={id}>
              <span className="newsLine__name">{el.symbol}</span>
              <span className={el.grow
                ? 'newsLine__price'
                : 'newsLine__price newsLine__price--red'}>
                    ${`${el.price}`}
                  </span>
            </li>))}
          </ul>)}
        </Ticker>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ticker: ticker(state)
})

export default connect(mapStateToProps)(TickerNews)
