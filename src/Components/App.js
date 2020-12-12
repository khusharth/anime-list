import React, { useState } from "react";
import { action, comedy, thriller, romance } from "../data";
import "../Styles/style.css";

const genreList = ["Action", "Comedy", "Thriller", "Romance"];

const App = () => {
    const [animeList, setAnimeList] = useState(action);

    function handleGenreClick(genre) {
        switch (genre) {
            case "Action":
                setAnimeList(action);
                break;
            case "Comedy":
                setAnimeList(comedy);
                break;
            case "Thriller":
                setAnimeList(thriller);
                break;
            case "Romance":
                setAnimeList(romance);
                break;
            default:
                setAnimeList(action);
        }
    }

    return (
        <div className='anime__container'>
            <h1 className='anime__title'>Anime List</h1>

            <ul className='genre__list'>
                {genreList.map((genre) => {
                    return (
                        <li key={genre} className='genre__item'>
                            <button
                                className='btn btn--primary'
                                onClick={() => handleGenreClick(genre)}
                                type='button'>
                                {genre}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <ul className='anime__list'>
                {animeList.map((anime) => {
                    return (
                        <li key={anime.name} className='anime__item'>
                            <h2>{anime.name}</h2>
                            <p>{anime.description}</p>
                            <a
                                className='btn btn--read'
                                href={anime.link}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <strong>Read more</strong>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
