import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCircleNotch,
    faMagnifyingGlass,
    faAdd,
    faEllipsisVertical,
    faLaptopCode,
    faAlignRight,
    faAngleRight,
    faLaptopMedical,
    faLaptop,
    faLightbulb,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWraper } from '~/components/Proper';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                <Tippy
                    interactive
                    // visible={searchResult.length > 0}
                    render={(attr) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attr}>
                            <PopperWraper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWraper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false}></input>
                        <button className={cx('search-delete')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch}></FontAwesomeIcon>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button>
                        <FontAwesomeIcon className={cx('add-icon')} icon={faAdd}></FontAwesomeIcon>Tải lên
                    </Button>
                    <Button primary>Đăng Nhập</Button>
                    <Tippy
                        interactive
                        render={(attr) => (
                            <div className={cx('Apper')} tabIndex="-1" {...attr}>
                                <PopperWraper>
                                    <div className={cx('inner-Apper')}>
                                        <FontAwesomeIcon className={cx('laptop')} icon={faLaptop} />
                                        <span className={cx('app-title')}>Ứng dụng tiktok cho Laptop</span>
                                        <Button primary medium>
                                            Tải về
                                        </Button>
                                        <div className={cx('app-download')}>
                                            <span>Thay vào đó, tải ứng dụng di động về</span>
                                            <FontAwesomeIcon className={cx('icon-app-download')} icon={faAngleRight} />
                                        </div>
                                    </div>
                                </PopperWraper>
                            </div>
                        )}
                    >
                        <div className={cx('Application')}>
                            <img src={images.App}></img>
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        render={(attr) => (
                            <div className={cx('more-setting')} {...attr} tabIndex="1">
                                <PopperWraper>
                                    <div className={cx('more-inner')}>
                                        <ul>
                                            <li>
                                                <a>
                                                    <FontAwesomeIcon
                                                        className={cx('icon-setting')}
                                                        icon={faLightbulb}
                                                    />
                                                    <span>Trung tâm nhà sáng tạo LIVE</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <FontAwesomeIcon className={cx('icon-setting')} icon={faLanguage} />
                                                    <span>Tiếng Việt</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <FontAwesomeIcon
                                                        className={cx('icon-setting')}
                                                        icon={faCircleQuestion}
                                                    />
                                                    <span>Phản hồi và trợ giúp</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <FontAwesomeIcon className={cx('icon-setting')} icon={faKeyboard} />
                                                    <span>Phím tắt trên bàn phím</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <FontAwesomeIcon className={cx('icon-setting')} icon={faMoon} />
                                                    <span>Chế độ tối</span>
                                                    <label className={cx('switch')}>
                                                        <input type="checkbox"></input>
                                                        <span className={cx('slider-round')}></span>
                                                    </label>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </PopperWraper>
                            </div>
                        )}
                    >
                        <div className={cx('icon-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}
export default Header;
