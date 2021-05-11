import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import storeReducer from "./storeReducer";

export const rootReducer = combineReducers({
    products:cartReducer,
    stores:storeReducer
})

export type RootState = ReturnType<typeof rootReducer>