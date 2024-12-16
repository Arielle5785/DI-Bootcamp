const getUsers = async () => {
    try {
        const res = await fetch('https:/localhost:3003/users');
        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
getUsers()

const render = (arr) => {
    const html = arr.map((item) => {
    return `<div>${item.name} ${item.email}</div>`;

    )}
}