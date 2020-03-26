import React from 'react'
import Footer from './Footer'
import MainContent from './MainContent'
import Header from './Header'
import '../style.css'
import TodoItem from './TodoItem'

const App = ()=>(
        <div className="todo-list">

            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

        </div>
    )
export default App 