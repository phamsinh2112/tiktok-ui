import Font from '~/components/Font';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    return (
        <Font className={cx('menu-item', { separate: data.separate })} text leftIcon={data.icon} onClick={onClick}>
            {data.title}
            {data.nightlight}
        </Font>
    );
}

export default MenuItems;
