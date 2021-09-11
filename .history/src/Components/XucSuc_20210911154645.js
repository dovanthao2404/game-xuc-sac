import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class XucSuc extends PureComponent {




  renderFirst = () => {
    const xucXac = []
    for (let i = 0; i < 3; i++) {
      const random = Math.ceil(Math.random() * 6)
      xucXac.push(<img key={i} src={"./images/" + random + ".png"} alt="" />)
    }
    return xucXac;
  }
  render() {
    return (
      <>
        {this.renderFirst()}
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