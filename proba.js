function onLoad(){
    var balsav = document.getElementById("tudos_bal");
    var jobbsav = document.getElementById("tudos_jobb");
    var kariko_b = document.getElementById("kariko_b");
    var kariko_j = document.getElementById("kariko_j");
    var asboth_b = document.getElementById("asboth_b");
    var asboth_j = document.getElementById("asboth_j");
    var teller_b = document.getElementById("teller_b");
    var teller_j = document.getElementById("teller_j");
    var kariko_t = document.getElementById("kariko_t");
    var asboth_t = document.getElementById("asboth_t");
    var teller_t = document.getElementById("teller_t");

    kariko_t.style.display = "none";
    balsav.style.display = "none";
    jobbsav.style.display = "none";
    kariko_b.style.display = "none";
    kariko_j.style.display = "none";
    asboth_b.style.display = "none";
    asboth_j.style.display = "none";
    teller_b.style.display = "none";
    teller_j.style.display = "none";
    asboth_t.style.display = "none";
    teller_t.style.display = "none";
}

function kariko(){
    var kariko_t = document.getElementById("kariko_t");
    var asboth_t = document.getElementById("asboth_t");
    var teller_t = document.getElementById("teller_t");
    var kezdes = document.getElementById("kezdo");
    var balsav = document.getElementById("tudos_bal");
    var jobbsav = document.getElementById("tudos_jobb");
    var kariko_b = document.getElementById("kariko_b");
    var kariko_j = document.getElementById("kariko_j");
    var asboth_b = document.getElementById("asboth_b");
    var asboth_j = document.getElementById("asboth_j");
    var teller_b = document.getElementById("teller_b");
    var teller_j = document.getElementById("teller_j");

    kariko_t.style.display = "block";
    kezdes.style.display = "none";
    balsav.style.display = "block";
    jobbsav.style.display = "block";
    kariko_b.style.display = "block";
    kariko_j.style.display = "block";
    asboth_b.style.display = "none";
    asboth_j.style.display = "none";
    teller_b.style.display = "none";
    teller_j.style.display = "none";
    kariko_t.style.display = "block";
    asboth_t.style.display = "none";
    teller_t.style.display = "none";
}

function asboth(){
    var kariko_t = document.getElementById("kariko_t");
    var asboth_t = document.getElementById("asboth_t");
    var teller_t = document.getElementById("teller_t");
    var kezdes = document.getElementById("kezdo");
    var balsav = document.getElementById("tudos_bal");
    var jobbsav = document.getElementById("tudos_jobb");
    var kariko_b = document.getElementById("kariko_b");
    var kariko_j = document.getElementById("kariko_j");
    var asboth_b = document.getElementById("asboth_b");
    var asboth_j = document.getElementById("asboth_j");
    var teller_b = document.getElementById("teller_b");
    var teller_j = document.getElementById("teller_j");

    kezdes.style.display = "none";
    balsav.style.display = "block";
    jobbsav.style.display = "block";
    asboth_b.style.display = "block";
    asboth_j.style.display = "block";
    kariko_b.style.display = "none";
    kariko_j.style.display = "none";
    teller_b.style.display = "none";
    teller_j.style.display = "none";
    kariko_t.style.display = "none";
    asboth_t.style.display = "block";
    teller_t.style.display = "none";
}

function teller(){
    var kariko_t = document.getElementById("kariko_t");
    var asboth_t = document.getElementById("asboth_t");
    var teller_t = document.getElementById("teller_t");
    var kezdes = document.getElementById("kezdo");
    var balsav = document.getElementById("tudos_bal");
    var jobbsav = document.getElementById("tudos_jobb");
    var kariko_b = document.getElementById("kariko_b");
    var kariko_j = document.getElementById("kariko_j");
    var asboth_b = document.getElementById("asboth_b");
    var asboth_j = document.getElementById("asboth_j");
    var teller_b = document.getElementById("teller_b");
    var teller_j = document.getElementById("teller_j");

    kezdes.style.display = "none";
    balsav.style.display = "block";
    jobbsav.style.display = "block";
    kariko_b.style.display = "none";
    kariko_j.style.display = "none";
    asboth_b.style.display = "none";
    asboth_j.style.display = "none";
    teller_b.style.display = "block";
    teller_j.style.display = "block";
    kariko_t.style.display = "none";
    asboth_t.style.display = "none";
    teller_t.style.display = "block";
}

function kariko_t(){
    var kariko_t = document.getElementById("kariko_t");
    var szoveg = document.getElementById("kariko_t_szoveg");
    var pont = document.getElementById("kariko_t_pontok");
    var gomb = document.getElementById("kariko_t_gomb");

    if(gomb.innerHTML != "Kevesebb..."){
        gomb.innerHTML = "Kevesebb...";
        pont.style.display = "none";
        kariko_t.style.height = "750px";
        kariko_t.style.transition = "height .75s";
        setTimeout(() => {szoveg.style.display = "block";}, 450);
    } 
    else{
        gomb.innerHTML = "Több...";
        pont.style.display = "inline";
        kariko_t.style.height = "200px";
        kariko_t.style.transition = "height .75s";
        szoveg.style.display = "none";
    }
}

function asboth_t(){
    var asboth_t = document.getElementById("asboth_t");
    var szoveg = document.getElementById("asboth_t_szoveg");
    var pont = document.getElementById("asboth_t_pontok");
    var gomb = document.getElementById("asboth_t_gomb");

    if(gomb.innerHTML != "Kevesebb..."){
        gomb.innerHTML = "Kevesebb...";
        pont.style.display = "none";
        asboth_t.style.height = "720px";
        asboth_t.style.transition = "height .75s";
        setTimeout(() => {szoveg.style.display = "block";}, 450);
    } 
    else{
        gomb.innerHTML = "Több...";
        pont.style.display = "inline";
        asboth_t.style.height = "200px";
        asboth_t.style.transition = "height .75s";
        szoveg.style.display = "none";
    }
}

function teller_t(){
    var teller_t = document.getElementById("teller_t");
    var szoveg = document.getElementById("teller_t_szoveg");
    var pont = document.getElementById("teller_t_pontok");
    var gomb = document.getElementById("teller_t_gomb");

    if(gomb.innerHTML != "Kevesebb..."){
        gomb.innerHTML = "Kevesebb...";
        pont.style.display = "none";
        teller_t.style.height = "800px";
        teller_t.style.transition = "height .75s";
        setTimeout(() => {szoveg.style.display = "block";}, 450);
    } 
    else{
        gomb.innerHTML = "Több...";
        pont.style.display = "inline";
        teller_t.style.height = "200px";
        teller_t.style.transition = "height .75s";
        szoveg.style.display = "none";
    }
}