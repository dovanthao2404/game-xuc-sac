

function App() {
  return (
    <div className="main">
      <div className="container mt-5">
        <div className="title">
          <h1 className="text-center">GAME ĐỔ XÚC XẮC</h1>
        </div>
        <div>
          <div class="row justify-content-between">
            <div className="col-4">
              <div className="type d-flex justify-content-center align-items-center">
                <span>Tài</span>
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
                <span>Xỉu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
