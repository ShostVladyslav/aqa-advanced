function fetchToDoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((json) => json)
}

function fetchUsersById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((json) => json)
}

Promise.all([
    fetchToDoById(1), 
    fetchUsersById(1)
])
    .then((values) => console.log('Results:', values))
    .catch((e) => console.error('Error:', e.message));

Promise.race([
    fetchToDoById(1), 
    fetchUsersById(1)
])
    .then((values) => console.log('Results:', values))
    .catch((error) => console.error('Error:', error.message));
