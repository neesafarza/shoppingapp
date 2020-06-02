const DatabaseProcessor = require("../../src/service/databaseProcessor").DatabaseProcessor;

describe('databaseProcessor unitTestCases', () => {
    
    let databaseProcessor;

    beforeEach(() => {
        databaseProcessor = new DatabaseProcessor()
    });

    it ('db is set on creation', () => {
        expect(databaseProcessor.db).toBeTruthy();
    })

    it('select return expected', (done) => {
        const actual = databaseProcessor.select('orders');
        actual.then((data) => {
            expect(data).toBeTruthy()
            done();
        }).catch((err) => {
            fail(err);
            done();
        });
    });
    
});
