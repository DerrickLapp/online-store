import { useEffect, useState } from 'react';
import './admin.css';
import DataService from '../services/dataService';


function Admin(){

    const [allcoupons, setAllCoupons] = useState([]);
    const [allnewcards, setAllNewCards] = useState([]);

    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
    });
    const [newcard, setNewCard] = useState({
        title: "",
        price: "",
        image: "",
        category: "",
    });

    async function loadProducts() {
        const cardData = await DataService.getProducts();
        setAllNewCards(cardData);
    };
    async function loadCoupons() {
        const couponData = await DataService.getCoupons();
        setAllCoupons(couponData);
    };

    useEffect(
        function(){
            loadProducts();
            loadCoupons();
    }, []);


    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;
        console.log("Text Changed!", text, name);        
        /**
         * 3 steps to modify Obj or Arrays in State vars:
         * - Create a copy
         * - Modify the copy
         * - Set the copy back
         */ 

        let couponcopy = {...coupon};

        couponcopy[name] = text;

        setCoupon(couponcopy);

    }

    function handleNewCard(nc){
        const nctext = nc.target.value;
        const title = nc.target.name;

        let cardcopy = {...newcard};
        cardcopy[title] = nctext;
        setNewCard(cardcopy);
    }

    function saveCoupon(){
        console.log(coupon);

        let dccopy = {...coupon};
        dccopy.discount = parseFloat(dccopy.discount);
        let savedCoupon = DataService.saveCoupon(dccopy);
        

        let couponcopies = [...allcoupons];
        couponcopies.push(coupon);
        setAllCoupons(couponcopies);
    }

    async function saveNewCard(){
        console.log(newcard);

        let nccopy = {...newcard};
        nccopy.price = parseFloat(nccopy.price); // parse str into a float
        let savedProd = await DataService.saveProduct(nccopy);
        console.log(savedProd);
        

        let newcardcopies = [...allnewcards];
        newcardcopies.push(newcard);
        setAllNewCards(newcardcopies);
    }


    return(
        <div className="admin page">

            <h1>Store Administration</h1>

            <div className="prodpon">

                <div className="manageProducts">
                    <h4>Add New Cards to the Binder</h4>

                    <div>
                        <label className='form-label'>Card Name:</label>
                        <input type="text" className="form-control" onBlur={handleNewCard} name="title"/>
                    </div>
                    <div>
                        <label className='form-label'>Price:</label>
                        <input type="number" className="form-control" onBlur={handleNewCard} name="price"/>
                    </div>
                    <div>
                        <label className='form-label'>Card Image:</label>
                        <input type="text" className="form-control" onBlur={handleNewCard} name="image" />
                    </div>
                    <div className='catediv'>
                        <label className='form-label'>Category:</label>
                        <select className='catedrop' onBlur={handleNewCard} name="category">
                            <option value="">--Select an Option--</option>
                            <option value="Main Deck Monster">Main Deck Monster</option>
                            <option value="Extra Deck Monster">Extra Deck Monster</option>
                            <option value="Spell">Spell</option>
                            <option value="Trap">Trap</option>
                        </select>

                    </div>
                    <div className="btncontrols">
                        <button className='btn btn-sm btn-warning' onClick={saveNewCard}><i class="fa-solid fa-clipboard-check"></i> Submit Card to Catalog</button>
                    </div>

                    {allnewcards.map(anc =><li>{anc.title} - {anc.category} - ${anc.price}</li>)}


                </div>

                <div className="coupons">
                    <h4>Create Coupons</h4>
                    
                    <div>
                        <label className='form-label'>Code:</label>
                        <input type="text" className="form-control" onBlur={handleCoupon} name="code"/>
                    </div>
                    <div>
                        <label className='form-label'>Discount:</label>
                        <input type="number" className="form-control" onBlur={handleCoupon} name="discount" />
                    </div>
                    <div className="btncontrols">
                        <button className='btn btn-sm btn-warning' onClick={saveCoupon}><i class="fa-regular fa-square-check"></i> Apply</button>
                    </div>

                    {allcoupons.map(ac =><li>{ac.code} - {ac.discount}%</li>)}

                </div>

            </div>

        </div>
    )

}


export default Admin