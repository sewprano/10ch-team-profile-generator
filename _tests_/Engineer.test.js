const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{
    describe ('Initialize', () =>{
        it ('should create an object with a name, id, email, and github', () =>{
            const samus = new Engineer('Samus', 400, 'samus@email.com', 'marumari86');

            expect(samus.name).toEqual('Samus');
            expect(samus.id).toEqual(400)
            expect(samus.email).toEqual('samus@email.com');
            expect(samus.github).toEqual('marumari86');
        });
        it('should throw an error if no parameters given', () =>{
            const brokenSamus = () => new Employee();

            expect(brokenSamus).toThrow();
        });
    });
    describe ('getgihub', () => {
        it ('should return the Engineer github username', () =>{
            const samus = new Engineer('Samus', 1986, 'samus@email.com', 'marumari86');
            expect(samus.getgihub()).toEqual('marumari86');
        });
    });
    describe ('getRole', () => {
        it('should return the \'Engineer\'', ()=>{
            const samus = new Engineer('Samus', 1986, 'samus@email.com', 'marumari86');
            expect(link.getRole()).toEqual('Engineer');
        });
    });
});