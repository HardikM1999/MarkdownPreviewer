import {createStore} from "redux";
import changeReducer from "./reducers/changeReducer";

const store = createStore(changeReducer,{ type: "change",data: ""});


// function configureStore(state = {data: ""}) {
//     return createStore(changeReducer,state);
// }

export default store;