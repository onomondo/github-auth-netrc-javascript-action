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
  const result = fs.readFileSync(filePath).toString()
  console.log('result:', result)
  const dirResult = fs.readdirSync(process.env.HOME)
  console.log('dir result:', dirResult)

  const curlRcPath = path.join(process.env.HOME, '.curlrc')
  fs.writeFileSync(curlRcPath, '--netrc-optional')

  const dirResult2 = fs.readdirSync(process.env.HOME)
  console.log('dir result 2:', dirResult2)
} catch (error) {
  core.setFailed(error.message)
}
