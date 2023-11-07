import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />

      {/* <Switch>
        
        <Route>
          <ProtectedRoute path="/" element={<Secret />} />
        </Route>
        <Route path="/me">
          <Me />
        </Route>
        <Route path="/additem">
          <AddItem />
        </Route>
        <Route path="/mycollection">
          <MyCollection />
        </Route>
        <Route path="/itemdetails/:id">
          <ItemDetails /> //add a WithAuth/UseAuth HOC
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch> */}
    </Routes>
  );
}

export default App;
