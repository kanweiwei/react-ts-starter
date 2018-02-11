import IActions from "../interfaces/IActions";
export default (state: any = [], action: IActions) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];
        default:
            return state;
    }
};
