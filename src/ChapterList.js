import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatChapterResponse } from "./utils";
import Chapter from './Chapter';

export default function ChapterList() {
    //Set state of the component
    const [chapters, setChapters] = useState([]);
    useEffect(
        () => {
            /* Use axios to get chapters from the backend. */
            async function getChapters() {
                const chapterResponse = await axios.get("http://localhost:81/api/get-chapters?language=en");
                if(chapterResponse && chapterResponse["data"]) setChapters(formatChapterResponse(chapterResponse["data"]["quranChapters"]));
            }
            /* Call function to get data from backend. */
            getChapters();
        },
        []
    );

    return (
        <div>
            <h2>Quran Chapters</h2>
            <h2>فصول القرآن</h2>
            <div className="item-container">
                {chapters.length 
                && chapters.map((chapter, chapterIdx) => (
                    <Chapter key={chapterIdx} chapter={chapter} />
                ))}
            </div>
        </div>
    );
}