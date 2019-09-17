# Github Auth netrc action

This action uses a GitHub OAuth2 token to resolve private repository urls without putting secrets in local files.

In all aspects this action is heavily inspired by [timshadel/heroku-buildpack-github-netrc](https://github.com/timshadel/heroku-buildpack-github-netrc)

## Requirements

Expects a `secret` available in the repo called `GITHUB_AUTH_TOKEN`

## Example usage

uses: onomondo/github-auth-netrc-javascript-action
