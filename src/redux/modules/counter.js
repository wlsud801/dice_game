import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = {
    score : {
        mine: 0,
        other: 0,
    },
    gameHistory : {
        mine: [],
        other: []
    },
    totalScore : {
        mine : 0,
        other : 0
    }
};

// 액션 함수와 Reducer의 역할을 한번에 처리
const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        throwDice: (state) => {
            const min= 1;
            const max= 6;
            let myRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            let otherRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

            // 점수를 랜덤으로 부여해주고
            state.score.mine = myRandomNumber;
            state.score.other = otherRandomNumber;

            // 게임 히스토리에 주사위 던질때마다 나온 값을 넣어준다.
            state.gameHistory.mine.push(state.score.mine);
            state.gameHistory.other.push(state.score.other);

            // 총점을 계속해서 더해준다
            state.totalScore.mine +=  state.score.mine;
            state.totalScore.other +=  state.score.other;

            console.log('던졌다!')
        },
        gameReset : (state) => {
            // redux toolkit 초기화하기 api

            Object.assign(state, initialState);
        }
    }
})


//action 타입 생성과 같은 역할
export const {throwDice, gameReset}  = counterSlice.actions
export default counterSlice.reducer;