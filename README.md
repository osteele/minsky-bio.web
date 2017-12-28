# Marvin Minsky essays

Essays by and about Marvin Minsky.

## Setup

* Install [yarn](https://yarnpkg.com/en/). On macOS with [Homebrew](https://brew.sh): `brew install yarn`.
* `yarn install`

## Running the development server

`yarn dev`

## Adding a new article

* Create a new folder in `content/articles/n. Title`. It will be displayed in the order n. The "Title" is just for you to recognize it.
* Create a new markdown file `content/articles/n. Title/index.md`. Copy the frontmatter from another article, and edit it to taste.
* Add an image to the folder and reference it in your frontmatter.
* Write your content below the frontmatter.

## Deploying

`yarn deploy`

## Automatic Colors

\[From the [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma) README.\]

By default the hover overlay of the grid image and the header on the article page automatically choose its color by using [react-palette](https://github.com/leonardokl/react-palette).
The plugin chooses the *vibrant* color of the image and applies it as the ``background-color`` for the hover overlay and header background. If you don't want that behavior you can delete the ``<Palette />`` component both from ``pages/index.jsx`` and ``templates/article.jsx``.

## Credits

* Text by Marvin Minsky, Margaret Minsky, and friends.
* Built with [Gatsby](https://yarnpkg.com/en/).
* Theme adapted from [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma) by LekoArts <https://www.lekoarts.de>.

## Copyright

Individual articles are copyright by their authors. All rights reserved.
