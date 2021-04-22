import Exercice2 from "../Exercice2"

describe("Exercise 2: leap year TDD", () => {
    it("should return an boolean", () => {
        expect(typeof Exercice2.is_leap_year_v1(1) === "boolean").toBe(true)
    })
    it("doit retourner vrai si l'année est divisible par 400", () => {
        expect(Exercice2.is_leap_year_v2(400)).toBe(true);
    });
    it("doit retourner faux si l'année n'est pas divisible par 400", () => {
        expect(Exercice2.is_leap_year_v2(401)).toBe(false);
    })
    it("doit retourner faux si l'année est divisible par 100 mais pas par 400", () => {
        expect(Exercice2.is_leap_year_v3(300)).toBe(false);
    });
    it("doit retourner vrai si l'année est divisible par 100 et par 400", () => {
        expect(Exercice2.is_leap_year_v3(300)).toBe(false);
    });
    it("doit retourner vrai si l'année est divisble par 4 mais pas par 100", () => {
        expect(Exercice2.is_leap_year_v4(1592)).toBe(true)
    })
    it("doit retourner faux si l'année est divisble par 4 et par 100", () => {
        expect(Exercice2.is_leap_year_v4(200)).toBe(false)
    })
    it("doit retourner faux si l'année n'est pas divisible par 4", () => {
        expect(Exercice2.is_leap_year_v5(1582)).toBe(false)
    })
});