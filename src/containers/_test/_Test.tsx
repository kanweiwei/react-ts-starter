import * as React from "react";
import "./_Test.css";
import { connect } from "react-redux";

// This is the non-normalized data, with only the fields we asked for in our query!
class Home extends React.Component {
    constructor(props: any) {
        super(props);
        console.log(props);
    }
    componentDidMount() {
        (this as any).a = this._handlerKeyUp;
    }
    _handlerKeyUp = (e: any) => {
        //
        const { dispatch } = this.props as any;
        let { nativeEvent, target } = e;
        console.log(nativeEvent.keyCode);
        if (nativeEvent.keyCode === 13) {
            if (target.value.trim() === "") {
                return;
            }
            dispatch({
                type: "ADD_TODO_ASYNC",
                payload: target.value.trim()
            });
            target.value = "";
        }
    };
    _handlerToggleTodo = (e: any) => {
        console.log("点击todo");
        e.stopPropagation();
    };

    render() {
        const { store } = this.props as any;
        const { todos } = store as any;
        return (
            <div className="App">
                <h1>TODOS DEMO</h1>
                <div className="InputArea">
                    <input
                        type="text"
                        name="inputArea"
                        onKeyUp={this._handlerKeyUp}
                    />
                    <div>
                        {todos.map((todo: any, index: number) => {
                            return (
                                <div
                                    className="item"
                                    key={index}
                                    onClick={this._handlerToggleTodo}
                                >
                                    {todo}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(store => ({ store }))(Home);
