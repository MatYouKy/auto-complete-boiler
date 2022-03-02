const InputHints = ({ itemHandler, id, name }) => (
  <li 
    style={{
      cursor: 'pointer',
      listStyle: 'none',
      margin: '10px 0',
  }}
  onClick={() => itemHandler(id)}
  >{name}
  </li>
);

export default InputHints;
