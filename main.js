const response = await fetch("/api/hello")
const data = await response.text()
console.log(data)
