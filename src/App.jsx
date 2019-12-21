import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import Layout from "./components/Layout"
import TodosList from "./components/TodosList"

const App = () => {
    return <BrowserRouter>
        <Layout>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
            </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={ TodosList }/>
                <Route path="/edit/:id" component={ EditTodo }/>
                <Route path="/create" component={ CreateTodo }/>
            </Switch>
        </Layout>
    </BrowserRouter>
}

export default App
