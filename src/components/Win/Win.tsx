import { Button } from 'primereact/button';
import './Win.scss';

function Win() {
    return (
      <div className="win-container p-grid p-jc-center p-nogutter p-ai-center">
        <div className="p-text-center">
          <h1>You completed the game!</h1>
            <Button label="Play Again" />
          </div>
      </div>
    );
  }
  
export default Win;