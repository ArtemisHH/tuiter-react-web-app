/*2.4 Breaking out assignments into separate components*/
/*2.8 Navigating with links in SPAs*/
/*2.10 Working with HTML classes*/
/*2.11 Working with HTML style attribute*/
/*2.12 Generating conditional output*/
/*import {Link} from "react-router-dom";*/
import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;

