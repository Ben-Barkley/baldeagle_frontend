import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import './App.css';
// import './Style.css'
// import Home from './components/Home';
import Invoice from './components/Invoice';
// import Navbar from './components/Navbar';
import Payment from './components/Payment';
// import Sidenav from './components/Sidenav';

import LogIn from './components/LogIn';

function App() {

 

 
  return (
    
    <>
       
 
   <BrowserRouter>
   {/* <LogIn /> */}
  
   
    

     <Routes>
     <Route path="/" element={ <LogIn/>}/>
      {/* <Route path="/" element={ <Home/>}/> */}
      <Route path="/payment" element={ <Payment />}/>
      <Route path="/invoice/:id" element={ <Invoice/>}/>
      

     </Routes>

     </BrowserRouter>

     
    </>
  );
}

export default App;
