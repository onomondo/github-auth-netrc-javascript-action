const fs = require('fs')
const path = require('path')
const core = require('@actions/core')
const github = require('@actions/github')

try {
  const authToken = core.getInput('github-auth-token')
  const netRcPath = path.join(process.env.HOME, '.netrc')
  const fileContents = `machine github.com login ${authToken} password x-oauth-basic`
  fs.writeFileSync(netRcPath, fileContents)

  const curlRcPath = path.join(process.env.HOME, '.netrc')
  const curlContents = `--net-rc`
  fs.writeFileSync(curlRcPath, curlContents)
} catch (error) {
  core.setFailed(error.message)
}
