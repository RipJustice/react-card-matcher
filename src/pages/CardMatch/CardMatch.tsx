import { useRef, useState, useEffect } from 'react';
import ICard from '../../models/ICard';
import Card from '../../components/Card/Card';
import WinComponent from '../../components/Win/Win';
import './CardMatch.scss';

function CardMatch() {
  const matchCards = useRef<ICard[]>([]);  
  const allMatches = useRef<number>(0); 
  const [cardData, setcardData] = useState<ICard[]>([]);  
  const [win, setWin] = useState<boolean>();

  useEffect(() => {
    getCardsData();
  }, []);

  const getCardsData = async() => {
    try {
      const response = await fetch('assets/MockCardData.json');   
      const data = await response.json();
      data.sort(() => Math.random() - 0.5).map((d:ICard) => d.status = 'initial');
      allMatches.current = 0;   
      setcardData(data);   
      setWin(false);   
    } catch (error) {
      console.log(error);
    }
  }

  const cardFlip = (i: number) => {
    const cards = cardData;  
    const singleCard = cards[i];  

    if (singleCard.status === 'initial' && matchCards.current.length < 2) {
      singleCard.status = 'flipped';      
      cards[i] = singleCard;      
      setcardData([...cards]);      
      matchCards.current.push(singleCard);

      if (matchCards.current.length === 2) {
        confirmMatch();
      }
    } else if (singleCard.status === 'flipped') {
      singleCard.status = 'initial';
      cards[i] = singleCard;
      setcardData([...cards]); 
      matchCards.current = [];
    }
  }

  const confirmMatch = () => {
    setTimeout(() => {
      const card1 = matchCards.current[0];
      const card2 = matchCards.current[1];
      const cardsArray = cardData;
      cardsArray.map(c => 
        ( c.index === card1.index || c.index === card2.index) ?
          card1.cardNum === card2.cardNum ? (c.status = 'match', allMatches.current += 1) : c.status = 'initial'
        : c 
      );  
      setcardData([...cardsArray]);     
      matchCards.current = [];
      if (allMatches.current === cardData?.length) {
        setWin(true);
      }
    }, 1000);
  }

  const doOver = () => {
    getCardsData();
  }

  if (!win) {
    return (      
      <section>
        <div className="card-directions p-text-center">
          <h2>Welcome to the Card Matching Game! Flip any two cards to see if they match. If they match they'll disappear.
            If they don't they'll return to being face down and you'll have to try again. Match them all and YOU WIN!</h2>
        </div>
        <div className="cards-container p-grid p-jc-center p-nogutter">
          {cardData.map((card, index) => <Card card={card} key={index} cardFlipClick={() => {cardFlip(index)}} />)}
        </div>
      </section> 
    );
  } else {
    return (
      <section>
        <WinComponent resetGame={doOver}/>
      </section>
    );
  }
}
  
export default CardMatch;