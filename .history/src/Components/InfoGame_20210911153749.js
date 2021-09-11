import React, { Component } from 'react'
import { connect } from 'react-redux'

class InfoGame extends Component {
  render() {
    return (
      <>
        <div className="result text-center mt-5">
          <h1>Bạn chọn: <span className="text-danger">{this.props.game.type}</span></h1>
          <h1>Số bàn thắng: <span className="text-success">{this.props.game.totalGameWin}</span></h1>
          <h1>Tổng số bàn chơi: <span className="text-primary">{this.props.game.totalGamePlay}</span></h1>
        </div>
        <div className="play-game text-center mt-3">
          <button className="btn btn-success" onClick={this.handlePlayGame}>Play game</button>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game
  }
}
export default connect(mapStateToProps)(InfoGame)