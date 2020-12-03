import '../src/styles/App.scss';
import Contacts from './Component/Contacts/Contacts';
import Navbar from './Component/elements/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddContact from './Component/Contacts/AddContact';
import EditContact from './Component/Contacts/EditContact';


function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div className="App">
          <Navbar />
            <div className="container">
              <div className="py-3">
                <Switch>
                  <Route exact path = '/'>
                    <Contacts />
                  </Route>
                  <Route path = '/contact/add'>
                    <AddContact />
                  </Route>
                  <Route path = '/contact/edit/:id'>
                    <EditContact />
                  </Route>
                </Switch>
              </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
