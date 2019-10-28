// https://coolaj86.com/articles/vanilla-devops-git-credentials-cheatsheet/
const fs = require('fs')
const path = require('path')
const core = require('@actions/core')

const gitConfigTemplate = `
[url "https://api.github.com/"]
    insteadOf = "https://github.com/"
[url "https://ssh@github.com/"]
    insteadOf = "ssh://git@github.com/"
[url "https://git@github.com/"]
    insteadOf = "git@github.com:"
`

try {
  const authToken = core.getInput('github-auth-token')
  const gitConfigPath = path.join(process.env.HOME, '.gitconfig')
  fs.writeFileSync(gitConfigPath, gitConfigTemplate)

  const askPassPath = `${process.env.HOME}/.git-askpass`
  fs.writeFileSync(askPassPath, `echo ${authToken}`)
  fs.chmodSync(askPassPath, '0700')
  core.exportVariable('GIT_ASKPASS', askPassPath);

  console.log(`Wrote ${gitConfigPath} and ${askPassPath}`)
} catch (error) {
  core.setFailed(error.message)
}
