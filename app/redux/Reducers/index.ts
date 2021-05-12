import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import listReducer from "./listReducer";
import storeReducer from "./storeReducer";

export const rootReducer = combineReducers({
    products:cartReducer,
    stores:storeReducer,
    shoplist:listReducer
})

export type RootState = ReturnType<typeof rootReducer>

