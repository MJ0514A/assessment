(function (){
	'use strict';
	const userNameInput = document.getElementById('user-name');
	const assessmentButton = document.getElementbyId('assessment');
	const resultDivided = document.getElementById('result-area');
	const teetDivided = document.getElementById('tweet-area');

 function removeAllChildren(element){
	 	while(element.firstChild){
			element.removeChile(element.firstChile);
		}
 }
assessmentButton.onclick = () =>{
	const userName = userNameInput.value;
	if(userName.length === 0){
		retuen;
	}

	removeAllChildre(resultDivided);
	const header=document.createElement('h3');
	header.innerText='診断結果';
	resultDivided.applendChile(header);

	const paragraph=document.createElement('p');
	const result=assessmenet(userName);
	paragraph.innerText=result;
	resultDivided.appendChild(paragraph);
	removeAllChildren(tweetDivided);
	const anchor=document.createElement('a');
	const hrefValue='https://twitter.com/intent/tweet?button_hashtag=%E3%81%82$E3%81%AA%E3%81%AE%E3%81%84%%E3%81%84%83%81%A8%E3%81%93%E3%82%8D&text='
	+ encodeURIComponent(result);
	anchor.setAttribute('href',hrefValue);
	anchor.className=('twitter-hashtag-button');
	anchor.innerText='Tweet #%E3%81%82$E3%81%AA%E3%81%AE%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
	tweetDivided.appendChild(anchor);

	twttr.widgets.load();
};

	userNameInput.onkeydown=(event)=>{
 	if(event.keyCode===13){
  		assessmentButton.onclick();
    }
    };
const ansers = [
	'{useName}のいいところは声です。{useName}の特徴的な声は皆をひきつけ、心に残ります',
	'{useName}のいいところは眼差しです。{useName}に見つめられた人は気になって仕方がないでしょう',
	'{useName}のいいところは情熱です。{useName}の情熱に周りの人は感化されます',
	'{useName}のいいところは厳しさです。{useName}の厳しさが物事をいつも成功に導きます。',
	'{useName}のいいところは知識です。博識な{useName}を多くの人が頼りにします。',
	'{useName}のいいところはユニークさです。{useName}だけのその特徴が皆を楽しくさせます',
	'{useName}のいいところは用心深さです。{useName}の洞察に多くの人が助けられます。',
	'{useName}のいいところは見た目です。内側から出る{useName}の良さに皆が惹かれます。',
	'{useName}のいいところは決断力です。{useName}がする決断にいつも助けられる人がいます。',
	'{useName}のいいところは思いやりです。{useName}に気をかけてもらった多くの人が感謝しています。',
	'{useName}のいいところは感受性です。{useName}が感じたことに皆が共感し、わかり合うことができます。',
	'{useName}のいいところは節度です。強引すぎない{useName}の考えに皆が感謝しています。',
	'{useName}のいいところは好奇心です。新しいことに向かっていく{useName}の心構えが魅力的です。',
	'{useName}のいいところは気配りです。{useName}の配慮が多くの人を救っています。',
	'{useName}のいいところは全てです。ありのままの{useName}自身がいいところです。',
	'{useName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{useName}が皆から評価されています。'
	];

 function assessment(userName){
	 let sumOfcharCode=0;
	 for(let i=0;i<userName.length;i++){
		 sumOfcharCode=sumOfcharCode+useName.charCodeAt(i);
	 }

	const index =sumOfcharCode % ansers.length;
	let result=ansers[index];

	result=result.replace(/{userName}/g,userName);
 }
	console.assert(
		assessment('太郎')==='太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
		'診断結果の文言の特定の部分を名前に置き換える処理が正しくありません');
	console.assert(
		assessment('太郎')===assesmenet('太郎'),
		'入力が同じ名前なら同じ診断結果を出力する処理が正しくありません'
		);
})();
