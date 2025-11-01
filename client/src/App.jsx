import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import Addblog from "./pages/admin/Addblog"
import Listblog from "./pages/admin/ListBlog"
import Comments from "./pages/admin/Comments"
import Login from "./components/admin/Login";
import 'quill/dist/quill.snow.css'

function App() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />

          <Route path="/admin" element={true ? <Layout /> : <Login/>}>
            <Route index element={<Dashboard />} />
            <Route path="addBlog" element={<Addblog/>}/>
            <Route path="listBlog" element={<Listblog/>}/>
            <Route path="comments" element={<Comments/>}/>
          </Route>
        </Routes>
      
      </div>
    </>
  );
}
export default App;
