import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change in import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import  './redux/store';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
