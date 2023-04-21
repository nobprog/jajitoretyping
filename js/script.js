document.addEventListener('keydown', keypress_event);
document.addEventListener('DOMContentLoaded', Start);

const questions = [
	['ジャジトレタイピング','スペースキーを押してね','Press space key!!!'],
	['ジャジトレ','じゃじとれ','jajitore'],
	['宅トレ','たくとれ','takutore'],
	['プロテイン','ぷろていん','puroteinn'],
	['公式LINE','こうしきLINE','kousikiline'],
	['BCAA','BCAA','bcaa'],
	['増量','ぞうりょう','zouryou'],
	['減量','げんりょう','genryou'],
	['トップ１０','とっぷ１０','toppu10'],
	['伸びしろしかない','のびしろしかない','nobisirosikanai'],
	['S-BODY24','S-BODY24','s-body24'],
	['BBJ予選敗退','BBJよせんはいたい','bbjyosenhaitai'],
	['松山大会','まつやまたいかい','matuyamataikai'],
	['ポージング練習','ぽーじんぐれんしゅう','po-jingurensyuu'],
	['はい！ジャジーです！','はい！じゃじーです！','hai!jaji-desu!'],
	['ボディーチェック','ぼでぃーちぇっく','bodhi-tyekku'],
	['jazzytraining','jazzytraining','jazzytraining'],
	['炊飯器ホットケーキ','すいはんきほっとけーき','suihankihottoke-ki'],
	['予選敗退','よせんはいたい','yosenhaitai'],
	['乳酸筋','にゅうさんきん','nyuusankinn'],
	['宇都宮大会','うつのみやたいかい','utunomiyataikai'],
	['メン トュ ユ','men to you','mentoyou'],
	['オンラインボディメイクサービス','おんらいんぼでぃめいくさーびす','onrainbodhimeikusa-bisu'],
	['日本一人口の少ない県に住む地方国立大生','にほんいちじんこうのすくないけんにすむちほうこくりつだいせい','nihonnitijinkounosukunaikennnisumutihoukokuritudaisei']

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
	count++;
	if (count < questions.length){	
    
	keys = questions[count][2];
	document.getElementById('count').innerHTML = count + '/' + (questions.length - 1);
    document.getElementById('main').innerHTML = questions[count][0];
    document.getElementById('ruby').innerHTML = questions[count][1];
    document.getElementById('keys').innerHTML = keys;
   }else if(count == questions.length){
   		document.getElementById('main').innerHTML = "結果";
    document.getElementById('ruby').innerHTML = "ミス:" + mistakes;
    document.getElementById('keys').innerHTML = "スコア";
   }
	 
    return false;
}



function keypress_event(e) {
	 if (count == 0 && e.key == " "){
	 	questionSet();
	 }else if (keys.startsWith(e.key) == true && count >= 1 && count < questions.length) {
	 	keys = keys.slice(1, keys.length);
        document.getElementById('keys').innerHTML = keys;
		if (keys.length == 0) {
			questionSet();
		}

	 }else if(keys.startsWith(e.key) == false && count >= 1 && count < questions.length){
	 	mistakes++;
	 }
	 else {
	 ;
	 }
    
	 
	 
	return false;
}
