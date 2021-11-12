window.onload = () => {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let arrayTweets = [];
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './js/tweets.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState = 4 && xobj.status == '200') {
            arrayTweets = JSON.parse(xobj.responseText);
            console.log(arrayTweets);
            crearPost();
        }
    };
    xobj.send();
    document.getElementById("usuario").innerHTML = "Hola, " + usuario.nombre;
    document.getElementById("imgUser").src = './img/' + usuario.imagen;
    let txtTweet = document.getElementById("txtTweet");
    let btnTweet = document.getElementById("btnTweet");
    btnTweet.addEventListener('click', (e) => {
        if (txtTweet.value.trim() != "") {
            let obj = {
                img: usuario.imagen,
                nombre: usuario.nombre,
                mensaje: txtTweet.value,
                username: usuario.username,
            };
            arrayTweets.push(obj);
            crearPost();
            txtTweet.value = "";
        }
    });
    txtTweet.addEventListener('keyup', (e) => {

    });
    function crearPost() {
        var todo = "";
        arrayTweets.forEach(tweet => {
            comentarios = "";
            tweet.comentarios.forEach(comment => {
                comentarios += `<div class="comment">
            <div>
                <img src="img/${comment.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${comment.nombre}</span>
                    <span>@${comment.username}</span>
                </h2>
                <div class="textTweet">
                    ${comment.comentario}
                </div>
            </div>
        </div>`;
            });
            todo += `<div class="post">
            <div>
                <img src="img/${tweet.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${tweet.nombre}</span>
                    <span>@${tweet.username}</span>
                </h2>
                <div class="textTweet">
                    ${tweet.mensaje}
                </div>
                <div class="likeRetweet">
                    <h2>
                        <span>
                            <i class="far fa-heart"></i>
                            ${tweet.likes}
                        </span>
                    </h2>
                    <h2>
                        <span>
                            <i class="fas fa-share"></i>
                            ${tweet.retweets}
                        </span>
                    </h2>
                </div>
                <div class="comments">
                    ${comentarios}
                </div>
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML = todo;
    }
}