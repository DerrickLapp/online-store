import './catalog.css';
import Product from '../components/product';


const catalog = [
    {
        "title":"Dark Magician",
        "image":"/images/DarkMagician.jpg",
        "price": 5,
        "category":"Main Deck Monster",
        "_id":"M00001"
    },
    {
        "title":"Blue-Eyes White Dragon",
        "image":"/images/BlueEyes.jpg",
        "price": 5,
        "category":"Main Deck Monster",
        "_id":"M00002"
    },
    {
        "title":"Red-Eyes Black Dragon",
        "image":"/images/RedEyes.jpg",
        "price": 5,
        "category":"Main Deck Monster",
        "_id":"M00003"
    },
    {
        "title":"Super Quantal Mech King Great Magnus",
        "image":"/images/BigRobotBoi.jpg",
        "price": 99.99,
        "category":"Extra Deck Monster",
        "_id":"E00001"
    },
    {
        "title":"Neo Super Quantal Mech King Blaster Magna",
        "image":"/images/NotAsBigBoi.jpg",
        "price": 89.99,
        "category":"Extra Deck Monster",
        "_id":"E00002"
    },
    {
        "title":"Pot of Greed",
        "image":"/images/PoG.jpg",
        "price": 5.99,
        "category":"Spell",
        "_id":"S00001"
    },
    {
        "title":"Super Quantal Mech Ship Magna Carrier",
        "image":"/images/MagnaCarrier.jpg",
        "price": 1.99,
        "category":"Spell",
        "_id":"S00002"
    },
    {
        "title":"Magic Cylinder",
        "image":"/images/MagicCylinder.jpg",
        "price": 6.5,
        "category":"Trap",
        "_id":"T00001"
    },
    {
        "title":"Super Quantal Mech Sword - Magnaslayer",
        "image":"/images/MagnaSlayer.jpg",
        "price": 2.99,
        "category":"Trap",
        "_id":"T00002"
    },
];


const categories = ["Main Deck Monster","Extra Deck Monster","Spell","Trap"]

function Catalog(){
    return (
        <div className="catalog page">
            <h1>Check out our Trade Binder!</h1>

            <div className="filters">
                {categories.map(cate => <button className='btn btn-sm btn-warning catebtn'>{cate}</button>)}
            </div>

            {catalog.map(prod => <Product data= {prod}></Product>)}
        </div>
    );
}

export default Catalog;