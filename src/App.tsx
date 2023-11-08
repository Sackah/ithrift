import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PersonalPage from "./pages/PersonalPage";
import MyCollection from "./pages/MyCollection";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/mycollection" element={<MyCollection />} />
      <Route path="/additem" element={<AddItemPage />} />

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
        <Route path="/items/:id">
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
