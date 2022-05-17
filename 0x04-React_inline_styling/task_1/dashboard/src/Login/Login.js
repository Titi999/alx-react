import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(loginStyles['App-body'])}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={css(loginStyles.input)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={css(loginStyles.input)} />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const loginStyles = StyleSheet.create({
  'App-body':{
    padding: '36px 24px'
  },

  input:{
    margin: '0 16px 0 8px'
  }
});

export default Login;
