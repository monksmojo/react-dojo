import { Route, Routes } from "react-router-dom";
import AllMeetUp from "./pages/AllMeetUpPage";
import NewMeetUp from "./pages/NewMeetUpPage";
import FavMeetUp from "./pages/FavMeetUpPage";
import LandingPage from "./components/layout/LandingPage";

function App() {
  return (
    <LandingPage>
      <Routes>
        <Route path="/" element={<AllMeetUp />} />
        <Route path="/new-meetups" element={<NewMeetUp />} />
        <Route path="/fav-meetups" element={<FavMeetUp />} />
      </Routes>
    </LandingPage>
  );
}

export default App;
