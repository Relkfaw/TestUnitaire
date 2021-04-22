export default class Exercice1 {
    static joinFunction (list: string[], separateur: string){
        return list.join(separateur);
    }

    static moyenne(numberList: number[]){
        const length = numberList.length;
        if (!length) throw "Erreur: List vide";
        return numberList.reduce((a, b)=>a+b)/length
    }
}