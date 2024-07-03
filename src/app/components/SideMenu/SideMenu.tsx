'use client'

import React, { useEffect, useState } from 'react'
import styles from './SideMenu.module.css'
import Image from 'next/image'
import userImg from '../../../../public/imgs/user.png'
import Link from 'next/link'
import SideItems from '../SideItems/SideItems'
import { CiMail } from 'react-icons/ci'
import { BsPersonRaisedHand } from 'react-icons/bs'
import { RiMenuFold2Line, RiMenuFoldLine } from 'react-icons/ri'


const items = [
  { text: 'Sobre mi', icon: <BsPersonRaisedHand />, link: '/about' },
  { text: 'Contacto', icon: <CiMail />, link: '/contact' },
]


const SideMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
      if (window.innerWidth >= 1025) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);



  return (
    <>

      <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
      </button>

      {isMenuOpen && (
        <div className={styles.container}>
          <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
          </button>
          <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
          </button>
          <div className={styles.userContainer}>
            <Image src={userImg} alt="Logo" className={styles.userImage} />
            <span className={styles.userName}>John Doe</span>
          </div>
          <ul>
            {items.map((item, index) => (
              <SideItems key={index} text={item.text} link={item.link} icon={item.icon} />
            ))}
          </ul>
        </div>
      )}
    </>

  )
}

export default SideMenu