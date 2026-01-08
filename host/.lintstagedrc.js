/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.js': () => {
    console.log('Running Biome check on staged files...');
    return 'npm run biome';
  },
}