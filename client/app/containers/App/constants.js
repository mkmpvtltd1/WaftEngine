/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FB_APP_ID = '308391736756480';
export const FB_APP_FIELDS = 'id,email,name';
export const GOOGLE_CLIENT_ID =
  '207794996947-iektn9irtbmkrbpfvlom9rf8nro13v70.apps.googleusercontent.com';

export const API_BASE =
  process.env.NODE_ENV === 'production'
    ? 'http://www.waftengine.com/api/'
    : 'http://localhost:5050/api/';
// : 'http://192.168.100.174:5050/api/';

export const API_BASE1 =
  process.env.NODE_ENV === 'production'
    ? 'http://www.waftengine.org/api/'
    : 'http://localhost:5120/api/';
// : 'http://192.168.100.174:5050/api/';

export const IMAGE_BASE =
  process.env.NODE_ENV === 'production'
    ? 'http://www.waftengine.com/'
    : 'http://localhost:5050/';
// : 'http://192.168.100.174:5050/';

export const SET_USER = 'app/App/SET_USER';
export const SET_TOKEN = 'app/App/SET_TOKEN';
export const LOGOUT = 'app/App/LOGOUT';

export const ENQUEUE_SNACKBAR = 'app/App/ENQUEUE_SNACKBAR';
export const REMOVE_SNACKBAR = 'app/App/REMOVE_SNACKBAR';

export const LOGOUT_REQUEST = 'app/App/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'app/App/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'app/App/LOGOUT_FAILURE';

export const LOAD_CONTENT_REQUEST = 'app/App/LOAD_CONTENT_REQUEST';
export const LOAD_CONTENT_SUCCESS = 'app/App/LOAD_CONTENT_SUCCESS';
export const LOAD_CONTENT_FAILURE = 'app/App/LOAD_CONTENT_FAILURE';

export const LOAD_MEDIA_REQUEST = 'app/App/LOAD_MEDIA_REQUEST';
export const LOAD_MEDIA_SUCCESS = 'app/App/LOAD_MEDIA_SUCCESS';
export const LOAD_MEDIA_FAILURE = 'app/App/LOAD_MEDIA_FAILURE';

export const LOAD_SLIDE_REQUEST = 'app/App/LOAD_SLIDE_REQUEST';
export const LOAD_SLIDE_SUCCESS = 'app/App/LOAD_SLIDE_SUCCESS';
export const LOAD_SLIDE_FAILURE = 'app/App/LOAD_SLIDE_FAILURE';

export const LOAD_AVAILABLE_REQUEST = 'app/App/LOAD_AVAILABLE_REQUEST';
export const LOAD_AVAILABLE_SUCCESS = 'app/App/LOAD_AVAILABLE_SUCCESS';
export const LOAD_AVAILABLE_FAILURE = 'app/App/LOAD_AVAILABLE_FAILURE';
