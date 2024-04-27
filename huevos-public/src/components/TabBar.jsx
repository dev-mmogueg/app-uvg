import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* --- IMPORT ICONs --- */
import { TbMessageCircle, TbDeviceGamepad2 } from "react-icons/tb";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { BiHomeAlt2 } from "react-icons/bi";

export const TabBar = () => {

  const tabs = [
    {
      icon: <GoGraph size={28} />,
      active: false,
      link: '/stadistics'
    },
    {
      icon: <HiOutlineClipboardList size={28} />,
      active: false,
      link: '/to-do-list'
    },
    {
      icon: <BiHomeAlt2 size={28} />,
      active: true,
      link: '/'
    },
    {
      icon: <TbMessageCircle size={28} />,
      active: false,
      link: '/chat'
    },
    {
      icon: <TbDeviceGamepad2 size={28} />,
      active: false,
      link: '/games'
    }
  ]

  return (
    <>
      <section
        className={`min-h-14 rounded-t-2xl bg-lime-600 p-2`}
      >
        <div
          className={`flex justify-around items-center mx-5`}
        >
          {
            tabs.map(({ icon, link }, i) => {
              return (
                <Link
                  className={`text-white p-2`}
                  key={i}
                  to={link}
                >
                  {icon}
                </Link>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
