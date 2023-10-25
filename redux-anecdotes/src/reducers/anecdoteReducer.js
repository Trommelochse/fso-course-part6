import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdoteService'

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
    replaceAnecdote(state, action) {
      const id = action.payload.id
      const newState = state.map(anecdote => anecdote.id !== id
        ? anecdote
        : action.payload  
      )
      return newState.sort((a, b) => b.votes - a.votes)
    }
  }
})


export const { setAnecdotes, appendAnecdote, replaceAnecdote } = slice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    anecdotes.sort((a, b) => b.votes - a.votes)
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const updatedObj = { ...anecdote, votes: anecdote.votes + 1 }
    const updatedAnecdote = await anecdoteService.update(updatedObj)
    dispatch(replaceAnecdote(updatedAnecdote))
  }
}

export default slice.reducer