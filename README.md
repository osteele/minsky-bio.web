# Marvin Minsky essays

Essays by and about Marvin Minsky.

## Setup

* Install [yarn](https://yarnpkg.com/en/). On macOS with [Homebrew](https://brew.sh): `brew install yarn`.
* `yarn install`

## Develop

`yarn dev`

## Deploy

`yarn deploy`

## Alternate setup using Docker

### Setup with Docker

Install docker from the [web site](https://docs.docker.com/engine/installation/) or (on macOS) via `cask install docker`.

### Develop with Docker

1. `docker-compose up`
2. Visit <http://localhost:8000>.

## CI

Create a Docker image for Circle CI:

```bash
tag=0.0.1
docker build -t osteele/circleci-node:$tag circleci/images/primary
docker login osteele/circleci-node:$tag
```

## Adding a new essay

* Create a new folder in `content/essays/n. Title`. It will be displayed in the order n. The "Title" is just for you to recognize it.
* Create a new markdown file `content/essays/n. Title/index.md`. Copy the frontmatter from another article, and edit it to taste.
* Add an image to the folder and reference it in your frontmatter.
* Write your content below the frontmatter.

## Credits

* Text by Marvin Minsky, Margaret Minsky, and friends.
* Built with [Gatsby](https://yarnpkg.com/en/).
* Theme adapted from [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma) by LekoArts <https://www.lekoarts.de>.

## Copyright

Individual articles are copyright by their authors. All rights reserved.
