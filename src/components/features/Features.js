import "../features/features.css"
import img1 from "../../assets/Featured 1.jpg"
import img2 from "../../assets/Featured 2.jpg"

function Features(){
    return(
        <div className="container feature">
            <strong className="center">Featured Posts</strong>
            <div className="features">
            <div className="fe__one">
                <img src={img1} alt="" />
               <div className="fe1">
               <strong>The Road Ahead</strong>
                <p>The road ahead might be paved - it might not be.</p>
                <div>
                    <p>Mat Voges</p>
                    <p>September 25, 2015</p>
                </div>
               </div>
            </div>
            <div className="fe__one">
                <img src={img2} alt="" />
                <div className="fe1">
               <strong>The Road Ahead</strong>
                <p>The road ahead might be paved - it might not be.</p>
                <div>
                    <p>Mat Voges</p>
                    <p>September 25, 2015</p>
                </div>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Features