import React from 'react'
import { Card } from './components/Card';

// import './app_style.css'

// Need Title, Subtitle, Emoji, Primary Color, Secondary Color, Button Color, Button Text Color, Button Text

// RESTART IT ALL AND FOLLOW JENNIES GUIDE TO UNDERSTAND:

export const App = () => (

  <main>

    <Card
      buttonText="SWEET!"
      buttonTextColor="#FFE9FD"
      buttonColor="#FF33F0"
      emoji="🦄"
      primary="#E8DAEF"
      secondary="#F7F9F9"
      subtitle="The unicorn is a legendary creature."
      subtitleColor="#000000"
      title="Unicorn"
      titleColor="#FF33F0" />

    <Card
      buttonText="PLANT ONE!"
      buttonTextColor="#FFFFFF"
      buttonColor="#1F8C1D"
      emoji="🌲"
      primary="#E7FFE7"
      secondary="#8AFF89 "
      subtitle="The unicorn is a legendary creature."
      subtitleColor="#FFFFFF"
      title="Trees"
      titleColor="#1F8C1D" />
    <Card
      buttonText="ORDER NOW"
      buttonTextColor="#000000"
      buttonColor="#FCED84"
      emoji="🍋"
      primary="#8CFFBA"
      secondary="#CFFFE2"
      subtitle="This is a really tasty fruit."
      subtitleColor="#000000"
      title="Lemon"
      titleColor="#166F39" />

  </main>

)
