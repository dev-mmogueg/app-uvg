import { useState, useEffect } from 'react'

// Imgs
import game_1 from '../assets/imgs/g-snake.jpeg'
import game_2 from '../assets/imgs/memorie.png'

//Icons
import { IoSearch } from "react-icons/io5";
import { GrGamepad } from "react-icons/gr";

export const GamesScreen = () => {

  const [games, setGames] = useState([
    {
      "name": "Snake",
      "points": 2332,
      "img": game_1
    },
    {
      "name": "Memory",
      "points": 221,
      "img": game_2
    }
  ])

  return (
    <>
      <section
        className={`app`}
      >
        <div
          className={`p-5 flex flex-col justify-center items-center`}
        >
          <h1
            className={`text-lime-500 font-bold font-serif text-4xl border-b-2 border-lime-600 w-full`}
          >
            GAMES
          </h1>
          <div
            className={`w-full px-2`}
          >
            <div className={`relative flex justify-center items-center`}>
              <input
                className='w-full px-3 py-2 mt-1 border-[2px] border-lime-600 bg-transparent rounded-lg outline-none'
                name='answer'
                type={'text'}
              />
              <button
                className={`absolute right-4 text-lime-600`}
                onClick={(e) => { e.preventDefault() }}
              >
                <IoSearch size={25} />
              </button>
            </div>
          </div>
          <div
            className={`overflow-y-auto w-full p-3 space-y-3`}
          >
            {
              games.map(({ name, points, img }, i) => {
                return (
                  <div
                    key={i}
                    style={{ "backgroundImage": `url(${img})` }}
                    className={`w-full min-h-56 bg-cover bg-center rounded-2xl shadow-xl relative`}
                  >
                    <div
                      className={`text-lime-900 bg-lime-200 w-[30%] rounded-2xl absolute left-2 top-2 p-2 font-semibold`}
                    >
                      <h1>{name}</h1>
                      <h6>Puntuacion Maxima: {points}</h6>
                    </div>
                    <button
                      className={`absolute flex justify-center items-center gap-2 bg-lime-300 text-lime-700 px-4 py-2 rounded-full font-semibold right-3 bottom-3`}
                    >
                      Jugar
                      <GrGamepad />
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
