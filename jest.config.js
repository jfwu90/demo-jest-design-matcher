const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testTimeout: 60000,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async function() {
  const makeConfig = await createJestConfig(customJestConfig)
  const finalJestConfig = await makeConfig()

  // remove Next.js default module mapper to allow design-matcher to use its bundle asset files
  delete finalJestConfig.moduleNameMapper['^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$']

  return finalJestConfig;
}
