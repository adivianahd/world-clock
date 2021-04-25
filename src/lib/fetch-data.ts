export const fetchData = (url: string) => fetch(url).then((response) => response.json())
