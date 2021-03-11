import { Button } from 'primereact/button';
import './Win.scss';

function WinComponent(props: { resetGame: any}) {
    return (
      <div className="win-container p-grid p-jc-center p-nogutter p-ai-center">
        <div className="p-text-center">
          <h1>You completed the game!</h1>
            <Button label="Play Again" onClick={props.resetGame}/>
          </div>
      </div>
    );
  }
  
export default WinComponent;