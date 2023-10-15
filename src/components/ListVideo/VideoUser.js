import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Video from '~/components/Video';
import Acion from '~/components/Action';
const cx = classNames.bind(styles);
function VideoUser() {
    return (
        <div className={cx('list-inner')}>
            <a className={cx('avatar')}>
                <div className={cx('avatar-img')}>
                    <img
                        className={cx('img')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f59ba94ceee65efe5c21c903de3213df~c5_100x100.jpeg?x-expires=1697504400&x-signature=rxNgxKg%2FfKCMsU1sU4%2BRst1wg%2BM%3D"
                    ></img>
                </div>
            </a>
            <div className={cx('content-inner')}>
                <div className={cx('text')}>
                    <div className={cx('author')}>
                        <a className={cx('author-Anchor')}>
                            <h3 className={cx('Author-title')}>ohmygarlic</h3>
                            <h4 className={cx('Author-nickname')}>oh my garlic</h4>
                        </a>
                    </div>
                    <Button className={cx('Follow-btn')} outline>
                        Follow
                    </Button>
                    <div className={cx('author-content')}>회오리 오이무침</div>
                    <div className={cx('music')}>
                        <a className={cx('style-link')}>
                            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                            <div className={cx('music-text')}>Makeba - Jain</div>
                        </a>
                    </div>
                </div>
                <div className={cx('video-wrapper')}>
                    <Video />
                    <Acion />
                </div>
            </div>
        </div>
    );
}

export default VideoUser;
