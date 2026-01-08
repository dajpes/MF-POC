/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js|jsx|ts|tsx}': (filenames) => {
    console.log('Staged files:', filenames);
    console.log('Running Biome check...');
    return 'biome check --write --no-errors-on-unmatched  --files-ignore-unknown=true  --error-on-warnings';
  },
}