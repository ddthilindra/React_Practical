import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
// import Greet from './component/Greet';
//import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import parentComponent from './component/parentComponent';
import UserGreeting from './component/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <parentComponent  /> */}
      {/* <EventBind /> */}
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Suerman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women"/>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Suerman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Women"></Welcome> */}
    </div>
  );
}

export default App;
