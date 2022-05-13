import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <div class="todo-container">
        <h2>You have 3 Todos</h2>    
        </div>
        <div>
          <p>task 1</p>
          <p>task 2</p>
          <p>task 3</p>
        </div>
        <div>
        <div><input placeholder="Enter Item" name="item" /></div>
        <div><button type="submit" class="submit" name="submit">Submit</button></div>
        </div>

    </div>
  );
}

export default App;
