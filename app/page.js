"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [maintask, setmainTask] = useState([]);

  const setInputhandler2 = (event) => {
    setTitle(event.target.value)
  }
  const setInputhandler = (event) => {
    setDesc(event.target.value)
  }

  const submitform = (e) => {
    e.preventDefault();
    setmainTask([...maintask, { title, desc }])
    setTitle("");
    setDesc("");
  }
  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  }


  let renderTask = <p>No task available</p>

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i}>
          <div className='tit'>
            <h5>{t.title}</h5>
            <p>{t.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='btn'>Delete</button>
        </li>

      )
    })
  }
  return (
    <>
      <h1 id='head'>My To-do-App</h1>
      <form onSubmit={submitform}>
        <input
          type='text' placeholder='Enter task here'
          value={title}
          onChange={setInputhandler2}
        />
        <input type='text' placeholder='Enter Description here' value={desc}
          onChange={setInputhandler}
        />
        <button>Click Me</button>
      </form>
      <hr />
      <div>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}
export default page;
