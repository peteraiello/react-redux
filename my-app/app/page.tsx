"use client"
import React, { useCallback, useState, useMemo, useEffect } from "react"
import List from "./list";

/**
 * Remember! useMemo is the value returned from the function. 
 * i.e. if the function returns an array, useMemo returns the value 
 * of the array. useCallback is different! useCallback returns the 
 * entire function. 
 * Last accessed 07/02/2026
 * URL: https://www.youtube.com/watch?v=_AyFP5s69N4
 */
export default function Home() {

  const [number, setNumber] = useState(1);
  
  const [dark, setDark] = useState(false);

  /**
   * ORIGINAL FUNCTION:
   * getItems which is a function 
   * that returns an array of 3 
   * incrementing numbers. 
   */
  /*
  const getItems = () => {
    return [number, number + 1, number + 2]
  }
  */

  /**
   * Now with useCallback, the useEffect 
   * for gitItems is no longer called 
   * when darkTheme changes. It will only 
   * recreate when the number changes, it's
   * not going to recreate when darkTheme changes
   */
  const getItems = useCallback(() => {
     return [number, number + 1, number + 2]
  }, [number])
 
 

  

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  }

 
  return (
    <div style={theme}>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      {/** 
       * When we click on toggle for our theme, 
       * it's also going to call the useEffect for 
       * get items, which is a problem, that can be 
       * fixed by the useCallback hook
      */}
      <button onClick={() => setDark(prevDark => !prevDark) }>
        Toggle Theme 
      </button>
      <List getItems={getItems} />

    </div>
  );
}
 