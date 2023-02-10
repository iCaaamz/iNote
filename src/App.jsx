//rafce to create the app, with the extension ES7
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote"; // import from  <Route path="/create-note" element={<CreateNote/>}/>
import EditNote from "./pages/EditNote"; //import from  <Route path="/edit-note" element={<EditNote/>}/>
import Notes from "./pages/Notes" ; //import from <Route path="/" element={<Notes/>}/> 

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Notes/>} />
            <Route path="/create-note" element={<CreateNote/>} />
            <Route path="/edit-note/:id" element={<EditNote/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default App