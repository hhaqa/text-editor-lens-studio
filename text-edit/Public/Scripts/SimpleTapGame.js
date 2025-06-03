// SimpleTapGame.js
// Version: 1.0.0
// Event: On Awake
// Description: Basic tap-based game. Tap the target to increase score.

// @input SceneObject target
// @input Component.Text scoreText

var score = 0;

function setRandomPosition(obj) {
    var st = obj.getComponent("Component.ScreenTransform");
    if (st) {
        var x = Math.random() * 2 - 1;
        var y = Math.random() * 2 - 1;
        st.anchors.setCenter(new vec2(x, y));
    }
}

function updateScore() {
    if (script.scoreText) {
        script.scoreText.text = score.toString();
    }
}

function onTargetTapped() {
    score++;
    updateScore();
    setRandomPosition(script.target);
}

if (script.target) {
    var interaction = script.target.getComponent("Component.InteractionComponent");
    if (interaction) {
        interaction.onTouchStart.add(onTargetTapped);
    }
    setRandomPosition(script.target);
}

updateScore();
