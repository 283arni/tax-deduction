import {useState} from 'react';
import classes from './App.module.scss';
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classes.App}>
      <Button
        text={'Налоговый вычет'}
        onTogglePopupClick={handleButtonClick}
      />
      {isOpen ?
        <Popup
          isOpen={isOpen}
          onTogglePopupClick={handleButtonClick}
        /> : null}
    </div>
  );
}

export default App;
