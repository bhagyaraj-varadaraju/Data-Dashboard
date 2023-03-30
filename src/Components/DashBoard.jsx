import { useState } from 'react'
import '../App.css'

function DashBoard({list}) {
    const [searchDate, setSearchDate] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const filterDate = ({datetime:date}) => searchDate.length == 10 ? date == searchDate : true;

    return (
        <div className="DashBoard">
            <input
                type="text"
                placeholder="Enter Date..."
                onChange={({target:{value}}) => setSearchInput(value)}
            />

            <button className="btn" onClick={() => {setSearchDate(searchInput)}}>Search</button>

            <table id='mainTable'>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Sunset</th>
                    <th>Conditions</th>
                </tr>
                </thead>
                <tbody>
                {list && list.days.filter(filterDate).map((day, _idx) => (
                    <tr key={`Table-Row-${_idx}`}>
                    <td>{day.datetime}</td>
                    <td>{day.temp}</td>
                    <td>{day.sunset}</td>
                    <td>{day.conditions}</td>
                    </tr>
                ))}
                </tbody>
            </table>

           
        </div>
  )
}

export default DashBoard
