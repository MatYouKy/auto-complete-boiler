import { INPUT_CHANGE_VALUE, ITEM_HANDLER } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import InputHints from './InputHints';

const Input = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.inputValue);
  const extractedArray = useSelector(state => state.extractedArray);

  const inputChangeHandler = event => dispatch({ type: INPUT_CHANGE_VALUE, value: event.target.value });

  const itemHandler = id => dispatch({ type: ITEM_HANDLER, id });

  const items = extractedArray.map(user => (
    <InputHints key={user.id} itemHandler={itemHandler} id={user.id} name={user.name}/>
  ));

  return (
    <div>
      <form autoComplete="off" style={{
        margin: '0 auto',
        maxWidth: '400px'
      }}>
        <div>
          <label htmlFor='input-name' style={{display: 'block'}}>Input</label>
          <input id='input-name' type='text' onChange={inputChangeHandler} value={value}/>
          <ul>{items}</ul>
        </div>
      </form>
    </div>
  );
};

export default Input;
