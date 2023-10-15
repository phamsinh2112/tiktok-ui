import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ListVideo from '~/components/ListVideo';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ListVideo />
            </div>
        </div>
    );
}

export default Home;
