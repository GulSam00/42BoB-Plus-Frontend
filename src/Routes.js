import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Chatting, Login, MyPage } from 'pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/chatting" component={Chatting} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
