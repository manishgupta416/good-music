import React from "react";
import "./styles.css";
import { useState } from "react";

const musicalGenres = {
  blues: [
    {
      name: "Baatein Ye Kabhi Na",
      rating: "4.9/5"
    },
    {
      name: "Channa Mereya",
      rating: "5/5"
    },
    {
      name: "Phir Bhi Tumko Chaahunga",
      rating: "4.8"
    },
    {
      name: "Abhi Mujh Me Kahin",
      rating: "4/5"
    }
  ],
  Classical: [
    {
      name: "Tose Naina",
      rating: "4.9/5"
    },
    {
      name: "So Gaya Ye Jahan , So Gaya Aasmaan",
      rating: "4.6/5"
    },
    {
      name: "Ye Dosti Hum Nahin Todenge",
      rating: "2.9/5"
    }
  ],

  pop: [
    {
      name: "Bolo Ta Ra Ra",
      rating: "4.8/5"
    },
    {
      name: "Ma Tujhe Salaam",
      rating: "5/5"
    },
    {
      name: "Disco Deewane",
      rating: "3.9/5"
    }
  ],

  hipHop: [
    {
      name: "Ik Vaari Aa",
      rating: "4..8/5"
    },
    {
      name: "Swag Se Swagat",
      rating: "4.5/5"
    },
    {
      name: "Jugnu",
      rating: "4/5"
    }
  ]
};

var genre = Object.keys(musicalGenres);
console.log(genre);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("hipHop");
  function clickHandler(genre) {
    // console.log(genre);
    setSelectedGenre(genre);
  }
  // {bookDB[selectedGenre].map((book)
  return (
    <div className="App">
      <h1 className="heading"> good♪music </h1>
      {/* <hr /> */}
      <div>
        {genre.map((genre) => (
          <button
            onClick={() => {
              clickHandler(genre);
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div className="container">
        <ul>
          {musicalGenres[selectedGenre].map((song) => (
            <li key={song.rating}>
              <p className="name">{song.name} </p>
              <p className="rating">{song.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
