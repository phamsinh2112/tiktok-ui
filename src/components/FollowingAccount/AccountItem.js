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
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bcc5bf8b79e909cc9ebe5add074f2a16~c5_100x100.jpeg?x-expires=1697504400&x-signature=3BCIv08ipZAGxW1xy0lgEx2bSRM%3D"
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
