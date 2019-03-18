import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return <h2>Home</h2>;
  }
}

class About extends Component {
  state = {};
  render() {
    return <h2>About</h2>;
  }
}

const Topic = ({ match }) => <h3>{match.params.topicId}</h3>;

const Topics = ({ match }) => {
  const { url } = match;

  return (
    <Fragment>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/redux`}>Redux</Link>
        </li>
        <li>
          <Link to={`${url}/nodejs`}>NodeJS</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${url}/:topicId`} component={Topic} />
        <Route exact path={`${url}`} render={() => (
          <Fragment>
            <h4>Choose any topic</h4>
            <p>Really any!</p>
          </Fragment>
        )} />
      </Switch>
    </Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
