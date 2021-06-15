let formDiv = $("#formdiv");
let sids = 0;
let preID;
let checkbox = $('.checkbox');
let seqVal = 0;
let ticketVal = "";
let numberVal = "";

function newSection(){
    checkbox.removeAttr('disabled');
    if ($("#seq").is(":checked")){
        seqVal = $("#" + preID + "IRef").val();
        seqVal = parseFloat(seqVal) + 1;
    } else {
        seqVal = "";
    }
    if ($("#ticket").is(":checked")){
        ticketVal = $('#' + preID + 'HRef').val();
    } else {
        ticketVal = "";
    }
    if ($("#number").is(":checked")){
        numberVal = $('#' + preID + 'Num').val();
        numberVal = parseFloat(numberVal) + 1;
    } else {
        numberVal = "";
    }
    formDiv.append("<div id='" + sids + "code'><label><input class='form-control m-2' type='number' id='" + sids + "IRef' name='" + sids + "intRef' placeholder='Int Ref' value='" + seqVal + "'></label><label><input class='form-control m-2' id='" + sids + "name' name='" + sids + "name' type='text' placeholder='Customer Name'></label><label><input class='form-control m-2' type='number' id='" + sids + "HRef' name='" + sids + "hdRef' placeholder='Helpdesk Ref' value='" + ticketVal + "'></label><label><select class='form-control m-2' id='" + sids + "select' name='" + sids + "select'><option value='50'>£50 Code</option><option value='10'>£10 Code</option></select></label><label><input class='form-control m-2' type='number' id='" + sids + "Num' name='" + sids + "Num' placeholder='Number' value='" + numberVal + "'></label><button class='btn btn-danger ml-2 removeSection' id='" + sids + "remove' type='button'>Remove Section</button></div>");
    sids++;
    preID = sids-1;
}