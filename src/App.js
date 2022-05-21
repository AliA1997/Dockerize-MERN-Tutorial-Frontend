import { Tabs, Tab } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ChapterList from './ChapterList';
import VersesList from './VersesList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [key, setKey] = useState('chapters');
  const [favorites, setFavorites] = useState([]);
  useEffect(
    () => {
          /* Use axios to get favorites from the backend. */
          async function getFavorites() {
            const favoriteResponse = await axios.get("http://localhost:81/api/get-favorite");
            if(favoriteResponse && favoriteResponse["data"]) setFavorites(favoriteResponse["data"]["favorites"]);
          }
          /* Call function to get data from backend. */
          getFavorites();
    },
    []
  );

  return (
    <div>
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="chapters" title="Chapters">
        <h1>ABCD</h1>
        <ChapterList />
      </Tab>
      <Tab eventKey="verses" title="Verses">
        <h1>ABCD 2</h1>
        <VersesList favorites={favorites} />
      </Tab>
      </Tabs>
    </div>
  );
}

export default App;
