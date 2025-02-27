/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import jwtDecode from 'jwt-decode';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import history from 'utils/history';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

// Import root app
import App from './containers/App';
import { setUser, setToken } from './containers/App/actions';

import configureStore from './configureStore';

import './styles.css';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const tokenWithBearer = localStorage.getItem('token');
if (tokenWithBearer) {
  const token = tokenWithBearer.split(' ')[1];
  try {
    const decoded = jwtDecode(token);
    if (
      !(
        typeof decoded === 'object' &&
        typeof decoded.exp === 'number' &&
        decoded.exp > Date.now() / 1000
      )
    ) {
      localStorage.removeItem('token');
    } else {
      const user = {
        id: decoded.id,
        name: decoded.name,
        avatar: decoded.avatar,
        email: decoded.email,
        roles: decoded.roles,
      };
      store.dispatch(setToken(tokenWithBearer));
      store.dispatch(setUser(user));
    }
  } catch (error) {
    localStorage.removeItem('token');
  }
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  // palette: {
  //   primary: 'blue',
  // },
});

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <SnackbarProvider maxSnack={3}>
              <App />
            </SnackbarProvider>
          </ConnectedRouter>
        </MuiThemeProvider>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');

  runtime.install({
    onUpdating: () => {
      console.log('SW Event:', 'onUpdating');
    },
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady');
      // Tells to new SW to take control immediately
      runtime.applyUpdate();
    },
    onUpdated: () => {
      console.log('SW Event:', 'onUpdated');
      // Reload the webpage to load into the new version
      window.location.reload();
    },

    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    },
  });
}
