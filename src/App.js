import { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import myPng from './some/1.png';
import MyComp from './MyComp';

function Big() {
  return <button>click me</button>
}

let nextId = 1;

function App() {
  const [tasks, setTasks] = useState([]);
  const [newText, setNewText] = useState('');

  function addTask() {
    const newTask = {
      id: nextId++,
      text: newText,
    };
    setTasks([...tasks, newTask]);
  }

  function removeTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <>
      <Header />
      <MyComp />
      <img src={myPng} />
      <div className="my-div-with-picture" />
      <input
        value={newText}
        onChange={ev => setNewText(ev.target.value)}
      />
      <button onClick={addTask}>
        Добавить задачу
      </button>
      <Tasks tasks={tasks} onRemoveClick={removeTask} />
      <div>
        далее
      </div>
      <Big />
    </>
  );
}

export default App;