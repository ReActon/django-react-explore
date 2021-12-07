import React from 'react'
import { Bar } from 'react-chartjs-2';

const ChartComp = (props) => {
    let arr_ids = props.ids;
    let arr_probs = props.probs;

    const data = {
        labels: arr_ids,
        datasets: [{
          label: 'My First Dataset',
          data: arr_probs,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        }]
      };
    
    return (
        <div>
            <Bar 
                data={data}
                height={400}
                width={400}
                options={{
                    maintainAspectRatio: false
                }}
            />
            <p>Bar Chart</p>
        </div>
    )
}

export default ChartComp;
