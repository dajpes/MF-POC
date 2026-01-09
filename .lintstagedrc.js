export default {
  'host/**/*.{js,jsx,ts,tsx}': ['npx biome check --write --config-path ./host/biome.json --no-errors-on-unmatched --files-ignore-unknown --error-on-warnings'],
  'fan-wallet/**/*.{js,jsx,ts,tsx}': ['npx biome check --write --config-path ./fan-wallet/biome.json --no-errors-on-unmatched --files-ignore-unknown --error-on-warnings'],
}