import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import Layout from "./components/Layout"
import TodosList from "./components/TodosList"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={ TodosList } />
                    <Route path="/edit/:id" component={ EditTodo }/>
                    <Route path="/create" component={ CreateTodo }/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
