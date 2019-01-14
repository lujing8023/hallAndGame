cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    buttonClick:function(event , customEventData){
        switch(customEventData){
            case 'game1':
                // cc.director.loadScene('gameScene');
                break;
            case 'game2':

                break;
        }
    }
});
