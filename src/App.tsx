import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

export type FilterType = 'active' | 'completed' | 'all'

function App() {
    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "RestAPI", isDone: false },
        { id: 5, title: "GraphQL", isDone: true }
    ])

    function removeTask(id: number) {
        tasks = tasks.filter(task => task.id !== id)
        setTasks(tasks)
    }

    let [filter, setFilter] = useState<FilterType>('all')
    let tasksForTodoList = tasks
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(task => task.isDone)
    }
    function changeFilter(value: FilterType) {
        setFilter(value)
    }
    return (
        <div className="App">
            <TodoList title='What to learn' tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
