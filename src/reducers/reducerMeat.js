// actionの名前のSELL_MEATを別のファイルに文字列を定義しておき、
// importして再利用しておく。
// これはアクション名を直接stringの文字で打ってしまうと、
// 入力間違いをした時に文字列として出力されてしまい、デバッグが難しくなるため。
import { SELL_MEAT } from "./actionTypes";

// reducerは引数にstateとactionを設定するもの。
// stateはオブジェクトを引数で取れるように[]で定義しておく。
const reducerMeat = (state = [], action) => {
  // actionに応じてswitch文で変化させるため、引数をaction.typeとする。
  switch (action.type) {
    // caseでactionのtype名を指定。
    case SELL_MEAT:
      return {
        ...state,
        // オブジェクトに拡張した時に、ステートを分解して特定の要素だけ上書きする様にする。
        numOfMeat: state.numOfMeat - 1,
      };
    default:
      return state;
  }
};

export default reducerMeat;
