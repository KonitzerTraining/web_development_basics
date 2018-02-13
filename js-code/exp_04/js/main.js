var http = {}; // new Object();
http.get = function () {
    return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === xhr.DONE) {
                if(xhr.status > 199 && xhr.status < 300) {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.open('GET', 'http://localhost:3000/posts');
        xhr.send();
    });
};
http.get()
    .then(function (res) {
        return JSON.parse(res);
    })
    .then(function (data) {
        console.log(data);
    });



