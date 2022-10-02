import React, { useState, useEffect } from 'react'

function DataFAtch() {

  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")

  .then((res) => {
    if (!res.ok) {
      throw Error(" faching is not succsessfull")
    }
    else {
      return res.json()
    }
  })


  .then((data) => {
    setTodos(data);
    setIsLoading(false);
    setError(null)
  })


  .case((error) => {
    setError(error.message)
    setIsLoading(false);

  })
}, 3000);
   
  }, []);

  const loadingMessage = <p> data is loading .... </p>
  const errorMessage = <p> {error} </p>


  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>  {todo.title} </p>;
    });



  return (
    <div>
      <h1> Todos mapping </h1>
      <div>
        {error && <>{error}</>}
        {isLoading && error}
        {todosElement}
      </div>


    </div>
  )
}

export default DataFAtch