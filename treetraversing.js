// Duong Vo
// Tree Traversal (part of the tab source)
// May 24 2022

const depthFirstPrint = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr.val);


    if (curr.left !== null) {
      stack.push(curr.left);
    }

    if (curr.right !== null) {
      stack.push(curr.right);
    }
  }
}

depthFirstPrint(root);
