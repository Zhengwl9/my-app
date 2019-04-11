import React from 'react'
import Footer from './Footer'
import AddTodo from '../store/containers/AddTodo'
import VisibleTodoList from '../store/containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App