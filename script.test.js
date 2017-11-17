import {
    generateRandomNumber,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge

} from './script.js';

describe('generateRandomNumber',() =>{
    let {r,g,b} = generateRandomNumber();  
    let rgb = generateRandomNumber();        
    it('the values r,g,b should be lesser or equals to 255 and greater or equals to 0', () =>{
        expect(r).toBeLessThanOrEqual(255);
        expect(g).toBeLessThanOrEqual(255);
        expect(b).toBeLessThanOrEqual(255);
        expect(r).toBeGreaterThanOrEqual(0);
        expect(g).toBeGreaterThanOrEqual(0);
        expect(b).toBeGreaterThanOrEqual(0);
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
    let array = [-4,8,-20,32,0];
    let expectedArray = [8,32,0];
    let filterArray = filterNegativeNumbers(array);
    let functionalFilterArray = functionalFilterNegativeNumbers(array);
    it('return is not null',() =>{
        expect(filterArray).not.toBeNull();
        expect(functionalFilterArray).not.toBeNull();
    });
    it('the function returns always positive numbers',() =>{
        for(let i = 0; i < filterArray.length; i++){
            expect(filterArray[i]).toBeGreaterThanOrEqual(0);
        }
        for(let j = 0; j < functionalFilterArray.length; j++){
            expect(functionalFilterArray[j]).toBeGreaterThanOrEqual(0);
        } 
    })
    it('the function returns the correct value', () =>{
        for(let i = 0; i < filterArray.length; i++){
            expect(filterArray).toEqual(expectedArray);
        }
        for(let j = 0; j < functionalFilterArray.length; j++){
            expect(functionalFilterArray).toEqual(expectedArray);
        } 
    })
    it('the function returns an array',() =>{
        expect(Array.isArray(filterArray)).toBeTruthy();
        expect(Array.isArray(functionalFilterArray)).toBeTruthy();
    })
})

describe('mapNumbersIntoStrings',()=> {
    let array = [-4,8,-20,32,0];
    let expectedArray = ['-4','8','-20','32','0']
    let filterArray = mapNumbersIntoStrings(array);
    let functionalFilterArray = functionalMapNumbersIntoStrings(array);
    it('return is not null',() =>{
        expect(filterArray).not.toBeNull();
        expect(functionalFilterArray).not.toBeNull();
    });
    it('the function returns strings',() =>{
        for(let i = 0; i < filterArray.length; i++){
            expect(typeof filterArray[i]).toEqual('string');
        }
        for(let j = 0; j < functionalFilterArray.length; j++){
            expect(typeof functionalFilterArray[j]).toEqual('string');
        } 
    })
    it('the function returns an array',() =>{
        expect(Array.isArray(filterArray)).toBeTruthy();
        expect(Array.isArray(functionalFilterArray)).toBeTruthy();
    })
    it('the function returns the correct value', () =>{
        for(let i = 0; i < filterArray.length; i++){
            expect(filterArray).toEqual(expectedArray);
        }
        for(let j = 0; j < functionalFilterArray.length; j++){
            expect(functionalFilterArray).toEqual(expectedArray);
        } 
    })
})

describe('printType', () => {
    global.console = {
        log : jest.fn()
    }
    it('the function returns a string',() =>{
        printType('Hi');
        expect(global.console.log).toHaveBeenCalledWith('string');
    })
    jest.resetAllMocks();
    it('the function returns a number',() =>{
        printType(1);
        expect(global.console.log).toHaveBeenCalledWith('number');
    })
    jest.resetAllMocks();    
    it('the function returns a object',() =>{
        printType({});
        expect(global.console.log).toHaveBeenCalledWith('object');
    })
})

describe('isPalindrome',() =>{
    let result = isPalindrome('madam');
    let falseResult = isPalindrome('Hi');
    it('the function returns a boolean',() =>{
        expect(typeof result).toEqual('boolean');
    })
    it('the function returns true',() =>{
        expect(result).toBeTruthy();
    })
    it('the function returns false',() =>{
        expect(falseResult).not.toBeTruthy();
    })
})

describe('Person', () =>{
    let personObj = new Person('Alejandro',20);
    global.console = {
        log : jest.fn()
    }
    it('the function should returns an object',() =>{
        personObj.printName();
        expect(global.console.log).toBeCalledWith('object');
    })
    it('the function returns the instance how its supposed',() =>{
        expect(personObj).toMatchObject({
            name : 'Alejandro',
            age : 20
        })
    })
})

describe('printOutPersonAge', () => {
    let personObj = new Person('Alejandro',20);
    global.console = {
        log : jest.fn()
    }
    it('the function was called with Alejandro', () =>{
        printOutPersonAge(personObj);
        expect(global.console.log).toBeCalledWith('Alejandro');
    })
})









