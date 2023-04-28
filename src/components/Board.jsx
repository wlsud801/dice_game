import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Dice from './Dice'

const AppBoards = styled.div`
    margin-top: 27px;
`
const Board = styled.div`
    width: 30%;
    margin: 10px;
    display: inline-block;
    padding: 35px 30px;
    border: 1px solid transparent;
    border-radius: 12px;
    font-size: 16px;
    text-align: center;
    background-color: #272b38;
`
const BoardHeading = styled.h2`
    margin: 45px auto 15px;
    color: #888d9d;
    font-weight: 400;
    font-size: 18px;
`
const GameHistory = styled.p`
  max-width:100%;
  word-break:break-all;
  line-height:2;
`

function BoardWrap() {
  // state 연결해주기
  const Score = useSelector((state) => state.counter.score);
  const History = useSelector((state) => state.counter.gameHistory);
  const TotalScore = useSelector((state) => state.counter.totalScore);

  return (
    <AppBoards>
        <Board>
          <BoardHeading>나</BoardHeading>
          <Dice color='blue' number={Score.mine}/>
          <BoardHeading>기록</BoardHeading>
          <GameHistory>{History.mine + ','}</GameHistory>
          <BoardHeading>총점</BoardHeading>
          <p>{TotalScore.mine}</p>
        </Board>
        <Board>
          <BoardHeading>상대</BoardHeading>
          <Dice color='red' number={Score.other}/>
          <BoardHeading>기록</BoardHeading>
          <GameHistory>{History.other + ','}</GameHistory>
          <BoardHeading>총점</BoardHeading>
          <p>{TotalScore.other}</p>
        </Board>
    </AppBoards>
  )
}

export default BoardWrap;