import React from 'react'

import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from "react-router-dom";

import './frame.css'

const Frame = (props) => {
  const history = useHistory()
  return (
    <div className="frame-container">
      <Helmet>
        <title>Вход</title>
        <link rel="stylesheet" href="./fonts/fonts.css"></link>
      </Helmet>

      <div className="frontground">
      <div className="left-c">
          <img src="./images/cyberRed.png" className="cpLogo"></img>
          
          <div className="loginForm">
            <p>
              Форма входа пользователя киберспортивного клуба
            </p>

            <input type="text" id="login" className="textBox" placeholder="Логин"></input>
            <input type="password" id="password" className="textBox2" placeholder="Пароль"></input>
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
    var check1 = document.getElementById('check1').checked
    var check2 = document.getElementById('check2').checked
    var login = document.getElementById('login').value;

    if(check1 && check2 && login != ""){
      history.push({
        pathname: '/profile',
        state: {name: login}
      })
    }
  }

  function onRegister(){
    history.push('/reg')
  }
}

export default Frame
