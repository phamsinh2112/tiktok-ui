import Header from '~/components/Layout/components/Header';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefualtLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
