import { Outlet } from "react-router-dom"
import { TabBar } from './components/TabBar'
import { useState, useEffect } from 'react'

//Gif
import loading from './assets/imgs/loading.gif'


function App() {

  const [down_loading, setDown_loading] = useState(true)

  useEffect(() => {
    setTimeout(() => { setDown_loading(!down_loading) }, 3000)
  }, [])

  if (down_loading) {
    return (
      <section
        className={`min-h-screen flex justify-center items-center`}
      >

        <img className={`w-[80%] p-8`} src={loading} alt="" />

      </section>
    );
  }

  return (
    <section
      className={`min-h-screen relative overflow-hidden`}
    >
      <Outlet />
      <TabBar />
    </section>
  )
}

export default App
