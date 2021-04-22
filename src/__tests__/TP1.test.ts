import Exercice1 from "../Exercice1";

describe("Exercice 1: joinFunction", () => {
    it("should return an empty string if the list is sempty", () => {
        expect(Exercice1.joinFunction([], "")).toBe("");
    })
    it("should stuck string of stringList together if separateur is empty string", () => {
        expect(Exercice1.joinFunction(["Hello", "World"], "")).toBe("HelloWorld")
    })
    it("should put separateur between each string of stringList", () => {
        expect(Exercice1.joinFunction(["Hello", "World", "everyonne"], " ")).toBe("Hello World everyonne")
    })
})

describe("Exercice 1: moyenne", () => {
    it("should raise erreur if numberList is empty", () => {
        expect(() => {Exercice1.moyenne([])}).toThrowError("Erreur: List vide")
    })
    it("should return the number of numberList if numberList contain only one number", () => {
        expect(Exercice1.moyenne([5])).toBe(5)
    });
    it("should return average number of all numbers of numberList, even with lower than 0 one", () => {
        expect(Exercice1.moyenne([0, 100, 50, 60, -20])).toBe(38)
    })
})