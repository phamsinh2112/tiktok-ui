import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0cc72d9a7aab1cb795936229ed83186b~c5_300x300.webp?x-expires=1696903200&x-signature=GVcerEap5k9P4vaFSEeYxbkhLWs%3D"
                alt="aaa"
                className={cx('avatar')}
            ></img>
            <div classNames={cx('infor')}>
                <p className={cx('name')}>
                    Pham Van Hoai Sinh
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>phamsinhtt</span>
            </div>
        </div>
    );
}

export default AccountItem;
