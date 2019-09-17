const fs = require('fs')
const path = require('path')
const core = require('@actions/core')

try {
  const authToken = core.getInput('github-auth-token')
  // const netRcPath = path.join(process.env.HOME, '.netrc')
  // const netRcContents = `machine github.com login ${authToken} password x-oauth-basic`
  // fs.writeFileSync(netRcPath, netRcContents)
  // console.log(`Wrote ${netRcPath}`)
  const dir = path.join(process.env.HOME, '.ssh')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path.join(dir, 'id_rsa.pub'), authToken)
  console.log('wrote ssh key')
  console.log('contents', fs.readFileSync(path.join(dir, 'id_rsa.pub')))
} catch (error) {
  core.setFailed(error.message)
}
