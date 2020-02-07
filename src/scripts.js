const userName = document.getElementById('userName');
const address = document.getElementById('address');
const email = document.getElementById('email');
const strideLenth = document.getElementById('strideLenth');
const dailyStepGoal = document.getElementById('dailyStepGoal');
const friends = document.getElementById('friends');
const firstName = document.getElementById('firstName');
const totalStepGoal = document.getElementById('totalStepGoal');

let userRepo = new UserRepository(userData);

const allStepGoals = userRepo.calculateAvgTotalStepGoal();

let randNum = Math.floor(Math.random() * 50) + 1;

let currentUser = new User(userRepo.getUserInfo(randNum));

let names = userRepo.getFriends(currentUser.friends);


function addFriendNames(){
  let friends = names.map(function(name){
    return `<li>${name}</li>`
  })
  return friends.join(' ');
}

firstName.innerHTML = `Welcome back, ${currentUser.returnUsersFirstName()}!`;
userName.innerText = currentUser.name;
address.innerText = currentUser.address;
email.innerText = currentUser.email;
strideLength.innerText = currentUser.strideLength;
dailyStepGoal.innerText = currentUser.dailyStepGoal;
friends.innerHTML = addFriendNames(names);
totalStepGoal.innerText = allStepGoals;
