var colorLookup = ["green", "blue", "orange", "purple"];

$(document).ready(function () {
    generateImages();
});


function generateImages() {
    $(".imgpl").empty();
    var colors = generateRandom(0, 4, 4);
    var colorNum = generateRandom(5, 11, 1);
    var morans = generateRandom(2, 10, 4);
    //console.log(morans);
    for (var i = 0; i < 4; i++) {
        var input = $("<input type='radio' name='choice' value=" +
            "regular_{0}_{1}_{2}.png".format(colorNum[0], morans[i], colorLookup[colors[i]]) +
            ">");

        var image = $("<img src='images/" +
            "regular_{0}_{1}_{2}.png".format(colorNum[0], morans[i], colorLookup[colors[i]]) +
            "' style='max-width:100%;max-height:100%;'/>");       
        $("#img" + i).append(input);
        $("#img" + i).append(image);
    }


}

function generateRandom(min, max, length) {
    var arr = []
    while (arr.length < length) {
        var randomnumber = Math.floor(Math.random() * (max - min)) + min;
        if (arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
}

String.prototype.format = function () {
    var formatted = this;
    for (var arg in arguments) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

