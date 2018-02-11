import { put, takeEvery, select } from "redux-saga/effects";
function* addTodoAsync({ payload }: any) {
    console.log(payload);
    yield put({ type: "ADD_TODO", payload });
    let todosStore = yield select(store => (store as any).todos);
    console.log("todos", todosStore);
}

export default function* watchAddTodoAsync() {
    yield takeEvery("ADD_TODO_ASYNC", addTodoAsync);
}
