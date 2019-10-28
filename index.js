const fs = require('fs')
const path = require('path')
const core = require('@actions/core')

const createGitConfig = (contents) => `
${contents}
[url "https://api.github.com/"]
    insteadOf = "https://github.com/"
[url "https://ssh@github.com/"]
    insteadOf = "ssh://git@github.com/"
[url "https://git@github.com/"]
    insteadOf = "git@github.com:"
`

try {
  const authToken = core.getInput('github-auth-token')
  // const netRcPath = path.join(process.env.HOME, '.netrc')
  // const netRcContents = `machine github.com login ${authToken} password x-oauth-basic`
  // fs.writeFileSync(netRcPath, netRcContents)
  const gitConfigPath = path.join(process.env.HOME, '.gitconfig')
  // const gitConfigContents = fs.readFileSync(gitConfigPath).toString()
  console.log('gitConfigContents', gitConfigContents)
  fs.writeFileSync(gitConfigPath, createGitConfig(''))
  console.log(`Wrote ${gitConfigPath}`)

  const askPassPath = `${process.env.HOME}/.git-askpass`
  fs.writeFileSync(askPassPath, `echo ${authToken}`)
  core.exportVariable('GIT_ASKPASS', askPassPath);
  console.log(`Wrote ${askPassPath}`)
} catch (error) {
  core.setFailed(error.message)
}
