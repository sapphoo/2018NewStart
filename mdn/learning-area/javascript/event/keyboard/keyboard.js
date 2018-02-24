var metaChar = false;
var exampleKey = 16;
function keyEvent(event) {
    var key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
    if (key == exampleKey) { metaChar = true; }
    if (key != exampleKey) {
        if (metaChar) {
            alert("Combination of metaKey + " + keychar)
            metaChar = false;
        } else { alert("Key pressed " + key); }
    }
}
function metaKeyUp(event) {
    var key = event.keyCode || event.which;
    if (key == exampleKey) { metaChar = false; }
}