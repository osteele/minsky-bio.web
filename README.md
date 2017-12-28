![](https://i.imgur.com/M0nwIVi.png)

# Margaret Minsky web site

A web site in [Gatsby](https://www.gatsbyjs.org/).

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-one/#check-your-development-environment)

To copy and install this starter run this command (with "Project-Name" being the name of your folder you wish to install it)

```
gatsby new Project-Name https://github.com/LeKoArts/gatsby-starter-portfolio-emma
npm run dev
```

### Adding a new article

- Create a new folder in ``content/articles`` with the current date (Format: YYYY-MM-DD)
- Create a new markdown file, add the frontmatter (use the same date format)
- Add an image and reference it in your frontmatter
- Write your content below the frontmatter

### Building your site

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in ``config/SiteConfig``.

You can also configure the styling of the site by editing the SCSS variables in ``config/_variables.scss``.

## Automatic Colors

By default the hover overlay of the grid image and the header on the article page automatically choose its color by using [react-palette](https://github.com/leonardokl/react-palette).
The plugin chooses the *vibrant* color of the image and applies it as the ``background-color`` for the hover overlay and header background. If you don't want that behavior you can delete the ``<Palette />`` component both from ``pages/index.jsx`` and ``templates/article.jsx``.

## Credits

- Adapted from [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma) by LekoArts <hello@lekoarts.de>.
