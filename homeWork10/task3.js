async function fetchToDoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return await response.json()
    } catch (e) {
        return e.message
    }
}

async function fetchUsersById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return await response.json()
    } catch (e) {
        return e.message
    }
}

Promise.all([
    fetchToDoById(1),
    fetchUsersById(1),
]).then((values) => console.log(values))

Promise.race([
    fetchToDoById(1),
    fetchUsersById(1),
]).then((values) => console.log(values))
