import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import Font from '~/components/Font';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <nav>
                    <ul>
                        <li>
                            <div>
                                <a>
                                    <Font primary>
                                        <FontAwesomeIcon icon={faHouse} />
                                        <span>Dành cho bạn</span>
                                    </Font>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a>
                                    <Font>
                                        <FontAwesomeIcon icon={faUserGroup} />
                                        <span>Đang Follow</span>
                                    </Font>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a>
                                    <Font>
                                        <FontAwesomeIcon icon={faCompass} />
                                        <span>Khám phá</span>
                                    </Font>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a>
                                    <Font>
                                        <FontAwesomeIcon icon={faVideo} />
                                        <span>LIVE</span>
                                    </Font>
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
            </div>
        </aside>
    );
}

export default Sidebar;
