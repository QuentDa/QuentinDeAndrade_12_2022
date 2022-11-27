export async function Get(url) {
    let result = await fetch(url)
    let resultJS = await result.json()
    return resultJS;
}