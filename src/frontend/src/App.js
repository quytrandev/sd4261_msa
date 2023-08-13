import React from "react";
import axios from "axios";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      metrics: []
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        this.setState({
          todos: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddTodo = (value) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  handleGetMetrics = () => {
    axios
      .get("/api/metrics")
      .then((response) => {
        this.setState({
          metrics: response.data
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Todos ArgoCD v2.0</h1>
              <div className="todo-app">
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Todos Metrics</h1>
              <div className="todo-app">
                <button 
                  className="btn btn-primary" 
                  onClick={this.handleGetMetrics}>
                    Get Metrics
                </button>
              </div>
              <div className="row">
                {this.state.metrics}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Prometheus custom metrics referenced to this repo by anh Toan Le Hang: https://github.com/ToanLeH/sd2079_msa
