import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';x
// import './App.css';
import './App.scss';
// Antd CSS and Bootstrap CSS Import
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './hoc/Layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout />
      {/* <Route exact path="/" component={} /> */}
    </BrowserRouter>
  );
}

export default App;
