var button = document.getElementById('clickButton');
var message = document.getElementById('message');
var clickCount = 0;
button.addEventListener('click', function () {
    clickCount++;
    message.textContent = "Button clicked ".concat(clickCount, " time").concat(clickCount !== 1 ? 's' : '', "!");
});
