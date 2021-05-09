document.addEventListener("DOMContentLoaded", () => {
    new Game('renderCanvas');
}, false);

Game = function(canvasId) {
  var canvas = document.getElementById(canvasId)
  var engine = new BABYLON.Engine(canvas, true)
  var _this = this

  this.scene = this._initScene(engine)

  var _player = new Player(_this, canvas)
  var _arena = new Arena(_this)

  engine.runRenderLoop(() => {
    _this.scene.render()
  })

  window.addEventListener("resize", () => {
    if (engine) {
      engine.resize()
    }
  }, false)
}

Game.prototype = {
  _initScene: function(engine) {
    var scene = new BABYLON.Scene(engine)
    scene.clearColor= new BABYLON.Color3(0.9, 0.9, 0.9)
    return scene
  }
}
