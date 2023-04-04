import SummaryCard from "./SummaryCard"
import "../App.css";

const DetailsCard = ({details}) => {

    const {datetime:date, visibility, sunrise, sunset, description} = details;

    return (
        <div className="DetailsCard">
            <p>Date: {date}</p>
            <p>Visibility: {visibility}%</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default DetailsCard;