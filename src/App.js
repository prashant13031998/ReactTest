import "./App.css";
import Authentication from "./components/Authentication";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import DataList from "./components/DataList";

function App() {
  // const isLogin = useSelector((state) => state.isLogin);
  return (
    <div>
      <DataList />
      {/* {!isLogin && <Authentication />}
      {isLogin && <Counter />} */}
    </div>
  );
}

export default App;
