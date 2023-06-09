import React from 'react';
import correctResultImage from "../images/result-check-icon/tickIcon.svg";
import errorResultImage from "../images/result-check-icon/errorIcon.svg";

function InfoTooltip({ isOpen, onClose, success }) {
  return (
    <div className={`popup popup_tooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img className="popup__tooltip-image" src={success ? correctResultImage : errorResultImage} />
        <p className="popup__tooltip-text">{success ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</p>
        <button type="button" className="popup__cross" onClick={onClose}/>
      </div>
    </div>
  )
}

export default InfoTooltip;