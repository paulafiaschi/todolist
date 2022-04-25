export default function ListItem(props) {
  function handleDelete() {
    props.deleteItem(props.id);
  }
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task}
      <button onClick={handleDelete}>Delete me</button>
    </li>
  );
}
