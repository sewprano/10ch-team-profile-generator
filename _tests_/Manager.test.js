const Manager = require('../lib/Manager');

describe("Manager", () =>{
    describe ("Initialize", () =>{
        it ('should create an object with a name, id, email, and officeNumber', () =>{
            const mario = new Manager('Mario', 300, 'mario@email.com', 10);

            expect(mario.name).toEqual('Mario');
            expect(mario.id).toEqual(300);
            expect(mario.email).toEqual('mario@email.com');
            expect(mario.officeNumber).toEqual(10);
        });
        it('should throw an error if no parameters given', () =>{
            const brokenMario = () => new Manager();

            expect(brokenMario).toThrow();
        });
    }); 
    describe ('getRole', () => {
        it('should return the \'Manager\'', ()=>{
            const link = new Manager('Mario', 200, 'mario@email.com');
            expect(link.getRole()).toEqual('Manager');
        });
    });
});