//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
		$('.openbtn1').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
		$('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
	  }else{//それ以外は
		$('.openbtn1').removeClass('fadeDown');//fadeDownというクラス名を除き
		$('#header').removeClass('dnone');//dnoneというクラス名を除く
	  }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
  });
  
  
  //ボタンをクリックした際のアニメーションの設定
  $(".openbtn1").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	  $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
  });
  $("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
	  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
	  $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
  });
  
  
  //リンク先のidまでスムーススクロール
  //※ページ内リンクを行わない場合は不必要なので削除してください
	  $('#g-navi li a').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-0;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
  });
  

  
$(window).on('load',function(){
	$("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
	//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	$("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
	
	$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
	
	});
	//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	
	//=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
	$('.splashbg').on('animationend', function() { 
	//この中に動かしたいJSを記載
	});
	//=====ここまで背景が伸びた後に動かしたいJSをまとめる
	
	});