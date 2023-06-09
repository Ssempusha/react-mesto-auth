import React from "react";
import Card from "./Card";
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDislike, onCardDelete, onCardTrashClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <div className="profile__avatar-box">
            <img className="profile__avatar" src={currentUser.avatar} alt="Фото профиля" />
            <button type="button" className="profile__avatar-edit" onClick={onEditAvatar} />
          </div>
          <div className="profile__info-box">
            <div className="profile__info-heading">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" onClick={onEditProfile} />
            </div>
            <p className="profile__occupation">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>
      
      <section className="places">
        <ul className="cards-grid">
          {cards.map((card) => ( <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDislike={onCardDislike} onCardDelete={onCardDelete} onCardTrashClick={onCardTrashClick}/> ))}
        </ul>
      </section>
    </main>
    )
  }

export default Main;