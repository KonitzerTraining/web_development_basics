var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    var data;

    if(xhr.readyState === xhr.DONE) {
       if(xhr.status > 199 && xhr.status < 300) {
           data = JSON.parse(xhr.responseText);
           console.log(data, typeof data);
       }
    }
};

xhr.open('GET', 'http://localhost:3000/posts');
xhr.send();


