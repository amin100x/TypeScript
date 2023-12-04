import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent } from 'react'
import './App.css'

interface User {
  name: string
  id: number
}
function App() {

  // useState
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)

  // no change in useEffect same as js
  useEffect(() => {

  }, [])

  // useCallback :- useCallBack is use to make function only once, otherwise here new function will create everytime when we click button
  let add = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(p => p + 1), []); // we can also give specific type of parameter

  
  return (
    <>
      {count}
      <button onClick={add}></button>
    </>
  )
}

export default App
