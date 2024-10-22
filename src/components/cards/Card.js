import "../cards/cards.css"
import card1 from "../../assets/card 1.jpg"
import card2 from "../../assets/card 2.jpg"
import card3 from "../../assets/card 3.jpg"
import card4 from "../../assets/card 4.jpg"
import card5 from "../../assets/card 5.jpg"
import card6 from "../../assets/card 6.jpg"


import user from "../../assets/User card 1.png"
import user2 from "../../assets/User card 2.png"

function Card(){
    return(
        <div className="container">
            <strong className="center">Most Recent</strong>
            <div className="cards__wrapper">
                <div className="card">
                    <img src={card1} alt="" />
                    <div className="gap">
                        <b>Still Standing Tall</b>
                        <p>Life begins at the end of your comfort zone.</p>
                    </div>
                    <div className="card__text">
                       <div className="ctext">
                       <img src={user} alt="" />
                        <p>William Wong</p>
                       </div>
                       <p>9/25/2015</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card2} alt="" />
                    <div className="gap">
                        <b>Still Standing Tall</b>
                        <p>Life begins at the end of your comfort zone.</p>
                    </div>
                    <div className="card__text">
                       <div className="ctext">
                       <img src={user2} alt="" />
                        <p>William Wong</p>
                       </div>
                       <p>9/25/2015</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card3} alt="" />
                    <div className="gap">
                        <b>Still Standing Tall</b>
                        <p>Life begins at the end of your comfort zone.</p>
                    </div>
                    <div className="card__text">
                       <div className="ctext">
                       <img src={user2} alt="" />
                        <p>William Wong</p>
                       </div>
                       <p>9/25/2015</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card4} alt="" />
                    <div className="gap">
                        <b>Still Standing Tall</b>
                        <p>Life begins at the end of your comfort zone.</p>
                    </div>
                    <div className="card__text">
                       <div className="ctext">
                       <img src={user2} alt="" />
                        <p>William Wong</p>
                       </div>
                       <p>9/25/2015</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card5} alt="" />
                    <div className="gap">
                        <b>Still Standing Tall</b>
                        <p>Life begins at the end of your comfort zone.</p>
                    </div>
                    <div className="card__text">
                       <div className="ctext">
                       <img src={user2} alt="" />
                        <p>William Wong</p>
                       </div>
                       <p>9/25/2015</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card6} alt="" />
                    <div className="gap">
                        <b>Still Standing Tall</b>
                        <p>Life begins at the end of your comfort zone.</p>
                    </div>
                    <div className="card__text">
                       <div className="ctext">
                       <img src={user2} alt="" />
                        <p>William Wong</p>
                       </div>
                       <p>9/25/2015</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card