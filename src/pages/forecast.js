import { useEffectOnce } from "../customHooks/customHooks";
import { getForecastFiveDays } from "../services/api";
import { useParams } from "react-router-dom";

const Forecast = () => {

    const params = useParams();
    console.log(params.city)

    useEffectOnce(() => {
        getForecastFiveDays(params.city)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }, [])

    return <div>Forecast</div>
}

export default Forecast;