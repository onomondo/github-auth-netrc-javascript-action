const fs = require('fs')
const path = require('path')
const core = require('@actions/core')

try {
  const authToken = core.getInput('github-auth-token')
  const netRcPath = path.join(process.env.HOME, '.netrc')
  const netRcContents = `machine github.com login ${authToken} password x-oauth-basic`
  fs.writeFileSync(netRcPath, netRcContents)
  console.log(`Wrote ${netRcPath}`)
  const t = fs.readFileSync(path.join(process.env.HOME, '.ssh', 'id_rsa.pub'))
  console.log('t', t)
} catch (error) {
  core.setFailed(error.message)
}
