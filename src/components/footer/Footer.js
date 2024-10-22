import bck from "../../assets/Logo header.png"
import "../footer/footer.css"
function Footer(){
    return(
        <div className="fon">
            <div className="os">
            <strong>Stay in Touch</strong>
            <br />
            <div className="btns__div">
            <input type="text" placeholder="Enter your email address" />
            <button>Submit</button>
            </div>
            </div>

            <div className="all">
            <div className="container">
           <div className="header__links">
                        <img src={bck} alt="" />
                        <ul>
                            <li>
                                <a href="#">
                                    <span>HOME</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>CATEGORIES</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>ABOUT</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>CONTACT</span>
                                </a>
                            </li>
                        </ul>
                  </div>

           </div>
            </div>


        </div>
    )
}
export default Footer