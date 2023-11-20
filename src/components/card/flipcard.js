import React from 'react';
import './flipcard.css';
export function FlipCard() {
  return (
    <div className="card_container">
        <div className="card">
            <div className="front">
                {props.children[0]}
            </div>
            <div className="back">
                {props.children[1]}
            </div>

        </div>
    </div>
  )
}
