import React, { useRef, useState, useEffect } from 'react';
import ICard from '../../models/ICard';
import './CardMatch.scss';

function CardMatch() {
  const matchCards = useRef<ICard[]>([]);  
  const allMatches = useRef<number>(); 
  const [cardData, usecardData] = useState<ICard[]>();  
  const [Win, useWin] = useState<boolean>();

  return (
    <section>
    
    </section>
  );
}
  
export default CardMatch;