document.addEventListener('keydown', keypress_event);
const questions = [
	['ジャジトレタイピング','スペースキーを押してね','Press space key!!!'],
	['ジャジトレ','じゃじとれ','jajitore'],
	['宅トレ','たくとれ','takutore'],
	['プロテイン','ぷろていん','puroteinn'],
	['公式LINE','こうしきLINE','kousikiline'],
	['BCAA','BCAA','BCAA'],
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
	['メン　トュ　ユ','men to you','mentoyou'],
	['日本一人口の少ない県に住む地方国立大生','にほんいちじんこうのすくないけんにすむちほうこくりつだいせい','nihonnitijinkounosukunaikennnisumutihoukokuritudaisei']
];

let count = 0;


function keypress_event(e) {
	if (e.keyCode == 32) {
		start();
	}
	return false;
}

function start(){
	document.getElementsByClassName('main_question').innerHTML = questions[0][0];
	document.getElementsByClassName('ruby').innerHTML = questions[0][1];
	document.getElementsByClassName('keys').innerHTML = questions[0][2];
	return false;
}
