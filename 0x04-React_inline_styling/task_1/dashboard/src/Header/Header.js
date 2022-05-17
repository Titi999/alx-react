import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(Header_Logo['App-Header'])}>
      <img src={logo} alt="logo" className={css(Header_Logo.logo)}/>
      <h1>School dashboard</h1>
    </div>
  );
}

const Header_Logo = StyleSheet.create({
  'App-Header':{
    fontSize: '1.4rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
	},

	logo: {
		width: '250px',
		height: '250px',
	},
});

export default Header;
