import './App.css';
import logo from './assets/logo.png'
import './index.css'

function App() {
  return (
    <>
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <button className="Button blue App-button">던지기</button><button className="Button red App-button">처음부터</button>
        </div>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <h2 className="Board-heading">나</h2>
          <img className="Dice" src="dice-blue-1.svg" alt="1" />
          <h2 className="Board-heading">기록</h2>
          <p></p>
          <h2 className="Board-heading">총점</h2>
          <p>0</p>
        </div>
        <div className="Board App-board">
          <h2 className="Board-heading">상대</h2>
          <img className="Dice" src="dice-red-1.svg" alt="1" />
          <h2 className="Board-heading">기록</h2>
          <p></p>
          <h2 className="Board-heading">총점</h2>
          <p>0</p>
        </div>
      </div>
    </>
  );
}

export default App;
