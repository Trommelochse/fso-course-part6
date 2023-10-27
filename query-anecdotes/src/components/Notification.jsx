import { useNotificationContent } from "../contexts/NotificationContext"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const notification  = useNotificationContent()

  if (!notification.length) return null

  return (
    <div style={style}>
      { notification }
    </div>
  )
}

export default Notification
