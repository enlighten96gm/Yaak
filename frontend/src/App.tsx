import styled from "styled-components";
import MainSection from "./components/MainSection";
import Navigation from "./components/NavigationSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/drives" element={<MainSection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate replace to="/drives" />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
`;
