import { useState,useEffect} from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Sidebar from './Component/Header/Sidebar'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './Component/Header/Home';
import Products from './Page/Product/Products';
import Login from './Component/Login/Login';
import Categories from './Page/Categories/Categories';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))
  console.log("user", user)
  const loding = (data) => {
    if (data) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false)
    }
  }

  useEffect(() => {
    const clearLocalStorage = (event) => {
      if (!isRefreshing.current) {
        // Attempt to clear local storage
        localStorage.clear();
      }
      // You can also set other cleanup tasks here if needed

      // Reset the isRefreshing flag to false
      isRefreshing.current = false;
    };

    // Add an event listener for beforeunload
    window.addEventListener('beforeunload', clearLocalStorage);

    // Handle page refreshes separately
    const handleRefresh = () => {
      isRefreshing.current = true;
    };

    // Add an event listener for the 'beforeunload' event
    // This event is fired when the user tries to refresh the page
    window.addEventListener('beforeunload', handleRefresh);

    // Remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);

  return (
    <div className='grid-container'>
   {user ? (
        <>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
           <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/categories" element={<Categories />} />

          </Routes>
          </>
      ) : (<>
        {/* <Navigate to="/login" /> */}
        <Routes>
          <Route path="/" element={<Login Authenticated={loding} />} />
        </Routes>
      </>)}
       </div>
  )
}

export default App
