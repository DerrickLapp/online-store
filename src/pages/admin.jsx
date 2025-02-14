import { useState } from 'react';
import './admin.css';


function Admin(){

    const [allcoupons, setAllCoupons] = useState([]);
    const [allnewcards, setAllNewCards] = useState([]);

    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
    });
    const [newcard, setNewCard] = useState({
        cname: "",
        cprice: "",
        cimage: "",
        ccat: "",
    });


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
        const ncname = nc.target.name;

        let cardcopy = {...newcard};
        cardcopy[ncname] = nctext;
        setNewCard(cardcopy);
    }

    function saveCoupon(){
        console.log(coupon);
        let couponcopies = [...allcoupons];
        couponcopies.push(coupon);
        setAllCoupons(couponcopies);
    }

    function saveNewCard(){
        console.log(newcard);
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
                        <input type="text" className="form-control" onBlur={handleNewCard} name="cname"/>
                    </div>
                    <div>
                        <label className='form-label'>Price:</label>
                        <input type="number" className="form-control" onBlur={handleNewCard} name="cprice"/>
                    </div>
                    <div>
                        <label className='form-label'>Card Image:</label>
                        <input type="text" className="form-control" onBlur={handleNewCard} name="cimage" />
                    </div>
                    <div className='catediv'>
                        <label className='form-label'>Category:</label>
                        <select className='catedrop' onBlur={handleNewCard} name="ccat">
                            <option value="">--Select an Option--</option>
                            <option value="Main Deck Monster">Main Deck Monster</option>
                            <option value="Extra Deck Monster">Extra Deck Monster</option>
                            <option value="Spell">Spell</option>
                            <option value="Trap">Trap</option>
                        </select>

                    </div>
                    <div className="btncontrols">
                        <button className='btn btn-sm btn-warning' onClick={saveNewCard}>Submit Card to Catalog</button>
                    </div>

                    {allnewcards.map(anc =><li>{anc.cname} - {anc.ccat} - ${anc.cprice}</li>)}


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
                        <button className='btn btn-sm btn-warning' onClick={saveCoupon}>Apply</button>
                    </div>

                    {allcoupons.map(ac =><li>{ac.code} - {ac.discount}%</li>)}

                </div>

            </div>

        </div>
    )

}


export default Admin