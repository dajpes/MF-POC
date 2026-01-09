export default {
  'host/**/*.{js,jsx,ts,tsx}': ['npx biome check --write --config-path=./host --no-errors-on-unmatched --files-ignore-unknown=true --error-on-warnings'],
  'fan-wallet/**/*.{js,jsx,ts,tsx}': ['npx biome check --write --config-path=./fan-wallet --no-errors-on-unmatched --files-ignore-unknown=true --error-on-warnings'],
}
