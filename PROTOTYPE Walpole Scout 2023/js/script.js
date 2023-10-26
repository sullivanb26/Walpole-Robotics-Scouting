function addTo(what) {
    var element = document.getElementById(what);
    element.innerHTML = parseInt(element.innerHTML) + 1;
}

function subTo(what) {
    var element = document.getElementById(what);
    if (parseInt(element.innerHTML) != 0) {
        element.innerHTML = parseInt(element.innerHTML) - 1;
    }
}

function getData() {
    // Prematch
    var Initials_input = $("#Initials_input").val();
    var Match_Number = $("#Match_Number").val();
    var Robot = $("#Robot").val();
    var Team_Number = $("#Team_Number").val();
    var No_Show = $("#No_Show").prop('checked');
    var Using_Human_Player = $("#Using_Human_Player").prop('checked');
    // Auto
    var StartingLocation = $("#Starting_Location").val();
    var Mobility = $("#Mobility").prop('checked');
    var UConeAuto = parseInt($("#UCone").html());
    var MConeAuto = parseInt($("#MCone").html());
    var LConeAuto = parseInt($("#LCone").html());
    var UCubeAuto = parseInt($("#UCube").html());
    var MCubeAuto = parseInt($("#MCube").html());
    var LCubeAuto = parseInt($("#LCube").html());
    var Picked_up_more = $("#Picked_up_more").prop('checked');
    var DockedAuto = $("#Docked").prop('checked');
    var EngagedAuto = $("#Engaged").prop('checked');
    // Teleop
    var UConeTele = parseInt($("#UCone2").html());
    var MConeTele = parseInt($("#MCone2").html());
    var LConeTele = parseInt($("#LCone2").html());
    var UCubeTele = parseInt($("#UCube2").html());
    var MCubeTele = parseInt($("#MCube2").html());
    var LCubeTele = parseInt($("#LCube2").html());
    var PickupCapability = $("#PickupCapability").val();
    // Endgame
    var AttemptedBalanceBefore = $("#AttemptedBalanceBefore").prop('checked');
    var ChargeStation = $("#ChargeStation").val();
    var AllianceDocked = parseInt($("#AllianceDocked").html());
    // Postmatch
    var Skill = $("#Driver_Skill").val();
    var Defence = $("#DefenseRating").val();
    var Died = $("#Died").prop('checked');
    var TippedOver = $("#Tipped").prop('checked');
    var YellowRedCarded = $("#Carded").prop('checked');
    var Comments = $("#Comments_input").val();
    // Compiling
    var compiled = `${Initials_input}|${Match_Number}|${Robot}|${Team_Number}|${No_Show}|${Using_Human_Player}|${StartingLocation}|${Mobility}|${UConeAuto}|${MConeAuto}|${LConeAuto}|${UCubeAuto}|${MCubeAuto}|${LCubeAuto}|${Picked_up_more}|${DockedAuto}|${EngagedAuto}|${UConeTele}|${MConeTele}|${LConeTele}|${UCubeTele}|${MCubeTele}|${LCubeTele}|${PickupCapability}|${AttemptedBalanceBefore}|${ChargeStation}|${AllianceDocked}|${Skill}|${Defence}|${Died}|${TippedOver}|${YellowRedCarded}|${Comments}`;
    return compiled;
}

function qrCode() {
    document.getElementById("output").style.display = "block";
    new QRCode(document.getElementById("qrcode"), getData());
    saveInfo();
}

function finished() {
    document.getElementById("output").style.display = "none";
    document.getElementById("qrcode").innerHTML = "";
}

function saveInfo() {
    localStorage.setItem("init", $("#Initials_input").val());
    localStorage.setItem("match", $("#Match_Number").val());
    localStorage.setItem("robot", $("#Robot").val());
    localStorage.setItem("start", $("#Starting_Location").val());
}

function setSaved() {
    $("#Initials_input").val(localStorage.getItem("init"));
    $("#Match_Number").val(localStorage.getItem("match"));
    $("#Robot").val(localStorage.getItem("robot"));
    $("#Starting_Location").val(localStorage.getItem("start"));
}
setSaved();
