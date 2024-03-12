/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
   let title = document.getElementsByTagName("h1")[0]

       const changeTitle = function (titolo) {
        title.innerText = titolo
       }

       changeTitle("Corso Epicode")



       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function (classe) {
        title.className= classe
       }

       addClassToTitle("myHeading")
 

       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
        const paragrafiDiv = document.querySelectorAll("div > p");
 
      const changePcontent = function(textP) {
            paragrafiDiv.forEach(paragrafo => {
            paragrafo.innerText = textP;
        });
    };
    
    changePcontent("Questo è il nuovo testo dei paragrafi figli di div");


       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
      let firstLink = document.getElementsByTagName("a")[0]
    
 
       const changeUrls = function () {
        firstLink.href= "https://www.google.com"
        firstLink.innerText = "Link di porta alla pagina principale di google"
        firstLink.target= "_black"
       }
       changeUrls()
 

       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
    let secondList = document.getElementById("secondList")
 
       const addToTheSecond = function () {
        let li = document.createElement("li")
        li.innerText= "4rd"
        secondList.appendChild(li)
       }
       addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
        let firstDiv = document.getElementsByTagName("div")[0]

       const addParagraph = function (paragrafo) {
        let p = document.createElement("p")
        p.innerText = paragrafo
        firstDiv.appendChild(p)
       }
       addParagraph("Nuovo paragrafo aggiunto al div")
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

        let firstList = document.getElementById("firstList")

       const hideFirstUl = function () {
        firstList.style.visibility= "hidden"
       }
       hideFirstUl()
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        secondList.style.backgroundColor= "green"

       }
       paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
      const makeItClickable = function () {
          let testoH1 = title.innerText;
      title.addEventListener("click", function() {
        testoH1= testoH1.slice(0, -1);
        title.innerText = testoH1;
      })
          
    }
    makeItClickable()
   
      
      
      /* ESERCIZIO 10
      Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */
     
     let footer = document.getElementsByTagName("footer")[0]

      const revealFooterLink = function () {
       footer.addEventListener("click", function() {
           alert("https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents")
       })
   }
   revealFooterLink()
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
    let prodotti = [
        {
            img:"https://plus.unsplash.com/premium_photo-1710167120674-1d8ae1271736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nomeProdotto: "Visore",
            qt: 4,
            prezzo: 499
        },
        {
            img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nomeProdotto: "Cuffie",
            qt: 9,
            prezzo: 199
        },
        {
            img:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nomeProdotto: "Scarpe",
            qt: 8,
            prezzo: 299
        },
        {
            img:"https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nomeProdotto: "Crema",
            qt: 20,
            prezzo: 49
        },
        {
            img:"https://media.istockphoto.com/id/1287173816/it/foto/nuova-playstation-5.jpg?s=2048x2048&w=is&k=20&c=IhMUsocwSsORmlSlqD0i4dgUg0LjpkJ_IasvAxXfVr0=",
            nomeProdotto: "Playstation 5",
            qt: 9,
            prezzo: 399,
        },
     
    ]
   
    let tableID = document.getElementById("tableArea");
    let table = document.createElement("table");
    tableID.appendChild(table);

    const generateTable = function() {
        let trHead = document.createElement("tr")
        table.appendChild(trHead)
        let thImg = document.createElement("th")
        thImg.innerText= " Immagine "
        let thNomeProd = document.createElement("th")
        thNomeProd.innerText=  "NomeProdotto "
        let thQt = document.createElement("th")
        thQt.innerText= " Quantità "
        let thPrice = document.createElement("th")
        thPrice.innerText = " Prezzo "
        trHead.appendChild(thImg)
        trHead.appendChild(thNomeProd)
        trHead.appendChild(thQt)
        trHead.appendChild(thPrice)
        
        
    
        prodotti.forEach(prodotto => {
            let tr = document.createElement("tr");
            table.appendChild(tr);
            let imgTd = document.createElement("td");
            let img = document.createElement("img");
            img.src = prodotto.img;
            img.width = 100;
            imgTd.appendChild(img);
            tr.appendChild(imgTd);
    
            let nomeTd = document.createElement("td");
            nomeTd.innerText = prodotto.nomeProdotto;
            tr.appendChild(nomeTd);
    
            let qtTd = document.createElement("td");
            qtTd.innerText = prodotto.qt;
            tr.appendChild(qtTd);
    
            let prezzoTd = document.createElement("td");
            prezzoTd.innerText = prodotto.prezzo;
            tr.appendChild(prezzoTd);
        });
    };
     
       generateTable()
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

        let nuovoProdotto 
 
       const addRow = function (imgProdotto, nomeProdotto, qt, prezzo) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        let imgTd = document.createElement("td");
        let img = document.createElement("img");
        img.src = imgProdotto
        img.width = 120;
        imgTd.appendChild(img);
        tr.appendChild(imgTd);

        let nomeTd = document.createElement("td");
        nomeTd.innerText = nomeProdotto
        tr.appendChild(nomeTd);

        let qtTd = document.createElement("td");
        qtTd.innerText = qt
        tr.appendChild(qtTd);

        let prezzoTd = document.createElement("td");
        prezzoTd.innerText = prezzo
        tr.appendChild(prezzoTd);

       }
       addRow("https://media.istockphoto.com/id/458330125/it/foto/game-boy-della-nintendo.jpg?s=2048x2048&w=is&k=20&c=smzuhxVDZGyQnaY1-KpAUZFvA_lrytYXR1YvOV0OXow=", "GameBoy", 5, 29)
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
   

 
       const hideAllImages = function () {
        let img = document.getElementsByTagName("img")
        for(i= 0;i<img.length;i++){
            img[i].style.visibility="hidden"
        }
       }
      // hideAllImages()
      
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}