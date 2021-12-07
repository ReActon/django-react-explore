import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { Chart } from "react-google-charts";
import ChartComp from './ChartComp';
import Dankmemes from './DankMemes';




let datas = {};


const makeApiReq = (inS) => {

    axios.get(`http://127.0.0.1:8000/api/${inS}`)
    .then((response) => {
        console.log(response);
        const country_data = response.data;
        const country_ids = country_data.country_ids;
        const country_probs = country_data.country_probs;
        const dataState = {
            labels: country_ids,
            datasets:[
                    {
                        label:'Country',
                        data: country_probs,
                        backgroundColor:[
                            'rgba(255,105,145,0.6)',
                            'rgba(155,100,210,0.6)',
                            'rgba(90,178,255,0.6)',
                        ]
                    }
            ]

        }
        // this.setState({ 
        //     Data: {
        //         labels: country_ids,
        //         datasets:[
        //             {
        //                 label:'Countries',
        //                 data: country_probs,
        //                 backgroundColor:[
        //                     'rgba(255,105,145,0.6)',
        //                     'rgba(155,100,210,0.6)',
        //                     'rgba(90,178,255,0.6)',
                        
        //                 ],
        //                 hoverOffset: 4
        //             }
        //         ]
        //     }
        // });
                
        // <Chart
        // width={'500px'}
        // height={'300px'}
        // chartType="PieChart"
        // loader={<div>Loading Chart</div>}
        // data={[
        //     ['Country', 'Probability per Day'],
        //     [country_ids[0], country_probs[0] * 100],
        //     [country_ids[1], country_probs[1] * 100],
        //     [country_ids[2], country_probs[2] * 100],
        
        // ]}
        // options={{
        //     title: 'Likely Nationality',
        // }}
        // rootProps={{ 'data-testid': '1' }}
        // />
        
    }, (error) => {
        console.log(error);
    });
    

}




const InputFieldComp = () => {
    
    const [val, setVal] = useState("");
    console.log(datas)

    return (
        <div>
        <label>Enter name: </label>
        <input value={val} onInput={e => setVal(e.target.value)}/>
        <button onClick={() => makeApiReq(val)}>Confirm Name</button>
        <Dankmemes />
        {/* <ChartComp data={datas}/> */}
        </div>
    );
    
    
}

  export default InputFieldComp;