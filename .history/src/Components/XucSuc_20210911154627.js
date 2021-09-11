import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class XucSuc extends PureComponent {


  handleRenderXucXac = () => {
    const xucXac = []
    let count = 0
    for (let i = 0; i < 3; i++) {
      const random = Math.ceil(Math.random() * 6)
      count += random;
      xucXac.push(<img key={i} src={"./images/" + random + ".png"} alt="" />)
    }
    this.props.updateWhilePlay(count);
    this.setState({ isPlay: false })
    return xucXac;
  }

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
    prop: state.prop
  }
}

export default connect(mapStateToProps, null)(XucSuc)