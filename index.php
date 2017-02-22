<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />

        <meta name="author" content="Cezary Bilda" />
        <meta name="description" content="Opis strony jakis" />
        <meta name="keywords" content="kluczowe, slowa, po, przecinku" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>MMA</title>

        <link rel="stylesheet" type="text/css" href="css/css.css" />

        <script src="js/js.js"></script>
    </head>
    <body>
        <div id="body">
            <div id="sidebar">
                <div id="header">
                    Page about MMA
                </div>
                <div id="menu">

                    <div class="item" onclick="changeContent('about-mma');">About MMA</div>
                    <div class="item" onclick="changeContent('boxing');">Boxing</div>
                    <div class="item" onclick="changeContent('jiujitsu');">jiujitsu</div>
                    <div class="item" onclick="changeContent('muay-thai');">muay thai</div>
                    <div class="item" onclick="changeContent('karate');">karate</div>
                    <div class="item" onclick="changeContent('judo');">judo</div>
                    <div class="item" onclick="changeContent('wrestling');">wrestling</div>
                </div>
                <div id="footer">
                    Copyright &copy; Cezary Bilda
                </div>
            </div>
            <div id="content">
                <div id="about-mma-content">content1</div>
                <div id="boxing-content">content2</div>
                <div id="jiujitsu-content">content3</div>
                <div id="muay-thai-content">content4</div>
                <div id="karate-content">content5</div>
                <div id="judo-content">content6</div>
                <div id="wrestling-content">content7</div>
            </div>
        </div>
    </body>
</html>