import ICard from '../../models/ICard';
import './Card.scss';

function Card(props: {card: ICard, cardFlipClick: any}) {  
  return (
    <div className={`cm-card p-shadow-4 ${props.card.status}`} onClick={props.cardFlipClick}>
      <div className="card-back p-grid p-jc-center p-ai-center p-nogutter">
        <img src="assets/card.jpg" alt="card"/>
      </div>
      <div className="card-front p-grid p-jc-center p-ai-center p-nogutter">
        <div className="card-circle p-grid p-jc-center p-ai-center p-nogutter">
          <h2>{props.card.cardNum}</h2>
        </div>
      </div>
    </div>
  );
}
  
export default Card;