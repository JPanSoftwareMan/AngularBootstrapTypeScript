import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'anavbar-brand': {
    'whiteSpace': 'normal',
    'textAlign': 'center',
    'wordBreak': 'break-all'
  },
  'navbar-nav nav-item nav-link': {
    'color': '#00cc00'
  },
  'navbar-dark navbar-nav nav-link:focus': {
    'color': 'red'
  },
  'navbar-dark navbar-nav nav-link:hover': {
    'color': 'red'
  },
  'html': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    '>w768': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'box-shadow': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .05)' }]
  }
});
