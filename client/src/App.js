import "./App.css";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");
console.log(socket);

function App() {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default App;
