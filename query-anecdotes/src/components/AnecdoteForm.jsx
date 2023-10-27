import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNotificationDispatch } from "../contexts/NotificationContext"
import { createAnecdote } from "../requests"

const AnecdoteForm = () => {

  const notificationDispatch = useNotificationDispatch()

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      notificationDispatch({ type: 'SET', payload: `Successfully created the new anecdote: "${newAnecdote.content}"` })
      setTimeout(() => {
        notificationDispatch({ type: 'CLEAR'})
      }, 5000)
    },
    onError: (error) => {
      notificationDispatch({ type: 'SET', payload: error.response.data.error })
      setTimeout(() => {
        notificationDispatch({ type: 'CLEAR'})
      }, 5000)
    }
  })
  
  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
