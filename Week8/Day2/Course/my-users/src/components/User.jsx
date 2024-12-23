import "./User.css";
// import{Button, Switch} from '@mui/material'
import "tachyons";

const User = (props) => {
  const { name, email, username, id } = props.info;
  // const divOptionStyle = {}
  return (
    <>
      {/* <div style={divOptionStyle}/>> */}
      {/* <div style={{
        display: 'inline-block',
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
      //   borderRadius: '10px', */}
      {/* // <div className= ".card">
      //  */}
      {/* }}> */}
      <div classname = 'tc dib br3 pa3 ma3 bg-light-green grow shadow-5' >
        <img src={`https://robohash.org/${id}?size=150x150`} />
        <h2 style ={{color:'red'}}>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>Username: {username}</p>
        {/* <Button variant="outlined">Outlined</Button> */}
      </div>
    </>
  );
};
export default User;
