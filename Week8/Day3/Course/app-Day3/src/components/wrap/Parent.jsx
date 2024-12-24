const Parent = (props) => {
    console.log(props);
    if (props.auth === 'admin') return props.children
    return <h2>You are not authorized to see this component</h2>
}
export default Parent