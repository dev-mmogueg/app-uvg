import { useEffect, useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { useAuthContext } from '../Index';

export const SettingsScreen = ({ open, setOpen }) => {

  /* ---- CONTEXT ---- */
  const { dataUser } = useAuthContext();

  /* --- STATES --- */
  const [sw_s, setSw_s] = useState([
    {
      name: 'Notificaciones',
      active: true
    },
    {
      name: 'Musica',
      active: true
    },
    {
      name: 'Sonido',
      active: true
    }, {
      name: 'Activo',
      active: true
    }
  ]
  )

  /* --- FUCTIONS --- */
  const handleActive = (i) => {
    const sw_old = sw_s;
    if (i >= 0) sw_old[i]['active'] = !sw_old[i]['active']
    setSw_s(sw_old)
  }

  return (
    <>
      <section
        className={`absolute min-h-screen w-[80vw] bg-lime-400 top-0 right-0
         transition-all duration-[600ms]
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div
          className={`relative`}
        >
          <button
            className={`absolute left-3 top-3 p-2 bg-lime-600 rounded-full text-white`}
            onClick={() => { setOpen(!open) }}
          >
            <FiArrowRight
              size={28}
              className={``}
            />
          </button>
          <div
            className={`w-full p-4 flex flex-col justify-center items-center`}
          >
            <div
              className={`w-64 h-64 p-3 mt-10 rounded-full bg-white`}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
            </div>
            <hr className={`w-full border-[1px] border-[white] my-4`} />
            <div
              className={`text-center`}
            >
              <h1
                className={`text-white font-semibold text-2xl`}
              >
                {dataUser.username}
              </h1>
              <h6
                className={`text-white font-semibold text-lg`}
              >
                {dataUser.email}
              </h6>
            </div>
            <hr className={`w-full border-[1px] border-[white] my-4`} />
            <div
              className={`w-full p-4 space-y-3`}
            >
              {
                sw_s.map(({ name, active }, i) => {
                  return (
                    <div
                      key={i}
                      className={`w-full flex justify-between`}
                    >
                      <h1
                        className={`text-white font-semibold text-lg`}
                      >
                        {name}
                      </h1>
                      <div className='space-y-1'>
                        <div className={`h-6 w-12 ${active ? 'bg-lime-600' : 'bg-slate-400/40 '} rounded-3xl p-1 relative flex justify-center items-center transition-all duration-150`}>
                          <div
                            onClick={() => { handleActive(i) }}
                            className={`w-4 h-4 absolute bg-white rounded-full ${active ? 'translate-x-3 border-lime-600' : '-translate-x-3 border-slate-50/40'} border-[1px] cursor-pointer transition-transform duration-300 ease-in-out`}>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
