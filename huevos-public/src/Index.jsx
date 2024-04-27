import { createContext, useContext, useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';

/* ---- IMPORT SCREEMNS ---- */
import { LoginScreen } from './pages/Login/LoginScreen';
import { ErrorScreen } from './pages/ErrorScreen';
import { MainScreen } from './pages/MainScreen';
import { StadisticsScreen } from './pages/StadisticsScreen';
import { ToDoListScreen } from './pages/ToDoListScreen';
import { ChatScreen } from './pages/ChatScreen';
import { GamesScreen } from './pages/GamesScreen';

export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const Index = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    const tok = localStorage.getItem('4afe1w1');
    if (tok) {
      setLoggedIn(true);
      setDataUser(JSON.parse(localStorage.getItem('3Tr13c')));
    }
  }, [])

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={loggedIn ? <App /> : <LoginScreen />}
          >
            <Route
              path=''
              element={<MainScreen />}
            />
            <Route
              path='/stadistics'
              element={<StadisticsScreen />}
            />
            <Route
              path='/to-do-list'
              element={<ToDoListScreen />}
            />
            <Route
              path='/chat'
              element={<ChatScreen />}
            />
            <Route
              path='/games'
              element={<GamesScreen />}
            />
            <Route
              path='*'
              element={<ErrorScreen />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  )
}
