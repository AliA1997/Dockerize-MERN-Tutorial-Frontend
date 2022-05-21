import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Favorite({ favorite, setFavorites }) {
  const removeFromFavoriteVerses = async () => {
    await axios.delete(
      `http://localhost:81/api/delete-favorite/${favorite["_id"]}`
    );
    alert(`Favorite Verse with an id of ${favorite["_id"]} has been removed.`);
    await setFavorites();
  };

  return (
    <Card style={{ margin: "10px" }}>
      <Card.Body>
        <Card.Text>Verse Page Number: {favorite["page_number"]}</Card.Text>
        <Card.Text>Verse Verse Number: {favorite["verse_number"]}</Card.Text>
        <Card.Text>Verse In English: {favorite["verse_in_english"]}</Card.Text>
        <Card.Text>
          Verse Pronunciation In English: {favorite["pronunciation_in_english"]}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ border: "solid 2px top" }}>
        <Button variant="danger" onClick={removeFromFavoriteVerses}>
          Remove from your Favorites
        </Button>
      </Card.Footer>
    </Card>
  );
}
