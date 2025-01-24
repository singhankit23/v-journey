function goToLayer2() {
    document.getElementById('layer1').classList.add('hidden');
    document.getElementById('layer2').classList.remove('hidden');
}

function goToLayer3() {
    document.getElementById('layer2').classList.add('hidden');
    document.getElementById('layer3').classList.remove('hidden');
}

function goToLayer4() {
    document.getElementById('layer3').classList.add('hidden');
    document.getElementById('layer4').classList.remove('hidden');
}

function finalDecision() {
    alert("Yay! You are my Valentine, Priyal! 💌");
    document.getElementById('layer4').classList.add('hidden');
    document.getElementById('layer1').classList.remove('hidden');
}

function goToLayer1() {
    document.getElementById('layer2').classList.add('hidden');
    document.getElementById('layer3').classList.add('hidden');
    document.getElementById('layer4').classList.add('hidden');
    document.getElementById('layer1').classList.remove('hidden');
}
