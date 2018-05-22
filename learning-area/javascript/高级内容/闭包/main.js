var counter = (function () {
    var privateCounter = 0;
    function changeBy(num) {
        privateCounter += num;
    }
    return {
        increase: function () {
            return changeBy(1);
        },
        decrease: function () {
            return changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
})();

function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
    return function () {
        showHelp(help);
    };
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];
    /*0 错误方法
      for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
      }
    */
    //1 makeHelpCallback 函数为每一个回调创建一个新的词法环境。在这些环境中，help 指向 helpText 数组中对应的字符串。
    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }

    /*2 马上把当前循环项的item与事件回调相关联起来
    for (var i = 0; i < helpText.length; i++) {
        (function() {
            var item = helpText[i];
            document.getElementById(item.id).onfocus = function () {
                showHelp(item.help);
            }
        })();
    }
    */

    /*3 let
      for (var i = 0; i < helpText.length; i++) {
        let item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
      }
    */
}



setupHelp();