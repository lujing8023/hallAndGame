"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'hallScene');
// Choose/Script/hallScene.js

'use strict';

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
    onLoad: function onLoad() {
        this.label.string = this.text;
    },

    // called every frame
    update: function update(dt) {},

    buttonClick: function buttonClick(event, customEventData) {
        switch (customEventData) {
            case 'game1':
                // cc.director.loadScene('gameScene');
                break;
            case 'game2':

                break;
        }
    }
});

cc._RF.pop();