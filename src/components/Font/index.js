import classNames from 'classnames/bind';
import styles from './Font.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Font({ primary = false, children }) {
    const classes = cx('wrapper', {
        primary,
    });
    return (
        <div className={classes}>
            <span>{children}</span>
        </div>
    );
}

export default Font;
