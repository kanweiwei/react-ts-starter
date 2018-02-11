import { List } from "immutable";
import IActions from "../interfaces/IActions";

export default (state: any = List(), action: IActions) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        default:
            return state;
    }
};
