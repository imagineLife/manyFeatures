import React, { Component } from "react";
import SignatureCanvas from 'react-signature-canvas'
import './index.css'

export default class MyCanvas extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      trimmedDataURL: null,
      canvasStyle: {
        width: 500,
        height: 200,
        className: 'sigCanvas',
        'max-width': '100%',
        'max-height': '45%'
      }
    }

    this.sigPad = {}
    this.clear = this.clear.bind(this)
    this.trim = this.trim.bind(this)
  }

  clear(){
    this.sigPad.clear()
  }

  trim(){
    let trimmedImg = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
    console.log('thisTrimmed img')
    console.log(trimmedImg)
    this.setState({trimmedDataURL: trimmedImg})
  }

  render(){

    return (
      <React.Fragment>
        <SignatureCanvas
          penColor='green'
          canvasProps={this.state.canvasStyle}
          ref={(ref) => { this.sigPad = ref }} />

        <div>
          <button className={'button clear'} onClick={this.clear}>
            Clear
          </button>
          <button className={'button trim'} onClick={this.trim}>
            Trim
          </button>
        </div>

        {this.state.trimmedDataURL
          ? <img className={'sigImage'}
            src={this.state.trimmedDataURL} />
          : null}
      </React.Fragment>

    )
  }
};