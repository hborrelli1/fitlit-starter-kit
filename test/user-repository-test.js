const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/user-repository');

describe('UserRepository', function() {
  let user1Info
  let user2Info

  beforeEach(function(){
    user1Info = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }
    user2Info = {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    }
  })

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  })

  it("can get a user's info", function() {
    const data = [
      user1Info,
      user2Info
    ]
    const userRepository = new UserRepository(data)

    expect(userRepository.getUserInfo(2)).to.equal(user2Info)
  })

  it("can calculate the average step goal for all users", function() {
    const data = [
      user1Info,
      user2Info
    ]
    const userRepository = new UserRepository(data)

    expect(userRepository.calculateAvgTotalStepGoal()).to.equal(7500)
  })
})
