import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PersonalPage from "./pages/PersonalPage";
import MyCollection from "./pages/MyCollection";
import AddItemPage from "./pages/AddItemPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import UseAuth from "./components/auth/UseAuth";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route
        path="/personal"
        element={
          <UseAuth>
            <PersonalPage />
          </UseAuth>
        }
      />
      <Route
        path="/mycollection"
        element={
          <UseAuth>
            <MyCollection />
          </UseAuth>
        }
      />
      <Route
        path="/additem"
        element={
          <UseAuth>
            <AddItemPage />
          </UseAuth>
        }
      />
      <Route
        path="/home"
        element={
          <UseAuth>
            <HomePage />
          </UseAuth>
        }
      />
      <Route
        path="/items/:id"
        element={
          <UseAuth>
            <ItemDetails />
          </UseAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
