import logo from './logo.svg';
import './App.css';
let os = ["Android", "Blackbarry", "iphone","Windows phones"];
let mf= ["Samsung","HTC","Apple","Microsoft"];
function App() {
    return (<div > 
      {
          os.map(e=>
             <h1>{e}</h1>
          )
      }
    </div>

    );
}

export default App;