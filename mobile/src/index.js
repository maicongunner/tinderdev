
import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Failed prop type',
  'componentWillUpdate'
]); 

import Routes from './routes';

export default function App() {
  return (
    <Routes /> 
  );
}
