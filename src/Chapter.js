import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Chapter({ chapter }) {
    return  (
        <Card>
            <Card.Body>
                <Card.Text>
                    Name In English: {chapter["name_simple"]}
                </Card.Text>
                <Card.Text>
                    Name In Arabic: {chapter["name_arabic"]}
                </Card.Text>
                <Card.Text>
                    Location of the Relevation: {chapter["revelation_place"]}
                </Card.Text>
                <Card.Text>
                    Number of Verses: {chapter["verses_count"]}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}