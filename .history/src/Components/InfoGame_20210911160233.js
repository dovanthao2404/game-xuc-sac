import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionGame from "./../redux/actions"
class InfoGame extends Component {

  handlePlayGame = () => {
    const { totalGamePlay, type } = this.props.game
    const typeWhilePlay = totalGamePlay >= 4 && totalGamePlay <= 10 ? "Xỉu" : "Tài"

    this.props.updateWin()

    this.props.updateTotalGame()
    // this.props.updateWhilePlay(0);
  }

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    chooseType: (type) => {
      dispatch(ActionGame.chooseType(type))
    },
    updateWin: () => {
      dispatch(ActionGame.updateWin())
    },
    updateTotalGame: () => {
      dispatch(ActionGame.updateTotalGamePlay())
    },
    updateWhilePlay: (data) => {
      dispatch(ActionGame.updateTotalWhilePlay(data))
    },
    randomXucSac: () => {
      dispatch({ type: "PLAY_GAME" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoGame)