import React from 'react'

export default function Success() {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn">Назад</button>
    </div>
  )
}
