<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/css/login-style.css"/>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container">
            <div id="navigator" align="center">
                <a id="back" href="#"><img  src="assets/images/common/back_white-edited.svg"></a>
                <p id="title">ログイン</p>
            </div>
            <div class="input-group text-center" id="form">
                <input id="email" class="form-items" type="text" placeholder="Email">
                <input id="password" class="form-items" type="password" placeholder="Password">
                <button class="form-items-ex text-center" id="login">ログイン</button>
            </div>
            <div class="vertical-ex">
                <div class="hr-align">
                    <hr id="left">
                </div>
                <div class="text-item">または</div>
                <div class="hr-align">
                    <hr id="right">
                </div>
                    </div>
            <button class="form-items-ex text-center" id="fb-login">Facebookでログイン</button>
            <div class="center">
                <p id="underline">パスワードをお忘れですか？</p>
            </div>
        </div>
    </body>
</html>
