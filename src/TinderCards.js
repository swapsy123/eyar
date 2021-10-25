import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState ([
        {
        name: 'Mila',
        url: 'https://i.insider.com/5d51ab572d4cb57604523c73?width=700',
        },
        {
        name: 'Mark Zuckerberg',
        url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        },
        {
            name: 'Mila Kunis',
            url: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
        },
        {
            name: 'Justin Beiber',
            url: 'https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg'
            },
    ]);
      


    return (
        <div>

            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                 className="swipe"
                 key={person.name}
                 preventSwipe={['up', 'down']}
                 onCardLeftScreen={'left'}
                 >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                   className="card"
                   >
                       <h3>{person.name}</h3>
                       </div> 
                </TinderCard>
                ))}
                </div>
        </div>
    );
}


export default TinderCards;