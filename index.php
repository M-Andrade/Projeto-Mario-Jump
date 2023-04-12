<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <Title>Mario Jump</Title>
    </head>
    <body>
        
        <div class="game-board">
            <img src="images/clouds.png" class="clouds">
            <img src="images/mario.gif" class="mario">
            <img src="images/pipe.png" class="pipe" id="id-pipe">
            <img src="images/Game-Over-PNG-Image.png" class="game-over">
            <img src="images/star.png" class="star" id="btn-star">
            <figure class="fundo"></figure>
            <div class="score">
                <p>Score</p>
                <p id="pontos"></p>
            </div>
        </div>
        <audio id="mario-jump">
            <source src="sounds/mariojump.mp3" type="audio/mpeg">
        </audio>
        <audio id="mario-died">
            <source src="sounds/mariodie.wav" type="audio/mpeg">
        </audio>

        <div class="score-board">
            <form method="post" action="php/pontuacao.php">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome"><br>
                <label for="pontuacao">Score:</label>&nbsp;
                <p id="pontos-envio"></p>
                <input type="hidden" id="pontuacao" name="pontuacao" value="">
                <input class="btn-submit" type="submit" value="Enviar">
            </form>
        </div>
    </body>

    <script src="js/script.js"></script>
</html>