import classNames from 'classnames/bind';
import styles from './Action.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
const cx = classNames.bind(styles);
function Action() {
    return (
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
    );
}

export default Action;
