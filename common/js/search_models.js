// JavaScript Document

var csvValue;
var qID = 1;
var csvData = '/ra/app2/common/js/adapter.csv';

var csvValuewl;
var csvDatawl = '/ra/app/common/js/adapter.csv';



$(function(){
	//csv読み込み
	$.get(csvData,function(data){
		csvValue = $.csv(",", "", "\r\n")(data);
	})
	
	//csv読み込み
	$.get(csvDatawl,function(data){
		csvValuewl = $.csv(",", "", "\r\n")(data);
	})
	
});

function showData() {
	var rslt='';
	$( "#result" ).html( '' );
	var str = document.form1.raModel.value;
	var reg = new RegExp("^"+str+"$");
	//console.log(str);
	//console.log(reg);

	$(csvValue).each(function(){
		var modelNum = this[0].slice(4);
		if ( modelNum.match( reg )){
			rslt += "<span style='font-size:18px;'>白くまくんアプリに対応しています。";
			return false;
		}
	})
	$(csvValuewl).each(function(){
		var modelNum = this[0].slice(4);
		if ( modelNum.match( reg )){
			rslt += '<span style="font-size:18px;">日立エアコン モバイルコントロールに対応しています。詳しくは<a class="app_links_txt" href="/ra/app/index.html">こちら</a>しくはこちらをご確認ください。</span>';
			return false;
		}
	})

	if ( rslt == "" ) { rslt = "白くまくんアプリには対応していません。" }
	
	$( "#result" ).html( rslt );
}

