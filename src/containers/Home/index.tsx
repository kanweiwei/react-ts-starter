import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Bundle from "../../components/Bundle";

// 按需加载
const _Test = (props: any) => {
    return (
        <Bundle load={() => import("../_test/_Test")}>
            {(Mod: any) => <Mod {...props} />}
        </Bundle>
    );
};

class Home extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/aaa" component={_Test} />
            </Switch>
        );
    }
}

export default Home;
