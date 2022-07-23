import { Routes, Route } from "react-router-dom";
import Login from "../Client/Authentication/login";
import Index from "../Client/Pages";
import Error from "../Client/ErrorHandler/RouteErrors/error";
import MoreDetails from "../Client/Pages/moreDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" exact to element={<Login />} />
        <Route path="/" exact to element={<Index />} />
        <Route path="/about" exact to element={<MoreDetails />} />
        <Route path="*" exact to element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
