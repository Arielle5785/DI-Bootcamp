
import './App.css'
import UserFavoriteAnimals from './components/UserFavoriteAnimals.jsx'
import Exercise from './components/Exercise3.jsx';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
    };
  return (
    <>
      <div>
        <h3>{user.firstName}</h3> 
        <h3>{user.lastName}</h3>
          <p>Hello World!</p>
            {myelement}
        <p>React is {sum} times better with JSX</p>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <Exercise/>
      </div>  
    </>
  )
}

export default App
