import { useState } from 'react';
import './about.css';



function About(){
    const [showEmail, setShowEmail] =useState(false)

    // inlineifs {
    // (what to compare)? if true, do this : if false, do this
    // }

    function showInfo(){
        setShowEmail(!showEmail);
    }


    return (
        <div className="about page">
            <h1>Derrick Lapp</h1>

            {showEmail
                ?<h5>derrick.lapp@sdgku.edu</h5>
                :<p>Click the button below to show my email address!</p>
            }
            
            <button onClick={showInfo} className='btn btn-small btn-warning'>
                {
                showEmail
                    ?"Hide my email"
                    :"Show my email"
                }
            </button>
        </div>
    );
}

export default About;