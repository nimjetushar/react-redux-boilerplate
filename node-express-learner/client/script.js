(function (window) {
    var baseUrl = "http://localhost:8081/"

    window.readData = function () {
        httpRequest(baseUrl + 'getData', 'get').then(function (data) {
            $('.content_area').empty().append(data)
        })
    }

    window.postData = function () {
        var obj = {};
        obj.name = $('#name').val();
        obj.city = $('#city').val();
        if (obj && obj.name && obj.city) {
            httpRequest(baseUrl + 'postData', 'post', obj).then(function (data) {
                $('.msg_wrapper').empty().append(data);
                setTimeout(function () {
                    $('.msg_wrapper').empty();
                })
            });
        }
    }

    function httpRequest(url, method, data) {
        var xhttp = new XMLHttpRequest();

        var xhrPromise = new Promise(function (resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    resolve(xhttp.responseText);
                }
            };
        });

        xhttp.open(method, url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        
        xhttp.send(JSON.stringify(data));

        return xhrPromise;
    }
})(window);