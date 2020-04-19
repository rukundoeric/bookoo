/* eslint-disable no-dupe-keys */
import { container } from './index';

const componentsStyle = {
  container,
  brand: {
    color: '#FFFFFF',
    textAlign: 'left',
    display: 'block',
    '@media (max-width: 450px)': {
      display: 'none',
    },
  },
  title: {
    fontSize: '3.2rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '510px',
    margin: '10px 0 0',
  },
  authors: {
    fontSize: '1rem',
    maxWidth: '510px',
    color: '#2c7030',
    margin: '10px 0 0',
  },
  ViewButton: {
    marginTop: '10px',
    color: '#31344b',
    border: '1px solid #31344b',
    '&:hover': {
      border: '1px solid #3e4264',
    },
    '&$disabled': {
      border: '1px solid gray',
    },
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '1',
  },
  mainRaised: {
    margin: '-100px 30px 0px',
    borderRadius: '10px',
    minHeight: '500px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 830px)': {
      marginLeft: '10px',
      marginRight: '10px',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    maxWidth: '1000px',
    '@media (max-width: 900px)': {
      width: '85%',
    },
    '@media (max-width: 846px)': {
      width: '95%',
    },
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
  },
  textCenter: {
    textAlign: 'center',
  },
};

export default componentsStyle;
