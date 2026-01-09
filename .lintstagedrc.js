export default {
  'host/**/*.{js,jsx,ts,tsx}': ['npx biome check --write --no-errors-on-unmatched --files-ignore-unknown --error-on-warnings'],
  'fan-wallet/**/*.{js,jsx,ts,tsx}': ['npx biome check --write --no-errors-on-unmatched --files-ignore-unknown --error-on-warnings'],
}
