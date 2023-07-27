import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Income from "./pages/Income";
import Expense from "./pages/Expense";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/income" element={<Income/>}/>
                    <Route path="/expense" element={<Expense/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;