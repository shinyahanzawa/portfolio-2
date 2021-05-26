
window.onload = function () {
    //秒数後、実行
      setTimeout('loading()', 2000);
}

function loading(){
    //ここでローディング画像を表示していたDIVを非表示にする
    document.getElementById('loading').style.display = 'none';
    
    //ここで本体を表示にさせる
    document.getElementById('wrapper').style.display = 'block';	
}