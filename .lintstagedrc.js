export default {
  'host/**/*.{js,jsx,ts,tsx}': (filenames) => {
    return `cd host && npx biome check --write --no-errors-on-unmatched --files-ignore-unknown --error-on-warnings ${filenames.map(f => f.replace('host/', '')).join(' ')}`;
  },
  'fan-wallet/**/*.{js,jsx,ts,tsx}': (filenames) => {
    return `cd fan-wallet && npx biome check --write --no-errors-on-unmatched --files-ignore-unknown --error-on-warnings ${filenames.map(f => f.replace('fan-wallet/', '')).join(' ')}`;
  },
}