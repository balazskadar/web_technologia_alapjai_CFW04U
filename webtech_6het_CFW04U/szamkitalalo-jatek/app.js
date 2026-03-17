
const megoldas = Math.floor(Math.random() * 1000001);
const maxProba = 20;

for (let tippSzama = 1; tippSzama <= maxProba; tippSzama++) {
    
    let bemenet = prompt("Add meg a(z) " + tippSzama + ". tippedet (0 és 1 000 000 között):");
    
    if (bemenet === null) {
        alert("A játék megszakítva.");
        break; 
    }

    let tipp = parseInt(bemenet);

    if (isNaN(tipp)) {
        alert("Kérlek érvényes számot adj meg!");
        tippSzama--; 
        continue; 
    }

    if (tipp === megoldas) {
        alert("Gratulálok, " + tippSzama + " lépésből eltaláltad!");
        break;
        
    } else if (tipp > megoldas) {
        alert(tippSzama + ". tipp nem talált: A megoldás kisebb.");
        
    } else if (tipp < megoldas) {
        alert(tippSzama + ". tipp nem talált: A megoldás nagyobb.");
    }
    
    if (tippSzama === maxProba && tipp !== megoldas) {
        alert("Sajnos ez most nem sikerült! A megoldás: " + megoldas);
    }
}