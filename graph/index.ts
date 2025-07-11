const graph: Map<string, string[]> = new Map();

graph.set("Bob", ["Jhon", "Castor", "Frieren"]);
graph.set("Jhon", ["Rebeca", "Zhongli", "Jinwoo"]);
graph.set("Rebeca",  []);
graph.set("Jinwoo",  []);
graph.set("Zhongli", []);
graph.set("Frieren", []);
graph.set("Castor",  []);

function getPerson(user: string, target: string) {
  const queue: string[] = [];
  const userFriends = graph.get(user);

  if(!userFriends) return false; 
  addPeople(userFriends, queue);

  while(queue.length > 0) {
    const currentUser = queue.shift();

    if(!currentUser) {
      console.log("user is undefined");
      return false; 
    };
    
    if(currentUser === target) {
      console.log('Target Found: ', target);
      return true;
    } else {
      const userFriends = graph.get(currentUser);

      if(!userFriends) {
        console.log("userFriends is undefined");
        return false;
      } else if(userFriends.length === 0) {
        console.log('No friends');
        continue;
      };

      for(const friends of userFriends) {
        queue.push(friends)
      };
    }
  };

  return false;
};

function addPeople(arr: string[], queue: string[]) {
  for(const person of arr) {
    queue.push(person);
  };
};

getPerson('Bob', 'Jinwoo')