//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import UpLoad from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upLoad', component: UpLoad, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
