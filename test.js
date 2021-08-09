$(function () {
    var title = document.title;
    var ind = title.indexOf("NCD");
    if (ind > -1) {
        document.title = document.title.substr(document.title.indexOf("-") + 1);
    }
});