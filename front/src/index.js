import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import ErrorBoundary from './components/ErrorBoundary'

import './index.css';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
    <BrowserRouter>
      <App />
      <Routes>
        <Route>
          <Route path="/404" element={<div>Ошибка 404</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);