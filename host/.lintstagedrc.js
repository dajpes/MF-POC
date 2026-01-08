export default {
 "*": (files) => {
    console.log(files)
    return [
        'biome check --write --no-errors-on-unmatched  --files-ignore-unknown=true  --error-on-warnings',
        'npm run typecheck'
    ]
 }    
}