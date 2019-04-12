//expressオブジェクトの用意
var express = require('express')
//EJSモジュールをロード
var ejs = require('ejs')

//applicationオブジェクトの用意
var app = express()
//
app.engine('ejs', ejs.renderFile);

app.use(express.static('public'));

var bodyParser = require('body-parser');

//urlencodedの設定。送信されたフォームの内容が変換され取り出される。formを使うときに必ず使用する！
app.use(bodyParser.urlencoded({ extended: false }));
//ルーティンの設定（トップページにアクセスできるように）
app.get('/', (req, res) => {
    var msg = 'This is Index Page!<br>' + '※メッセージを書いて送信してください。';
    //index.ejsをレンダリングを実行する
    res.render('index.ejs', {
        title: 'Index',
        content: msg,
    });
});

//※POST送信の処理
app.post('/', (req, res) => {
    var msg = 'This is Posted Page!<br>' + 'あなたは「<b>' + req.body.message + '</b>」と送信しました。';
    res.render('index.ejs', {
        title: 'Posted',
        content: msg,
    });
});


//待ち受けの開始
var server = app.listen(3000, () => {
    console.log('Start is running!');
})