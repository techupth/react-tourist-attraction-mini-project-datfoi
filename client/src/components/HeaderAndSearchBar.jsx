import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import trips from "../../../server/db";

export function Header() {
  return (
    <header className="w-screen p-10">
      <h1 className="text-center font-primary text-5xl text-sky-400 font-medium">
        เที่ยวไหนดี
      </h1>
    </header>
  );
}

export function SearchBar() {
  const [searchingInput, setSearchingInput] = useState("");
  const [searchingResult, setSearchingResult] = useState([]);

  const getTourAttract = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${searchingInput}`
    );
    setSearchingResult(result.data.data);
    console.log(result.data);
  };

  useEffect(() => {
    getTourAttract();
  }, [searchingInput]);

  return (
    <>
      <div className="font-primary font-normal w-4/5 m-6">
        <label>ค้นหาที่เที่ยว</label>
        <br />
        <input
          id="searching-box"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน"
          value={searchingInput}
          onChange={(event) => setSearchingInput(event.target.value)}
          className="w-full border-b-2 border-slate-400 font-primary text-center"
        />
      </div>

      <div className="flex flex-col mt-4 w-11/12 p-2 overflow-y-auto">
        <ul className="flex flex-col items-center justify-center">
          {searchingResult.map((place) => {
            return (
              <li
                key={place.id}
                className="flex justify-center m-10 w-full h-fit"
              >
                <img
                  src={place.photos[0]}
                  className="w-1/4 rounded-xl"
                  alt={place.title}
                />
                <div className="flex flex-col justify-around ml-4 font-primary w-9/12">
                  <h1 className="text-2xl font-medium">{place.title}</h1>
                  <p className="place-description">{place.description}</p>
                  <a
                    href={place.url}
                    target="_blank"
                    className="w-max underline text-sky-400"
                  >
                    อ่านต่อ
                  </a>
                  <span>
                    หมวด {place.tags[0]} {place.tags[1]} {place.tags[2]} และ{" "}
                    {place.tags[3]}
                  </span>
                  <div className="flex space-x-10 size-24 object-cover">
                    <img
                      src={place.photos[1]}
                      alt={`Photo 1 of ${place.title}`}
                      className="rounded-xl"
                    />
                    <img
                      src={place.photos[2]}
                      alt={`Photo 2 of ${place.title}`}
                      className="rounded-xl"
                    />
                    <img
                      src={place.photos[3]}
                      alt={`Photo 3 of ${place.title}`}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
