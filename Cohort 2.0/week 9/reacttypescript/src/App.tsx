
function App() {

  return (
      <Todo title="do coding" description="coding coding" done={true} />
  )
}

interface TodoProp {
  title:string,
  description: string,
  done: boolean
}
function Todo({title,description,done}:TodoProp){
  return( <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <h2>{done}</h2>
  </div>)
}

export default App
