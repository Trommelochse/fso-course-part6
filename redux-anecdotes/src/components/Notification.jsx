import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notification)
  const style = {
    position: 'fixed',
    right: 20,
    maxWidth: 300,
    borderStyle: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const renderNotification = () => {
    return (
    <div style={style}>
      {notification}
    </div>
    )
  }

  return (
    <>
      { notification.length ? renderNotification() : null  }
    </>
  )
}

export default Notification