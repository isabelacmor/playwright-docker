# Overview

This is a sample NextJS app to demo automated accessibility and visual regression testing using Playwright and Docker.

## Getting Started

First, install the dependencies using your preferred package manager:
`pnpm install`

Then, run the development server:
`pnpm dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Testing

This sample NextJS app is set up to run automated accessibility and visual regression tests using Playwright and Docker.

### Accessibility

To run Playwright accessibility tests locally, run:
`pnpm playwright:a11y:local`

To run Playwright accessibility tests in Docker, run:
`pnpm playwright:a11y:container`

_Note: You must have Docker installed and running._

This command builds the production version of the app, builds the docker image, then runs the tests in our Docker container. As part of this, we also copy the Playwright results from the Docker container back to the local repository and opens the HTML file.

You can optionally run `pnpm cleanup:docker` to stop the container and delete it.

### Visual regression

_Coming soon._

## CI

_Coming soon._
