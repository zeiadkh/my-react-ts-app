import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
const authenticated = localStorage.getItem("token")? true : false
console.log(authenticated)
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/' element={
              <ProtectedRoute authenticated={authenticated}>
                <Dashboard />
              </ProtectedRoute>
            } />
      </Routes>
    </Router>
  );
}
/*
Route
            path="pdf-review/:bookId"
            element={
              <ProtectedRoute authenticated={authenticated} loading={loading}>
                <PdfReviewer />
              </ProtectedRoute>
            }
          />
*/

export default App;
