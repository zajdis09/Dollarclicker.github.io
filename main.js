let dollarcount = 0;
let ammount = 1;
let upgradePrice = 5;

function addMoney(ammount) {
    dollarcount = dollarcount + ammount;
    update();
}
function Click() {
    if (dollarcount >= upgradePrice) {
        ammount = ammount + 1;
        dollarcount = dollarcount - upgradePrice;
        upgradePrice = upgradePrice + 5;
        document.getElementById("upgradePrice").innerHTML = upgradePrice;
        update();
    }
}
function update() {
    document.getElementById('dollarcount').innerHTML = dollarcount;
    document.getElementById('costAutoClick').innerHTML = "Autoclicker " + (autoClick + 1) * 10 + "&#128181";
    document.getElementById('penizzasekundu').innerHTML = "Vyděláváš " + (autoClick) + "&#128181 za sekundu";
    document.getElementById('upgradePrice').innerHTML = "Doubleclick(+1) " + (ammount) * 5 + "&#128181";
}
let autoClick = 0;
function timer()
{
    dollarcount = dollarcount + autoClick;
    update();
}
setInterval(timer, 1000);

function buyAutoClick() {
    if (dollarcount >= ((autoClick + 1) * 10)) {
        dollarcount = dollarcount - ((autoClick + 1) * 10);
        autoClick = autoClick + 3;
        update();
    }
}

function start(){
    karban=setInterval(function ()
        {addMoney(ammount);
        },4);

}
function end(){
    clearInterval(karban);
}

