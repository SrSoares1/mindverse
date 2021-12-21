function comecar() {
    var play = document.getElementsByName('play')
    var game = document.createElement("div");
    var res = document.createElement("div")
    var img = document.createElement('img');
    if(play[0].checked) {
        game.setAttribute('id', 'game')
        var caixa = document.querySelector('div#iniciar')
        caixa.innerHTML="COmeÇOU"
        caixa.innerHTML=`QUER JOGAR?
        <br>
        <input type="radio" name="play" id="start">
        <label for="start"> nada!</label>
        <input type="radio" name="play" id="nostart">
        <label for="nostart"> NÃO</label>
        <p><input type="button" value="OK" onclick="comecar()"></p>`
    } else {
        var caixa = document.querySelector('div#iniciar')
        caixa.innerHTML="ta ok, obg!";
    }
}