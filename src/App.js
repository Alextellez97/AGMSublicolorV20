import React from "react";
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar } from './Navbar/Navbar' 
import { Footer } from './Navbar/Footer' 
import { Home } from './Pages/Index'
import { Image } from './Pages/Image'
import { Video } from './Pages/Video'
import { Contact } from './Pages/Contact'
import { Music } from './Pages/Music'

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/home" exact element={<Home/>}/>
                <Route path="/image" exact element={<Image/>}/>
                <Route path="/contact" exact element={<Contact/>}/>
                <Route path="/video" exact element={<Video/>}/>
                <Route path="/music" exact element={<Music/>}/>
              </Routes>  
            <Footer/>      
          </BrowserRouter> 
        </>
    )
  );
};

export default withAuthenticationRequired(App);