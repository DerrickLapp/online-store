import "./home.css";
import BlankCard from "../assets/BlankYGOCard.jpg";
import { Link } from 'react-router-dom';


function Home(){
    return(   
        <div className="home page">
            <h1>Welcome to the Not-So-Local TCG Home Page!</h1>
            <img id="blankCard" src={BlankCard} alt=""></img>
            <div className="catelink">
                <Link to="/catalog">Click here to see what's in our Binder!</Link>
            </div>
        </div>
    )
}

export default Home;