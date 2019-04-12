//expressオブジェクトの用意
var express = require('express')
//EJSモジュールをロード
var ejs = require('ejs')

//applicationオブジェクトの用意
var app = express()
//
app.engine('ejs', ejs.renderFile);

app.use(express.static('public'));

//ルーティンの設定（トップページにアクセスできるように）
app.get('/', (req, res) => {
    var msg = 'This is Express Page!<br>' + 'これは、スタイルシートを利用した例です。';
    //index.ejsをレンダリングを実行する
    res.render('index.ejs', {
        title: 'Index',
        content: msg,
        link: { href: '/other', text: '別のページに移動' },
        link1: { href: '/other1', text: '別1のページに移動' }
    });
})

//※otherページ
app.get("/other", (req, res) => {
    var msg = 'This is Other Page!<br>' + 'これは、用意された別のページです。';
    res.render('index.ejs', {
        title: 'other',
        content: msg,
        link: { href: '/', text: '※トップに戻る' },
        link1: { href: '/other1', text: '別1のページに移動' }

    });
});

//※other1ページ
app.get("/other1", (req, res) => {
    var msg = 'This is Other1 Page!<br>' + 'これは、用意された別のページです。';
    res.render('index.ejs', {
        title: 'other1',
        content: msg,
        link: { href: '/', text: '※トップに戻る' },
        link1: { href: '/other', text: '別のページに移動' }

    });
});

//待ち受けの開始
app.listen(3000, () => {
    console.log('Start is running!');
})