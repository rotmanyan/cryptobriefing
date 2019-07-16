import React, {Component} from 'react';
import arrowDown from 'assets/icons/arrowDown.svg'
import '../../styles/header.scss'

class Header extends Component {
  state = {
    sortColumn: '',
    modal: {
      status: false,
      name: null
    }
  }

  openModal = (event) => {
    this.setState({sortColumn: event.target.title})
  }

  closeModal = () => this.setState({modal: {status: false}})

  modalWindow = () => {
    const {modal: {status, name}} = this.state

    return (status
        ? <div
          className='headerBoard__sortModal'
          onClick={this.closeModal}
        >
          hello {name}
        </div>
        : null
    )
  }

  render() {
    const {selected_fields} = this.props

    return (
      <ul className='headerBoard__list'>
        {this.modalWindow()}
        {selected_fields.map((el, id) =>
          el.column_name.toLowerCase() === 'trend'
            ? <li
              onClick={this.openModal}
              title={el.column_type}
              className='headerBoard__item headerBoard__item--left'
              key={id}
            >
                  <span
                    className="headerBoard__text"
                  >
                      {el.column_name}
                  </span>
            </li>
            : <li
              onClick={this.openModal}
              title={el.column_type}
              className='headerBoard__item'
              key={id}
            >
                  <span
                    className="headerBoard__text"
                  >
                    {el.column_name}
                  </span>
              <img
                title={el.column_name}
                className="headerBoard__text"
                src={arrowDown}
                alt={el.column_name}
              />
            </li>
        )}
      </ul>
    )
  }
}

export default Header;