import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <div className={"container"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*"
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}
export default App;
