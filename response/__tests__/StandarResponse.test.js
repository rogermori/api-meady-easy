const StandardResponse = require('../StandardResponse');

let happyResponse, debugResponse, noRequestResponse;

describe('StandardResponse', ()=>{
    beforeEach(()=>{
        happyResponse = new StandardResponse(
            true,
            'All good',
            {id: 1},
            {id:1, name: 'Peter Parker'}
        ).getResponse();
        debugResponse = new StandardResponse(
            true,
            'All good',
            {id: 1},
            {id:1, name: 'Peter Parker'},
            true
        ).getResponse();
        debugResponse = new StandardResponse(
            true,
            'All good',
            null,
            null,
            true
        ).getResponse();

    });
    it ('instance contains 6 keys',()=>{
        expect(Object.keys(happyResponse).length).toBe(6);
    });
    it ('default httpCode = 200',()=>{
        expect(happyResponse.httpcode).toBe(200);
    });
    it ('request must be blank in non debug mode',()=>{
        expect(happyResponse.request.length).toBe(0);
    });
    it ('request must not be blank in debug mode',()=>{
        expect(debugResponse.request.length).not.toBe(0);
    });
});

