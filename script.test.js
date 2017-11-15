import {
    generateRandomNumber,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    functionalIsPalindrome,
    printOutPersonAge

} from './script.js';

describe('generateRandomNumber',() =>{
    var rgb = generateRandomNumber();        
    it('The values r,g,b should be lesser or equals to 255 and greater or equals to 0', () =>{
        expect(rgb.r).toBeLessThanOrEqual(255);
        expect(rgb.g).toBeLessThanOrEqual(255);
        expect(rgb.b).toBeLessThanOrEqual(255);
        expect(rgb.r).toBeGreaterThanOrEqual(0);
        expect(rgb.g).toBeGreaterThanOrEqual(0);
        expect(rgb.b).toBeGreaterThanOrEqual(0);
    });
    it('the function generates 3 values',() =>{
        expect(rgb).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }));
    });
});

describe('filterNegativeNumbers',()=> {
    var array = [-4,8,-20,32,0];
    var filter = filterNegativeNumbers(array);
    var functionalFilter = functionalFilterNegativeNumbers(array);
    it('Return is not null',() =>{
        expect(filter).not.toBeNull();
        expect(functionalFilter).not.toBeNull();
    });
    it('The function returns always positive numbers',() =>{
        for(var i = 0; i < filter.length; i++){
            expect(filter[i]).toBeGreaterThanOrEqual(0);
        }
        for(var j = 0; j < functionalFilter.length; j++){
            expect(functionalFilter[j]).toBeGreaterThanOrEqual(0);
        } 
    })
    it('The function returns an array',() =>{
        expect(Array.isArray(filter)).toBeTruthy();
        expect(Array.isArray(functionalFilter)).toBeTruthy();
    })
})

