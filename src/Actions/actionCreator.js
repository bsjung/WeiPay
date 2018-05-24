import { AsyncStorage } from 'react-native';
import { incrementCounter, decrementCounter, addTokenSetup } from "./actionTypes";
import * as actionTypes from './actionTypes';


const incrementAction = () => ({
  type: incrementCounter
});

function AddToken(payload) {
  return {
    type: addTokenSetup,
    payload
  }
}

export function addTokenToSetup(coin) {
  return dispatch => {
    coin.selected = !coin.selected
    dispatch({ type: actionTypes.ADD_TOKEN_SETUP, payload: coin })
  }
}


// export function login() {
//   return dispatch => {
//     dispatch({ type: LOADING })
//     // api call
//     .then(res => { dispatch({ type: LOGIN, payload: user}) })
//     .catch(err => { dispatch({type: LOGIN_FAILED, payload: null}) })
//   }
// }


export function newWalletCreation() {
  return dispatch => {
    dispatch({ type: actionTypes.CREATING_NEW_WALLET,
              payload: true })
  }
}

export function newWalletNameEntry(name) {
  return dispatch => {
    dispatch({ type: actionTypes.NEW_WALLET_NAME, payload: name})
  }
}

export function restoreWallet() {
  return dispatch => {
    dispatch({ type: actionTypes.RESTORE_WALLET })
  }
}

export function recoveryKey(key) {
  return dispatch => {
    dispatch({type: actionTypes.RESTORE_RECOVERY_KEY, payload: key})
  }
}

export const switchLanguage = language => dispatch => {
  dispatch({ type: actionTypes.SWITCH_LANGUAGE, payload: language })
}
