Player = function(game, canvas) {
    // The game scene
    this.scene = game.scene

    // Initializing the camera
    this._initCamera(this.scene, canvas)

};

Player.prototype = {
    _initCamera : function(scene, canvas) {
        // Create the camera
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene)

        // The camera looks at the point zero the first time
        this.camera.setTarget(BABYLON.Vector3.Zero())

        // The camera move depending on the canvas
        this.camera.attachControl(canvas, true)
    }
}
