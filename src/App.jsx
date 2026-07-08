import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterComponent from './Feature/ReduxCounter/counter/CounterExample'
import TodoExample from './Feature/ReduxTodo/todo/TodoComponent'
import ToggleComponent from './Feature/ThemeToggle/Toggle/ToggleComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CounterComponent /> */}
    {/* <TodoExample /> */}
    <ToggleComponent /> 
    </>
  )
};

export default App
