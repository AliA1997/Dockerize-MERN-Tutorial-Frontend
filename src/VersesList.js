import React, { useEffect } from "react";
import Verse from "./Verse";

export default function VerseList({
  verses,
  getVerses,
  favorites,
  setFavorites,
}) {
  return (
    <div>
      <h2>Quran Verses - For Chapter 1</h2>
      <h2>آيات القرآن - للفصل 1</h2>
      <div className="item-container">
        {verses.length &&
          verses.map((verse, verseIdx) => (
            <Verse
              key={verseIdx}
              verse={verse}
              favorites={favorites}
              setFavorites={setFavorites}
              setVerses={getVerses}
            />
          ))}
      </div>
    </div>
  );
}
