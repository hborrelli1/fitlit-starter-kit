const userName = document.getElementById('userName');
const address = document.getElementById('address');
const email = document.getElementById('email');
const strideLenth = document.getElementById('strideLenth');
const dailyStepGoal = document.getElementById('dailyStepGoal');
const friends = document.getElementById('friends');

let userRepo = new UserRepository(userData);

let randNum = Math.floor(Math.random() * 50) + 1;

let currentUser = userRepo.getUserInfo(randNum);
console.log(randNum);
console.log(currentUser);

let names = getFriends(currentUser.friends);
// console.log(currentUserFriends);

function getFriends(idArray) {
  let friendsNames = idArray.map(function(id) {
    // const matchingUserData = userData.find(function(userInfo) {
    //   return userInfo.id === id
    // })
    // return matchingUserData.name
    return userData.find(function(userInfo) {
      return userInfo.id === id;
    }).name;
  })
  console.log(friendsNames.join(', '));
  return friendsNames.join(', ');
}

// creat array of currentUsers friends (objects)
// Loop through each object to push name (li with name) to usersFriends below.
// usersFriends then gets pushed to the friends element.

// Populate user information in dom
userName.innerText = currentUser.name;
address.innerText = currentUser.address;
email.innerText = currentUser.email;
strideLength.innerText = currentUser.strideLength;
dailyStepGoal.innerText = currentUser.dailyStepGoal;
friends.innerText = names;

// let usersFriends = '';

// currentUser.friends.forEach(friend => usersFriends += friend.friends);
// console.log(usersFriends);

// friends.insertAdjacentHTML('beforeend', usersFriends);


// Grab user from userRepository by id (randNum)

// Instantiate as currentUser
