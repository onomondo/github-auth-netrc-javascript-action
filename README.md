# Github Auth action

This action uses a GitHub OAuth2 token to resolve private repository urls without putting secrets in local files.

In all aspects this action is heavily inspired by [timshadel/heroku-buildpack-github-netrc](https://github.com/timshadel/heroku-buildpack-github-netrc) and [The Vanilla DevOps Git Credentials & Private Packages Cheatsheet](https://coolaj86.com/articles/vanilla-devops-git-credentials-cheatsheet/).

## Requirements

You can create your secret by going to `settings` -> `secrets` and then adding `GH_AUTH_TOKEN` with the Oauth2 token (personal access token).

## Example usage

```yml
uses: onomondo/github-auth-javascript-action@v1.0.0
with:
  github-auth-token: ${{ secrets.GH_AUTH_TOKEN }}
```

## Caveats

If you're using `actions/checkout@v2` or higher you need to do one of the following:
* Set `token: ${{ secrets.GH_AUTH_TOKEN }}`
* Set `persist-credentials: false`

```yml
uses: actions/checkout@v2.1.0
with:
  token: ${{ secrets.GH_AUTH_TOKEN }}
  # or
  persist-credentials: false
```
