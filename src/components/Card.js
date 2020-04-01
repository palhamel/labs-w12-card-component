/* eslint-disable react/button-has-type */
/* eslint-disable nonblock-statement-body-position */
import React, { useState } from 'react'

import './card_style.css'
import './card.css'

// Need Title, Subtitle, Emoji, Primary Color, Secondary Color, Button Color, Button Text Color, Button Text

// RESTART IT ALL AND FOLLOW JENNIES GUIDE TO UNDERSTAND:

// Passing in and destructuring the props
export const Card = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  emoji,
  primary,
  secondary,
  subtitle,
  subtitleColor,
  title,
  titleColor
}) => {
  // this state variable takes care of what "version" of the card to render
  const [clicked, setClicked] = useState(false);

  // If the card is clicked, render this:
  if (clicked)
    return (
      <article className="card clicked-card">
        <section className="top" style={{ background: primary }}>
          <h1 style={{ color: titleColor }}>{title}</h1>
        </section>
        <section className="bottom" style={{ background: secondary }}>
          <span className="emoji" role="img" aria-label="emoji">
            {emoji}
          </span>
        </section>
      </article>
    );

  // If the card isn't cliked, render this:
  return (
    <article className="card">
      <section className="top" style={{ background: primary }}>
        <h1 style={{ color: titleColor }}>{title}</h1>
        <span className="emoji" role="img" aria-label="emoji">
          {emoji}
        </span>
      </section>
      <section className="bottom" style={{ background: secondary }}>
        <h2 style={{ color: subtitleColor }}>{subtitle}</h2>
        <button
          style={{ background: buttonColor, color: buttonTextColor }}
          onClick={() => setClicked(!clicked)}
        >
          {buttonText}
        </button>
      </section>
    </article>
  );
};

