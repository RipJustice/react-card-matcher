import React, { useRef, useState, useEffect } from 'react';
import ICard from '../../models/ICard';
import './CardMatch.scss';

function CardMatch() {
  const matchCards = useRef<ICard[]>([]);  
  const allMatches = useRef<number>(); 
  const [cardData, setcardData] = useState<ICard[]>();  
  const [Win, setWin] = useState<boolean>();

  useEffect(() => {
    getCardsData();
  }, []);

  const getCardsData = async() => {
    try {
      const response = await fetch('MockCardData.json');   
      const data = await response.json();
      data.sort(() => Math.random() - 0.5).map((d:ICard) => d.status = 'initial');
      allMatches.current = 0;   
      setcardData(data);   
      setWin(false);   
    } catch (error) {
      console.log(error);
    }
  }

  if (!Win) {
    return (      
      <section>
        <div className="card-directions p-text-center">
          <h2>Welcome to the Card Matching Game! Flip any two cards to see if they match. If they match they'll disappear.
            If they don't they'll return to being face down and you'll have to try again. Match them all and YOU WIN!</h2>
        </div>
        <div className="cards-container p-grid p-jc-center p-nogutter">
          
        </div>
      </section> 
    );
  } else {
    return (
      <section>

      </section>
    );
  }
}
  
export default CardMatch;