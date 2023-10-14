import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.Profile, component: Profile },
    { path: routesConfig.Upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.Search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
