import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPageIcon from "./components/shared/AboutPageIcon";
function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AboutPageIcon />
            {/* {RouteProp.path !== "/about" && } */}
          </div>
        </Router>
        {/*  */}
      </div>
    </FeedbackProvider>
  );
}

export default App;
