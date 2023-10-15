import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsis,
    faFlag,
    faHeartBroken,
    faPause,
    faPlay,
    faVolumeHigh,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import video1 from '~/assets/video/video1.mp4';
import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWraper } from '~/components/Proper';

const cx = classNames.bind(styles);
function Video() {
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>);
    const [visible, setVisible] = useState(false);
    const changeIcon = () => {
        setVisible(!visible);
        setIcon(visible ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />);
    };
    const [volumn, setVolumn] = useState(<FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>);
    const [mute, setMute] = useState(false);
    const changeVolumn = () => {
        setMute(!mute);
        setVolumn(mute ? <FontAwesomeIcon icon={faVolumeMute} /> : <FontAwesomeIcon icon={faVolumeHigh} />);
    };
    const videoRef = useRef(null);
    const handlerVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const handlerSound = () => {
        videoRef.current.muted = !videoRef.current.muted;
    };

    return (
        <div className={cx('video')}>
            <div className={cx('videoCard')}>
                <div className={cx('divContainer')}>
                    <video
                        ref={videoRef}
                        muted
                        autoPlay={useEffect}
                        preLoad="auto"
                        loop
                        src={video1}
                        type={'video/mp4'}
                        className={cx('video-play')}
                    ></video>
                </div>
                <div
                    className={cx('play')}
                    onClick={() => {
                        changeIcon();
                        handlerVideo();
                    }}
                >
                    {icon}
                </div>
                <div
                    className={cx('sound')}
                    onClick={() => {
                        changeVolumn();
                        handlerSound();
                    }}
                >
                    <div className={cx('control-volumn')}>
                        <div className={cx('control-progress')}></div>
                        <div className={cx('control-circle')}></div>
                        <div className={cx('control-bar')}></div>
                    </div>
                    {volumn}
                </div>
                <div className={cx('control')}></div>
                <HeadlessTippy
                    delay={0}
                    interactive
                    placement="right"
                    render={(attr) => (
                        <div className={cx('inner')} tabIndex="-1" {...attr}>
                            <PopperWraper>
                                <div className={cx('more-inner')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon className={cx('icon-more')} icon={faHeartBroken} />
                                        <span className={cx('text-item')}>Không quan tâm</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon className={cx('icon-more')} icon={faFlag} />
                                        <span className={cx('text-item')}>Báo cáo</span>
                                    </div>
                                </div>
                            </PopperWraper>
                        </div>
                    )}
                >
                    <div className={cx('more')}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </HeadlessTippy>
            </div>
        </div>
    );
}

export default Video;
