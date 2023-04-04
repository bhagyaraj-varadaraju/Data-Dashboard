import { useParams } from "react-router-dom"
import DetailsCard from "./DetailsCard";

const DetailsPage = ({list}) => {

    const {date} = useParams();

    if (!list) {
        return <p>No list downloaded</p>;
    }

    const details = list.filter(datum => datum.datetime == date)[0];

    return <DetailsCard details={details} />

};

export default DetailsPage;