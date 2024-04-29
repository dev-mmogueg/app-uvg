import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { useAuthContext } from '../../Index'
import Swal from 'sweetalert2';
import axios from 'axios'


/* ---- IMPORT's ---- */
import './LoginStyle.css';
import isotipo from '../../assets/imgs/logo-app-uvg-3.png'

export const LoginScreen = () => {

  /* ---- CONTEXT ---- */
  const { loggedIn, setLoggedIn, setDataUser } = useAuthContext();
  const navigate = useNavigate();

  /* ---- STATE's ---- */
  const [open_reg, setOpen_reg] = useState(false);
  const [curr, setCurr] = useState(0)
  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });

  /* ---- FUCTIONS ---- */
  const moveView = () => {
    setCurr(curr => curr === 2 ? 0 : curr + 1);
  }

  const moveBack = () => {
    setCurr(curr => curr !== 0 ? curr - 1 : 0);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const login = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('/api/user/login', form)
      localStorage.setItem('4afe1w1', data['4afe1w1'])
      localStorage.setItem('3Tr13c', JSON.stringify(data.logged))
      setLoggedIn(true)
      setDataUser(data.logged)
      navigate('/')
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: err.response.data.message,
        icon: 'info',
        iconColor: 'orange',
        showConfirmButton: false,
        showCloseButton: false,
        timer: 2000
      });
    }
  }

  const register = async () => {
    try {
      e.preventDefault();
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: err.response.data.message,
        icon: 'info',
        iconColor: 'orange',
        showConfirmButton: false,
        showCloseButton: false,
        timer: 2000
      });
    }
  }

  return (
    <section
      className={`min-h-screen gradient-bg-animation flex justify-center items-center relative overflow-hidden`}
    >
      <div className='max-md:w-full p-6 flex flex-col justify-around gap-6'>
        <div className='w-full'>
          <div className='flex justify-center items-center'>
            <img
              className={`w-64`}
              src={isotipo}
              alt="isotipo"
            />
          </div>
          {/* <h1 className='w-full text-center pb-8 text-white font-bold text-4xl'>Log In to Raven</h1> */}
          <div className='flex flex-col gap-3'>
            <button className='w-full px-4 py-2 border-[1px] flex justify-center gap-6 items-center rounded-3xl border-white'>
              <span
                style={{
                  backgroundImage: `url(https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg)`
                }}
                className={`bg-center bg-no-repeat w-6 h-6`}
              ></span> <span className='font-bold text-white'>Continue with Google</span>
            </button>
            <button className='w-full px-4 py-2 border-[1px] flex justify-center gap-6 items-center rounded-3xl border-white'>
              <span
                style={{
                  backgroundImage: `url(https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg)`
                }}
                className={`bg-center bg-no-repeat w-6 h-6`}
              ></span> <span className='font-bold text-white'>Continue with Facebook</span>
            </button>
            <button className='w-full px-4 py-2 border-[1px] flex justify-center gap-6 items-center rounded-3xl border-white'>
              <span
                style={{
                  backgroundImage: `url(https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg)`
                }}
                className={`bg-center bg-no-repeat w-6 h-6`}
              ></span> <span className='font-bold text-white'>Continue with Apple</span>
            </button>
          </div>
        </div>
        <hr className='w-full border-[1px]' />
        <div className='w-full'>
          <form
            className='w-full flex flex-col justify-center bg-transparent space-y-4'
          >
            <div className='w-full'>
              <label
                htmlFor="usernameOrEmail"
                className='text-base text-slate-300'
              >
                Email or Username
              </label>
              <input
                className='w-full px-3 py-2 mt-1 border-[2px] border-slate-100 bg-transparent rounded-lg text-white'
                placeholder='Email or Username'
                onChange={handleChange}
                name='usernameOrEmail'
                inputMode='email'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor="password"
                className='text-base text-slate-300'
              >
                Password
              </label>
              <input
                className='w-full px-3 py-2 mt-1 border-[2px] border-slate-100 bg-transparent rounded-lg text-white'
                placeholder='Password'
                onChange={handleChange}
                name='password'
                type='password'
              />
            </div>
            <button
              onClick={(e) => { login(e) }}
              className='w-full px-4 py-2 bg-slate-100 border-[2px rounded-3xl text-gray-700 font-bold'
            >
              Log In
            </button>
            <Link className='text-white underline font-semibold text-center'>Forgot your password?</Link>
          </form>
        </div>
        <div className='w-full text-center'>
          <hr className='w-full border-[1px]' />
          <p className='pt-4 text-sm'>
            <span className='text-slate-300'>Don't have an account? </span>
            <button className='text-white underline font-semibold' onClick={() => { setOpen_reg(!open_reg) }}>Sign Up for Raven</button>
          </p>
        </div>
      </div>
      <div
        className={`max-md:w-full max-md:min-h-[80vh] bg-slate-50 absolute transition-all ${open_reg ? 'bottom-0' : 'bottom-[-75%]'} 
        animate-fade-up animate-duration-[1500ms] animate-delay-200 rounded-t-3xl
        `}
      >
        <div
          className={`relative p-3`}
        >
          <button
            onClick={() => { setOpen_reg(false), setTimeout(() => setCurr(0), 500) }}
            className={`absolute z-[2] rotate-45 right-4 top-4 ${open_reg ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <GoPlus size={32} />
          </button>
          <div
            id={`container-register`}
            style={{
              transform: `translateX(-${curr * (screen.width)}px)`
            }}
            className={`relative transition-all duration-500 delay-200 flex gap-6`}
          >
            <div
              className={`min-w-full min-h-[70vh] mt-16 p-3`}
            >
              <h1
                className={`w-full text-center font-semibold text-4xl text-lime-700 border-b-2 pb-2 border-lime-700`}
              >
                REGISTRO
              </h1>
              <div className={`flex flex-col justify-around items-center space-y-3`}>
                <img
                  className={`w-72`}
                  src="https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/color/boy-dynamic-color.png"
                />
                <div className='w-full'>
                  <label
                    htmlFor="name"
                    className='text-base text-lime-600 font-semibold'
                  >
                    Nombre
                  </label>
                  <input
                    className='w-full px-3 py-2 mt-1 border-[2px] border-lime-600 bg-lime-100 rounded-lg text-lime-800'
                    placeholder='Nombre (Ejemplo, Juan Emilio)'
                    onChange={handleChange}
                    name='name'
                    inputMode='text'
                  />
                </div>
                <div className='w-full'>
                  <label
                    htmlFor="surname"
                    className='text-base text-lime-600 font-semibold'
                  >
                    Apellido
                  </label>
                  <input
                    className='w-full px-3 py-2 mt-1 border-[2px] border-lime-600 bg-lime-100 rounded-lg text-lime-800'
                    placeholder='Apellido (Ejemplo, Garcia Espinoza)'
                    onChange={handleChange}
                    name='surname'
                    inputMode='text'
                  />
                </div>
                <div className={`w-full flex justify-around gap-3 pt-4`}>
                  <button
                    className={`bg-lime-800 w-full px-4 py-2 rounded-2xl font-semibold text-yellow-50`}
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={(e) => { e.preventDefault(), moveView() }}
                    className={`bg-lime-400 w-full px-4 py-2 rounded-2xl font-semibold text-yellow-50`}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`min-w-full min-h-[70vh] mt-16 p-3`}
            >
              <h1
                className={`w-full text-center font-semibold text-4xl text-lime-700 border-b-2 pb-2 border-lime-700`}
              >
                REGISTRO
              </h1>
              <div
                className={`flex flex-col justify-around items-center space-y-3`}
              >
                <img
                  className={`w-72`}
                  src="https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/clay/copy-dynamic-clay.png"
                />
                <div className='w-full'>
                  <label
                    htmlFor="email"
                    className='text-base text-lime-600 font-semibold'
                  >
                    Correo
                  </label>
                  <input
                    className='w-full px-3 py-2 mt-1 border-[2px] border-lime-600 bg-lime-100 rounded-lg text-lime-800'
                    placeholder='ejemplo@dominio.com'
                    onChange={handleChange}
                    name='email'
                    inputMode='email'
                  />
                </div>
                <div className={`w-full flex justify-around gap-3 pt-4`}>
                  <button
                    onClick={(e) => { e.preventDefault(), moveBack() }}
                    className={`bg-lime-800 w-full px-4 py-2 rounded-2xl font-semibold text-yellow-50`}
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={(e) => { e.preventDefault(), moveView() }}
                    className={`bg-lime-400 w-full px-4 py-2 rounded-2xl font-semibold text-yellow-50`}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
            <div className={`min-w-full min-h-[70vh] bg-blue-500 mt-16`} onClick={() => { moveView() }}></div>
          </div>
        </div>
      </div>
    </section >
  )
}
