import * as React from "react";
import * as propTypes from "prop-types";

interface IProps extends React.Props<any> {
    [PropName: string]: any;
}
function SelectorLine(props: IProps) {
    return (
        <div className="ezy-selectorLine">
            <div className="ezy-sl-label">状态：</div>
            <ul className="ezy-sl-list">
                <li className="ezy-sl-list-item active">全部</li>
                <li className="ezy-sl-list-item">答题中</li>
                <li className="ezy-sl-list-item">待批改</li>
                <li className="ezy-sl-list-item">订正中</li>
                <li className="ezy-sl-list-item">订正待批改</li>
                <li className="ezy-sl-list-item">已完成</li>
            </ul>
        </div>
    );
}

class Selector extends React.Component {
    static defaultProps = {
        value: []
    };
    static propTypes = {
        value: propTypes.array.isRequired
    };
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const { value } = this.props as any;
        return value.map((item: any, index: number) => {
            return <SelectorLine value={item} key={index} />;
        });
    }
}

export default Selector;
