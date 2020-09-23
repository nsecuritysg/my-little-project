import React from "react";

export function ToDo() {
  const [value, setValue] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  return (
    <div>
      <div>Put the button "Enter" to add</div>
      <div>*** {value} ***</div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setValue("");
            setTasks([...tasks, value]);
          }
        }}
      ></input>
      {tasks.map((task) => (
        <div
          key={task}
          onClick={() => {
            setTasks(tasks.filter((t) => t !== task));
          }}
        >
          {task}
        </div>
      ))}
    </div>
  );
}
