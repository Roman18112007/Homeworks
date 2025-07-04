//1
const calculateTotalBalance = (users) =>
  users.reduce((total, { balance }) => total + balance, 0);
console.log(calculateTotalBalance(users));
//2
const getUsersWithFriend = (users, friendName) =>
  users.filter(({ friends }) => friends.includes(friendName));
users.map(({ name }) => name);
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
//3
const getNamesSortedByFriendsCount = (users) => [...users];
users.sort((a, b) => a.friends.length - b.friends.length);
users.map(({ name }) => name);
console.log(getNamesSortedByFriendsCount(users));
//4
const getSortedUniqueSkills = (users) => {
  const allSkills = users.flatMap(({ skills }) => skills);
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};
console.log(getSortedUniqueSkills(users));
