'use strict';

const depthFirstSearch = require('./depthFirstSearch');

const tree = {
  label: 'a',
  children: [{
    label: 'b',
    children: [{
      label: 'c',
      children: []
    }, {
      label: 'd',
      children: []
    }]
  }, {
    label: 'e',
    children: [{
      label: 'f',
      children: []
    }, {
      label: 'g',
      children: []
    }]
  }]
};

function test(label) {
  let result = depthFirstSearch(label, tree);
  if (result.label === label) return Promise.resolve();
  else return Promise.reject();
}

function testRoot() {
  return test('a');
}

function testLeaves() {
  let leaves = ['c', 'd', 'f', 'g'];
  let promiseArr = leaves.map(leaf => test(leaf));
  return Promise.all(promiseArr);
}

console.log("going to test");
testRoot().then(testLeaves).then(() => {
  console.log("Success");
}).catch(() => {
  console.log("Fail");
});
