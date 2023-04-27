import './App.css';
import { List } from './components/List';
import { Song } from './components/Song';
import {songs} from './songs'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<List songs={songs} />} />
          <Route path="song/:id" element={<Song songs={songs} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
