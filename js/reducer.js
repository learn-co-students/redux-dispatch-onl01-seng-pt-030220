let state = {count: 0};
 
function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }
 
function render(){
    document.body.textContent = state.count
}
 
// this dispatch function solves two problems:
// 1. it persisted changes to our state. we called the dispatch function, 
// the dispatch function called the reducer,
// and then we took the return value from the reducer and assigned it to be the new state
// 2. it ensured that each time our state updates, our HTML updates to reflect these changes.
function dispatch(action){
  state = changeState(state, action)
  render()
}
 
render()
