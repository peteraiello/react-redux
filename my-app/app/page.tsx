"use client"
import React, { useReducer } from "react";

/**
 * The brief: Set up a login form and 
 * use the structure of redux to handle 
 * state mangement, including an action 
 * for when the form is submitted. 
 */

/**
 * STORE
 * setting up a form state
 */
type FormState = {
  first_name?: string;
  last_name?: string;
  email?: string; 
  address?: string; 
  message?: string; 
};

/**
 * Setting up an initial state
 * with empty string values
 */
const InitialState: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  message: ""
};


// Discriminated union: each action has a type + payload (TypeScript narrows in switch)
type FormAction =
  | { type: typeof ACTION_FIRST_NAME; payload: string }
  | { type: typeof ACTION_LAST_NAME; payload: string }
  | { type: typeof ACTION_EMAIL; payload: string }
  | { type: typeof ACTION_ADDRESS; payload: string }
  | { type: typeof ACTION_MESSAGE; payload: string }

/**
 * ACTIONS: Setting up some actions
 */
const ACTION_FIRST_NAME = "FIRST_NAME_CHANGED"; 
const ACTION_LAST_NAME = "LAST_NAME_CHANGED";
const ACTION_EMAIL = "EMAIL_CHANGED";
const ACTION_ADDRESS = "ADDRESS_CHANGED";
const ACTION_MESSAGE = "MESSAGE_CHANGED";

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case ACTION_FIRST_NAME:
      return { ...state, first_name: action.payload };
    case ACTION_LAST_NAME:
      return { ...state, last_name: action.payload };
    case ACTION_EMAIL:
      return { ...state, email: action.payload };
    case ACTION_ADDRESS:
      return { ...state, address: action.payload };
    case ACTION_MESSAGE: 
      return {...state, message: action.payload};
    default:
      return state;
  }
}

export default function Home() {


  /**
   * For useReducer, setup two state variables.  
   * One should be state, where state is stored,
   * the other should be dispatch, an action for 
   * updating state. Then instead of useState, 
   * useReducer accepts two arguments. The first 
   * argument calls the reducer function, and the 
   * second argument is initial state.   
   * 
   */
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <div>
      <main>
        <form>
          <label>First name</label>
          <input name="first-name" 
            value={state.first_name}
            onChange={(e) => dispatch({ type: ACTION_FIRST_NAME, payload: e.currentTarget.value })}
          />
          <label>Second name</label>
          <input name="last-name" 
            value={state.last_name}
            onChange={(e) => dispatch({ type: ACTION_LAST_NAME, payload: e.currentTarget.value })}
          />
          <label>Email</label>
          <input name="email" 
            value={state.email}
            onChange={(e) => dispatch({ type: ACTION_EMAIL, payload: e.currentTarget.value })}
          />
          <label>Address</label>
          <input name="address" 
            value={state.address}
            onChange={(e) => dispatch({ type: ACTION_ADDRESS, payload: e.currentTarget.value })}
          />
          <label>Message</label>
          <input name="message" 
            value={state.message}
            onChange={(e) => dispatch({ type: ACTION_MESSAGE, payload: e.currentTarget.value })}
          />
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}
