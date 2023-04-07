class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
    //return this.items.indexOf(item, 0);
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList'); //if(this.items.length====)
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
