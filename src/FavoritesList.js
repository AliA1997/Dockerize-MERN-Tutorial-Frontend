import React from 'react';
import Favorite from './Favorite';

export default function FavoritesList({ favorites, setFavorites }) {

    return (
        <div>
            <h2>Favorite Quran Verses</h2>
            <h2>آيات قرآنية مفضلة</h2>
            <div className="item-container">
                {favorites.length 
                && favorites.map((favorite, favoriteIdx) => (
                    <Favorite key={favoriteIdx} favorite={favorite} setFavorites={setFavorites} />
                ))}
            </div>
        </div>
    );
}