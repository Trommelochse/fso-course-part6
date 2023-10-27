import { NotificationContextProvider } from './contexts/NotificationContext'
import { useQuery } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { getAnecdotes } from './requests'
import { sortByVotes } from './utils'

const App = () => {
  const anecdotesQuery = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  })
  const anecdotes = sortByVotes(anecdotesQuery.data)
  
  if (anecdotesQuery.isError) {
    return <>
      <h2>Server Error</h2>
      <p>Something went wrong...</p>
    </>
  }

  return (
    <NotificationContextProvider>
      <div>
        <h3>Anecdote app</h3>
        <Notification />
        <AnecdoteForm />
        <AnecdoteList anecdotes={anecdotes} />
      </div>
    </NotificationContextProvider>
  )
}

export default App
