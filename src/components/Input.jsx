
const Input = ({ inputName, inputValue, onChangeFunc, inputPlaceholder = ""}) => {
  return (
    <input 
        name={inputName}
        value={inputValue}
        onChange={onChangeFunc}
        placeholder={inputPlaceholder}
    />
  )
}

export default Input