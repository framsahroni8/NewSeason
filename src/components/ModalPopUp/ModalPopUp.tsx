import React, { useState, useEffect, useRef } from 'react'
import './ModalPopUp.scss'
import Exit from '../../assets/images/exit.png'
import Minimize from '../../assets/images/minimize.png'
import Maximize from '../../assets/images/maximize.png'
import Beber from '../../assets/images/BeberPng.png'
import Hero from '../../assets/music/Hero.mp3'
import { Button } from 'ui-kit'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const ModalPopUp: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [text, setText] = useState('') // Teks yang akan muncul secara bertahap
  const [isTyping, setIsTyping] = useState(false) // Status apakah sedang dalam proses pengetikan
  const [showTitle, setShowTitle] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const modalsBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    if (isOpen) {
      setIsTyping(true)
      const fullText = 'Heyyyooo Beber, ciee adaa yang ulang tahunn nihh sekarangg. Ada yang umurnya sama kayak steak nih 21 wkwkwk, Happy Birthdayy yaa Beberr, wish you all the best. Semoga di umur 21 ini makin banyak rezeki nya, udah 1/2 S.I.Kom nihh, semoga lancar terus sisa perjalanannya di perkuliahan ini tanpa ada hambatan yang berarti. Semoga di umur yang baru ini semakin jadi pribadi yang jauh jauh lebih unggul dan lebih berkembang lagi dari sebelumnya, bisa lebih banyak lagi target yang dicapai di umur 21 ini. Dan tentunya semoga lu di umur yang baru ini semakin kuat jiwa & raga nya, semakin dewasa dan semakin matang lagi, semakin pinter, semakin lancar lagi jalan hidupnya, semakin good mood terus, semakin cantik, dan tentunya semakin menjadi kesayangan dan kebanggan keluarga, teman-teman, dan orang terdekat. May God always bless you ber, glad to have you around me 😊😊😊😊🥳🥳🥳🥳🥳🥳🍰🍰🍰🍰✨✨✨✨✨✨✨✨✨'

      timeoutId = setTimeout(() => {
        let currentIndex = 0
        const intervalId = setInterval(() => {
          if (currentIndex >= fullText.length) {
            setIsTyping(false)
            setShowTitle(true)
            setShowImage(true)
            setShowButton(true)
            clearInterval(intervalId)
          } else {
            setText(fullText.slice(0, currentIndex + 1))
            currentIndex++
          }
        }, 250)
      }, 100) // Penundaan sebelum memulai animasi (dalam milidetik)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (modalsBodyRef.current) {
      modalsBodyRef.current.scrollTop = modalsBodyRef.current.scrollHeight
    }
  }, [text, isTyping])

  if (!isOpen) return null

  return (
<div className={`modals ${isOpen ? 'fade-in active' : ''}`}>
      <div className='modals-content'>
        <div className='modals-text'>
          <div className='modals-header'>
            <span>Happy Birthday to You</span>
            <div className='modals-icon'>
              <img src={Minimize} alt='' className='foto' />
              <img src={Maximize} alt='' />
              <img src={Exit} alt='' onClick={onClose} className='foto' />
            </div>
          </div>
          <div className='modals-body' ref={modalsBodyRef}>
            <audio autoPlay loop>
              <source src={Hero} type='audio/mpeg' />
            </audio>
            <div>
              <span className='typing-text'>{text}</span>
            </div>
            <div className='flex flex-col items-center justify-center text-center mt-8 modals-center'>
              {showTitle && (
                <span>
                  Happy Birthday <br /> Bernadia Anggita Aryani {'\u0028'}1/2{'\u0029'} S.I.Kom
                </span>
              )}
              {showImage && <img src={Beber} className='modals-foto' />}
            </div>
            <div className='flex flex-col justify-center mt-4 items-center'>
              {/* {showButton && <span>Eitss, sabar dulu. Jangan lupa klik tombol dibawah yaa</span>} */}
              {showButton && (
                <a href='https://open.spotify.com/playlist/53L1V94uKnqCIxxIsrBmG6?si=965aed68ceaa4e4d&pt=7628fe9099ab9725db4ac8f9b313f46a'>
                  <Button className='btnLink'>Jangan Lupa Klik yaa</Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPopUp
