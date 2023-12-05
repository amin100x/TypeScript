import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo } from 'react'
import './App.css'
import Counter from './Counter'

interface User {
  name: string
  id: number
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

function App() {

  // useState
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)

  // no change in useEffect same as js
  useEffect(() => {

  }, [])

  // useCallback :- useCallBack is use to make function only once, otherwise here new function will create everytime when we click button
  let add = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(p => p + 1), []); // we can also give specific type of parameter

  const result = useMemo<number>(() => fib(myNum), [myNum])


  return (
    <>
      {count}
      <button onClick={add}>+</button>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App
