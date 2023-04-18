import { Route, Routes } from 'react-router-dom';

// import './App.css';
// import './Style.css'
// import Home from './components/Home';
import Invoice from './components/Invoice';
// import Navbar from './components/Navbar';
import Payment from './components/Payment';
// import Sidenav from './components/Sidenav';

import LogIn from './components/LogIn';
import PrivateRoutes from './utils/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './reducers/userReducer';
import { InvoiceService } from './services/invoice';
import Notification from './components/Notification';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('baldeagleUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      InvoiceService.setToken(user.token)
    }
  }, [])

  const notification = useSelector(state => {
    return state.notification
  })

 
  return (
   <>
   <Notification message={notification} />
   <Routes>
      <Route path="/login" element={ <LogIn/>}/>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={ <Payment />} exact/>
        <Route path="/invoice/:id" element={ <Invoice/>} exact/>
      </Route>
     </Routes>
   </>
     
  );
}

export default App;
