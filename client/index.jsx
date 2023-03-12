import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'

const providerConfig = {
  domain: 'horoeka-2022-alizaa.au.auth0.com',
  clientId: '4CbI7RnA9irtdO9yLHyc6Ii1hIZtWeiP',
  redirectUri: window.location.origin,
  audience: 'https://happydoggy/api',
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider {...providerConfig}>
      <Router>
        <App />
      </Router>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
