import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Home from './components/views/Home/Home';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
            <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
            <Route path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
            <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
            <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
