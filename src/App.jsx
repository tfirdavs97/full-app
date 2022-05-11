import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Private from "./Private";
import Public from "./Public";
import "./App.scss";



function App() {
  const { token } = useContext(AuthContext);

  if (token?.token) {
    return <Private />;
  }
  return <Public />;
}

export default App;
