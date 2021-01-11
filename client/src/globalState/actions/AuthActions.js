import axios from 'axios'
import { backendLink } from '../../keys_dev'
import jwt from 'jsonwebtoken'

export const loginAPI = (email, password, history) => {
  return async (dispatch, getState) => {
    return await axios({
      url: `${backendLink}/logging/login`,
      method: 'POST',
      data: {
          email,
          password,
      },
    }).then((res) => {
      if (res.data.statusCode === 0) {
         const token = res.headers.token
        dispatch(setToken(token))
        history.push('/home')
      } else {
        dispatch(unsetToken())
      }
      return res.data
    })
  }
}

export const checkTokenExpired = (history) => {
  return function (dispatch, getState) {
    const token = getState().token
    if (!token) {
      history.push('/')
      return
    }
    if (jwt.decode(token).exp < Date.now() / 1000) {
      dispatch(logout(history))
      return true
    } else {
      return false
    }
  }
}

const setToken = (payload) => {
  return {
    type: 'SET_TOKEN',
    payload,
  }
}

const unsetToken = () => {
  return {
    type: 'UNSET_TOKEN',
    payload: '',
  }
}


export const logout = (history) => {
  return (dispatch, getState) => {
    dispatch(unsetToken())
    history.push('/')
  }
}
