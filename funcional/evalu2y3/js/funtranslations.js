const listItems = [];
window.onload = () => {
    var yodaPanel = document.getElementById("translationOrderYoda");
    var piratePanel = document.getElementById("translationOrderPirate");
    var morsePanel = document.getElementById("translationOrderMorse");
    var dogePanel = document.getElementById("translationOrderDoge");
    let startIndex;
    document.getElementById("btnTranslateYoda").addEventListener("click", () => {
        document.getElementById("tbYoda").disabled = true;
        var text = encodeURIComponent(document.getElementById("tbYoda").value);
        var transobj = new XMLHttpRequest();
        transobj.open("GET", `https://api.funtranslations.com/translate/yoda.json?text=${text}`);
        transobj.overrideMimeType("application/json");
        transobj.onreadystatechange = () => {
            if (transobj.readyState == 4 && transobj.status == '200') {
                var response = JSON.parse(transobj.responseText);
                localStorage.setItem("answerYoda", response.contents.translated);
                list = JSON.stringify(response.contents.translated).split(" ");
                list.sort(() => (Math.random() > .5) ? 1 : -1);
                createTranslationDraggables(list, yodaPanel);
            }
        };
        transobj.send(null);
    });
    //Traduce el texto a Pirata
    document.getElementById("btnTranslatePirate").addEventListener("click", () => {
        document.getElementById("tbPirate").disabled = true;
        var text = encodeURIComponent(document.getElementById("tbPirate").value);
        var transobj = new XMLHttpRequest();
        transobj.open("GET", `https://api.funtranslations.com/translate/pirate.json?text=${text}`);
        transobj.overrideMimeType("application/json");
        transobj.onreadystatechange = () => {
            if (transobj.readyState == 4 && transobj.status == '200') {
                var response = JSON.parse(transobj.responseText);
                localStorage.setItem("answerPirate", response.contents.translated);
                list = JSON.stringify(response.contents.translated).split(" ");
                list.sort(() => (Math.random() > .5) ? 1 : -1);
                createTranslationDraggables(list, piratePanel);
            }
        };
        transobj.send(null);
    });
    //Traduce el texto a Morse
    document.getElementById("btnTranslateMorse").addEventListener("click", () => {
        document.getElementById("tbMorse").disabled = true;
        var text = encodeURIComponent(document.getElementById("tbMorse").value);
        var transobj = new XMLHttpRequest();
        transobj.open("GET", `https://api.funtranslations.com/translate/morse.json?text=${text}`);
        transobj.overrideMimeType("application/json");
        transobj.onreadystatechange = () => {
            if (transobj.readyState == 4 && transobj.status == '200') {
                var response = JSON.parse(transobj.responseText);
                localStorage.setItem("answerMorse", response.contents.translated);
                list = JSON.stringify(response.contents.translated).split(" ");
                list.sort(() => (Math.random() > .5) ? 1 : -1);
                createTranslationDraggables(list, morsePanel);
            }
        };
        transobj.send(null);
    });
    //Traduce el texto a Perro
    document.getElementById("btnTranslateDoge").addEventListener("click", () => {
        document.getElementById("tbDoge").disabled = true;
        var text = encodeURIComponent(document.getElementById("tbDoge").value);
        var transobj = new XMLHttpRequest();
        transobj.open("GET", `https://api.funtranslations.com/translate/doge.json?text=${text}`);
        transobj.overrideMimeType("application/json");
        transobj.onreadystatechange = () => {
            if (transobj.readyState == 4 && transobj.status == '200') {
                var response = JSON.parse(transobj.responseText);
                localStorage.setItem("answerDoge", response.contents.translated);
                list = JSON.stringify(response.contents.translated).split(" ");
                list.sort(() => (Math.random() > .5) ? 1 : -1);
                createTranslationDraggables(list, dogePanel);
            }
        };
        transobj.send(null);
    });
    //Verificar que la traducción a Yoda funcione
    document.getElementById("btnCheckTranslationsYoda").addEventListener('click', () => {
        const draggable_texts = [];
        const children = Array.from(yodaPanel.getElementsByTagName('p'));
        const filteredChildren = children.filter(item => item.classList.contains("draggable_text"));
        filteredChildren.forEach(p => draggable_texts.push(p.innerHTML));
        var yourAnswer=draggable_texts.reduce((previousValue,currentValue)=>previousValue+" "+currentValue).replace('\"','').replace('"','').trim();        
        console.log(yourAnswer);
        var correctAnswer=localStorage.getItem("answerYoda").replace("  "," ");
        console.log(correctAnswer);
        if(yourAnswer.toLowerCase()==correctAnswer.toLowerCase()){
            document.getElementById("resultYoda").innerHTML="Respuesta correcta.";
        }
        else{
            document.getElementById("resultYoda").innerHTML="Respuesta incorrecta.";
        }
    });
    //Verificar que la traducción a pirata funcione
    document.getElementById("btnCheckTranslationsPirate").addEventListener('click', () => {
        const draggable_texts = [];
        const children = Array.from(piratePanel.getElementsByTagName('p'));
        const filteredChildren = children.filter(item => item.classList.contains("draggable_text"));
        filteredChildren.forEach(p => draggable_texts.push(p.innerHTML));
        var yourAnswer=draggable_texts.reduce((previousValue,currentValue)=>previousValue+" "+currentValue).replace('\"','').replace('"','').trim();        
        console.log(yourAnswer);
        var correctAnswer=localStorage.getItem("answerPirate").replace("  "," ");
        console.log(correctAnswer);
        if(yourAnswer.toLowerCase()==correctAnswer.toLowerCase()){
            document.getElementById("resultPirate").innerHTML="Respuesta correcta.";
        }
        else{
            document.getElementById("resultPirate").innerHTML="Respuesta incorrecta.";
        }
    });
    //Verificar que la traducción a Morse funcione
    document.getElementById("btnCheckTranslationsMorse").addEventListener('click', () => {
        const draggable_texts = [];
        const children = Array.from(morsePanel.getElementsByTagName('p'));
        const filteredChildren = children.filter(item => item.classList.contains("draggable_text"));
        filteredChildren.forEach(p => draggable_texts.push(p.innerHTML));
        var yourAnswer=draggable_texts.reduce((previousValue,currentValue)=>previousValue+" "+currentValue).replace('\"','').replace('"','').trim();        
        console.log(yourAnswer);
        var correctAnswer=localStorage.getItem("answerMorse").replace("  "," ");
        console.log(correctAnswer);
        if(yourAnswer.toLowerCase()==correctAnswer.toLowerCase()){
            document.getElementById("resultMorse").innerHTML="Respuesta correcta.";
        }
        else{
            document.getElementById("resultMorse").innerHTML="Respuesta incorrecta.";
        }
    });
    //Verificar que la traducción a Perro funcione
    document.getElementById("btnCheckTranslationsDoge").addEventListener('click', () => {
        const draggable_texts = [];
        const children = Array.from(dogePanel.getElementsByTagName('p'));
        const filteredChildren = children.filter(item => item.classList.contains("draggable_text"));
        filteredChildren.forEach(p => draggable_texts.push(p.innerHTML));
        var yourAnswer=draggable_texts.reduce((previousValue,currentValue)=>previousValue+" "+currentValue).replace('\"','').replace('"','').trim();        
        console.log(yourAnswer);
        var correctAnswer=localStorage.getItem("answerDoge").replace("  "," ").trim();
        console.log(correctAnswer);
        if(yourAnswer.toLowerCase()==correctAnswer.toLowerCase()){
            document.getElementById("resultDoge").innerHTML="Respuesta correcta.";
        }
        else{
            document.getElementById("resultDoge").innerHTML="Respuesta incorrecta.";
        }
    });
    function createTranslationDraggables(list, parent) {
        listItems.splice(0,listItems.length);
        parent.innerHTML = "";
        [...list]
        .map(a=>({value:a,sort:Math.random()}))
        .sort((a,b)=>a.sort-b.sort)
        .map(a=>a.value)
        .forEach((item, index) => {
            var listitem = document.createElement("li");
            listitem.dataset.index = index;
            listitem.dataset.parentid = parent.id;
            listitem.classList.add("nav-item");
            listitem.innerHTML = `<div class="draggable btn btn-light m-3 border" draggable="true">
                <p class="m-3 draggable_text">${item}</p>
            </div>`;
            listItems.push(listitem);
            parent.appendChild(listitem);
            if (item == '') {
                listItems.pop();
                parent.removeChild(listitem);
                index--;
            }

        });
        addDragFunctionality();
    }
    function swapItems(first, second) {
        var src = [...listItems[first].childNodes].find(item=>item.classList.contains("draggable"));
        console.log(src);
        var dst = [...listItems[second].childNodes].find(item=>item.classList.contains("draggable"));
        console.log(dst);
        listItems[first].innerHTML=dst.outerHTML;
        listItems[second].innerHTML=src.outerHTML;
    }
    function dragStart(e) {
        startIndex=this.closest('li').dataset.index;
    }
    function dragOver(e) {
        e.preventDefault();
    }
    function drop(e) {
        const endIndex=this.dataset.index;
        swapItems(startIndex,endIndex);
    }
    function addDragFunctionality() {
        const draggables = document.querySelectorAll(".draggable");
        const dragListItem = document.querySelectorAll(".draggable-list li");
        draggables.forEach((item) => {
            item.addEventListener("dragstart", dragStart);
        });
        dragListItem.forEach((item) => {
            item.addEventListener("dragover", dragOver);
            item.addEventListener("drop", drop);
        });
    }
};