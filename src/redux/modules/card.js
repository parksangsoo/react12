import { db } from "../../firebase";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const initialState = {
    list: [
      
    ]
};
  
  /* 액션 타입 정의 */
  // 액션 타입은 주로 대문자로 작성합니다.
  const LOAD = "card/LOAD";
  const CREATE = "card/CREATE";

  
  /* 액션 생성함수 정의 */
  // 액션 생성함수는 주로 camelCase 로 작성합니다.
  export function loadCard(card_list) {
    return { type: LOAD, card_list};
}
  export function createCard(card) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, card };
}

  export const loadCardFB = () => {
    return async function (dispatch) {
        const card_data = await getDocs(collection(db, "card"));

        let card_list = [];

        card_data.forEach((doc) => {
          card_list.push({ id: doc.id, ...doc.data() });
        });

        dispatch(loadCard(card_list));
    }
}

export const addCardFB = (card) => {
  return async function (dispatch) {

      const docRef = await addDoc(collection(db, "card"), card);
      //const _bucket = await getDoc(docRef);
      const card_data = { id: docRef.id, ...card };

      dispatch(createCard(card_data));

  }
}
  
export default function reducer(state = initialState, action = {}) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case "card/LOAD": {
        return { list: action.card_list};
      }

      case 'card/CREATE': {
          const new_card_list = [...state.list, action.card]
        return {...state, list: new_card_list};
      }
      default:
        return state;
    }
  }