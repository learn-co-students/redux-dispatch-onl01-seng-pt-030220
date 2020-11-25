function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action)
  render()
}

function render(){
  document.body.textContent = state.count
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

dispatch(action)// 0 -> 1
dispatch(action)// 1 -> 2
dispatch(action)// 2 -> 3 Should display 3

render()