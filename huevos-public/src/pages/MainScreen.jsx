import { useState, useEffect } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { SettingsScreen } from './SettingsScreen';

export const MainScreen = () => {

  /* ---- STATE's ---- */
  const [open_settings, setOpen_settings] = useState(false);

  return (
    <>
      <section
        className={`app`}
      >
        <button
          className={`absolute right-3 top-3 p-2 bg-lime-600 rounded-full text-white`}
          onClick={() => { setOpen_settings(!open_settings) }}
        >
          <FiAlignRight
            size={28}
            className={``}
          />
        </button>
      </section>
      <SettingsScreen
        open={open_settings}
        setOpen={setOpen_settings}
      />
    </>
  )
}
