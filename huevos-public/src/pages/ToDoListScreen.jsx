import { useEffect, useState } from 'react'

//Icons
import { IoSearch } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { Task } from '../components/Task';
import { MdAddTask } from "react-icons/md";

export const ToDoListScreen = () => {

  const [open_drop, setOpen_drop] = useState(false)
  const [tasks, setTasks] = useState([])

  return (
    <>
      <section
        className={`app`}
      >
        <button
          className={`absolute bottom-5 right-5 bg-lime-300 p-2.5 rounded-full text-lime-700`}
        >
          <MdAddTask size={30}/>
        </button>
        <div
          className={`p-5 flex flex-col justify-center items-center`}
        >
          <h1
            className={`text-lime-500 font-bold font-serif text-4xl border-b-2 border-lime-600 w-full`}
          >
            Recordatorios
          </h1>
          <div
            className={`w-full px-2 py-1 flex items-center space-x-2`}
          >
            <div className={`min-w-[70%] relative flex justify-center items-center`}>
              <input
                className='w-full px-3 py-2 border-[2px] border-lime-600 bg-transparent rounded-lg outline-none'
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
            <div
              className={`bg-lime-300 min-w-[30%] h-11 rounded-3xl relative overflow-hidden`}
            >
              <button
                className={`absolute right-2 top-2.5 text-lime-700`}
              >
                <FiChevronDown size={25} />
              </button>
              <div>

              </div>
            </div>
          </div>
          <div
            className={`overflow-y-auto flex flex-col justify-center items-center text-center`}
          >
            {
              tasks.length == 0 ? (
                <h1
                  className={`text-slate-400/50 font-semibold`}
                >
                  Aun no tienes ningnua Tarea o recordatorio agregada....
                </h1>
              ) : (
                tasks.map(() => {
                  return (
                    <Task />
                  )
                })
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}
