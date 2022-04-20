import './App.css';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <h2>  Daily to do lists </h2>
     <FormTodo/>
     <TodoList/>
      <h1 >what  do you need to do ??</h1>
    </div>
    
    
  );
}

export default App;
