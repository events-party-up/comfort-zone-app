import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import HeatMap from './heatmap/index';

document.addEventListener('DOMContentLoaded', () => render(<HeatMap/>, document.getElementById('app')));
