let codes = [];
let codeDesc = [];
let ticketRes = [];
function collect(){
    let codeNum = $("#formdiv").children().length;
    for (let i = 0; i < codeNum; i++){
        let intRef = $('#' + i + 'IRef').val();
        let name = $('#' + i + 'name').val();
        let hRef = $('#' + i + 'HRef').val();
        let type = $('#' + i + 'select').val();
        let number = $('#' + i + 'Num').val();
        calc(intRef, name, hRef, type, number);
    }
    display();
}
function calc(intRef, name, hRef, type, number){
    let shortRef = intRef.substr(intRef.length - 4);
    let nameSplit = name.split(" ");
    let initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    initials = initials.toUpperCase();
    if (type === "10"){
        let code = initials + shortRef + "TEN" + number;
        let desc = name + " £10 off £25 | Int Ref: " + intRef + " - HD Ref: " + hRef;
        let res = code + " - " + name;
        codes.push(code);
        codeDesc.push(desc);
        ticketRes.push(res);
    } else if (type === "50"){
        let code = initials + shortRef + "FTY" + number;
        let desc = name + " £50 off £140 | Int Ref: " + intRef + " - HD Ref: " + hRef;
        let res = code + " - " + name;
        codes.push(code);
        codeDesc.push(desc);
        ticketRes.push(res);
    }
}
function display(){
    let cycles = codes.length;
    for (let i = 0;i < cycles;i++){
        $("#codes").append(codes[i] + "<br>");
        $("#ref").append(codeDesc[i] + "<br>");
        $("#res").append(ticketRes[i] + "<br>");
    }
}