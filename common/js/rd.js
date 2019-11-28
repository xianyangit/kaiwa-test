
sw_flg = 0; //0=non 1=PC 2=TB 3=SP 4=SP360&320
var filePath = "/ra/app/common/css/";
var head_acMenuFlag = 0;
// メイン処理 ------------------------------------------------------------------------
$(document).ready(function() {
	
	//VPswitch();
	//MODE_SW();
	
	// window load コンテンツロード時 ------------------------------------------------------------------------
	$(window).load(function() {
		RD();
	});
	
	// window resize　ウィンドウリサイズ時 ------------------------------------------------------------------------
	$(window).resize(function() {
		RD();
		//alert("resize");
		/*
		$.getScript("ResponsiveSlides.js-master/responsiveslides.min.js", function(){
		  //alert("OK!");
		});	
		*/
	});
	
	$(".btnInner,.btnInner2").hover(function(){
			if( sw_flg != 4 ) {
				$(this).not('li.current a.btn_a span.btnInner2').css({background:"#fff url(/ra/app/common/img/framework/bg_btn_grd2.jpg) left top repeat-x"});
			}
		},function(){
			if( sw_flg != 4 ) {
				$(this).not('li.current a.btn_a span.btnInner2').css({background:"#fff url(/ra/app/common/img/framework/bg_btn_grd.jpg) left top repeat-x"});
			}
		})

	//	アコーディオンメニュー（スマホ時ローカルナビ）--------------------------------------
	$(".acoMenu").click(function(){ 
		$("#headLocalNavi ul.btnList").slideToggle('fast');
		if( head_acMenuFlag == 0 ){
			$(".acoMenu a.btn_a span.btnInner span.btnLetter").css({background:"url(/ra/app/common/img/framework/ic_ac_open.png) right center no-repeat"});
			head_acMenuFlag = 1;
		} else {
			$(".acoMenu a.btn_a span.btnInner span.btnLetter").css({background:"url(/ra/app/common/img/framework/ic_ac_close.png) right center no-repeat"});
			head_acMenuFlag = 0;
		}
	});

});

// CSS変更関数 ------------------------------------------------------------------------
function changeSytle(cssfile) {
    $('#RDCSS').attr("href",cssfile);
 }

// CSSレスポンシブファイル再読み込み ------------------------------------------------------------------------
function RD(){
			var winWidth = $(window).width();
			var winHeight = $(window).height();
			
			if(winWidth < 360) {
				changeSytle(filePath+"bp0320.css");
				if($('li').hasClass('listHeight1')) {
					$('.listHeight1 div').css({height:'auto'});
					equalHeight($('.listHeight1 div'));
				}
				sw_flg = 4;
				initAcMenu();
				SWsp();
				//SWSET_sp();
				
			} else if(winWidth < 533) {
				changeSytle(filePath+"bp0360.css");
				if($('li').hasClass('listHeight1')) {
					$('.listHeight1 div').css({height:'auto'});
					equalHeight($('.listHeight1 div'));
				}
				sw_flg = 4;
				initAcMenu();
				SWsp();
				//SWSET_sp();
				
			} else if(winWidth < 768) {
				changeSytle(filePath+"bp0533.css");
				$("#headLocalNavi li a.btn_a span.btnInner2").css({height:'1px'});
				equalHeight($("#headLocalNavi li a.btn_a span.btnInner2"));
				if($('li').hasClass('listHeight1')) {
					$('.listHeight1 div').css({height:'auto'});
					equalHeight($('.listHeight1 div'));
				}
				sw_flg = 3;
				SWpc();
				$("#headLocalNavi ul.btnList").show();
				//SWSET_tb();
				
			} else if(winWidth < 950) {
				changeSytle(filePath+"bp0768.css");
				$("#headLocalNavi li a.btn_a span.btnInner2").css({height:'1px'});
				equalHeight($("#headLocalNavi li a.btn_a span.btnInner2"));
				if($('li').hasClass('listHeight1')) {
					$('.listHeight1 div').css({height:'auto'});
					equalHeight($('.listHeight1 div'));
				}
				$("#headLocalNavi ul.btnList").show();
				sw_flg = 1;
				SWpc();
				//SWSET_tb();
				
			} else if(winWidth >= 950) {
				changeSytle(filePath+"bp1024.css");
				$("#headLocalNavi li a.btn_a span.btnInner2").css({height:'1px'});
				equalHeight($("#headLocalNavi li a.btn_a span.btnInner2"));
				if($('li').hasClass('listHeight1')) {
					$('.listHeight1 div').css({height:'auto'});
					equalHeight($('.listHeight1 div'));
				}
				$("#headLocalNavi ul.btnList").show();				
				sw_flg = 1;
				SWpc();
				//SWSET_pc();
			}
	
}

// アコーディオンメニューの初期化 -------------------------------------------------------

function initAcMenu() {
	if( sw_flg == 4 ){
	
		if( head_acMenuFlag == 0 ) {
			$(".acoMenu a.btn_a span.btnInner span.btnLetter").css({background:"url(/ra/app/common/img/framework/ic_ac_close.png) right center no-repeat"});
			$("#headLocalNavi ul.btnList").hide();
		} else if( head_acMenuFlag == 1 ) {
			$(".acoMenu a.btn_a span.btnInner span.btnLetter").css({background:"url(/ra/app/common/img/framework/ic_ac_open.png) right center no-repeat"});
			$("#headLocalNavi ul.btnList").show();
		}
	}
}


// 画像切り替え ------------------------------------------------------------------------
// PC画像からSP画像への切り替え（SPからPCへの考え方も可）
function SWsp(){
	$('.switch').each(function(){
		var $this = $(this);
		$this.attr('src',$this.attr('src').replace("_pc","_sp"));
	});
}

function SWpc(){
	$('.switch').each(function(){
		var $this = $(this);
		$this.attr('src',$this.attr('src').replace("_sp","_pc"));
	});
}


function equalHeight(group) {  
        tallest = 0;  
        group.each(function() {  
            thisHeight = $(this).height();  
            if(thisHeight > tallest){  
                tallest = thisHeight; 
				tallest +=2; 
            }  
        });  
        group.height(tallest);  
    }