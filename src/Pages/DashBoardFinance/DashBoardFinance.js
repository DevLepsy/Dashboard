import React , {useState, useContext} from 'react';
import './DashBoardFinance.css'
import BarChart from '../../Components/AllChart/BarChart'


export default function DashBoardFinance() {
  return (
    <div className="global-container">
        <h1>Les résultats de l'année : 2020</h1>
        <form>
            <label htmlFor="year">Choisissez une date</label>
            <select id="year">
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </form>
        <div className="dashboard-container">
            <BarChart />
        </div>

    </div>

  );
}
