import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWraper } from '~/components/Proper';
import MenuItems from './MenuItem';
import Header from './Header';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            offset={[10, 10]}
            placement="bottom-end"
            interactive
            render={(attr) => (
                <div className={cx('setting')} {...attr} tabIndex="1">
                    <PopperWraper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Ngôn ngữ'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWraper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
