import { Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import ChapterList from "./ChapterList";
import FavoritesList from "./FavoritesList";
import VersesList from "./VersesList";
import axios from "axios";
import { formatVersesResponse, server } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [key, setKey] = useState("chapters");
  const [favorites, setFavorites] = useState([]);
  const [verses, setVerses] = useState([]);

  /* By Default get all the verses from the first chapter. */
  async function getVerses() {
    const versesResponse = await axios.get(
      `${server}/api/get-verses/1`
    );

    if (versesResponse && versesResponse["data"])
      setVerses(formatVersesResponse(versesResponse["data"]["quranVerses"]));
  }
  /* Use axios to get favorites from the backend. */
  async function getFavorites() {
    const favoriteResponse = await axios.get(
      `${server}/api/get-favorite`
    );
    if (favoriteResponse && favoriteResponse["data"])
      setFavorites(favoriteResponse["data"]["favorites"]);
  }
  useEffect(() => {
    /* Call function to get data from backend. */
    getVerses();
    getFavorites();
  }, []);

  return (
    <div>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="chapters" title="Chapters">
          <ChapterList />
        </Tab>
        <Tab eventKey="verses" title="Verses">
          <VersesList
            verses={verses}
            getVerses={getVerses}
            favorites={favorites}
            setFavorites={getFavorites}
          />
        </Tab>
        <Tab eventKey="favorites" title="Favorites">
          <FavoritesList favorites={favorites} setFavorites={getFavorites} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
