import { useEffect, useState } from "react";

function Counter() {
    
    /**
     *useState mengembalikan sepasang value(array) :[0, ifunction ()]
     */
    
    const[angka, setAngka] = useState(0);

    function addAngka(){ 
        setAngka(angka + 1); 
    }

    console.log(angka);
    /**
     * usesEffect dijalankan pada lifecycle mount dan update.
     */
    function updateDOM(){
        console.log("Lifecycle : Dimount");

        //Melakukan side effet : mengakses DOM
        document.title = `Hasil : $(angka)`;
    }
    useEffect (updateDOM,[angka]);
        console.log("Lifecycle : Dirender");

    return(
        <div>
            <p>Hasil : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;