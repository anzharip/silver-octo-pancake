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
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number): boolean {
    // Write your code here.
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      }
    } else {
      if (this.right) {
        return this.right.contains(value);
      }
    }
    return false;
  }

  remove(value: number, parent: BST | null = null): BST {
    // Write your code here.
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this);
      }
    } else {
      if (parent) {
        if (this.left && this.right) {
          const rightMinValue = this.right.getMinValue();
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          const rightMinValue = this.right.getMinValue();
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
          const rightMinValue = this.right.getMinValue();
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          const rightMinValue = this.right.getMinValue();
          this.value = rightMinValue;
          this.right.remove(rightMinValue, this);
        } else {
          return this;
        }
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  getMinValue(): number {
    if (this.left) {
      return this.left.getMinValue();
    } else {
      return this.value;
    }
  }
}
