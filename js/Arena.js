Arena = function(game) {
    // The necessary variables
    this.game = game;
    var scene = game.scene;

    // Create the main light of the screen
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), scene)

    // Create a material
    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene)
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/brick.jpg", scene)
    materialGround.diffuseTexture.uScale = 4.0
    materialGround.diffuseTexture.vScale = 4.0

    var materialWall = new BABYLON.StandardMaterial("wallTexture", scene)
    materialWall.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene)

    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene)
    ground.scaling = new BABYLON.Vector3(2, 10, 3)
    ground.scaling.z = 2
    ground.material = materialGround

    var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene)
    mainBox.scaling.y = 1
    mainBox.position = new BABYLON.Vector3(5, ((3/2)*mainBox.scaling.y), 5)
    mainBox.rotation.y = (Math.PI*45)/180
    mainBox.material = materialWall

    var mainBox2 = mainBox.clone("box2")
    mainBox2.scaling.y = 2
    mainBox2.position = new BABYLON.Vector3(5, ((3/2)*mainBox2.scaling.y), -5)

    var mainBox3 = mainBox.clone("box3")
    mainBox3.scaling.y = 3
    mainBox3.position = new BABYLON.Vector3(-5, ((3/2)*mainBox3.scaling.y), -5)

    var mainBox4 = mainBox.clone("box4")
    mainBox4.scaling.y = 4
    mainBox4.position = new BABYLON.Vector3(-5, ((3/2)*mainBox4.scaling.y), 5)

    var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene)
    cylinder.position.y = 20/2
    cylinder.material = materialWall

}
