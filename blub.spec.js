import {expect, assert} from 'chai';
import {curDrag, persistence, multDigits} from './blub';

describe('doSomething', ()=>{
    it('should do something', ()=>{
        expect(1).to.eql(1)
    })
})

describe('curDragon', ()=>{
    it('should return a string', ()=>{
        var result = curDrag('blubba')('medium')('water')
        expect(result).to.be.a('string');
    })

    it('should return correct response', ()=>{
        const result = curDrag('blubba')('medium')('water')
        const expectedResult = 'blubba is a medium sized dragon that breathes water'
        expect(result).to.eql(expectedResult)
    })
})

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