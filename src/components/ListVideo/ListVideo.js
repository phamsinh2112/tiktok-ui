import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';
import VideoUser from './VideoUser';
const cx = classNames.bind(styles);
function ListVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <VideoUser />
                <VideoUser />
                <VideoUser />
                <VideoUser />
            </div>
        </div>
    );
}

export default ListVideo;
