import * as React from 'react';
interface IProps {
    load: any;
}
class Bundle extends React.Component<IProps> {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    };
    componentWillMount() {
        this.load((this as any).props);
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.load !== (this as any).props.load) {
            this.load(nextProps);
        }
    }

    load(props: any) {
        this.setState({
            mod: null
        });
        props.load().then((mod: any) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod
            ? (this as any).props.children(this.state.mod)
            : null;
    }
}

export default Bundle;
