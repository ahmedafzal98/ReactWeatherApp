import React from 'react'

export const Todo = ({myTodo}) => {
  return (
    <div>

      <h4>{myTodo.title}</h4>
      <p>{myTodo.desc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  )
}
