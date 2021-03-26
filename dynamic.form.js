let formDiv = $('#formdiv');
let sids = 0;
let id="";
let fields = [];

function newSection() {
    formDiv.append("<div id='" + sids + "code'><label><input class='form-control m-2' type='number' id='" + sids +"IRef' name='" + sids +"intRef' placeholder='Int Ref'></label><label><input class='form-control m-2' id='" + sids +"name' name='" + sids +"name' type='text' placeholder='Customer Name'></label><label><input class='form-control m-2' type='number' id='" + sids +"HRef' name='" + sids +"hdRef' placeholder='Helpdesk Ref'></label><label><select class='form-control m-2' id='" + sids +"select' name='" + sids +"select'><option value='10'>£10 Code</option><option value='50'>£50 Code</option></select></label><label><input class='form-control m-2' type='number' id='" + sids +"Num' name='" + sids +"Num' placeholder='Number'></label><button class='btn btn-danger ml-2 removeSection' id='" + sids +"remove' type='button'>Remove Section</button></div>");
    let thisfield = [sids,0];
    fields.push(thisfield);
    sids++;
}

formDiv.on('click','.removeSection',function () {
    let id = this.id;
    id = id.replace("remove","");
    removeSection(id);
});

function removeSection(id){
    let section = id + "code";
    $('#' + section).remove();
}
