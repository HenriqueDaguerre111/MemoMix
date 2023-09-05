// Import necessary components and styles
import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCog, faCheck } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

// Set app element for accessibility
Modal.setAppElement('#root');

// Array of color options
const colorOptions = ['#A60321','#F299CA','#A63793','#04BF55','#F2B705'];

const fontOptions = ['Arial, sans-serif','Arial Black, sans-serif','Verdana, sans-serif','Tahoma, sans-serif','Impact, sans-serif','Times New Roman, sans-serif','Georgia, sans-serif'];

const Postit = () => {
  // Initial data and states
  const categoryItens = ['movies', 'academy', 'school'];
  const [showTextInput, setShowTextInput] = useState(false);
  const [buttonText, setButtonText] = useState('+');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [isFontMenuOpen, setIsFontMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedColor, setSelectedColor] = useState('#F299CA');

  // Toggle functions
  // turns dropdown menu into a input
  const handleToggleInput = () => {
    setShowTextInput(!showTextInput);
    setButtonText(showTextInput ? '+' : '-');
  };
// opens a popup to confirm the users action
  const toggleConfirmation = () => {
    setIsConfirmationOpen(!isConfirmationOpen);
    setIsPopupOpen(!isPopupOpen);
  };
// set the menu as open
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
// action to the user's answer
  const handleConfirmation = () => {
    console.log('sim'); // Log "sim" to the console
    toggleConfirmation();
  };
// set the font menu as activated
const toggleFontMenu = () => {
  setIsFontMenuOpen(!isFontMenuOpen);
  setIsColorMenuOpen(false);
};
// set and apply the chosen font
const handleFontChange = (font) => {
  setSelectedFont(font);
};
  // set color menu as open
  const toggleColorMenu = () => {
    setIsColorMenuOpen(!isColorMenuOpen);
    setIsFontMenuOpen(false);
  };
  
  

  return (
    <div className={`container ${isPopupOpen ? 'popup-open' : ''}`}>
      
      <div className="square" style={{ backgroundColor: selectedColor }}>
        <div className="category">
          <button onClick={handleToggleInput}>{buttonText}</button>
          {showTextInput ? (
            <input type="text" placeholder="Category" maxLength={200} />
          ) : (
            <select id="category">
              <option value="" disabled defaultValue>
                Category
              </option>
              {categoryItens.map((item, index) => (
                <option key={index} value={`item${index + 1}`}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="title">
          <input
            className="title"
            type="text"
            placeholder="Title"
            maxLength={200}
          />
        </div>
        <div className={`textbox ${selectedFont}`}>
  <textarea
    placeholder="Enter text here"
    maxLength={10000}
    style={{ fontFamily: selectedFont }} // Apply the selected font style
  />
</div>
        <div className="square-footer">
          <button onClick={toggleConfirmation}>
            <FontAwesomeIcon icon={faX} className="cancel-button" />
          </button>
          <div className={`options-container ${isMenuOpen ? 'open' : ''}`}>
            <button className="config-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faCog} className="edit-button" />
            </button>
            <div className="options-menu">
            <button onClick={toggleFontMenu}>Font</button>
            <button onClick={toggleColorMenu}>Color</button>
            </div>
            
          </div>
          <button>
            <FontAwesomeIcon icon={faCheck} className="ok-button" />
          </button>
        </div>
        {isFontMenuOpen && (
  <div className="font-menu">
    <div className="font-options">
      {fontOptions.map((font, index) => (
        <button
          key={index}
          className="font-option"
          onClick={() => handleFontChange(font)}
        >
          {font}
        </button>
      ))}
    </div>
  </div>
)}
        {isColorMenuOpen && (
  <div className="color-menu">
    <div className="color-options">
      {colorOptions.map((color, index) => (
        <button
          key={index}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        ></button>
      ))}
    </div>
  </div>
)}
        <Modal
          isOpen={isConfirmationOpen}
          onRequestClose={toggleConfirmation}
          contentLabel="Confirmation Popup"
          className="popup"
          overlayClassName="overlay"
        >
          <div className="confirmation-box">
            <p>Are you sure?</p>
            <button onClick={handleConfirmation}>Yes</button>
            <button onClick={toggleConfirmation}>Cancel</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Postit;
