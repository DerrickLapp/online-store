import './catalog.css';
import Product from '../components/product';


const catalog = [
    {
        "title":"Dark Magician",
        "image":"/images/DarkMagician.jpg",
        "price": 5,
        "category":"Monster",
        "_id":"M00001"
    },
    {
        "title":"Blue-Eyes White Dragon",
        "image":"/images/BlueEyes.jpg",
        "price": 5,
        "category":"Monster",
        "_id":"M00002"
    },
    {
        "title":"Red-Eyes Black Dragon",
        "image":"/images/RedEyes.jpg",
        "price": 5,
        "category":"Monster",
        "_id":"M00003"
    },
    {
        "title":"Pot of Greed",
        "image":"/images/PoG.jpg",
        "price": 5.99,
        "category":"Spell",
        "_id":"S00001"
    },
    {
        "title":"Magic Cylinder",
        "image":"/images/MagicCylinder.jpg",
        "price": 6.5,
        "category":"Trap",
        "_id":"T00001"
    },
    {
        "title":"Super Quantal Mech King Great Magnus",
        "image":"/images/BigRobotBoi.jpg",
        "price": 99.99,
        "category":"Extra Deck Monster",
        "_id":"E00001"
    },
];


const categories = ["Monster","Spell","Trap","Extra Deck Monster"]

function Catalog(){
    return (
        <div className="catalog page">
            <h1>Check out our Trade Binder!</h1>

            <div className="filters">
                {categories.map(cate => <button className='btn btn-sm btn-warning'>{cate}</button>)}
            </div>

            {catalog.map(prod => <Product data= {prod}></Product>)}
        </div>
    );
}

export default Catalog;