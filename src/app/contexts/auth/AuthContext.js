import {createContext, useContext, useReducer} from 'react';

let localStorageAuth = null;

if (typeof window !== 'undefined') {
    localStorageAuth = localStorage.getItem('auth') || null;
}

// TODO: remove after connect to AUTH API...
const fakeUserDataForTest = {
    'userInfo': {
        '_id': '6570de81f3624446ae642704',
        'mobileNumber': '09123333252',
        'firstName': 'محمد جواد',
        'lastName': 'قاسمی',
        'nationalCode': '0020466412',
        'password': '$2a$10$LnxfWzq7o.7GoMzdSvqt2.AP9U.Rsc2yCM1tzSD1Bv9bTgglE8zGm',
        'gender': 'none',
        'type': 'admin',
        'status': 'active',
        'registerationDate': 1701895805454,
        '__v': 0
    },
    'tokenInfo': {
        'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYXRpb25hbENvZGUiOiIwMDIwNDY2NDEyIiwiaWF0IjoxNzAyOTE4OTQ4LCJleHAiOjE3MDMwMDUzNDh9.jCmVdwPW8x4KzcAMjkLcDpiVC6A-M73Da4JLtI-T3Wg'
    }
};

// initial state:

const initialState = localStorageAuth ? JSON.parse(localStorageAuth) : {};
// const initialState = fakeUserDataForTest;

// action constant
const SET_AUTH_DATA = 'SET_AUTH_DATA';
const LOGOUT = 'LOGOUT';

// action creator function
const handleLogin = data => {
    return {
        type: SET_AUTH_DATA,
        payload: data
    };
};

const handleLogoutUser = () => {
    return {
        type: LOGOUT
    };
};

// reducer function:
const reducer = (state, {type, payload}) => {
    const mappedAction = actionMap.get(type);

    return mappedAction ? mappedAction(state, payload) : state;
};

const login = (state, payload) => {
    // first save data into local storage
    localStorage.setItem('auth', JSON.stringify(payload));

    // save data in state
    return payload;
};

const logOut = () => {
    // first remove localStorage data (auth and selected app and other)
    localStorage.clear();

    // then remove state auth
    return {};
};

// action map
const actionMap = new Map([
    [SET_AUTH_DATA, login],
    [LOGOUT, logOut]
]);

// spinner Context Create:
const authDataContext = createContext({});

// create spinner provider:
export const AuthProvider = ({children}) => {

    const [auth, authDispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <authDataContext.Provider value={{auth, authDispatch}}>
            {children}
        </authDataContext.Provider>
    );

};

// get current provider report state and dispatch
export const useAuth = () => {
    const auth = useContext(authDataContext)?.auth; // data
    const userInfo = auth?.userInfo || {};
    const tokenInfo = auth?.tokenInfo || {};

    const isLoggedIn = Object.keys(auth).length !== 0; // check user logged in or not
    // const isLoggedIn = true; // check user logged in or not
    const authDispatch = useContext(authDataContext)?.authDispatch; // dispatch

    const handleChangeUserData = async data => authDispatch(handleLogin(data)); // handle login or change data user

    const handleLogout = async () => await authDispatch(handleLogoutUser()); // handle user log out

    return {auth, userInfo, tokenInfo, isLoggedIn, authDispatch, handleLogout, handleChangeUserData};
};
