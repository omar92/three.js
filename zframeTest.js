var box;
function main() {
    

    box = document.getElementById("box");
    var c = document.getElementById("color");
    var i = 0;
    // function render() {
    //     i += .9;
    //     box.setAttribute("rotation", i + " " + i + " " + i);
    //     c.setAttribute("rotation", i + " " + 0 + " " + 0);
    //     requestAnimationFrame(render);
    // }
    // requestAnimationFrame(render);

}
onload = main;


AFRAME.registerComponent('rotor', {
    schema: {
        rotationSpeed: { type: 'number' }
    },
    
    init: function () {
        console.log(this);
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) { 
        var i = timeDelta *  this.attrValue.rotationSpeed;
       // console.log(this);
                    this.el.setAttribute("rotation", i + " " + i + " " + i);
    }
});