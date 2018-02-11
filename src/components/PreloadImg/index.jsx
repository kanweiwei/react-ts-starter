import React from 'react';
import './index.css';
const classNames = require('classnames');
export default class PreloadImg extends React.Component {
    static defaultProps = {
        className: '',
        classPrefix: 'ezy'
    };

    state = {
        status: false
    };

    componentWillMount() {
        var self = this;
        const { src } = this.props;
        if (src) {
            var img = new Image();
            img.src = src;
            if (img.complete) {
                this.setState({
                    status: true
                });
            }
            img.onload = () => {
                self.setState({
                    status: true
                });
            };
        }
    }

    render() {
        const { src, className, classPrefix, ...props } = this.props;
        const { status } = this.state;
        var imgClass = classNames({
            [`${classPrefix}-preloadImg`]: true,
            [`${className}`]: className ? true : false
        });
        if (src && status) {
            return <img src={src} className={imgClass} {...props} />;
        }
        if (src && !status) {
            return <div className={imgClass} {...props} />;
        }
        return null;
    }
}
