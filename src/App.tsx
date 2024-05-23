import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import {
   headerRoutes,
   footerRoutesColOne,
   footerRoutesColTwo,
   footerRoutesColThree,
   footerRoutesColFour,
   footerRoutesColFive,
} from "./routes";

const generateRoutes = (routes, layout) =>
   routes
      .filter((route) => route.layout === layout)
      .map((route) => <Route key={route.id} path={route.layout + route.path} element={route.component} />);

function App() {
   return (
      <Router>
         <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Layout />}>
               {generateRoutes(headerRoutes, "/home")}
               {generateRoutes(footerRoutesColOne, "/home")}
               {generateRoutes(footerRoutesColTwo, "/home")}
               {generateRoutes(footerRoutesColThree, "/home")}
               {generateRoutes(footerRoutesColFour, "/home")}
               {generateRoutes(footerRoutesColFive, "/home")}
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
