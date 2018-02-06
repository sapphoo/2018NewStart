window.onload = function () {
    var randomizeButton = document.querySelector('.randomize');
    var customName = document.getElementById('customname');
    var story = document.querySelector('.story');
    randomizeButton.addEventListener('click', result);

    function randomize(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
    var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

    function result() {
        // story.style.display = 'false';
        var name = Number(customName.value);
        var result = storyText;

        if (name !== '') {
            result.replace('Bob', name);
        }

        result = result.replace(':insertx:', randomize(insertX)).replace(':inserty:', randomize(insertY)).replace(':insertz:', randomize(insertZ));

        if (document.getElementById('uk').checked) {
            var weight = Math.round(300 * 0.0714286) + ' stone';
            var temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
            result = result.replace('94 farenheit', temperature);
            result = result.replace('300 pounds',weight);
        }

        story.textContent = result;
        story.style.visibility = 'visible';
    }
}