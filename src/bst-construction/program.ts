// remove on a single node tree should simply do nothing
// value is strictly larger than it's node to the left
// value is equal to or larger than node to the right

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode: BST | null = this;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new BST(value);
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new BST(value);
          break;
        }
      }
    }

    return this;
  }

  contains(value: number) {
    // Write your code here.
    let currentNode: BST | null = this;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
    return this;
  }

  remove(value: number, parent: BST | null = null): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      } else {
        return this;
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this);
      } else {
        return this;
      }
    } else {
      if (parent) {
        if (this.left && this.right) {
          const rightMinValue = this.right.getMinValue()!;
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          const rightMinValue = this.right.getMinValue()!;
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else {
          if (parent.left === this) {
            parent.left = null;
          } else if (parent.right === this) {
            parent.right = null;
          }
        }
      } else {
        if (this.left && this.right) {
          const rightMinValue = this.right.getMinValue()!;
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          const rightMinValue = this.right.getMinValue()!;
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else {
          return this;
        }
      }
    }

    return this;
  }

  getMinValue() {
    let currentNode: BST | null = this;
    while (currentNode) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        return currentNode.value;
      }
    }
  }
}
