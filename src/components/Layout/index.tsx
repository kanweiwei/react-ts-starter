import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.css';

const classNames = require('classnames');

interface IProps {
    className?: string;
    [PropName: string]: any;
}
class Layout extends React.Component<IProps, {}> {
    static defaultProps = {
        className: '',
        classPrefix: 'ezy'
    };
    static propTypes = {
        className: PropTypes.string,
        classPrefix: PropTypes.string
    };
    render() {
        const { children, classPrefix, className } = (this as any).props;
        const layoutClass = classNames({
            [`${classPrefix}-layout`]: true,
            [`${className}`]: className ? true : false
        });
        return <div className={layoutClass}>{children ? children : null}</div>;
    }
}

export default Layout;
