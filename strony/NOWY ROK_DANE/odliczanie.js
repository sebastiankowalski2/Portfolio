
    function datka(){

        var a = new Date();
        var z = a.toLocaleTimeString();

        var tydz = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

        var b = a.getDay();

        document.getElementById("datt").innerHTML = tydz[b];

        document.getElementById("datta").innerHTML = z;

        var now = new Date(2023,0,1);

        var don = now.getTime() - a.getTime();

        var se = don/1000;
        var mi = se/60;
        var go = mi/60;

        var sek = Math.floor(se%60);
        var min = Math.floor(mi%60);
        var godz = Math.floor(go);

        document.getElementById("la").innerHTML = godz+" h "+min+" m "+sek+" s";

    }

    setInterval("datka();", 1000);
    