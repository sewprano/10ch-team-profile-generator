const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe ('Initialize', () => {
        it('should create and object with a name, id, email, and school', () => {
            const ash = new Intern('Ash', 151, 'ash@pokecenter.com', 'Naranja');

            expect(ash.name).toEqual('Ash');
            expect(ash.id).toEqual(151);
            expect(ash.email).toEqual('ash@pokecenter.com');
            expect(ash.school).toEqual('Naranja');
        });
        it('should throw an error if no parameters given', () =>{
            const brokenAsh = () => new Intern();

            expect(brokenAsh).toThrow();
        });
    });
    describe ('getSchool', () => {
        it('should return the intern school name', () => {
            const ash = new Intern('Ash', 151, 'ash@pokecenter.com', 'Naranja');
            expect(ash.getSchool()).toEqual('Naranja');
        });
    });
    describe ('getRole', () => {
        it('should return the \'Intern\'', () => {
            const ash = new Intern('Ash', 151, 'ash@pokecenter.com', 'Naranja');
            expect(ash.getRole()).toEqual('Intern');
        });
    });
});