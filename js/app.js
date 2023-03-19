
//document.getElementById("MyApp").innerHTML = "Miguel";


class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

   render() {
        let myApp = document.getElementById(this.parentID);

        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButtonHTML; 

    }
}

 let myButon = new Button ("MyApp", "logearse aqui...");
 myButon.render(); 
 
 let myButon2 = new Button ("MyApp", "Contraseña");
 myButon2.render();

 //////////////////////

 class Input{
    constructor(parentID, type) {

        this.parentID = parentID;

        this.type = type;
 }

 render() {
    
    let myApp = document.getElementById(this.parentID);

    const myInputHTML = myApp.innerHTML + "<input type=" + this.type + ">";

    myApp.innerHTML = myInputHTML; 

 }
}

let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];

function RenderButton(text) {
    let myButton = new Button("MyApp", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
            
    }

    let myInput = new Input("MyApp", input_type);
    myInput.render();
}
mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});


let inputArray = ["Username", "Surname", "E-mail", "Password"];

let inputArrayFiltered = inputArray.filter( element => element=="Password");

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});