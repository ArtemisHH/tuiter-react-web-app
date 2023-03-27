import Labs from './labs';
import './App.css';
import Tuiter from './tuiter';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import TodoList from './screens/todo-list';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/todos" element={<TodoList/>}/>
                    <Route path="/*"
                           element={<Labs/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );

}

export default App;
