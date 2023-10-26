import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch(exception) {
    console.log(exception)
  }
}

export const createAnecdote = async (anecdote) => {
  try {
    const response = await axios.post(baseUrl, anecdote)
    return response.data
  } catch(exception) {
    console.log(exception)
  }
}

export const updateAnecdote = async (anecdote) => {
  try {
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return response.data
  } catch(exception) {
    console.log(exception)
  }
}