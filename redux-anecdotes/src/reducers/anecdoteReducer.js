import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const slice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      return [...state, action.payload]
    },
    voteFor(state, action) {
      const id = action.payload
      const newState = state.map(anecdote => anecdote.id !== id
        ? anecdote
        : { ...anecdote, votes: anecdote.votes + 1}      
      )
      return newState.sort((a, b) => b.votes - a.votes)
    }
  }
})


export const { setAnecdotes, appendAnecdote, voteFor } = slice.actions
export default slice.reducer