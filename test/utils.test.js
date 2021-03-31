  
// IMPORT MODULES under test here:
 import { findById } from '../products/utils.js';

const test = QUnit.test;

test('test findById', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   //fake array
    const whateverArray = [];
    whateverArray.push({
        'id': '1',
        'quantity': '4'
    })
    whateverArray.push({
        'id': '2',
        'quantity': '4'
    })
    //set expectation
    const expected = whateverArray[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    //whateverArray, whateverId
    const actual = findById(whateverArray, '1');

    //Expect
    // Make assertions about what is expected versus the actual result
    //position 0 of whateverArray has Id of 1, whateverId has string of '1'
    expect.deepEqual(actual, expected);
});