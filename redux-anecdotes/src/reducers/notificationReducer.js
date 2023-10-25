import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    resetNotifcation() {
      return ''
    }
  }
})

export const { setNotification, resetNotifcation } = slice.actions

export const showNotification = (content, seconds) => {
  return dispatch => {
    dispatch(setNotification(content))
    setTimeout(() => {
      console.log('peng')
      dispatch(resetNotifcation())
    }, seconds * 1000)
  }
}

export default slice.reducer