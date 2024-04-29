import { createAgeCalculator } from "./age-calculator"
describe('agecalculator', () => {
    describe('given birthday having alrady taken place in the year', () => {

        test.each([
            { birthDate: "1979/02/15", targetDate: "2000/03/21", expected: 21 },
            { birthDate: "1950/01/31", targetDate: "2001/03/21", expected: 51 },
            { birthDate: "2015/03/10", targetDate: "2022/03/21", expected: 7 },
        ])('birthdate: $birthDate, targetate: $targetDate, expected: $expected', ({ birthDate, targetDate, expected }) => {
            //Arrange
            const sut = createAgeCalculator();
            //Act
            const actual = sut(new Date(birthDate), new Date(targetDate));
            //Assert
            expect(actual).toBe(expected);
        })
        test('given birthdate of 1979/02/15 and targetdate of 2000/03/21 should be 21', () => {
            //Arrange
            const sut = createAgeCalculator();
            const birthDate = new Date("1979/02/15");
            const targetDate = new Date("2000/03/21");
            const expected = 21;
            //Act
            const actual = sut(birthDate, targetDate);
            //Assert
            expect(actual).toBe(expected);
        })

        test('given birthdate of 1950/01/31 and targetdate of 2001/03/21 should be 51', () => {
            //Arrange
            const sut = createAgeCalculator();
            const birthDate = new Date("1950/01/31");
            const targetDate = new Date("2001/03/21");
            const expected = 51;
            //Act
            const actual = sut(birthDate, targetDate);
            //Assert
            expect(actual).toBe(expected);
        })
    })
})