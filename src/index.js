import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import client from './graphql/client';

import './index.css';
import * as serviceWorker from './serviceWorker';

const WrappedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

serviceWorker.unregister();
