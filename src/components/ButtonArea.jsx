import React from "react";
import Button from './Button';
import { useDispatch } from 'react-redux';
import { gameReset, throwDice } from "../redux/modules/counter";

function ButtonArea() {
  // 액션을 전달해줄 dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        className="Button blue App-button"
        onClick={() => {
          dispatch(throwDice());
        }}
      >
        던지기
      </Button>
      <Button
        className="Button red App-button"
        onClick={() => {
          dispatch(gameReset());
        }}
      >
        처음부터
      </Button>
    </div>
  );
}

export default ButtonArea;
