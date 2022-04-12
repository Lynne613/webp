var CODE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var codeArray = [];
var number = 0;

function createCode() {
    var index = parseInt(Math.random() * 26);
    return CODE.charAt(index);
};

function createLabel(code) {
    var label = document.createElement("label");
    label.className = "label";
    label.style.top = "50px";
    label.innerHTML = code;
    label.code = code;

    var html = document.documentElement;


    var labelX = parseInt(Math.random() * html.clientWidth);
    if (labelX > 100) {
        labelX -= 20;
    }

    label.style.left = labelX + "px";

    return label;

};

window.onload = function() {
    document.getElementById("startBtn").disabled = false;
    document.documentElement.onkeydown = function(event) {
        var keyCode = event.keyCode;
        var code = String.fromCharCode(keyCode);
        for (var i = 0; i < codeArray.length; i++) {

            var label = codeArray[i];
            if (label.code == code) {
                clearInterval(label.interval_id);
                label.parentNode.removeChild(label);
                codeArray.splice(i, 1);
                number += 10;

                document.getElementById("msg").innerHTML = number + "分";
                break;
            }
        }
    };

};

function runLabelLeft(label) {
    var width = Math.max(document.documentElement.clientLeft, document.documentElement.scrollLeft);
    label.interval_id = setInterval(function() {
        var Left = parseInt(label.style.Left);
        Left += 1;
        if (Left > width - 30) {
            removeLabel(label, false);
        } else {
            label.style.Left = Left + "px";
        }
    }, 10);
}

function removeLabel(label, flag) {
    clearInterval(label.interval_id);
    label.parentNode.removeChild(label);
    codeArray.shift();
    number -= 20;
    document.getElementById("msg").innerHTML = number + "分";
}

var game_id = null;

function startGame(startButton) {

    startButton.disabled = true;

    game_id = setInterval(function() {
        var code = createCode();

        var label = createLabel(code);

        runLabelLeft(label);


        document.body.appendChild(label);
        codeArray.push(label);
    }, 1000);
}


function stopGame() {
    clearInterval(game_id);
    for (var i = 0; i < codeArray.length; i++) {
        clearInterval(codeArray[i].interval_id);
        codeArray[i].parentNode.removeChild(codeArray[i]);
    }
    codeArray = [];
    document.getElementById("startBtn").disabled = false;
}