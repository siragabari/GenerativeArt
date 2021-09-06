"use-strict";

draw();

function draw() {
    console.log("draw");
    drawArtwork1();
    drawArtwork2();
    drawArtwork3();
    drawArtwork4();
    drawArtwork5();
    drawArtwork6();
    drawArtwork7();
    drawArtwork8();
    drawArtwork9();
}

function drawArtwork1 () {
    console.log("drawArtwork1");
    for (let i=0; i<10; i++) {
        let box = document.createElement('div');
        box.className = "box";
        box.style.height = 50 + 20*i + "px";
        box.style.width = 50 + 20*i + "px";
        document.getElementById("artwork1").appendChild(box);
    }
}

function drawArtwork2 () {
    console.log("drawArtwork2");
    let degrees = 0;
    for(let i = 0; i < 30; i++){
        degrees += 10;
        let box = document.createElement('div');
        box.className = "box";
        box.style.transform = 'rotate(' + degrees + 'deg)';
        document.getElementById("artwork2").appendChild(box);
    };
}

function drawArtwork3 () {
    console.log("drawArtwork3");
    for (let i=0; i<20; i++) {
        let circle = document.createElement('div');
        circle.className = "circle";
        circle.style.height = 10*i + "px";
        circle.style.width = 10*i + "px";
        document.getElementById("artwork3").appendChild(circle);
    }
}

function drawArtwork4 () {
    console.log("drawArtwork4");
    for(var i = 0; i < 9; i++){
        let box = document.createElement('div');
        box.className = "box";
        box.style.marginRight = 125 - 41 * i + "px";
        box.style.marginBottom = 125 - 41 * i + "px";
        document.getElementById("artwork4").appendChild(box);
    };
}

function drawArtwork5 () {
    console.log("drawArtwork5");
    for(let i=0; i <= 10; i++) {
        let circle = document.createElement('div');
        circle.className = "circle";
        if (i <= 5) {
            circle.style.height = 2*i + "px";
            circle.style.width = 2*i + "px";
        }else {
            circle.style.height = 15 + i*(i-5)*(i-6) + "px";
            circle.style.width = 15 + i*(i-5)*(i-6) + "px";
        }
        document.getElementById("artwork5").appendChild(circle);
    }
}

function drawArtwork6 () {
    console.log("drawArtwork6");
    for(let i=0; i <= 15; i++) {
        let circle = document.createElement('div');
        circle.className = "circle";
        circle.style.height = 50 + "px";
        circle.style.width = 50 + "px";
        var y = Math.sin((180 / 15 * i) * (Math.PI / 180)) * 100;
        var x = Math.cos((180 / 15 * i) * (Math.PI / 180)) * 100;
        circle.style.marginTop = -y + "px";
        circle.style.marginLeft = -x + "px";
        document.getElementById("artwork6").appendChild(circle);
    }
}


function drawArtwork7 () {
    console.log("drawArtwork7");
    for(let i = 0; i < 20; i++){
        let circle = document.createElement('div');
        circle.className = "circle";
        circle.style.height = 10*i + "px";
        circle.style.width = 10*i + "px";
        circle.style.marginLeft = 100 + 20 * i + "px";
        circle.style.marginTop = 100 - 10 * i + "px";
        document.getElementById("artwork7").appendChild(circle);
    };
}


function drawArtwork8 () {
    console.log("drawArtwork8");
    let degrees = -40;
    for (let i=0; i<15; i++) {
        degrees += 9;
        let box = document.createElement('div');
        box.className = "box";
        box.style.height = 50 + 10*i + "px";
        box.style.width = 50 + 10*i + "px";
        box.style.transform = 'rotate(' + degrees + 'deg)';
        box.style.marginRight = 150 - 10*i + "px";
        box.style.marginTop = 30 + i + "px";
        document.getElementById("artwork8").appendChild(box);
    }
}


function drawArtwork9 () {
    console.log("drawArtwork9");
    for(var i = 0; i < 5; i++){
        let circle = document.createElement('div');
        circle.className = "circle";
        circle.style.height = 50 + 30*i + "px";
        circle.style.width = 50 + 30*i + "px";
        document.getElementById("artwork9").appendChild(circle);
        let box = document.createElement('div');
        box.className = "box";
        box.style.height = 50 + 30*i + "px";
        box.style.width = 50 + 30*i + "px";
        document.getElementById("artwork9").appendChild(box);
    };
}

