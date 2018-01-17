import {expect, assert} from 'chai';
import { persistence, multDigits} from './blub';
describe('Persistence', ()=>{
    it('should return a number', ()=>{
        const result = persistence(355)
        expect(result).to.be.a('number')
    })

    it('should return correct loop count', ()=>{
        var result = persistence(355)
        const expectedResult = 4
        expect(result).to.eql(expectedResult)
    })
})

describe('multDigit' ,()=>{
    it('should return the product of input', ()=>{
        const result = multDigits(123)
        const expectedResult = 6
        expect(result).to.eql(expectedResult)
    })
})