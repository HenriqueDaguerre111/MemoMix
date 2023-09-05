const handleToggleInput = () => {
    setShowTextInput(!showTextInput);
    setButtonText(showTextInput ? '+' : '-');
  };
  
  const toggleConfirmation = () => {
    setIsConfirmationOpen(!isConfirmationOpen);
    setIsPopupOpen(!isPopupOpen);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleConfirmation = () => {
    console.log('sim'); // Log "sim" to the console
    toggleConfirmation();
  };
  /* index.css */
.edit-button {
    /* Add any styling you want for the edit button */
  }
  
  .options-box {
    display: none;
    border: 1px solid #ccc;
    padding: 10px;
    position: absolute;
    background-color: white;
    z-index: 1;
  }
  
  .options-box button {
    display: block;
    margin: 5px 0;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .options-box button:hover {
    background-color: #e0e0e0;
  }
  