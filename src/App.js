import Post from './pages/Post/post';
import Edit from './pages/Edit/edit';
import LerMais from './pages/LerMais/lermais';
import Feed from './pages/Feed/feed';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Feed />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/lermais/:id" element={<LerMais />}/>
      </Routes>
    </Router>
  );
}

export default App;
