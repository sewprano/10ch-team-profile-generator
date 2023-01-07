const Employee = require('../lib/Employee');

describe("Employee", () =>{
    describe ("Initialization", () =>{
        it('should create an object with a name, id, and email address', () =>{
            const steve = new Employee('Steve', 100, 'steve@email.com');

            expect(steve.name).toEqual('Steve');
            expect(steve.id).toEqual(100);
            expect(steve.email).toEqual('steve@email.com');
        });

        it('should throw an error if no parameters given', () =>{
            const brokenSteve = () => new Employee();

            expect(brokenSteve).toThrow();
        });
    });

    describe ('getName', () => {
        it('should return the Employee name', ()=>{
            const link = new Employee('Link', 200, 'link@email.com');
            expect(link.getName()).toEqual('Link');
        });
    });
    describe ('getId', () => {
        it('should return the Employee ID', ()=>{
            const link = new Employee('Link', 200, 'link@email.com');
            expect(link.getId()).toEqual(200);
        });
    });
    describe ('getEmail', () => {
        it('should return the Employee email', ()=>{
            const link = new Employee('Link', 200, 'link@email.com');
            expect(link.getEmail()).toEqual('link@email.com');
        });
    });
    describe ('getRole', () => {
        it('should return the \'Employee\'', ()=>{
            const link = new Employee('Link', 200, 'link@email.com');
            expect(link.getRole()).toEqual('Employee');
        });
    });
    
});