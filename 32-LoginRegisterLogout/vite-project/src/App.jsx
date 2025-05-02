
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import LoginForm from './pages/login/LoginForm'
import RegisterForm from './pages/register/RegisterForm'
import Logout from './pages/logout/Logout'
// import Todo from './components/todo/Todo'
import { ToastContainer } from 'react-toastify';
import NotFoundPage from './pages/notFound/NotFoundPage'
import Wishlist from './pages/wishlist/Wishlist'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout><Home/></Layout>}/>
  <Route path='/about' element={<Layout><About/></Layout>}/>
  <Route path='/blog' element={<Layout><Blog/></Layout>}/>
  <Route path='/contact' element={<Layout><Contact/></Layout>}/>
  <Route path='/login' element={<LoginForm/>}/>
  <Route path='/register' element={<RegisterForm/>}/>
  <Route path='/logout' element={<Layout><Logout/></Layout>}/>
  <Route path='/wishlist' element={<Layout><Wishlist/></Layout>}/>
  {/* <Route path='/todo' element={<Todo/>}/> */}
  <Route path='/*' element={<NotFoundPage/>}/>
</Routes>
</BrowserRouter>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default App
