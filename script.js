document.addEventListener('keydown', keypress_event);
document.addEventListener('DOMContentLoaded', Start);
document.addEventListener('keydown', keypress_start, {once: true});
const questions = [
	['ジャジトレタイピング','スペースキーを押してね','Press space key!!!'],
	['ジャジトレ','じゃじとれ','jajitore'],
	['宅トレ','たくとれ','takutore'],
	['プロテイン','ぷろていん','puroteinn'],
	['公式LINE','こうしきLINE','kousikiline'],
	['BCAA','BCAA','bcaa'],
	['増量','ぞうりょう','zouryou'],
	['トップ１０','とっぷ１０','toppu10'],
	['伸びしろしかない','のびしろしかない','nobisirosikanai'],
	['S-BODY24','S-BODY24','s-body24'],
	['松山大会','まつやまたいかい','matuyamataikai'],
	['はい！ジャジーです！','はい！じゃじーです！','hai!jaji-desu!'],
	['ボディーチェック','ぼでぃーちぇっく','bodhi-tyekku'],
	['jazzytraining','jazzytraining','jazzytraining'],
	['炊飯器ホットケーキ','すいはんきほっとけーき','suihankihottoke-ki'],
	['予選敗退','よせんはいたい','yosenhaitai'],
	['乳酸筋','にゅうさんきん','nyuusankinn'],
	['メン トュ ユ','men to you','mentoyou'],
	['日本一人口の少ない県に住む地方国立大生','にほんいちじんこうのすくないけんにすむちほうこくりつだいせい','nihonnitijinkounosukunaikennnisumutihoukokuritudaisei']
];

let count = 0;
let keys;
function Start(){
    document.getElementById('main').innerHTML = questions[0][0];
    document.getElementById('ruby').innerHTML = questions[0][1];
    document.getElementById('keys').innerHTML = questions[0][2];
    
	return false;
}

function questionSet() {
    count++
    document.getElementById('main').innerHTML = questions[count][0];
    document.getElementById('ruby').innerHTML = questions[count][1];
    document.getElementById('keys').innerHTML = questions[count][2];
    keys = questions[count][2];
    return false;
}

function keypress_start(a) {
    if (a.keyCode == 32) {
        questionSet();
    }
}

function keypress_event(e) {
	if (!(e.key == 16)) {
       if (keys.startsWith(e.key, 0) == true) {
        keys = keys.slice(1, keys.length);
        document.getElementById('keys').innerHTML = keys;
            
       }
    }
    if (keys == '') {
      questionSet(); 
    }
	return false;
}

