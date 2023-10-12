import classNames from 'classnames/bind';
import styles from './Font.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Font({ onClick, primary = false, children, text = false, leftIcon = false, className }) {
    const classes = cx('wrapper', {
        primary,
        text,
        leftIcon,
        [className]: className,
    });
    const props = {
        onClick,
    };
    return (
        <div className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </div>
    );
}

export default Font;
