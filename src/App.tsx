import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PersonalPage from "./pages/PersonalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/personal" element={<PersonalPage />} />

      {/* <Switch>
        
        <Route path="/personal" element={
          <UseAuth>
            <PersonalPage />
          </UseAuth>
        }/>
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
