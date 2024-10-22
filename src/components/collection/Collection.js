import "../collection/collection.css"
function Collection(){
    return(
       <div className="backgroundCollection">
         <div className="container">
            <ul className="collection">
            <li>
                <a href="#">Nature</a>
            </li>
            <li>
                <a href="#">Photography</a>
            </li>
            <li>
                <a href="#">Relaxation</a>
            </li>
            <li>
                <a href="#">Vacation</a>
            </li>
            <li>
                <a href="#">Travel</a>
            </li>
            <li>
                <a href="#">Adventure</a>
            </li>
        </ul>
        </div>
       </div>
    )
}

export default Collection