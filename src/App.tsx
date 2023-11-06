import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
      {/* <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/home">
          <Home />
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
    </div>
  );
}

export default App;
