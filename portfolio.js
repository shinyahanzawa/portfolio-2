
window.onload = function () {
    //秒数後、実行
      setTimeout('loading()', 2000);
      setTimeout('body()', 5000);
}

function loading(){
    //ここでローディング画像を表示していたDIVを非表示にする
    document.getElementById('loading').style.display = 'none';
    
    //ここで本体を表示にさせる
    document.getElementById('head').style.display = 'block';	
}

function body(){
    //ここで本体を表示にさせる
    document.getElementById('body').style.display = 'block';	
}