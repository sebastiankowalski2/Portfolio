function ile_lu()
{

    var ilo_lu = document.getElementById("ilo").value;

    if(isNaN(ilo_lu))
    {
        alert("Nieprawidłowe dane");

            return false;

    }else if(ilo_lu<1 || ilo_lu>36)
    {
        alert("Minimum 1, maksimum 36 osób");

            return false;

    }else{
            return true;
    }

}

function discop()
{

    if(!ile_lu()) 
    {

        return;

    }

    var kart = document.getElementById("kart").checked;
    var ilo_lu = document.getElementById("ilo").value;
    var cena = parseInt(ilo_lu) * 100;

    if(kart) 
    {

        cena = 0.8 * cena;

    }


    document.getElementById("ksz").innerHTML = "Koszt: " + cena + " zł";
}

function normalp()
{
    if(!ile_lu())
    
    {
        return;

    }

    var kart = document.getElementById("kart").checked;
    var ilo_lu = document.getElementById("ilo").value;
    var cena = parseInt(ilo_lu) * 160;

    if(kart) 
    {

        cena = 0.8 * cena;

    }

    document.getElementById("ksz").innerHTML = "Koszt: " + cena + " zł";

}

function extremep()
{

    if(!ile_lu())
    {

        return;

    }

    
    var kart = document.getElementById("kart").checked;
    var ilo_lu = document.getElementById("ilo").value;
    var cena = parseInt(ilo_lu) * 250;

    if(kart)
    {

        cena = 0.8 * cena;

    }

    document.getElementById("ksz").innerHTML = "Koszt: " + cena + " zł";

}

function resp()
{

    document.getElementById("ksz").innerHTML = "0";

}

function vipp()
{

    if(!ile_lu())
    {

        return;

    }

    var kart = document.getElementById("kart").checked;
    var ilo_lu = document.getElementById("ilo").value;
    var cena = parseInt(ilo_lu) * 300;

    if(kart) 
    {
        cena = 0.8 * cena;
    }

    document.getElementById("ksz").innerHTML = "Koszt: " + cena + " zł";

}