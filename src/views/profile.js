import React from 'react'

import { Helmet } from 'react-helmet'

const Profile = (props) => {
  console.log(props)
  return (
    <div className="frame-container">
      <Helmet>
        <title>Личный кабинет</title>
        <link rel="stylesheet" href="./fonts/fonts.css"></link>
        <link rel="stylesheet" href="./profile.css"></link>
      </Helmet>

        <div className="cBP">
        <button className="closeBut" onClick={() => {
          props.history.goBack()
        }}>X</button>
        </div>
      
        <div className="frontground">
            <div className="col">
            <div className="profileName">
                <div className="avatar"/>
                <div className="name">
                    <h1>{props.location.state.name}</h1>
                    <p>20 место</p>
                    <p className="zone">STANDART зона</p>
                </div>
            </div>

            <div className="history">
                <h1>ИСТОРИЯ<br/> ПОСЕЩЕНИЙ</h1>
                <div className="visit">
                    <h1>Пятница</h1>
                    <p>30.01.2022</p>
                </div>
                <div className="visit">
                    <h1>Пятница</h1>
                    <p>30.01.2021</p>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Profile
