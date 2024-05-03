import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Registration from "./component/Registration";
import Home from "./component/Home";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
