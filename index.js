const fs = require('fs')
const path = require('path')
const core = require('@actions/core')
const github = require('@actions/github')

try {
  console.log('process.env', process.env)
  const authToken = core.getInput('github-auth-token')
  const netRcPath = path.join(process.env.HOME, '.netrc')
  const netRcContents = `machine github.com login ${process.env.GITHUB_TOKEN} password x-oauth-basic`
  fs.writeFileSync(netRcPath, netRcContents)
  const x = fs.readFileSync(netRcPath)
  console.log('x', x.toString())

  const curlRcPath = path.join(process.env.HOME, '.netrc')
  const curlRcContents = `--net-rc`
  fs.writeFileSync(curlRcPath, curlRcContents)
} catch (error) {
  core.setFailed(error.message)
}
