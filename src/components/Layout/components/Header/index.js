import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdd,
    faEllipsisVertical,
    faAngleRight,
    faLaptop,
    faLightbulb,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faUser,
    faHeart,
    faChartLine,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWraper } from '~/components/Proper';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Proper/Menu';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';
import routesConfig from '~/config/routes';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm nhà sáng tạo LIVE',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'العربية',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
        nightlight: (
            <label className={cx('switch')}>
                <input type="checkbox"></input>
                <span className={cx('slider-round')}></span>
            </label>
        ),
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Yêu thích',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Nhận xu',
    },
    {
        icon: <FontAwesomeIcon icon={faChartLine} />,
        title: 'Xem phân tích',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        separate: true,
    },
];
function Header() {
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}>
                        <img src={images.logo} alt="tiktok"></img>
                    </Link>
                </div>
                <Search></Search>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button>
                                <FontAwesomeIcon className={cx('add-icon')} icon={faAdd}></FontAwesomeIcon>Tải lên
                            </Button>
                            <HeadlessTippy
                                delay={0}
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
                                                    <FontAwesomeIcon
                                                        className={cx('icon-app-download')}
                                                        icon={faAngleRight}
                                                    />
                                                </div>
                                            </div>
                                        </PopperWraper>
                                    </div>
                                )}
                            >
                                <div className={cx('Application')}>
                                    <img src={images.App}></img>
                                </div>
                            </HeadlessTippy>

                            <Tippy content="Tin nhắn" interactive>
                                <a href="" className={cx('Mail-mess')}>
                                    <img style={{ width: '1.5em' }} src={images.Mess}></img>
                                </a>
                            </Tippy>

                            <Tippy content="Hội thoại">
                                <a className={cx('Mail-mess')}>
                                    <img src={images.Mail}></img>
                                    <span className={cx('badge')}>12</span>
                                </a>
                            </Tippy>
                            <Menu items={userMenu}>
                                <img
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/bf50bc06f278bb1f8ff40368b6382906.jpeg?x-expires=1697097600&x-signature=vLLS1EncxlWK4oef%2FksXdPPzr6w%3D"
                                    className={cx('user-avatar')}
                                    alt="Pham Sinh"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button>
                                <FontAwesomeIcon className={cx('add-icon')} icon={faAdd}></FontAwesomeIcon>Tải lên
                            </Button>
                            <Button primary>Đăng Nhập</Button>
                            <HeadlessTippy
                                delay={[0, 700]}
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
                                                    <FontAwesomeIcon
                                                        className={cx('icon-app-download')}
                                                        icon={faAngleRight}
                                                    />
                                                </div>
                                            </div>
                                        </PopperWraper>
                                    </div>
                                )}
                            >
                                <div className={cx('Application')}>
                                    <img src={images.App}></img>
                                </div>
                            </HeadlessTippy>
                            <Menu items={MENU_ITEMS}>
                                <div className={cx('icon-more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </div>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Header;
