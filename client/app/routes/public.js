import HomePage from '../containers/HomePage';
import LoginAdminPage from '../containers/LoginAdminPage/Loadable';
import LoginUserPage from '../containers/LoginUserPage/Loadable';
import ForgotPasswordUserPage from '../containers/ForgotPasswordUserPage/Loadable';
import SignupUserPage from '../containers/SignupUserPage/Loadable';
import FaqPage from '../containers/FAQPage/Loadable';
import BlogListPage from '../containers/BlogList/Loadable';
import CategoryListingPage from '../containers/CategoryListingPage/Loadable';
import CategoryDetailPage from '../containers/CategoryDetailPage/Loadable';
import BlogDetailPage from '../containers/BlogPage/Loadable';
import ContactUsPage from '../containers/ContactUs/Loadable';
import SubscribePage from '../containers/SubscriberPage/Loadable';
// import TechnologyPage from '../containers/TechnologyPage';
// import ArchitecturePage from '../containers/ArchitecturePage';
// import FeaturesPage from '../containers/FeaturesPage';

const publicRoutes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: true,
    path: '/login-admin',
    component: LoginAdminPage,
  },
  {
    exact: true,
    path: '/login-user',
    component: LoginUserPage,
  },
  {
    exact: true,
    path: '/signup-user',
    component: SignupUserPage,
  },
  {
    exact: true,
    path: '/forgot-password-user',
    component: ForgotPasswordUserPage,
  },
  {
    exact: true,
    path: '/faq',
    component: FaqPage,
  },
  {
    exact: true,
    path: '/blog-list',
    component: BlogListPage,
  },
  {
    exact: true,
    path: '/blog-category',
    component: CategoryListingPage,
  },
  {
    exact: true,
    path: '/blog-category/:id',
    component: CategoryDetailPage,
  },
  {
    exact: true,
    path: '/subscribe',
    component: SubscribePage,
  },
  {
    exact: true,
    path: '/blog/:slug_url',
    component: BlogDetailPage,
  },
  {
    exact: true,
    path: '/contact-us',
    component: ContactUsPage,
  },
  {
    exact: true,
    path: '/subscribe',
    component: SubscribePage,
  },
  {
    exact: true,
    path: '/contact-us',
    component: ContactUsPage,
  },
  // {
  //   exact: true,
  //   path: '/technology',
  //   component: TechnologyPage,
  // },
  // {
  //   exact: true,
  //   path: '/architecture',
  //   component: ArchitecturePage,
  // },
  // {
  //   exact: true,
  //   path: '/features',
  //   component: FeaturesPage,
  // },
];

export default publicRoutes;
