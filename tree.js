class TreeStruct {
  constructor(data) {
    this.data = data
    this.leftChild = null
    this.rightChild = null
  }
}
class Tree {
  constructor(data) {
    const node = new TreeStruct(data.splice(0, 1))
    this.createFullTree(node, data, 0)
    return JSON.stringify(node)
  }
  createFullTree(node, data, i) {
    i++
    while (data[i] !== undefined) {
      const node = new TreeStruct(data[i])
      this.createFullTree(node.leftChild, data, i)
      this.createFullTree(node.rightChild, data, i)
    }
    return node
  }
}
console.log(new Tree(['A', 'B', 'C', 'D']))
