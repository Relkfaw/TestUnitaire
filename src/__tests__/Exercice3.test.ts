import Exercice3 from "../Exercice3"

describe("Exercice3: saut de ligne", () => {
    it("should return à string", () => {
        expect(typeof Exercice3.sautDeLigne("", 1) === "string").toBe(true)
    })
    it("should return the string given if string.length > ligneLongueur", () => {
        expect(Exercice3.sautDeLignev1("HelloWorld", 20)).toBe("HelloWorld")
    })
    it("should return the string given if string.length = ligneLongueur", () => {
        expect(Exercice3.sautDeLignev2("HelloWorld", 10)).toBe("HelloWorld")
    })
    it("should return the string given if string.length > ligneLongueur", () => {
        expect(Exercice3.sautDeLigneV1V2Refacto("HelloWorld", 20)).toBe("HelloWorld")
    })
    it("should return the string given if string.length = ligneLongueur", () => {
        expect(Exercice3.sautDeLigneV1V2Refacto("HelloWorld", 10)).toBe("HelloWorld")
    })
    it("should return the string with a \\n after each ligneLongeur char", () => {
        expect(Exercice3.sautDeLignev3("HelloWorld HelloWorld", 10)).toBe("HelloWorld\n HelloWorl\nd")
    })
    it("doit retourner un string avec des sauts de ligne tous les lignesLongeurs sans coupé un mot eu deuw", () => {
        expect(Exercice3.sautDeLignev3("HelloWorld HelloWorld", 10)).toBe("HelloWorld\n HelloWorl\nd")
    })
}) 