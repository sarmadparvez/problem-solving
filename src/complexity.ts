type User = {
  id: number;
  name: string;
};

const users: Array<User> = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
]; // m

const userIdsToSearch = [2, 3, 5]; // n


export const searchUserNames = (userIdsToSearch: number[]) => {
  const userNames = [];

  for (const id of userIdsToSearch) {

    const user = users.find(u => u.id === id);

    userNames.push(user ? user.name : null);
  }
   return userNames
}

console.log(searchUserNames(userIdsToSearch));

