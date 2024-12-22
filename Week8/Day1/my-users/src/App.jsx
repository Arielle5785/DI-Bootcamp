
import './App.css'
import User from './components/User' 
import users from "../src/users.json"

// let usersArray = [
//   { id: 1, name: 'John', email: 'jj@gamil.com', username: 'JFK' , id :'1' },
//   { id: 2, name: 'Mary', email: 'jj@gamil.com', username: 'JFK' , id :'2' },
//   { id: 3, name: 'Joseph', email: 'jj@gamil.com', username: 'JFK' , id :'3'},
//   { id: 4, name: 'Putiphar', email: 'jj@gamil.com', username: 'JFK' , id :'4'},
//   { id: 5, name: 'Pharo', email: 'jj@gamil.com', username: 'JFK' , id :'5'},
//   { id: 6, name: 'John', email: 'jj@gamil.com', username: 'JFK' , id :'6'},
  
// ]
function App() {
  return (
    <>
      {users.map((item, indx) => {
        return <User key={indx} info={item} />;
      })
      }
    </>
  );
}
      // {/* <User name = "John" id = "1" email="jjj@gamil.com" username = "JFK" />
      // <User name = "Marry" id = "2" email="mmm@gamil.com" username = "MARY"/> */}
      // {/* {
        // users.map((item) => {
        //   return <User 
        //     name={item.name}
        //     email={item.email}
        //     username = {item.username}
        //     id={item.id} />
        // })
//       } */}
    
  

export default App
