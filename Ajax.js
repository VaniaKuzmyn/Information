ajax
	js
window.onload = function (){

	document.querySelector('#').onclick = function(){
		ajaxGet();
	}
}

function ajaxGet(url){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			document.querySelector('#id').innerHtml = request.responseText;
		};
	};
	request.open('GET', 'file.php');
	request.send();
};
//-----------

window.onload = function (){

	document.querySelector('').onclick = function(){
		ajaxGet('file.php', function(data){
				console.log(data)
			});

		ajaxGet('file.php?id=2&a=b ��������-���������-������-Get', function(data){
				document.querySelector('#').inner.htmp = data;
			});
	}
}
//-----------
function ajaxGet(url, callback){
	var f = callback || function(date){};

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			f(responseText);
		};
	};
	request.open('GET', 'file.php');
	request.send();
};
//-----------
window.onload = function (){
	var inp_email = docyment.querySelectpr('input[name=email]');
	//...phone
	//...name

	document.querySelector('#').onclick = function(){
		var params = 'email=' + inp_email.value...;

		ajaxPost();
	}
}
//-----------
function ajaxPost(params){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			if(reauest.responseText == '1'){
			document.querySelector('#id').innerHtml = 'vse good';
			document.querySelector('form').style.display = 'none';
			}
			else{
			document.querySelector('#id').innerHtml = request.responseText;
			}
		};
	};
	request.open('POST', 'file.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoder'); // ������ Post
	request.send(params);
};

enctype='multipar/form-data'  // ��� ������ ����� � ������(method)
//���� ������������ ���� ��� �������� ����� (input type="file")


$.ajaxSetup ({cache: false}); // for ie $.load