import { BrowserRouter, Routes, Route} from "react-router-dom"
import CreateUser from "./components/CreateUser"
import Users from "./components/Users"
import HomeCrud from "./components/HomeCrud"
import EditUser from "./components/EditUser"

const App = () =>{
    return(
        <div>
            <BrowserRouter>
            <HomeCrud/>
            <Routes>
                <Route path="create" element={<CreateUser/>}></Route>
                <Route path="user" element={<Users/>}></Route>
                <Route path="edituser/:index" element={<EditUser/>}></Route>
            </Routes>
            </BrowserRouter>
           
        </div>
    )
}
export default App