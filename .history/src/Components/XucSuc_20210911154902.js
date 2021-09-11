import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucSuc extends Component {
  renderXucXac = () => {
    const xucXac = []
    for (let i = 0; i < this.props.game.mangXucXac.length; i++) {
      xucXac.push(<img key={i} src={this.props.game.mangXucXac[i].hinhAnh} alt="" />)
    }
    return xucXac;
  }
  render() {
    return (
      <>
        {this.renderXucXac()}
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, null)(XucSuc)