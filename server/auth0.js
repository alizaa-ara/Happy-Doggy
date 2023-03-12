// const jwt = require('express-jwt')
const { expressjwt: jwt } = require('express-jwt')
const jwks = require('jwks-rsa')
const { ManagementClient } = require('auth0')
const dotenv = require('dotenv')

dotenv.config()

// TODO: set the domain and audience (API Identifier)
const domain = 'https://horoeka-2022-alizaa.au.auth0.com'
const audience = 'https://happydoggy/api'
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

// https://auth0.github.io/node-auth0/ManagementClient.html
const management = new ManagementClient({
  domain: 'horoeka-2022-alizaa.au.auth0.com',
  clientId: 'LGmfIxYTUdSl5Eu5ptxYxiX1KIOsJ3WB',
  clientSecret:
    'cLrYWzcJUiBzbFfyLN2SWgdmDEMZqq_pH9Qp_VX2XK8YcBX5AQu01rq1aQnmSNzz',
  scope: 'read:users',
  audience: 'https://horoeka-2022-alizaa.au.auth0.com/api/v2/',
  tokenProvider: {
    enableCache: true,
    cacheTTLInSeconds: 10,
  },
})

async function getUser(id) {
  const user = await management.getUser({ id })

  return { ...user.user_metadata, email: user.email }
}

async function updateUser(id, userDetails) {
  await management.updateUserMetadata(
    { id },
    { user_metadata: { ...userDetails } }
  )
  const user = await management.getUser({ id })
  return user.user_metadata
}

module.exports = {
  checkJwt,
  getUser,
  updateUser,
}
