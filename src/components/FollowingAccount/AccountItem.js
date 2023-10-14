import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar-account')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3e77fb17717e7d1254cc6bbafa88aa65.jpeg?x-expires=1697263200&x-signature=f0tCOhvm8qvqrQZm7vmmfEitN6o%3D"
                alt=""
            ></img>
            <div className={cx('infor-account')}>
                <p className={cx('nickname')}>
                    <strong>nloli.03</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Bảo Ngân</p>
            </div>
        </div>
    );
}

export default AccountItem;
