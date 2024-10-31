import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostView from "./components/PostView";
import CreatePost from "./components/CreatePost";

function App(): React.ReactElement {
  return (
    <div className="container m-auto max-w-3xl">
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
