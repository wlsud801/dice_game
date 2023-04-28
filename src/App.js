import logo from './assets/logo.png'
import './index.css'
import ButtonArea from './components/ButtonArea';
import Wrap from './components/Wrap';
import Board from './components/Board';



function App() {
  return (
    <Wrap>
      <img className="App-logo" src={logo} alt="주사위게임 로고" />
      <h1 className="App-title">주사위게임</h1>
      <ButtonArea />
      <Board />
    </Wrap>
  );
}

export default App;
