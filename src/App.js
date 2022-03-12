import './App.css';
import logo from './assets/React Query Logo.svg'
import Users from './components/users';
import CreateUser from './components/createUser';

function App() {
  return (
    <div className="container mx-auto">
      <div className="logo  flex justify-center">
        <img src={logo} className="w-80 py-10" alt="" />
      </div>
      <CreateUser></CreateUser>
      <Users></Users>
    </div>
  );
}

export default App;
