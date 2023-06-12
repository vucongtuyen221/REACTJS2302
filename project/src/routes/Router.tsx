import Homepage from "../page/Home/Homepage";
import Follow from "../page/follow/Follow";
import Profile from "../page/Profile/Profile";
import Upload from "../page/Upload/Upload";
import Onlyheader from "../Component/Layout/Headeronly/Onlyheader";
import Search from "../page/Search/Search";




export const publicRoutes = [
 {path: '/', component: Homepage},
 {path: '/follow', component: Follow},
 {path: '/profile', component: Profile},
 {path: '/upload', component: Upload, layout: Onlyheader},
 {path: '/search', component: Search}
];
export const privaRoutes = [

]