import React from "react";
import Home from "./Pages/Home";
import OurProfile from "./Pages/OurProfile";
import Signup from "./components/SignUp/Signup.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Student from "./components/Student/Student.jsx";

import NewUser from "./components/NewUser/NewUser.jsx";
import School from "./components/School/School.jsx";
import Login from "./components/Login/Login.jsx"; // Import the Login component
import OurStory from "./Pages/OurStory.jsx";
import Blog from "./Pages/Blog.jsx";
import OurTeam from "./components/OurTeam/OurTeam"; // Update the import path
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ErrorScreen from "./components/ErrorScreen/errorscreen.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";

const App = () => {
  const location = useLocation();

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = ["/student", "/school", "/signup", "/newuser"]; // Add "/school" to the list

  return (
    <div className="">
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname.toLowerCase()) && <Navbar />}
      <div className="contents">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/OurProfile">
            <OurProfile />
          </Route>
          <Route exact path="/OurStory">
            <OurStory />
          </Route>
          <Route exact path="/Blog">
            <Blog />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Student">
            <Student />
          </Route>
          <Route exact path="/School">
            <School />
          </Route>
          <Route exact path="/Login">
            <Login /> {/* Add the route for the Login page */}
          </Route>
          <Route exact path="/NewUser">
            <NewUser />
          </Route>
          <Route exact path="/OurTeam">
            <OurTeam />
          </Route>
          <Route exact path="/ResetPassword">
            <ResetPassword />
          </Route>
          <Route exact path="/ErrorScreen">
            <ErrorScreen />
          </Route>
          <Route exact path="/ContactUsPage">
            <ContactUsPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
