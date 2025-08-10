type User = {
  id: number;
  name: string;
};

const users: Array<User> = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

const userIdsToSearch = [2, 3, 5];

// O(n + m) time complexity where:
// n = length of users array
// m = length of userIdsToSearch array

const searchUserNames = (userIdsToSearch: number[]) => {

  // O(n) to create the hash map
  const userMap= Object.fromEntries(users.map(user => [user.id, user.name]));

  // O(m) for the lookup operations
  const userNames = userIdsToSearch.map(id => userMap[id] || null);

  return userNames;
}

console.log(searchUserNames(userIdsToSearch));
