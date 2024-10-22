import "./header.css"
import headerLOGO from "../../assets/Logo header.png"


function Header() {
    return(
        <div className="background">
            <header>
                <div className="container">
                  <div className="header__links">
                        <img src={headerLOGO} alt="" />
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

                  <div className="hero__item">
                    <h1>Let's do it together.</h1>
                    <p>We travel the world in search of stories. Come along for the ride.</p>
                    <button>View Latest Posts</button>
                  </div>
                </div>
            </header>
        </div>
    )
}

export default Header