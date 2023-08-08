import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./features/todo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const tasks = useSelector((state) => state.toDo.value);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(inputValue));
    setInputValue("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <ol>
          {tasks.map((value, index) => (
            <div style={{ display: "flex" }}>
              <li key={index}>{value}</li>
              <button
                key={`bt${index}`}
                onClick={() => dispatch(deleteTask(index))}
              >
                DELETE
              </button>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
