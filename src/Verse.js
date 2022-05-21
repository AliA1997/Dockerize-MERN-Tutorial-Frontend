import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Verse({ verse, favorites }) {
    const [favoriteId, setFavoriteId] = useState(undefined);
    useEffect(
        () => {
            if(favorites.some(fav => fav["page_number"] === verse["page_number"] && fav["verse_number"] === verse["verse_number"])) {
                setFavoriteId(favorites.find(fav => fav["page_number"] === fav["verse_number"])["_id"])
            }
        },
        []
    )

    const addToFavoriteVerses = async () => {
        const ipAddressResponse = await axios.get('https://geolocation-db.com/json/');
        const createdFavoriteResponse = await axios.post("http://localhost:81/api/add-favorite", { ip_address: ipAddressResponse.data.IPv4, verse });
        setFavoriteId(createdFavoriteResponse.data.id);
    }

    const removeFromFavoriteVerses = async () => {
        await axios.delete(`http://localhost:81/api/delete-favorite/${favoriteId}`);
        alert(`Favorite Verse with an id of ${favoriteId} has been removed.`);
        setFavoriteId(undefined);
    }

    return (
        <Card style={{margin: "10px"}}>
            <Card.Body>
                <Card.Text>
                    Verse Page Number: {verse["page_number"]}
                </Card.Text>
                <Card.Text>
                    Verse Verse Number: {verse["verse_number"]}
                </Card.Text>
                <Card.Text>
                    Verse In English: {verse["verse_in_english"]}
                </Card.Text>
                <Card.Text>
                    Verse Pronunciation In English: {verse["pronunciation_in_english"]}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{border: "solid 2px top"}}>
                {
                    favoriteId 
                    ? ( <Button color="info" onClick={removeFromFavoriteVerses}>Remove from your Favorites</Button> )
                    : ( <Button color="primary" onClick={addToFavoriteVerses}>Add to your Favorites</Button> )
                }
            </Card.Footer>
        </Card>
    );
}