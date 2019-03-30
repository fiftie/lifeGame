import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import BoardComponentContainer from './apps/board/_containers/BoardComponentContainer';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Route exact path='/' component={BoardComponentContainer} />
      </Router>
    );
  }
}