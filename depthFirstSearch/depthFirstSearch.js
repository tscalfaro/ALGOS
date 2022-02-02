//THE PROMPT
//ADD A DEPTHFIRST SEARCH METHOD TO THE NODE CLASS AND RETURN THE VALUES IN AN ARRAY

//MY ANSWER
// O(V + E) TIME | O(V) SPACE V = VERTICES E=EDGES
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
          array.push(this.name)
          for (const child of this.children){
              child.depthFirstSearch(array)
          }
          return array
    }
  }