     function showName() {

        let nameInput = document.querySelector("#inputname1");
        let nameInputValue = "strawberry" + "=" + nameInput.value;
        let outName = document.querySelector("#outputname1");
        outName.innerHTML = nameInputValue;

        let nameInput2 = document.querySelector("#inputname2");
        let nameInput2Value = "banana" + "=" + nameInput2.value;
        let outName2 = document.querySelector("#outputname2");
        outName2.innerHTML = nameInput2Value;

        let nameInput3 = document.querySelector("#inputname3");
        let nameInput3Value = "blueberry" + "=" + nameInput3.value;
        let outName3 = document.querySelector("#outputname3");
        outName3.innerHTML = nameInput3Value;
        let totalBoules

        let nameInput4 = document.querySelector("#inputname4");
        let nameInput4Value = "name" + "=" + nameInput4.value;
        let outName4 = document.querySelector("#outputname4");
        outName4.innerHTML = nameInput4Value;

        let nameInput5 = document.querySelector("#inputname5");
        let nameInput5Value = "adress" + "=" + nameInput5.value;
        let outName5 = document.querySelector("#outputname5");
        outName5.innerHTML = nameInput5Value;

        let nameInput6 = document.querySelector("#inputname6");
        let nameInput6Value = "Email" + "=" + nameInput6.value;
        let outName6 = document.querySelector("#outputname6");
        outName6.innerHTML = nameInput6Value;

        let nameInput7 = document.querySelector("#inputname7");
        let nameInput7Value = "Phone" + "=" + nameInput7.value;
        let outName7 = document.querySelector("#outputname7");
        outName7.innerHTML = nameInput7Value;

        let fraiseboules;
        fraiseBoules = parseInt(nameInput.value);
        console.log(fraiseBoules);

        let bananeboules;
        bananeBoules = parseInt(nameInput2.value);
        console.log(bananeBoules);

        let myrtilleboules;
        myrtilleBoules = parseInt(nameInput3.value);
        console.log(myrtilleBoules);

        console.log(fraiseBoules, bananeBoules, myrtilleBoules);
        console.log(typeof myrtilleBoules);

        if (fraiseBoules + bananeBoules + myrtilleBoules >=10) {
            console.log('commande INvalide');
            alert('Sorry, please select a valid number :/ "Minimum is 1 and a maximum total of 9 scoops :) ');
          
        } 
       
        else if (fraiseBoules < 0 || bananeBoules < 0 || myrtilleBoules < 0){
            console.log('commande INvalide');
            alert('Not valid input number, dont select intup value :/ ');
       }
       else if (fraiseBoules + bananeBoules + myrtilleBoules == 0){
            console.log('commande INvalide');
            alert('You dont have select any scoop :/ ');
       }

        else {
            console.log('commande valide');

        
        
        }
        // souhaite que la valeur remplie soit realiste avec @....com
    }
