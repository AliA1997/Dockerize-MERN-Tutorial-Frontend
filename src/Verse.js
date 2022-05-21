import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Verse({ verse, favorites, setFavorites, setVerses }) {
  const isFavorite = favorites.some(
    (fav) =>
      fav["page_number"] === verse["page_number"] &&
      fav["verse_number"] === verse["verse_number"]
  );

  const addToFavoriteVerses = async () => {
    const ipAddressResponse = await axios.get(
      "https://geolocation-db.com/json/"
    );
    await axios.post("http://localhost:81/api/add-favorite", {
      ip_address: ipAddressResponse.data.IPv4,
      verse,
    });
    alert(`Verse added to favorites`);
    window.location.reload();
  };

  return (
    <Card style={{ margin: "10px" }}>
      <Card.Body>
        <Card.Text>Verse Page Number: {verse["page_number"]}</Card.Text>
        <Card.Text>Verse Verse Number: {verse["verse_number"]}</Card.Text>
        <Card.Text>Verse In English: {verse["verse_in_english"]}</Card.Text>
        <Card.Text>
          Verse Pronunciation In English: {verse["pronunciation_in_english"]}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ border: "solid 2px top" }}>
        {!isFavorite && (
          <Button variant="success" onClick={addToFavoriteVerses}>
            Add to your Favorites
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
