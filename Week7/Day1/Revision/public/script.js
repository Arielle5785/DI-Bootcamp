const getUsers = async () => {
    try {
        const res = await fetch('http://localhost:3000/users')
        const data = await res.json();
    } catch (error) {
        console.log(error);
        
    }
}
getUsers()

const render = (array) => {
    const html = arr.map(item =>
        return (`<div>${item.name} ${item.email}</div>`)
    )
    document.getElementById('root').innerHTML
}