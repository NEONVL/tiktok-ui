import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            {
                <Menu>
                    <MenuItem
                        title="For You"
                        icon={<HomeIcon />}
                        to={config.routes.home}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        icon={<UserGroupIcon />}
                        to={config.routes.following}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        icon={<LiveIcon />}
                        to={config.routes.live}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
            }
        </aside>
    );
}

export default Sidebar;
