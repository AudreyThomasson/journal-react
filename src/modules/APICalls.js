export const getAll = () => {
	return fetch("https://gist.githubusercontent.com/brendalong/f877f01148ec7ed8e858b43b2f68b35b/raw/de199aad360e2cd2b44b5dd3d00b3c603e8f39b6/christmaslist.json")
	.then(response => response.json())
	.then(parsedData => parsedData.christmasList)
}