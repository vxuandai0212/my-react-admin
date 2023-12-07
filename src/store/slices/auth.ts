import {
  PrepareAction,
  createAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { getToken, getUserInfo, clearAuthStorage } from '@/store/helpers/auth'
import { fetchLogin, fetchUserInfo } from '@/service'
import { localStg } from '@/utils'
import { useNotification } from '@/hooks/use-notification'
import { useTranslation } from 'react-i18next'

export interface AuthState {
  userInfo: Auth.UserInfo
  token: string
  loginLoading: boolean
}

const initialState: AuthState = {
  userInfo: getUserInfo(),
  token: getToken(),
  loginLoading: false,
}

export const setLoginLoading = createAction<PrepareAction<boolean>>(
  'auth/setLoginLoading',
  (loginLoading: boolean) => {
    return {
      payload: loginLoading,
    }
  }
)

export const setUserInfo = createAction<PrepareAction<Auth.UserInfo>>(
  'auth/setUserInfo',
  (userInfo: Auth.UserInfo) => {
    return {
      payload: userInfo,
    }
  }
)

export const setToken = createAction<PrepareAction<string>>(
  'auth/setToken',
  (token: string) => {
    return {
      payload: token,
    }
  }
)

export const resetAuthStore = createAction<void>('auth/resetAuthStore')

export const handleActionAfterLogin = createAsyncThunk(
  'auth/handleActionAfterLogin',
  async (backendToken: ApiAuth.Token, { dispatch }) => {
    const { token, refreshToken } = backendToken
    localStg.set('token', token)
    localStg.set('refreshToken', refreshToken)

    const { data } = await fetchUserInfo()
    if (data) {
      localStg.set('userInfo', data)
      dispatch(setUserInfo(data))
      dispatch(setToken(token))

      const { t } = useTranslation()

      useNotification.success({
        message: t('page.login.common.loginSuccess'),
        description: t('page.login.common.welcomeBack', {
          userName: data.userName,
        }),
        duration: 3000,
      })

      return
    }

    dispatch(resetAuthStore())
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (loginPayload: ApiAuth.LoginRequest, { dispatch }) => {
    dispatch(setLoginLoading(true))
    const { data } = await fetchLogin(loginPayload.email, loginPayload.password)
    if (data) {
      dispatch(handleActionAfterLogin(data))
    }
    dispatch(setLoginLoading(false))
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetAuthStore, (state) => {
      clearAuthStorage()
      state.userInfo = getUserInfo()
      state.token = getToken()
      state.loginLoading = false
    })
    builder.addCase(setLoginLoading, (state, action) => {
      state.loginLoading = action.payload
    })
    builder.addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload
    })
    builder.addCase(setToken, (state, action) => {
      state.token = action.payload
    })
  },
})

export default authSlice.reducer
