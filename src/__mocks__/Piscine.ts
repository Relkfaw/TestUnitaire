export default class Piscine {
    chauffage_on: boolean;
    temperature: number

    public constructor(chauffage_on: boolean, temperature: number){
        this.chauffage_on = false;
        this.temperature = 0
    }

    public get_actual_temp(): number{
        return 30
    }

    public get_last_days_temps(): number{
        return 30
    }

    public set_heater(bool){
        return true
    }
}