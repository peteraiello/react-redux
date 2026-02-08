"use client"
import React, {useEffect, useState, useRef} from 'react'

/**
 * 
 * Example of the useRef hook. 
 * Here are some of the uses of the useRef hook. 
 * 1. You can use it similar to state values, 
 * however the difference is you can take it out of rendering cycle
 * 2. You can use it manipulate the dom, almost similar 
 * to how you would using JavaScript. So for example, 
 * you can have an element and then target it with .current 
 * 3. You can combine it with useEffect to track the previous 
 * value of state. 
 * URL: https://www.youtube.com/watch?v=t2ypzz6gJm0
 * Accessed: 07/02/2026
 */
export default function Home() {

  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const prevName = useRef('');

  /**
   * Use ref is very, very similar to state
   * in the sense that you can change our reference
   * and update values as many times as you want, 
   * but it DOES NOT cause a re-render in the same 
   * way that state does. 
   */
  // const renderCount = useRef(1);

  /**
   * The only way to log rerenders accurately
   * is to use useRef. If you try and log re renders 
   * using state, you'll just end up getting into infinite 
   * loop territory and we don't want that 
   */
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // })

  /**
   * You can use useRef for dom manipulation. 
   * if you log out the reference of inputRef.current
   * then it will exactly the same as it when 
   * you target an element in the dom using javascript. 
   * It makes it incredibly easy to manipulate the dom 
   * using useRef
   */
  function focus() {
    console.log(inputRef.current);
    inputRef.current && inputRef.current.focus();
  }
  
  /**
   * One last cool thing that you can do with useRef
   * is to store the previous version of state 
   * and have that as a variable
   */
  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <div>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>My previous name is {prevName.current}</div>
        <button onClick={focus}>Focus</button>
    </div>
  )
}
 