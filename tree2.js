// https://stackoverflow.com/questions/12036966/generic-tree-implementation-in-javascript
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
root.addChild(new Node('Serial'));

root.children[0].addChild(new Node('0'));       //Adding 0 to interface Loopback                    => interface Loopback0
root.children[1].addChild(new Node('0'));       //Adding 0 to interface Tunnel                      => interface Tunnel0
root.children[1].addChild(new Node('1'));       //Adding 1 to interface Tunnel                      => interface Tunnel1
root.children[1].addChild(new Node('500'));     //Adding 500 to interface Tunnel                    => interface Tunnel500
root.children[2].addChild(new Node('0/0/0'));   //Adding 0/0/0 to interface GigabitEthernet         => interface GigabitEthernet0/0/0
root.children[2].children[0].addChild(new Node('116'));   //Adding 116 to interface GigabitEthernet0/0/0   => interface GigabitEthernet0/0/0.116
root.children[2].children[0].addChild(new Node('259'));   //Adding 259 to interface GigabitEthernet0/0/0   => interface GigabitEthernet0/0/0.259
root.children[2].children[0].addChild(new Node('901'));   //Adding 901 to interface GigabitEthernet0/0/0   => interface GigabitEthernet0/0/0.901
root.children[2].addChild(new Node('0/0/1'));   //Adding 0/0/1 to interface GigabitEthernet         => interface GigabitEthernet0/0/1
root.children[2].addChild(new Node('0/0/2'));   //Adding 0/0/2 to interface GigabitEthernet         => interface GigabitEthernet0/0/2
root.children[2].addChild(new Node('0/0/3'));   //Adding 0/0/3 to interface GigabitEthernet         => interface GigabitEthernet0/0/3
root.children[2].addChild(new Node('0/0/4'));   //Adding 0/0/4 to interface GigabitEthernet         => interface GigabitEthernet0/0/4
root.children[2].addChild(new Node('0/0/5'));   //Adding 0/0/5 to interface GigabitEthernet         => interface GigabitEthernet0/0/5
console.log(root.children[2]);
var childOfEth0 = root.children[2].children[0].getChildren();  //=> childOfEth0[0].value: 116
var tunnel =  root.children[1];
tunnel.addChild(new Node('100'));
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