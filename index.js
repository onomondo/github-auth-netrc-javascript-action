const fs = require('fs')
const path = require('path')
const core = require('@actions/core')

try {
  const authToken = core.getInput('github-auth-token')
  const netRcPath = path.join(process.env.HOME, '.netrc')
  const netRcContents = `machine github.com login ${authToken} password x-oauth-basic`
  fs.writeFileSync(netRcPath, netRcContents)
  console.log(`Wrote ${netRcPath}`)
} catch (error) {
  core.setFailed(error.message)
}
