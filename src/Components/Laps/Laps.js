import React from 'react'

const Laps = (props)=>{


    return(
        <ul className="list-group list-group-flush">
            { props.laps.map((laps, index) =>{
                return(
                    <li key={index} className="list-group-item">
                        <h4>
                            <span className="text-dark">Minute: </span>
                            <span className="text-danger" >{ laps.min} </span>
                            <span className="text-dark" >Second: </span>
                            <span className="text-danger" >{ laps.sec} </span>
                            <span className="text-dark" >Mili: </span>
                            <span className="text-danger" >{ laps.mili} </span>
                        </h4>
                    </li>
                )
            }) }
            
        </ul>
    )
}

export default Laps