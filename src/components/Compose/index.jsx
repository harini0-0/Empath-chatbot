import React, {useState} from "react";
import "./Compose.css";
import tempMessages from "../Messages";


function Compose(props){
    function handleClick(event){
        var vat = document.getElementById('msgid').value;
        console.log(vat);
        if(vat.length!==0){props.callback(vat);}
        document.getElementById('msgid').value = "";
    }
    // function handler(){
    //     console.log(document.getElementById('msgid').value)
    // }

    return (
        
            <div className="compose">
            
                <input 
                    type="text"
                    id="msgid"
                    className="compose-input"
                    placeholder="Type Something...."
                    onSubmit={handleClick}
                    // value={""}
                    // onChange={handler}
                />
            
                <button className="btn btn-lg" type="submit" onClick= {handleClick}><i class="fas fad fa-paper-plane"></i></button>
            
            </div>
    );
}

export default Compose;