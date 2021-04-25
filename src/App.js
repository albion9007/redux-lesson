import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

import rootReducer from "./reducers/index";
// アクションのコマンド名をimportしておく。
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";

function App() {
  const initialState = {
    // 各Reducerの初期値を設定する。
    // Reducerの名前をつけ、それぞれの属性に名前をつけ初期値を設定する。
    reducerMeat: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 25 },
  };
  // stateとdispatchをuseReducerを使い作る。
  // useReducerの引数にrootReducer、initialStateを設定。
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* ボタンでSELL_MEATの時とSELL_VEGETABLEの時のアクションを表示。 */}
        {/* onClick時にアロー関数でdispatchにtypeでアクション名を指定する。 */}
        <button onClick={() => dispatch({ type: SELL_MEAT })}>Sell meat</button>
        {/* 現在の数を表示させるために、stateにアクセスする。
        stateにReducerの個別の名前を付ける。さらにReducerのなかの属性名をつける。 */}
        Today's Meat: {state.reducerMeat.numOfMeat}
        <button onClick={() => dispatch({ type: SELL_VEGETABLE })}>
          Sell Vegetable
        </button>
        Today's Vegetable: {state.reducerVegetable.numOfVegetable}
      </header>
    </div>
  );
}

export default App;
