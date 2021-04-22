export default class Exercice3 {
    static sautDeLigne(stringList: string, ligneLongueur: number) {
        return "";
    }

    static sautDeLignev1(stringList: string, ligneLongueur: number) {
        if(stringList.length < ligneLongueur) return stringList
        return "";
    }

    static sautDeLignev2(stringList: string, ligneLongueur: number) {
        if(stringList.length < ligneLongueur) return stringList
        if(stringList.length === ligneLongueur) return stringList
        return "";
    }

    static sautDeLigneV1V2Refacto(stringList: string, ligneLongueur: number) {
        if(stringList.length <= ligneLongueur) return stringList
        return "";
    }

    static sautDeLignev3(stringList: string, ligneLongueur: number) {
        if(stringList.length <= ligneLongueur) return stringList
        return stringList.match(new RegExp('.{1,' + ligneLongueur + '}', 'g')).join("\n");
    }

    static sautDeLignev4(stringList: string, ligneLongueur: number) {
        if(stringList.length <= ligneLongueur) return stringList
        let stringArray = stringList.split(" ");
        stringArray.reduce((a, b) => {
            let position = a.lastIndexOf("\n");
            if (position === -1) position = a.length
            if((position + " " + b).length <= ligneLongueur){
                return a + " " + b
            } else {
                
            }
        })
    }
}
