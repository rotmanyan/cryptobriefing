import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  dataDefaultPresets,
  dataCustomPresets,
  newPreset,
  dataValuePreset
} from 'data/presets/selectors'
import PresetsModal from './PresetsModal/PresetsModal'

import {
  getPresets,
  addNewPresets,
  deletePresets,
  selectPreset
} from 'data/presets/operation'

import {token} from 'data/baseUrl'

import {getDashboardListed} from 'data/dashboard/operation'

import './Presets.scss'

class Presets extends Component {
  state = {
    isVisible: false,
    valueNewPreset: ''
  }

  componentDidMount() {
    this.props.getPresets()
  }

  handleModal = status => this.setState({isVisible: !this.state.isVisible && status})

  onSelect = preset => {
    const {
      // selectPreset,
      // getDashboardListed,
      tokenStore
    } = this.props
    const actualToken = tokenStore || token
    this.setState({isVisible: !this.state.isVisible})
    console.log(preset.id, 'preset.id');
    console.log(actualToken, 'actualToken');
    // if (actualToken) {
    //   selectPreset(preset.id)
    // }
  }

  deleteCustom = (event, id) => {
    event.stopPropagation()
    const {
      deletePresets,
      selectPreset,
      inputValue,
      defaultPresets
    } = this.props
    deletePresets(id)
    if (id === inputValue.id) {
      selectPreset(defaultPresets[0].id)
    }
  }

  handleValueNewPreset = e => this.setState({valueNewPreset: e.target.value})

  handleSaveNewPreset = () => {
    const {addNewPresets} = this.props
    const {valueNewPreset} = this.state

    addNewPresets(valueNewPreset)
    this.setState({valueNewPreset: '', isVisible: false})
  }

  render() {
    const {
      defaultPresets,
      customPresets,
      statusNewPreset,
      inputValue
    } = this.props

    const {isVisible, valueNewPreset} = this.state

    return (
      inputValue ?
        <>
          <div className='basicDropDown__wrapper'>
            <div className='basicDropDown__icon'/>
            <input
              className='basicDropDown__input'
              type='button'
              onClick={this.handleModal}
              value={inputValue.name || ''}
            />

            {isVisible && (
              <PresetsModal
                inputValue={inputValue}
                onSelect={this.onSelect}
                customPresets={customPresets}
                handleModal={this.handleModal}
                defaultPresets={defaultPresets}
                statusNewPreset={statusNewPreset}
                handleValueNewPreset={this.handleValueNewPreset}
                handleSaveNewPreset={this.handleSaveNewPreset}
                valueNewPreset={valueNewPreset}
                deleteCustom={this.deleteCustom}
              />
            )}
          </div>
        </>
        : null
    )
  }
}

const mapStateToProps = state => ({
  tokenStore: state.session.token,
  defaultPresets: dataDefaultPresets(state),
  customPresets: dataCustomPresets(state),
  statusNewPreset: newPreset(state),
  inputValue: dataValuePreset(state)
})

const mapDispatchToProps = {
  getPresets,
  selectPreset,
  addNewPresets,
  deletePresets,
  getDashboardListed
}

export default connect(mapStateToProps, mapDispatchToProps)(Presets)
