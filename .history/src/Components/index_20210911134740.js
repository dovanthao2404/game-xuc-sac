import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionGame from "./../redux/actions"
class DoiXiNgau extends Component {
  handleChoseType = (e) => {
    const value = e.target["data-value"];
  }
  render() {
    console.log(this.props.game)
    return (
      <div className="main">
        <div className="container mt-5">
          <div className="title mb-5">
            <h1 className="text-center">GAME ĐỔ XÚC XẮC</h1>
          </div>
          <div>
            <div className="row justify-content-between">
              <div className="col-4">
                <div className="type d-flex justify-content-center align-items-center">
                  <span data-value="Tài" onClick={this.handleChoseType}>Tài</span>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex">
                  <img src="./images/1.png" alt="" />
                  <img src="./images/2.png" alt="" />
                  <img src="./images/3.png" alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="type d-flex justify-content-center align-items-center">
                  <span data-value="Xỉu" onClick={this.handleChoseType}>Xỉu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="result text-center mt-5">
            <h1>Bạn chọn: <span className="text-danger">{this.props.game.type}</span></h1>
            <h1>Số bàn thắng: <span className="text-success">{this.props.game.totalGameWin}</span></h1>
            <h1>Tổng số bàn chơi: <span className="text-primary">{this.props.game.totalGamePlay}</span></h1>
          </div>
          <div className="play-game text-center mt-3">
            <button className="btn btn-success">Play game</button>
          </div>
        </div>
      </div>
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoiXiNgau)