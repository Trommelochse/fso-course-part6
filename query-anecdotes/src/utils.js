
export const sortByVotes = (anecdotes) => {
  return anecdotes?.sort((a, b) => b.votes - a.votes)
}

export const replaceAnecdote = (anecdotes, updatedAnecdote) => {
  return anecdotes?.map( anecdote => anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote )
}