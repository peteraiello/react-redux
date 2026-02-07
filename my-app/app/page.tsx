"use client"
import React, { useState, useMemo, useEffect } from "react"


/**
 * Example of when you will use useMemo
 * 1. When you have a super slow function
 * 2. Referrential equality: only update the 
 * reference of the object when it's changed
 * URL: https://www.youtube.com/watch?v=THL1OPn72vo
 * Accessed: 07/02/2026
 */
export default function Home() {
  const [number, setNumber] = useState(0);

  const [dark, setDark] = useState(false);
  
  {/**
    * Much like with our useEffect hook, 
    * useMemo will accept a variable 
    * in the dependency array, i.e. [number] 
    * and the useMemo hook will only 
    * if the value changes. 
    */}
  {/**
    * With useMemo up and running, 
    * we can change the value of the input
    * and the application will still experience 
    * a delay. However, if we click on change theme
    * we will no longer see the delay,
    * it will be instantaneous because 
    * number has remained the same. 
    */}
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]);


  /**
   * Now when add 'useMemo' to theme styles
   * it's only going to log when we update 
   * to dark theme, and not when the input 
   * value changes! It will save it by default
   * and won't update it. 
   */
  const themeStyles = useMemo(() => {
    return {
     backgroundColor: dark ? 'black' : 'white',
     color: dark ? 'white' : 'black'
    }
  }, [dark]);
  /**
   * We add 'themeStyles' into our 
   * dependency array for themeStyles.
   * Even when we change the input, 
   * it still logs out 'Theme changed'. 
   * Its a 'new' theme style object. 
   * But what we really want, is to only 
   * log 'Theme changed' when are theme 
   * styles have been updated. 
   */
  useEffect(() => {
    console.log('Theme changed')
  }, [themeStyles]);

  return (
    <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />

       {/** Even when your changing the dark theme,
        * your still going to experience a delay. 
        * This is because updating state is going to 
        * cause a react re-render, it's going to go 
        * through the entire component, line by line. 
        */}
        {/**
         * To solve this problem, you can bring in the 
         * 'useMemo' hook, which will help with 'memoization',
         * where the value will be cached. 
         * Using 'useMemo' on slowFunction, if the input doesn't 
         * change, we're not going to recalculate the number over 
         * and over again. 
         */}
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

/**
 * A very very slow function 
 * featuring a nest for loop. 
 * When you call the function, 
 * you should see a visible delay
 * of 1 - 2 seconds.
 */
function slowFunction(num: number) {
  // console.log("calling a very slow function");
  for (let i = 0; i <= 1000000; i++) {
    for (let y = 0; y <= 1000; y++) {
    }
  }
  /**
   * 
   */
  return num * 2;
}
