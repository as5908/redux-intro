import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions';

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubCounter(5)}
        />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          {' '}
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              id={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

// This is a function, requires manual dispatching
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: val => dispatch(actionCreators.add(val)),
    onSubCounter: val => dispatch(actionCreators.subtract(val)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};

// mapping of propsNames to action creator, this is an object. Does not require dispatch for sync requests
// const alternate = {
//   onIncrementCounter: () => ({
//     type: actionTypes.INCREMENT
//   }),
//   onDecrementCounter: () => ({
//     type: actionTypes.DECREMENT
//   }),
//   onAddCounter: val => ({ type: actionTypes.ADD, value: val }),
//   onSubCounter: val => ({ type: actionTypes.SUBTRACT, value: val }),
//   onStoreResult: () => ({ type: actionTypes.STORE_RESULT }),
//   onDeleteResult: id => ({
//     type: actionTypes.DELETE_RESULT,
//     resultElementId: id
//   })
// };

// export default connect(mapStateToProps, alternate)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
