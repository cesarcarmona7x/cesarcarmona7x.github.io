window.onload=()=>{
    let usuario=JSON.parse(localStorage.getItem("usuario"));
    let arrayTweets=[]
    document.getElementById("usuario").innerHTML="Hola, "+usuario.nombre;
    document.getElementById("imgUser").src='./img/'+usuario.imagen;
    let txtTweet=document.getElementById("txtTweet");
    let btnTweet=document.getElementById("btnTweet");
    btnTweet.addEventListener('click',(e)=>{
        if(txtTweet.value.trim()!=""){
            let obj={
                img:usuario.imagen,
                nombre:usuario.nombre,
                mensaje:txtTweet.value,
                username:usuario.username,
            };
            arrayTweets.push(obj);
            crearPost();
            txtTweet.value="";
        }
    });
    txtTweet.addEventListener('keyup',(e)=>{

    });
    function crearPost(){
        var todo="";
        arrayTweets.forEach(tweet=>{
            todo+=`<div class="post">
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
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML=todo;
    }
}