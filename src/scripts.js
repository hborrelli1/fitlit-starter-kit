const userName = document.getElementById('userName');
const address = document.getElementById('address');
const email = document.getElementById('email');
const strideLenth = document.getElementById('strideLenth');
const dailyStepGoal = document.getElementById('dailyStepGoal');
const friends = document.getElementById('friends');
const waterComsumptionToday = document.getElementById('waterComsumptionToday');

let userRepo = new UserRepository(userData);
let randNum = Math.floor(Math.random() * 50) + 1;
let currentUser = userRepo.getUserInfo(randNum);
let hydrationDataset = new Hydration(hydrationData);

let todaysDate = '2019/09/22';
/*
page loads
userID generated
userRepo created
hydration for user is fetched

*/
let userWaterConsumption = hydrationDataset.getTotalConsumedByDate(randNum, todaysDate);
console.log(userWaterConsumption);

waterComsumptionToday.innerHTML = userWaterConsumption;

// function getHydrationInfo(userID) {
//
// }
// creat array of currentUsers friends (objects)
// Loop through each object to push name (li with name) to usersFriends below.
// usersFriends then gets pushed to the friends element.

// Populate user information in dom
userName.innerText = currentUser.name;
address.innerText = currentUser.address;
email.innerText = currentUser.email;
strideLength.innerText = currentUser.strideLength;
dailyStepGoal.innerText = currentUser.dailyStepGoal;

// Populate Hydration information
// waterComsumptionToday.innerText =



// let usersFriends = '';

// currentUser.friends.forEach(friend => usersFriends += friend.friends);
// console.log(usersFriends);

// friends.insertAdjacentHTML('beforeend', usersFriends);


// Grab user from userRepository by id (randNum)

// Instantiate as currentUser
