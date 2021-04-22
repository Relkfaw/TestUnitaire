
import allumerChauffage from '../Chauffage';
import Piscine from '../Piscine';


jest.mock("../Piscine")


let piscine: Piscine
describe ("test Piscine mock", () => {

    beforeEach((done) => {
        (Piscine as jest.Mock<Piscine>).mockClear()
        let piscine = new Piscine()
        done()
    })

    it("should call mock function", () => {
        expect(piscine.get_actual_temp()).toBe(30)
        expect(piscine.get_actual_temp()).toBe(30)
    })
    it("should call set_heater", () => {
        expect(piscine.chauffage_on).toBe(false)
        allumerChauffage(piscine);
        expect(piscine.chauffage_on).toBe(true)
    })
})