import './App.css';
import ChartComp from './Components/ChartComp';
import Dankmemes from './Components/DankMemes';
import InputComp from './Components/InputComp';
import ImportFieldComp from './Components/InputFieldComp';
import React, {useState} from 'react';
import axios from 'axios';
import {Bar, Pie} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const App = () => {

  // declare state variables
  const [api_data, set_api_data] = useState({});
  const [toggle_graph, set_toggle_graph] = useState(false);
  const [chart_data, set_chart_data] = useState({});
  const [in_str, set_in_str] = useState("");
  const [label_statement, set_label_statement] = useState("Enter a Name to Determine Your Nationality...");
  const [st_country_codes, set_st_country_codes] = useState([]);
  const [st_country_probs, set_st_country_probs] = useState([]);


  // fetch api data
  
  // function Greeting(props) {
  //   let local_tog = props.toggle_graph;
  //   if (!local_tog) {    
  //     return <GuestGreeting />;  
  //   }
  //   return <UserGreeting />;}
 
        // const country_data = response.data;
        // const country_ids = country_data.country_ids;
        // const country_probs = country_data.country_probs;
       
  const fetch_api_data = (in_s) => {

    let country_codes = []
    let country_probdata = []
    let temp_prob = 0.0
    let temp_country = ""

    axios
      .get(`http://127.0.0.1:8000/api/${in_s}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        set_api_data(res.data);        
        country_codes = res.data.country_ids;
        country_probdata = res.data.country_probs;

        const lookup = require('country-code-lookup')
        temp_country = lookup.byIso(country_codes[0]).country;
        temp_prob = country_probdata[0] * 100;

        var rounded_temp = Math.round(temp_prob * 10) / 10;

        const results = "You are most likely from " + temp_country + " with a probability of " + rounded_temp + "%";
        set_label_statement(results);
        set_st_country_codes(country_codes);
        set_st_country_probs(country_probdata);
        //create chart

      }, (error) => {{
        // console.log(error);
      
        const results = "Sorry, Your Name Could Not Be Found.";
        set_label_statement(results);
      }});

  }

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

  const ConvertCountryCodes = (arr_codes) => {
    const lookup = require('country-code-lookup')
    const arr_names = []
    arr_codes.forEach(element => {
      arr_names.push(lookup.byIso(element).country)
    });
    return arr_names;
  }



  return (
    <div className="App">
      <div className="header">
        <h2 className="header_title">Find Your Nationality From Your Name?</h2>
      </div>
     
      <span className="main_span">
        <label className="name_lbl">Enter your name:</label>
        <input className="in_field" value={in_str} onInput={e => set_in_str(e.target.value)}/>
        <button className="btn_nat" onClick={() => {fetch_api_data(in_str); set_toggle_graph(true)}}>Check Nationality</button>
      </span>

      <div className="pie_chart">
      <Pie 
          data={{
            labels:ConvertCountryCodes(st_country_codes),
            datasets:[{
              label: 'Country Nationality',
              data:st_country_probs,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset:4,
            }]

          }}
          width={"30%"}
          
        />
      </div>
      <div className="lbl_div">
        <label className="lbl_statement">{label_statement}</label>
      </div>
     
      
    </div>
  );
}


export default App;
