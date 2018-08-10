function Node(value) {

    this.value = value;
    this.children = [];
    this.parent = null;

    this.setParentNode = function(node) {
        this.parent = node;
    }

    this.getParentNode = function() {
        return this.parent;
    }

    this.addChild = function(node) {
        node.setParentNode(this);
        this.children[this.children.length] = node;
    }

    this.getChildren = function() {
        return this.children;
    }

    this.removeChildren = function() {
        this.children = [];
    }
}

var root = new Node('interface');
root.addChild(new Node('Loopback'));
root.addChild(new Node('Tunnel'));
root.addChild(new Node('GigabitEthernet'));


// var children = root.getChildren();
// for(var i = 0; i < children.length; i++) {
//     for(var j = 0; j < 5; j++) {
//         children[i].addChild(new Node('second level child ' + j));
//     }
// }
// console.log(root);
// children[0].removeChildren();
// console.log(root);
// console.log(root.getParentNode());
// console.log(children[1].getParentNode());