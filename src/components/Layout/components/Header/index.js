import styles from './Header.module.scss';
import classNames from 'classnames';
const cs = classNames.bind(styles);
function Header() {
    return <Header classNames={cs('wrapper')}>Header</Header>;
}
export default Header;
