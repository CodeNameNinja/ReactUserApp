import React from 'react';

import Card from 'components/UI/Card/Card';
import classes from './Home.module.css';
import Button from 'components/UI/Button/Button'
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;