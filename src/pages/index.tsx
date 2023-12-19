"use client";

import Image from 'next/image'
import gh_icon from '../../public/GitHub-Mark-Light-32px.png'
import './index.scss'
import HarmonicMixer from '../app/HarmonicMixer'

export default function Home() {
  return (
    <div id="root" className="root">
      <HarmonicMixer />
      <footer className="footer">
        <a href="http://www.harmonic-mixing.com/" target="_blank" rel="noopener noreferrer">Learn more about harmonic mixing</a><br />
        <a href="https://github.com/anjunatl/harmonic-mixing" target="_blank" rel="noopener noreferrer">
            <Image src={gh_icon} alt='Github logo icon' width='32' height='32' />
        </a>
      </footer>
    </div>
  )
}
