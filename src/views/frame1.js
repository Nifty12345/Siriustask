import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from "react-router-dom";

const Frame1 = (props) => {
  const history = useHistory()
  return (
    <div className="frame-container">
      <Helmet>
        <title>Регистрация</title>
        <link rel="stylesheet" href="./fonts/fonts.css"></link>
        <link rel="stylesheet" href="./frame1.css"></link>
      </Helmet>

      <div className="frontground">
      <div className="left-c">
          <img src="./images/cyberRed.png" className="cpLogo"></img>
          
          <div className="loginForm">
            <p>
              Форма входа пользователя киберспортивного клуба
            </p>

            <input type="text" id="log" className="textBox" placeholder="Логин"></input>
            <input type="text" id="fio" className="textBox2" placeholder="ФИО"></input>
            <input type="password" id="password" className="textBox" placeholder="Пароль"></input>
            <input type="password" id="pass" className="textBox2" placeholder="Подтверждение пароля"></input>
            <input type="tel" id="tel" className="textBox" placeholder="8 (777) 777-77-77"></input>
            <input type="email" id="email" className="textBox2" placeholder="Email"></input>
          </div>

          <div className="checkBoxes">
            <label className="container">Согласен(а) с правилами посещения комплекса клуба
              <input type="checkbox" id="check1"></input>
              <span className="checkmark"></span>
            </label>
            <br></br>

            <label className="container">Согласен(а) с политикой обработки персональных данных
              <input type="checkbox" id="check2"></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="buttonsLogin">
            <button className="loginBut" onClick={onLogin}>ВХОД</button>
            <button className="regBut" onClick={onRegister}>РЕГИСТРАЦИЯ</button>
          </div>

          <img src='./images/appAd.png' className='appAd'></img>

        </div>

        <div className="right-c">
          <p className="text">88</p>
          <div>
            <div className="block1">
            <p className="zona">вы находитесь в зоне</p>
            </div>
            <div className="block2">
            <p className="standart">STANDART</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function onLogin(){
    history.goBack()
  }

  function onRegister(){
    var check1 = document.getElementById('check1').checked
    var check2 = document.getElementById('check2').checked
    var login = document.getElementById('log').value;

    if(check1 && check2 && login != ""){
      history.push({
        pathname: '/profile',
        state: {name: login}
      })
    }
  }
}

export default Frame1
