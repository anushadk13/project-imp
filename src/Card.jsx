import React from 'react'
import './Card.css';

const Card = () => {
  return (
    <div>
      <div class="container">
        <div class="card">
           <div class="latest">LATEST</div>
           <img src="src/img11.png" alt="Card Image 1"/>
           <div class="content">
                <h3>HEADPHONE</h3>
               <div class="details">E-SPORTS</div>
               <button class="button">↓ DOWNLOAD</button>
            </div>
            <div class="share">
               <i class="fas fa-share-alt"></i>
           </div>
        </div>
        <div class="card">
           <div class="latest">LATEST</div>
           <img src="src/img11.png" alt="Card Image 2"/>
            <div class="content">
                <h3>HEADPHONE</h3>
                <div class="details">E-SPORTS</div>
                <button class="button">↓ DOWNLOAD</button>
           </div>
           <div class="share">
                <i class="fas fa-share-alt"></i>
           </div>
        </div>
       <div class="card">
            <div class="latest">LATEST</div>
            <img src="src/img11.png" alt="Card Image 3"/>
            <div class="content">
                <h3>HEADPHONE</h3>
                <div class="details">E-SPORTS</div>
               <button class="button">↓ DOWNLOAD</button>
            </div>
            <div class="share">
                <i class="fas fa-share-alt"></i>
           </div>
        </div>
        <div class="card">
            <div class="latest">LATEST</div>
            <img src="src/img11.png" alt="Card Image 4"/>
           <div class="content">
                <h3>HEADPHONE</h3>
                <div class="details">E-SPORTS</div>
               <button class="button">↓ DOWNLOAD</button>
            </div>
            <div class="share">
                <i class="fas fa-share-alt"></i>
            </div>
        </div>
   </div>
    </div>
  )
}

export default Card
