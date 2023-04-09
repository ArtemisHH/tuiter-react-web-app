import {useState} from "react"
function TodoList() {
    const [todos, setTodos] = useState ([
    {id: 1, title: 'Learn React', completed: false, editing: false},
    {id: 2, title: 'Learn GraphQL', completed: false, editing: true},
    {id: 3, title: 'Learn Apollo', completed: false, editing: false},
    ])

    const [newTodo, setNewTodo] = useState({
        title: 'Learn React native',
        completed: false,
        editing: false
    })
    const onAddTodo = () => {
/*        /!*newTodo.id = Date.now()*!/
        /!*todos.push(newTodo)
        console.log(todos)*!/
        const newTodos = [...todos, newTodo]*/
        setTodos([...todos, newTodo])
    }
    const onNewTodoChange = (event) => {
        /*
        const newNewTodo = {
            ...newTodo,
            id: Date.now(),
            title: event.target.value
        }*/
        setNewTodo({
            ...newTodo,
            id: Date.now(),
            title: event.target.value})
    }
    const onDeleteTodo = (todo) =>
        /*const newTodos = todos.filter(t => t.id !== todo.id)*/
        setTodos(todos.filter(t => t.id !== todo.id))

    const onEditTodo = (todo) => {
        /*const newTodos = todos.map(t => {
            if (t.id === todo.id) {
                return {
                    ...t,
                    editing: !t.editing
                }
            } else {
                return t
            }
        })
        setTodos(newTodos) */
        setTodos(todos.map(t => t.id === todo.id ? {...t, editing: !t.editing} : t))
    }
    const onEditTodoTitleChange = (todo, event) => {
        /*const newTodos = todos.map(t => {
            if (t.id === todo.id) {
                return {
                    ...t,
                    title: event.target.value
                }
            } else {
                return t
            }
        })
        setTodos(newTodos)*/
        setTodos(todos.map(t => t.id === todo.id ? {...t, title: event.target.value} : t))
    }
return (
    <div className="container-fluid">
        <h1>Todo List</h1>
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={onAddTodo} className="btn btn-primary float-end">Add</button>
                <input onChange={onNewTodoChange}
                       type="text"
                       className="form-control w-75"/>
            </li>
            {todos.map(todo => (
            <li key={todo.id}
                className="list-group-item">
                <button onClick={() => onDeleteTodo(todo)} className="btn btn-danger float-end">Delete</button>
                <button onClick={() => onEditTodo(todo)} className="me-2 btn btn-warning float-end">{todo.editing ? "OK" : "Edit"}</button>
                {!todo.editing && <span>{todo.title}</span>}
                {todo.editing && <input onChange={(event) =>onEditTodoTitleChange(todo, event)}
                                        defaultValue={todo.title}
                                        type="text" className="form-control w-50"/>}
            </li>))}
        </ul>
    </div>
)
}
export default TodoList