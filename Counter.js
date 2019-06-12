var counters = $(".count");
var countersQuantity = counters.length;
var counter = [];
var marker = true;
for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}

var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 20);
}

$(window).scroll(function () {
    if (window.scrollY >= $('.section').offset().top - window.innerHeight && marker) {
        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
        marker = false;
    }
});