import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    medium = false,
    large = false,
    children,
    onClick,
    className,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
