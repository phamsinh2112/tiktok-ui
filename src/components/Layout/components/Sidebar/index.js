import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHouse, faHurricane, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import Font from '~/components/Font';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import routesConfig from '~/config/routes';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWraper } from '~/components/Proper';
import SuggestedAccounts from '~/components/FollowingAccount/FollowingAccount';

const cx = classNames.bind(styles);
function Sidebar() {
    const currentUser = true;
    return (
        <aside className={cx('wrapper')}>
            {currentUser ? (
                <div className={cx('inner')}>
                    <nav>
                        <ul className="inner-list">
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link to={routesConfig.home}>
                                            <Font primary>
                                                <FontAwesomeIcon icon={faHouse} />
                                                <span className={cx('inner-span')}>Dành cho bạn</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link to={routesConfig.following}>
                                            <Font>
                                                <FontAwesomeIcon icon={faUserGroup} />
                                                <span className={cx('inner-span')}>Đang Follow</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link to={routesConfig.Upload}>
                                            <Font>
                                                <FontAwesomeIcon icon={faCompass} />
                                                <span className={cx('inner-span')}>Khám phá</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link>
                                            <Font>
                                                <FontAwesomeIcon icon={faVideo} />
                                                <span className={cx('inner-span')}>LIVE</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <SuggestedAccounts label="Các tài khoản đang follow" />
                    <div className={cx('contain')}>
                        <div className={cx('create-effect')}>
                            <a className={cx('create-effect-tag-a')}>
                                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d8db931296c3e5645b1e.png"></img>
                                <div className={cx('create-effect-inner')}>
                                    <FontAwesomeIcon className={cx('create-effect-icon')} icon={faHurricane} />
                                    <h4>Tạo hiệu ứng</h4>
                                </div>
                            </a>
                        </div>
                        <div className={cx('contact')}>
                            <a className={cx('contact-tag-a')}>Giới thiệu</a>
                            <a className={cx('contact-tag-a')}>Bảng tin</a>
                            <a className={cx('contact-tag-a')}>Liên hệ</a>
                            <a className={cx('contact-tag-a')}>Sự nghiệp</a>
                        </div>
                        <div className={cx('contact')}>
                            <a className={cx('contact-tag-a')}>Tiktok for Good</a>
                            <a className={cx('contact-tag-a')}>Quảng cáo</a>
                            <a className={cx('contact-tag-a')}>Developers</a>
                            <a className={cx('contact-tag-a')}> Minh bạch</a>
                            <a className={cx('contact-tag-a')}>Tiktok Rewards</a>
                            <a className={cx('contact-tag-a')}>Tiktok Embeds</a>
                        </div>
                        <div className={cx('contact')}>
                            <a className={cx('contact-tag-a')}>Trợ giúp</a>
                            <a className={cx('contact-tag-a')}>An toàn</a>
                            <a className={cx('contact-tag-a')}>Điều khoản</a>
                            <a className={cx('contact-tag-a')}>Quyền riêng tư</a>
                            <a className={cx('contact-tag-a')}>Cổng thông tin</a>
                            <a className={cx('contact-tag-a')}>Hướng dẫn cộng đồng</a>
                        </div>

                        <Tippy
                            interactive
                            render={(attr) => (
                                <div className={cx('addinfo-more')} tabIndex="-1" {...attr}>
                                    <PopperWraper>
                                        <h3 className={cx('addinfo-title')}>
                                            NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                                        </h3>
                                    </PopperWraper>
                                </div>
                            )}
                        >
                            <div className={cx('addinfo')}>Thêm</div>
                        </Tippy>
                        <span className={cx('yeartiktok')}>@ 2023 Tiktok</span>
                    </div>
                </div>
            ) : (
                <div className={cx('inner')}>
                    <nav>
                        <ul>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link to={routesConfig.home}>
                                            <Font primary>
                                                <FontAwesomeIcon icon={faHouse} />
                                                <span className={cx('inner-span')}>Dành cho bạn</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link to={routesConfig.following}>
                                            <Font>
                                                <FontAwesomeIcon icon={faUserGroup} />
                                                <span className={cx('inner-span')}>Đang Follow</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link to={routesConfig.Upload}>
                                            <Font>
                                                <FontAwesomeIcon icon={faCompass} />
                                                <span className={cx('inner-span')}>Khám phá</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className={cx('inner-tag-a')}>
                                        <Link>
                                            <Font>
                                                <FontAwesomeIcon icon={faVideo} />
                                                <span className={cx('inner-span')}>LIVE</span>
                                            </Font>
                                        </Link>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className={cx('loggin')}>
                        <p>Đăng nhập để follow các tác giả, thích video và xem bình luận</p>
                        <Button large outline>
                            Đăng Nhập
                        </Button>
                    </div>
                    <div className={cx('contain')}>
                        <div className={cx('create-effect')}>
                            <a className={cx('create-effect-tag-a')}>
                                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d8db931296c3e5645b1e.png"></img>
                                <div className={cx('create-effect-inner')}>
                                    <FontAwesomeIcon className={cx('create-effect-icon')} icon={faHurricane} />
                                    <h4>Tạo hiệu ứng</h4>
                                </div>
                            </a>
                        </div>
                        <div className={cx('contact')}>
                            <a className={cx('contact-tag-a')}>Giới thiệu</a>
                            <a className={cx('contact-tag-a')}>Bảng tin</a>
                            <a className={cx('contact-tag-a')}>Liên hệ</a>
                            <a className={cx('contact-tag-a')}>Sự nghiệp</a>
                        </div>
                        <div className={cx('contact')}>
                            <a className={cx('contact-tag-a')}>Tiktok for Good</a>
                            <a className={cx('contact-tag-a')}>Quảng cáo</a>
                            <a className={cx('contact-tag-a')}>Developers</a>
                            <a className={cx('contact-tag-a')}> Minh bạch</a>
                            <a className={cx('contact-tag-a')}>Tiktok Rewards</a>
                            <a className={cx('contact-tag-a')}>Tiktok Embeds</a>
                        </div>
                        <div className={cx('contact')}>
                            <a className={cx('contact-tag-a')}>Trợ giúp</a>
                            <a className={cx('contact-tag-a')}>An toàn</a>
                            <a className={cx('contact-tag-a')}>Điều khoản</a>
                            <a className={cx('contact-tag-a')}>Quyền riêng tư</a>
                            <a className={cx('contact-tag-a')}>Cổng thông tin</a>
                            <a className={cx('contact-tag-a')}>Hướng dẫn cộng đồng</a>
                        </div>

                        <Tippy
                            interactive
                            render={(attr) => (
                                <div className={cx('addinfo-more')} tabIndex="-1" {...attr}>
                                    <PopperWraper>
                                        <h3 className={cx('addinfo-title')}>
                                            NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                                        </h3>
                                    </PopperWraper>
                                </div>
                            )}
                        >
                            <div className={cx('addinfo')}>Thêm</div>
                        </Tippy>
                        <span className={cx('yeartiktok')}>@ 2023 Tiktok</span>
                    </div>
                </div>
            )}
            <div className={cx('scroll-sidebar')}>
                <div className={cx('inside-scroll')}></div>
            </div>
        </aside>
    );
}

export default Sidebar;
