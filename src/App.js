import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoute from './route/route'

function App() {
  return (
    <div style={{backgroundColor:'rgb(236, 238, 224)',height:'100%',minHeight:'100vh'}} className="App">
      <MyRoute />
    </div>
  );
}

export default App;
