import { useState } from 'react'
import './App.css'
import CounterComponent from './Feature/ReduxCounter/counter/CounterExample'
import TodoExample from './Feature/ReduxTodo/todo/TodoComponent'
import ToggleComponent from './Feature/ThemeToggle/Toggle/ToggleComponent'
import ProfileComponent from './Feature/UserProfile/ProfileComponent/ProfileForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CounterComponent /> */}
    {/* <TodoExample /> */}
    {/* <ToggleComponent />  */}
    <ProfileComponent />
    </>
  )
};

export default App
