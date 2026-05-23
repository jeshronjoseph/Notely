import {Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";
import {useState,useEffect} from "react";

const App = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme") || "forest");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme",theme); 
    localStorage.setItem("theme",theme); //to permanently put theme, stays the same even with refresh,close etc
  },[theme]);

  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage theme={theme} setTheme={setTheme}/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
};

export default App;