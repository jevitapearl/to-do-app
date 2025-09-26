export default function Task(props){

  return (<li className={props.className}>
    {props.taskName} 
    <div>
      <button className="task-btn green" type="button" onClick={() => props.completeTask(props)}>Completed</button>
      <button className="task-btn red" type="button" onClick={() => props.deleteTask(props)}>x</button>
    </div>
  </li>
  )
}