import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useNotificationDispatch } from "../contexts/NotificationContext"
import { updateAnecdote } from "../requests"
import { replaceAnecdote } from "../utils"

/* eslint-disable react/prop-types */
const AnecdoteList = ({ anecdotes }) => {

  const notificationDispatch = useNotificationDispatch()
  
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], replaceAnecdote(anecdotes, updatedAnecdote))
    }
  })
  
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    notificationDispatch({ type: 'SET', payload: `You have voted for "${anecdote.content}"` })
    setTimeout(() => {
      notificationDispatch({ type: 'CLEAR'})
    }, 5000)
  }

  if (!anecdotes) return null

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList