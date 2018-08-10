var Tree = function(val) {
    this.value = val;
    this.children = [];
}

Tree.prototype.addChild = function(value) {
    this.children.push(new Tree(value));
}

Tree.prototype.contains = function(target){
    var result = false;
    var inner = function(obj){
        if(obj.value == target){
            result = true;
        }
        obj.children.forEach(function(child){
            inner(child);
        })
    }
    inner(this);
    return result;
}

var maple = new Tree("interface");
maple.addChild("FastEthernet");
maple.addChild("GigabitEthernet");
maple.children[0].addChild("0/1");
maple.children[0].addChild("0/2");
maple.children[1].addChild("0/1");
maple.children[1].addChild("0/2");
maple.children[1].addChild("0/3");
maple.children[1].children[2].addChild(".88");
maple.children[1].children[2].addChild(".124");
maple.children[1].children[2].addChild(".134");

maple;
