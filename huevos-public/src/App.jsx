import { Outlet } from "react-router-dom"
import { TabBar } from './components/TabBar'
import { useState, useEffect } from 'react'


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
        <h1>
          aca va el logo y el loading
        </h1>
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
