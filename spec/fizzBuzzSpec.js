describe('FizzBuzz test' , () => {

  it('Should return one for 1' , () => {
    expect(fizzBuzzTranslate('1')).toEqual('1')
  })

  it('Should return two for 2' , () => {
    expect(fizzBuzzTranslate('2')).toEqual('2')
  })

  it('Should return Fizz for 3' , () => {
    expect(fizzBuzzTranslate('3')).toEqual('Fizz')
  }) 

  it('Should return Buzz for 5' , () => {
    expect(fizzBuzzTranslate('5')).toEqual('Buzz')
  })

  it('Should return FizzBuzz for 15' , () => {
    expect(fizzBuzzTranslate('15')).toEqual('FizzBuzz')
  })
})
