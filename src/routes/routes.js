import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import UpLoad from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: UpLoad, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
