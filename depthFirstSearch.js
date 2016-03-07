'use strict';

function depthFirstSearch(label, tree) {
  let stack = [tree];
  while (stack.length > 0) {
    let current = stack[0];
    if (current.label === label) return current.label;
    current.children.forEach(child => stack.push(child));
    stack.pop();
  }
}

module.exports = depthFirstSearch;
