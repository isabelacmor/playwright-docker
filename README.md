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

This command builds the production version of the app, builds the Docker image, then runs the tests in the Docker container. As part of this, Playwright results are copied from the Docker container back to the local repository. These results can be opened with `pnpm open:playwright-report`.

You can optionally run `pnpm cleanup:docker` to stop the container and delete it.

### Visual regression

To run Playwright visual regression tests locally, run:
`pnpm playwright:vrt:local`

_Note: This is not recommended as environment differences will cause pixel differences in screenshots, leading to failures in CI/CD._

To run Playwright visual regression tests in Docker, run:
`pnpm playwright:vrt:container`

This command builds the production version of the app, builds the Docker image, then runs the tests in the Docker container. As part of this, Playwright results are copied from the Docker container back to the local repository. These results can be opened with `pnpm open:playwright-report`.

You can optionally run `pnpm cleanup:docker` to stop the container and delete it.

## CI

GitHub actions live in `.github/workflows`. These yaml files are set up to run on every push to PRs. Test reports will be pushed as an artifact for each run and displayed within the action's summary. The full report artifact can be downloaded and viewed locally as well.
