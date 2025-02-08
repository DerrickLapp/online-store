import './admin.css';


function Admin(){
    return(
        <div className="admin page">

            <h1>Store Administration</h1>

            <div className="prodpon">

                <div className="manageProducts">
                    <h4>Product Management</h4>

                    <div>
                        <label className='form-label'>Card Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className='form-label'>Price:</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div>
                        <label className='form-label'>Card Image:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='catediv'>
                        <label className='form-label'>Category:</label>
                        <select className='catedrop'>
                            <option value="">--Select an Option--</option>
                            <option value="Main Deck Monster">Main Deck Monster</option>
                            <option value="Extra Deck Monster">Extra Deck Monster</option>
                            <option value="Spell">Spell</option>
                            <option value="Trap">Trap</option>
                        </select>

                    </div>
                    <div className="btncontrols">
                        <button className='btn btn-sm btn-warning'>Submit Card to Catalog</button>
                    </div>



                </div>

                <div className="coupons">
                    <h4>Coupons</h4>
                    
                    <div>
                        <label className='form-label'>Code:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className='form-label'>Discount:</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="btncontrols">
                        <button className='btn btn-sm btn-warning'>Apply</button>
                    </div>

                </div>

            </div>

        </div>
    )

}


export default Admin