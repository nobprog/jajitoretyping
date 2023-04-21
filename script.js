document.addEventListener('keydown', keypress_event);
document.addEventListener('DOMContentLoaded', Start);
document.addEventListener('keydown', keypress_start);
const questions = [
	['ジャジトレタイピング','スペースキーを押してね','Press space key!!!'],
	['ジャジトレ','じゃじとれ','jajitore'],
	['宅トレ','たくとれ','takutore'],
	['プロテイン','ぷろていん','puroteinn']

];


let keys;
let count = 0;
let mistakes = 0;
function Start(){
	console.log("q.leng" + questions.length);
	document.getElementById('count').innerHTML = count + '/' + (questions.length - 1);
    document.getElementById('main').innerHTML = questions[0][0];
    document.getElementById('ruby').innerHTML = questions[0][1];
    document.getElementById('keys').innerHTML = questions[0][2];
    
	return false;
}

function questionSet() {
	
		
    count++
	 document.getElementById('count').innerHTML = count + '/' + (questions.length - 1);
    document.getElementById('main').innerHTML = questions[count][0];
    document.getElementById('ruby').innerHTML = questions[count][1];
    document.getElementById('keys').innerHTML = questions[count][2];
    keys = questions[count][2];
	 
    return false;
}

function keypress_start(a) {
	document.getElementById('count').innerHTML = count + '/' + (questions.length - 1);
    if (count == 0 && a.keyCode == 32) {
        questionSet();
    }
}

function keypress_event(e) {
	
       	if (keys.startsWith(e.key) == true && !(e.keyCode == 16 || e.keyCode == 32)) {
       		 keys = keys.slice(1, keys.length);
        		 document.getElementById('keys').innerHTML = keys;
				 
          } else if (keys.startsWith(e.key) == false && !(e.keyCode == 16 || e.keyCode == 32)) {
			  mistakes++;
			  }
    	if (keys == '' && count <= questions.length - 1) {
      	questionSet(); 
    	} else if (keys = '' && count >= questions.length - 1) {
	 document.getElementById('main').innerHTML = "結果";
    document.getElementById('ruby').innerHTML = "ミス：" + mistakes;
    document.getElementById('keys').innerHTML = "スコア実装予定"
	}
	return false;
}
