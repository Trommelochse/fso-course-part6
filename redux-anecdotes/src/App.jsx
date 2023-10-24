import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notifcation from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdoteService'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {  
  const dispatch = useDispatch()  
  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => dispatch(setAnecdotes(anecdotes)))
  },[dispatch])

  return (
    <div>
      <Notifcation />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App