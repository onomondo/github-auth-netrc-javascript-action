# Github Auth action

This action uses a GitHub OAuth2 token to resolve private repository urls without putting secrets in local files.

In all aspects this action is heavily inspired by [timshadel/heroku-buildpack-github-netrc](https://github.com/timshadel/heroku-buildpack-github-netrc) and [The Vanilla DevOps Git Credentials & Private Packages Cheatsheet](https://coolaj86.com/articles/vanilla-devops-git-credentials-cheatsheet/).

## Requirements

Expects a `secret` available in the repo called `GITHUB_AUTH_TOKEN`

## Example usage

```yml
uses: onomondo/github-auth-javascript-action
with:
  github-auth-token: ${{ secrets.GITHUB_AUTH_TOKEN }}
```
