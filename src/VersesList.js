import React, { useEffect, useState } from 'react';
import { formatVersesResponse } from "./utils";
import axios from 'axios';
import Verse from './Verse';

export default function VerseList({ favorites }) {
    const [verses, setVerses] = useState([]);
    useEffect(
        () => {
            /* By Default get all the verses from the first chapter. */
            async function getVerses() {
                const versesResponse = await axios.get('http://localhost:81/api/get-verses/1');
                console.log("VERSES:", formatVersesResponse(versesResponse["data"]["quranVerses"]));
                if(versesResponse && versesResponse["data"]) setVerses(formatVersesResponse(versesResponse["data"]["quranVerses"]));
            }
            getVerses();
        },
        []
    );

    return (
        <div>
            <h2>Quran Verses - For Chapter 1</h2>
            <h2>آيات القرآن - للفصل 1</h2>
            <div className="item-container">
                {verses.length 
                && verses.map((verse, verseIdx) => (
                    <Verse key={verseIdx} verse={verse} favorites={favorites} />
                ))}
            </div>
        </div>
    );
}