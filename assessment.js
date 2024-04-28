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
	const hrefValue='https://twitter.com/intent/tweet?button_hashtag=%E
	
