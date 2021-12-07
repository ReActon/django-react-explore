import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2'
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

  // fetch the api       
  const fetch_api_data = (in_s) => {

    // temporary vars
    var country_codes = []
    var country_probdata = []
    var temp_prob = 0.0
    var temp_country = ""

    axios
      .get(`http://127.0.0.1:8000/api/${in_s}`)
      .then(res => {
        // set the api data state var
        set_api_data(res.data);        

        // set the locals vars from the result of the api call
        country_codes = res.data.country_ids;
        country_probdata = res.data.country_probs;

        // include the requirement for the country-code-lookup
        const lookup = require('country-code-lookup')

        // set the likeliest country and its probability
        temp_country = lookup.byIso(country_codes[0]).country;
        temp_prob = country_probdata[0] * 100;

        // round off the probability
        const rounded_temp = Math.round(temp_prob * 10) / 10;

        // build the label to be displayed
        const results = "You are most likely from " + temp_country + " with a probability of " + rounded_temp + "%";

        // set the various state vars
        set_label_statement(results);
        set_st_country_codes(country_codes);
        set_st_country_probs(country_probdata);

      }, (error) => {{
        // if error code 500, db lookup failed
        // build the new label
        const results = "Sorry, Your Name Could Not Be Found.";

        // set the label
        set_label_statement(results);
      }});

  }

  const ChartComp = (props) => {
    // let arr_ids = props.ids;
    // let arr_probs = props.probs;
    
    return (
        <div>
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
    )
  }

  const ConvertCountryCodes = (arr_codes) => {

    const lookup = require('country-code-lookup')
    const arr_names = []

    // convert each country code and push results to new array
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
            // convert each code to its corresponding country for labels
            labels:ConvertCountryCodes(st_country_codes),
            datasets:[{
              label: 'Country Nationality',
              data:st_country_probs,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              // add animation element
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
