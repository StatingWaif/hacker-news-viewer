import { createStore } from "redux";
import themeReducer from "./reducers";

export type RootState = ReturnType<typeof themeReducer>;

const store = createStore(themeReducer);

export default store;
