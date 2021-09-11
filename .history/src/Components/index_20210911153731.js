import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionGame from "./../redux/actions"
import InfoGame from './InfoGame'
import XucSuc from './XucSuc'
class DoiXiNgau extends Component {

  handleChoseType = (e) => {
    const value = e.target.getAttribute("data-value")
    this.props.chooseType(value)
  }

  handlePlayGame = () => {
    const { totalGamePlay, type } = this.props.game
    const typeWhilePlay = totalGamePlay >= 4 && totalGamePlay <= 10 ? "Xỉu" : "Tài"
    if (typeWhilePlay === type) {
      this.props.updateWin()
    }
    this.props.updateTotalGame()
    this.props.updateWhilePlay(0);
  }


  render() {
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
                  <XucSuc />
                </div>
              </div>
              <div className="col-4">
                <div className="type d-flex justify-content-center align-items-center">
                  <span data-value="Xỉu" onClick={this.handleChoseType}>Xỉu</span>
                </div>
              </div>
            </div>
          </div>

          <InfoGame />

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
    },
    updateWhilePlay: (data) => {
      dispatch(ActionGame.updateTotalWhilePlay(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoiXiNgau)