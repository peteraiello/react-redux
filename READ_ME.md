# Getting started with react redux

Old way of defining React components: 

```
class MyComponent extends React.Component {
  componentDidMount() {
    // Runs after component mounts
}
```

Example of old way of handling component lifecycle methods:

```
class MyComponent extends React.Component {
  componentDidMount() {
    // Runs after component mounts
  }
  
  componentDidUpdate() {
    // Runs after component updates
  }
  
  render() {
    return <div>Hello</div>;
  }
}
```

New way of managing component lifecycle methods using hooks: 

```
// componentDidMount
useEffect(() => {
  console.log('Component mounted');
}, []); // Empty array = runs once on mount

// componentDidUpdate
useEffect(() => {
  console.log('Component updated');
}, [dependency]); // Runs when dependency changes

// componentWillUnmount
useEffect(() => {
  return () => {
    console.log('Component unmounting');
  };
}, []); // Cleanup function
```

# React hooks

## useMemo 

Description: Caches the result of an expensive calculation and only recalculates when dependencies change, avoiding unnecessary re-computation on every render.

```
    const updateCount = useMemo(() => {
        return number + 1; 
    }, [number])
```
## useCallback 

Description: Caches a function reference so that when you pass it to a memoized child component, the child doesn't re-render unnecessarily because the function reference stays the same across parent re-renders.

```
    const updateCount = useCallback(() => {
        return setNumber(number + 1); 
    }, [number])
```

## useRef

Description: Stores a value that persists across re-renders without triggering new renders—useful for accessing DOM elements directly or tracking values (like render counts) that you don't need to display in the UI.

```
    const inputElem = useRef()
```

# Redux 

Key concepts: 
1. Store = holds the state
2. Actions = describe what happened (increment, decrement)
3. Reducer = function that takes the current state and action, returns new state (switch statement pattern)

Example of a coding pattern for redux style counter 

```
// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Actions (action creators)
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
```