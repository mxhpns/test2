import { useState } from "react";

function Tasks({tasks, onRemoveClick}) {
  const lis = tasks.map(t => (
    <li key={t.id}>
      {t.text}
      <button onClick={() => onRemoveClick(t.id)}>x</button>
    </li>
  ))
  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )
}

export default Tasks;