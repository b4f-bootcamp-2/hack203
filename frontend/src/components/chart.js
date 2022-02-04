import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Navbar from './Navbar';

class LineChart extends Component {
    render() {
        return (<div>
            <Plot
                data={[
                    {
                        x: ['03/06/2021', '25/10/2021', '03/01/2022'],
                        y: [100, 120, 90],
                        type: 'scatter'
                    }
                ]}
                layout={{ width: 389, height: 700, title: "Morty's Data" }}
            />
            )<Navbar />
        </div>)

    }

}

export default LineChart;