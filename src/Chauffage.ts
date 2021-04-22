import Piscine from "./Piscine";

function allumerChauffage(piscine: Piscine) {
    if (piscine.get_actual_temp() > 25 && piscine.get_last_days_temps()) piscine.chauffage_on
}

export default allumerChauffage