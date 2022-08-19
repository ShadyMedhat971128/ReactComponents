import './DigitalClock_1.css'
import React , {useEffect,useState} from 'react';
/**
 * 
 * @returns a react component "digotal clock"
 * 
 */
const DigitalClock_1 =() =>{
   //initialize the states
    const [clockState, setclockState] = useState();
   //setting the timer
    useEffect(() => {
    setInterval(()=>{
        let date = new Date();
        setclockState (date.toLocaleTimeString()); 
    },1000);
    // return () => {
    //     cleanup
    // };
   }, []);
//-------------------------------------------------------------------//  
//** react component*/
    return(
        <div>
            <h1 className='digital-clock'>
             {clockState}
            </h1>
        </div>
    )
}

export default DigitalClock_1;