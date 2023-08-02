import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AllPlayers />} />
                <Route path="/:userId" element={<SinglePlayer />} />
            </Routes>
        </div>
    );
}
export default App;