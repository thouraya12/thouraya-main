import React , {useState}from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Action/Index';

const FormTodo = () => {
    const [textInput,setTextInput]=useState('')
    const handleChange =e=>{
        setTextInput(e.target.value)
    }
    const dispatch =useDispatch()
    const handleClick = e=>{
        e.preventDefault()
        dispatch(addTodo ({
            description :textInput
        }))
        setTextInput('')
    }
  return (
      < form className="form">
     < input
      type="text"
      placeholder="enter your todo"
      className="input-add"
      required
      onChange ={handleChange}
    value={textInput }

      />
      <button type='submit' className='btn-add' onClick={handleClick}>
          add 
          
          </button>
          </form>
    
  );
  };
export default FormTodo;
  