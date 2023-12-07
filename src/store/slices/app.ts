import { createAction, createSlice } from '@reduxjs/toolkit'

export interface AppState {
  siderCollapse: boolean
}

const initialState: AppState = {
  siderCollapse: false,
}

export const toggleSiderCollapse = createAction('app/toggleSiderCollapse')

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleSiderCollapse, (state) => {
      state.siderCollapse = !state.siderCollapse
    })
  },
})

export default appSlice.reducer
