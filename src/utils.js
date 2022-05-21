
/* Functions responsible for formatting response. */
export const formatChapterResponse = (chapterResponse) => {
    return chapterResponse.map(chapter => {
        delete chapter["bismillah_pre"];
        delete chapter["relevation_order"];
        delete chapter["name_complex"];
        return chapter;
    })
}

/* 
    Formatting especially needed for verses 
    {
            "id": 1,
            "verse_number": 1,
            "verse_key": "1:1",
            "juz_number": 1,
            "hizb_number": 1,
            "rub_el_hizb_number": 1,
            "ruku_number": 1,
            "manzil_number": 1,
            "sajdah_number": null,
            "page_number": 1,
            "words": [
                {
                    "id": 1,
                    "position": 1,
                    "audio_url": "wbw/001_001_001.mp3",
                    "char_type_name": "word",
                    "code_v1": "ﭑ",
                    "page_number": 1,
                    "line_number": 2,
                    "text": "ﭑ",
                    "translation": {
                        "text": "In (the) name",
                        "language_name": "english"
                    },
                    "transliteration": {
                        "text": "bis'mi",
                        "language_name": "english"
                    }
                },
                {
                    "id": 2,
                    "position": 2,
                    "audio_url": "wbw/001_001_002.mp3",
                    "char_type_name": "word",
                    "code_v1": "ﭒ",
                    "page_number": 1,
                    "line_number": 2,
                    "text": "ﭒ",
                    "translation": {
                        "text": "(of) Allah",
                        "language_name": "english"
                    },
                    "transliteration": {
                        "text": "l-lahi",
                        "language_name": "english"
                    }
                },
                {
                    "id": 3,
                    "position": 3,
                    "audio_url": "wbw/001_001_003.mp3",
                    "char_type_name": "word",
                    "code_v1": "ﭓ",
                    "page_number": 1,
                    "line_number": 2,
                    "text": "ﭓ",
                    "translation": {
                        "text": "the Most Gracious",
                        "language_name": "english"
                    },
                    "transliteration": {
                        "text": "l-raḥmāni",
                        "language_name": "english"
                    }
                },
                {
                    "id": 4,
                    "position": 4,
                    "audio_url": "wbw/001_001_004.mp3",
                    "char_type_name": "word",
                    "code_v1": "ﭔ",
                    "page_number": 1,
                    "line_number": 2,
                    "text": "ﭔ",
                    "translation": {
                        "text": "the Most Merciful",
                        "language_name": "english"
                    },
                    "transliteration": {
                        "text": "l-raḥīmi",
                        "language_name": "english"
                    }
                },
                {
                    "id": 5,
                    "position": 5,
                    "audio_url": null,
                    "char_type_name": "end",
                    "code_v1": "ﭕ",
                    "page_number": 1,
                    "line_number": 2,
                    "text": "ﭕ",
                    "translation": {
                        "text": "(1)",
                        "language_name": "english"
                    },
                    "transliteration": {
                        "text": null,
                        "language_name": "english"
                    }
                }
            ]
        }
*/
export const formatVersesResponse = (versesResponse) => {
    return versesResponse.map(v => {
        let verse = {};
        verse.id = v["id"];
        verse.page_number = v["page_number"];
        verse.verse_number = v["verse_number"];
        verse.verse_in_english = v.words.map(word => word["translation"]["text"]).join(" ");
        verse.pronunciation_in_english = v.words.map(word => word["transliteration"]["text"]).join(" ");
        return verse;
    });
}