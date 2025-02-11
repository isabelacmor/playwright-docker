# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.50.0-noble
 
# Set the work directory for the application
WORKDIR /app
 
# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy test-related files
COPY playwright.config.ts ./
COPY tests/ ./tests/

# Copy the built NextJs site
COPY .next ./.next
COPY public ./public

# Install dependencies
RUN npm install

ENV CI=true

# Make sure the CMD uses the TEST_TYPE cmd line variable
CMD ["sh", "-c", "npx playwright test $TEST_TYPE"]