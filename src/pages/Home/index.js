import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookBookmark,
    faBookmark,
    faEllipsis,
    faHeart,
    faMessage,
    faMusic,
    faPlay,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import video1 from '~/assets/video/video1.mp4';
import { useState, useEffect, useRef } from 'react';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('list-inner')}>
                    <a className={cx('avatar')}>
                        <div className={cx('avatar-img')}>
                            <img
                                className={cx('img')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/92d6ad033d445bf09c339ea2163c8dfd.jpeg?x-expires=1697274000&x-signature=4iFYit7Wa7E%2FJ6KANFEBM5Y9iUE%3D"
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
                            <div className={cx('video')}>
                                <div className={cx('videoCard')}>
                                    <div className={cx('divContainer')}>
                                        <video
                                            muted
                                            autoPlay="autoPlay"
                                            preLoad="auto"
                                            loop
                                            src={video1}
                                            type={'video/mp4'}
                                            className={cx('video-play')}
                                        ></video>
                                    </div>
                                    <div className={cx('play')}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                    <div className={cx('sound')}>
                                        <img src={images.Sound}></img>
                                    </div>
                                    <div className={cx('control')}></div>
                                    <div className={cx('more')}>
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('actionitem')}>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faShare} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('list-inner')}>
                    <a className={cx('avatar')}>
                        <div className={cx('avatar-img')}>
                            <img
                                className={cx('img')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/92d6ad033d445bf09c339ea2163c8dfd.jpeg?x-expires=1697274000&x-signature=4iFYit7Wa7E%2FJ6KANFEBM5Y9iUE%3D"
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
                            <div className={cx('video')}>
                                <div className={cx('videoCard')}>
                                    <div className={cx('divContainer')}>
                                        <video
                                            muted
                                            autoPlay="autoPlay"
                                            preLoad="auto"
                                            loop
                                            src={video1}
                                            type={'video/mp4'}
                                            className={cx('video-play')}
                                        ></video>
                                    </div>
                                    <div className={cx('play')}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                    <div className={cx('sound')}>
                                        <img src={images.Sound}></img>
                                    </div>
                                    <div className={cx('control')}></div>
                                    <div className={cx('more')}>
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('actionitem')}>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faShare} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('list-inner')}>
                    <a className={cx('avatar')}>
                        <div className={cx('avatar-img')}>
                            <img
                                className={cx('img')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/92d6ad033d445bf09c339ea2163c8dfd.jpeg?x-expires=1697274000&x-signature=4iFYit7Wa7E%2FJ6KANFEBM5Y9iUE%3D"
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
                            <div className={cx('video')}>
                                <div className={cx('videoCard')}>
                                    <div className={cx('divContainer')}>
                                        <video
                                            muted
                                            autoPlay="autoPlay"
                                            preLoad="auto"
                                            loop
                                            src={video1}
                                            type={'video/mp4'}
                                            className={cx('video-play')}
                                        ></video>
                                    </div>
                                    <div className={cx('play')}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                    <div className={cx('sound')}>
                                        <img src={images.Sound}></img>
                                    </div>
                                    <div className={cx('control')}></div>
                                    <div className={cx('more')}>
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('actionitem')}>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                                <button className={cx('btn-Acion-item')}>
                                    <span className={cx('span-icon')}>
                                        <FontAwesomeIcon icon={faShare} />
                                    </span>
                                    <strong className={cx('strong-text')}>2.4M</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
