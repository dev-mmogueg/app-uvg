import { } from 'react'

/* ---- IMPORT's ---- */
// Icons
import { IoSend } from "react-icons/io5";

export const AnswerDefault = ({ text, send_answerd }) => {
  return (
    <>
      <div
        className={` bg-lime-600 px-4 py-3 rounded-2xl flex justify-between text-lime-200 font-medium`}
      >
        {text}
        <button
          className={`text-white`}
          onClick={(e) => { send_answerd(e) }}
        >
          <IoSend size={25} />
        </button>
      </div>
    </>
  )
}
