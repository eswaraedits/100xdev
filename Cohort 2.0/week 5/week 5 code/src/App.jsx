import { useState } from "react";
import { useEffect } from "react";

function App() {
  return <div>
    <Todo id={3} />
  </div>
}

function Todo({id}) {
  const [todoID, setID] = useState(1);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id="+id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [])

  return (<div>
    <button onClick={function (){
      setTodo
    }}>1</button>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>)
}

export default App;