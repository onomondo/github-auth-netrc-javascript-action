const fs = require('fs')
const path = require('path')
const core = require('@actions/core')
const github = require('@actions/github')

try {
  const authToken = core.getInput('github-auth-token')
  const filePath = path.join(process.env.HOME, '.netrc')
  const fileContents = `machine github.com login ${authToken} password x-oauth-basic`
  fs.writeFileSync(filePath)
  console.log(`Wrote GITHUB_AUTH_TOKEN to ${filePath}`)
} catch (error) {
  core.setFailed(error.message)
}
