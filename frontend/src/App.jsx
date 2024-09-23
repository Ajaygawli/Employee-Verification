
import './App.css'
import MainLayout from './Components/MainLayout';
import CompaniesDetails from './Pages/CompaniesDetails';
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route   path='/' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>


      <Route
      path="/admin"
      element={
        <MainLayout />
      }
      >
        <Route index element={<CompaniesDetails/>}/>
      </Route>
    </Routes>
   </Router>
   {/* <Registration/> */}
   {/* <Login/> */}
   </>
  )
}

export default App
