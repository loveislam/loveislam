// JavaScript Document
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9&appId=213429272070824";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {

var check=0;
var i;		
	    $("#navbtn").click(function() {
		
		
		$(".div5").css("width","100%");
		$(".div5").css("border","none");
		 ++check;
		 i=check%2;
		if(i==1){
		$("#div4").slideToggle(500);	    
		$("#navbtn").css("background","linear-gradient(purple,purple)");
		}
		else if(i==0){
			$("#div4").slideToggle(500);	    
		$("#navbtn").css("background","linear-gradient(yellow,gold,yellow,gold)");
			
			}
		
		
		});
			
	
	$("#english").click(function(){
		
		
		$("#HOTDimg2").show(500);
		$("#textshoweng").show(1000);
		$("#textshoweng1").show(1000);
		
		$("#db").show(1000);
		
		
		
		});
	
	$("#textshow").click(function(){
		
		$("#HOTDimg").animate({width:"50%"},i);
		
		$("#HOTD-urdu").css("width","49%");
		
		$("#HOTD-urdu").css("margin-top","50px");
		
		$("#HOTD-urdu").css("margin-left","5px");
		
		$("#HOTDimg").css("float","left");
		
		$("#HOTD-urdu").css("float","left");
		$("#HOTD-urdu").show(1000);
		
		});
	
	$("#textshow1").click(function(){
		
		$("#HOTD-urdu").show(500);
		
		});
	
	$("#textshoweng").click(function(){
		
		$("#HOTDimg2").animate({width:"50%"},i);
		
		$("#HOTD-eng").css("width","49%");
		
		$("#HOTD-eng").css("margin-top","50px");
		
		$("#HOTD-eng").css("margin-left","5px");
		
		$("#HOTDimg2").css("float","left");
		
		$("#HOTD-eng").css("float","left");
		$("#HOTD-eng").show(1000);
		
		});
	
	$("#textshoweng1").click(function(){
		
		$("#HOTD-eng").show(500);
		
		});
			
		//Hadiths Page Starts From Here//
		
		 var c=0;
		 var b=0;
	$("#lang").click(function() {
       ++c;
		b=c%2;
		$("#abc").hide(1);
		if(b==1){
		$("#abc").css("float","right");
		$("#body1").hide(500);
		
		$("#body2").show(500);
		
		
		}
		else{
		$("#abc").css("float","left");
		
		$("#body2").hide(500);
		
		$("#body1").show(500);
		
		}
		$("#abc").show(50);
		
    });	
	
	var s=0;
	var h=0;
	$("#heng1").click(function(e) {
        ++s;
		h=s%2;
		$("#haditheng1").slideToggle(500);
		if(h==1){
		$(".r1").hide(1);
		$(".d1").show(50);
		}
		else{
			$(".d1").hide(1);
		$(".r1").show(50);
		
			}
	
	});
	var x=0;
	var y=0;
	$("#heng2").click(function(e) {
        ++x;
		y=x%2;
		$("#haditheng2").slideToggle(500);
		if(y==1){
		$(".r2").hide(1);
		$(".d2").show(50);
		}
		else{
			$(".d2").hide(1);
		$(".r2").show(50);
		
			}
	});
	
	var x3=0;
	var y3=0;
	$("#heng3").click(function(e) {
        ++x3;
		y3=x3%2;
		$("#haditheng3").slideToggle(500);
		if(y3==1){
		$(".r3").hide(1);
		$(".d3").show(50);
		}
		else{
			$(".d3").hide(1);
		$(".r3").show(50);
		
			}
	});
	
	var x4=0;
	var y4=0;
	$("#heng4").click(function(e) {
        ++x4;
		y4=x4%2;
		$("#haditheng4").slideToggle(500);
		if(y4==1){
		$(".r4").hide(1);
		$(".d4").show(50);
		}
		else{
			$(".d4").hide(1);
		$(".r4").show(50);
		
			}
	});	
	
	var x5=0;
	var y5=0;
	$("#heng5").click(function(e) {
        ++x5;
		y5=x5%2;
		$("#haditheng5").slideToggle(500);
		if(y5==1){
		$(".r5").hide(1);
		$(".d5").show(50);
		}
		else{
			$(".d5").hide(1);
		$(".r5").show(50);
		
			}
	});	

	var x6=0;
	var y6=0;
	$("#heng6").click(function(e) {
        ++x6;
		y6=x6%2;
		$("#haditheng6").slideToggle(500);
		if(y6==1){
		$(".r6").hide(1);
		$(".d6").show(50);
		}
		else{
			$(".d6").hide(1);
		$(".r6").show(50);
		
			}
	});

	var x7=0;
	var y7=0;
	$("#heng7").click(function(e) {
        ++x7;
		y7=x7%2;
		$("#haditheng7").slideToggle(500);
		if(y7==1){
		$(".r7").hide(1);
		$(".d7").show(50);
		}
		else{
			$(".d7").hide(1);
		$(".r7").show(50);
		
			}
	});
	
	var x8=0;
	var y8=0;
	$("#heng8").click(function(e) {
        ++x8;
		y8=x8%2;
		$("#haditheng8").slideToggle(500);
		if(y8==1){
		$(".r8").hide(1);
		$(".d8").show(50);
		}
		else{
			$(".d8").hide(1);
		$(".r8").show(50);
		
			}
	});
	

	var x9=0;
	var y9=0;
	$("#heng9").click(function(e) {
        ++x9;
		y9=x9%2;
		$("#haditheng9").slideToggle(500);
		if(y9==1){
		$(".r9").hide(1);
		$(".d9").show(50);
		}
		else{
			$(".d9").hide(1);
		$(".r9").show(50);
		
			}
	});	
	
	var x10=0;
	var y10=0;
	$("#heng10").click(function(e) {
        ++x10;
		y10=x10%2;
		$("#haditheng10").slideToggle(500);
		if(y10==1){
		$(".r10").hide(1);
		$(".d10").show(50);
		}
		else{
			$(".d10").hide(1);
		$(".r10").show(50);
		
			}
	});
	
	
	var x11=0;
	var y11=0;
	$("#heng11").click(function(e) {
        ++x11;
		y11=x11%2;
		$("#haditheng11").slideToggle(500);
		if(y11==1){
		$(".r11").hide(1);
		$(".d11").show(50);
		}
		else{
			$(".d11").hide(1);
		$(".r11").show(50);
		
			}
	});
	
	
	var x12=0;
	var y12=0;
	$("#heng12").click(function(e) {
        ++x12;
		y12=x12%2;
		$("#haditheng12").slideToggle(500);
		if(y12==1){
		$(".r12").hide(1);
		$(".d12").show(50);
		}
		else{
			$(".d12").hide(1);
		$(".r12").show(50);
		
			}
	});
	
	var x13=0;
	var y13=0;
	$("#heng13").click(function(e) {
        ++x13;
		y13=x13%2;
		$("#haditheng13").slideToggle(500);
		if(y13==1){
		$(".r13").hide(1);
		$(".d13").show(50);
		}
		else{
			$(".d13").hide(1);
		$(".r13").show(50);
		
			}
	});
	
	var x14=0;
	var y14=0;
	$("#heng14").click(function(e) {
        ++x14;
		y14=x14%2;
		$("#haditheng14").slideToggle(500);
		if(y14==1){
		$(".r14").hide(1);
		$(".d14").show(50);
		}
		else{
			$(".d14").hide(1);
		$(".r14").show(50);
		
			}
	});
	
	var x15=0;
	var y15=0;
	$("#heng15").click(function(e) {
        ++x15;
		y15=x15%2;
		$("#haditheng15").slideToggle(500);
		if(y15==1){
		$(".r15").hide(1);
		$(".d15").show(50);
		}
		else{
			$(".d15").hide(1);
		$(".r15").show(50);
		
			}
	});
	
	
	var x16=0;
	var y16=0;
	$("#heng16").click(function(e) {
        ++x16;
		y16=x16%2;
		$("#haditheng16").slideToggle(500);
		if(y16==1){
		$(".r16").hide(1);
		$(".d16").show(50);
		}
		else{
			$(".d16").hide(1);
		$(".r16").show(50);
		
			}
	});
	
var u1=0;
	var v1=0;
	$("#hurdu1").click(function(e) {
        ++u1;
		v1=u1%2;
		$("#hadithurdu1").slideToggle(500);
		if(v1==1){
		$(".l1").hide(1);
		$(".du1").show(50);
		}
		else{
			$(".du1").hide(1);
		$(".l1").show(50);
		
			}
	});
	

var u2=0;
	var v2=0;
	$("#hurdu2").click(function(e) {
        ++u2;
		v2=u2%2;
		$("#hadithurdu2").slideToggle(500);
		if(v2==1){
		$(".l2").hide(1);
		$(".du2").show(50);
		}
		else{
			$(".du2").hide(1);
		$(".l2").show(50);
		
			}
	});
	

var u3=0;
	var v3=0;
	$("#hurdu3").click(function(e) {
        ++u3;
		v3=u3%2;
		$("#hadithurdu3").slideToggle(500);
		if(v3==1){
		$(".l3").hide(1);
		$(".du3").show(50);
		}
		else{
			$(".du3").hide(1);
		$(".l3").show(50);
		
			}
	});
	

var u4=0;
	var v4=0;
	$("#hurdu4").click(function(e) {
        ++u4;
		v4=u4%2;
		$("#hadithurdu4").slideToggle(500);
		if(v4==1){
		$(".l4").hide(1);
		$(".du4").show(50);
		}
		else{
			$(".du4").hide(1);
		$(".l4").show(50);
		
			}
	});
	

var u5=0;
	var v5=0;
	$("#hurdu5").click(function(e) {
        ++u5;
		v5=u5%2;
		$("#hadithurdu5").slideToggle(500);
		if(v5==1){
		$(".l5").hide(1);
		$(".du5").show(50);
		}
		else{
			$(".du5").hide(1);
		$(".l5").show(50);
		
			}
	});
	

var u6=0;
	var v6=0;
	$("#hurdu6").click(function(e) {
        ++u6;
		v6=u6%2;
		$("#hadithurdu6").slideToggle(500);
		if(v6==1){
		$(".l6").hide(1);
		$(".du6").show(50);
		}
		else{
			$(".du6").hide(1);
		$(".l6").show(50);
		
			}
	});
	

var u7=0;
	var v7=0;
	$("#hurdu7").click(function(e) {
        ++u7;
		v7=u7%2;
		$("#hadithurdu7").slideToggle(500);
		if(v7==1){
		$(".l7").hide(1);
		$(".du7").show(50);
		}
		else{
			$(".du7").hide(1);
		$(".l7").show(50);
		
			}
	});
	

var u8=0;
	var v8=0;
	$("#hurdu8").click(function(e) {
        ++u8;
		v8=u8%2;
		$("#hadithurdu8").slideToggle(500);
		if(v8==1){
		$(".l8").hide(1);
		$(".du8").show(50);
		}
		else{
			$(".du8").hide(1);
		$(".l8").show(50);
		
			}
	});
	

var u9=0;
	var v9=0;
	$("#hurdu9").click(function(e) {
        ++u9;
		v9=u9%2;
		$("#hadithurdu9").slideToggle(500);
		if(v9==1){
		$(".l9").hide(1);
		$(".du9").show(50);
		}
		else{
			$(".du9").hide(1);
		$(".l9").show(50);
		
			}
	});
	

var u10=0;
	var v10=0;
	$("#hurdu10").click(function(e) {
        ++u10;
		v10=u10%2;
		$("#hadithurdu10").slideToggle(500);
		if(v10==1){
		$(".l10").hide(1);
		$(".du10").show(50);
		}
		else{
			$(".du10").hide(1);
		$(".l10").show(50);
		
			}
	});
	

var u11=0;
	var v11=0;
	$("#hurdu11").click(function(e) {
        ++u11;
		v11=u11%2;
		$("#hadithurdu11").slideToggle(500);
		if(v11==1){
		$(".l11").hide(1);
		$(".du11").show(50);
		}
		else{
			$(".du11").hide(1);
		$(".l11").show(50);
		
			}
	});
	

var u12=0;
	var v12=0;
	$("#hurdu12").click(function(e) {
        ++u12;
		v12=u12%2;
		$("#hadithurdu12").slideToggle(500);
		if(v12==1){
		$(".l12").hide(1);
		$(".du12").show(50);
		}
		else{
			$(".du12").hide(1);
		$(".l12").show(50);
		
			}
	});
	

var u13=0;
	var v13=0;
	$("#hurdu13").click(function(e) {
        ++u13;
		v13=u13%2;
		$("#hadithurdu13").slideToggle(500);
		if(v13==1){
		$(".l13").hide(1);
		$(".du13").show(50);
		}
		else{
			$(".du13").hide(1);
		$(".l13").show(50);
		
			}
	});
	

var u14=0;
	var v14=0;
	$("#hurdu14").click(function(e) {
        ++u14;
		v14=u14%2;
		$("#hadithurdu14").slideToggle(500);
		if(v14==1){
		$(".l14").hide(1);
		$(".du14").show(50);
		}
		else{
			$(".du14").hide(1);
		$(".l14").show(50);
		
			}
	});
	

var u15=0;
	var v15=0;
	$("#hurdu15").click(function(e) {
        ++u15;
		v15=u15%2;
		$("#hadithurdu15").slideToggle(500);
		if(v15==1){
		$(".l15").hide(1);
		$(".du15").show(50);
		}
		else{
			$(".du15").hide(1);
		$(".l15").show(50);
		
			}
	});
	

var u16=0;
	var v16=0;
	$("#hurdu16").click(function(e) {
        ++u16;
		v16=u16%2;
		$("#hadithurdu16").slideToggle(500);
		if(v16==1){
		$(".l16").hide(1);
		$(".du16").show(50);
		}
		else{
			$(".du16").hide(1);
		$(".l16").show(50);
		
			}
	});
	

var u17=0;
	var v17=0;
	$("#hurdu17").click(function(e) {
        ++u17;
		v17=u17%2;
		$("#hadithurdu17").slideToggle(500);
		if(v17==1){
		$(".l17").hide(1);
		$(".du17").show(50);
		}
		else{
			$(".du17").hide(1);
		$(".l17").show(50);
		
			}
	});
	

var u18=0;
	var v18=0;
	$("#hurdu18").click(function(e) {
        ++u18;
		v18=u18%2;
		$("#hadithurdu18").slideToggle(500);
		if(v18==1){
		$(".l18").hide(1);
		$(".du18").show(50);
		}
		else{
			$(".du18").hide(1);
		$(".l18").show(50);
		
			}
	});
	

var u19=0;
	var v19=0;
	$("#hurdu19").click(function(e) {
        ++u19;
		v19=u19%2;
		$("#hadithurdu19").slideToggle(500);
		if(v19==1){
		$(".l19").hide(1);
		$(".du19").show(50);
		}
		else{
			$(".du19").hide(1);
		$(".l19").show(50);
		
			}
	});
	

var u20=0;
	var v20=0;
	$("#hurdu20").click(function(e) {
        ++u20;
		v20=u20%2;
		$("#hadithurdu20").slideToggle(500);
		if(v20==1){
		$(".l20").hide(1);
		$(".du20").show(50);
		}
		else{
			$(".du20").hide(1);
		$(".l20").show(50);
		
			}
	});
	
var u21=0;
	var v21=0;
	$("#hurdu21").click(function(e) {
        ++u21;
		v21=u21%2;
		$("#hadithurdu21").slideToggle(500);
		if(v21==1){
		$(".l21").hide(1);
		$(".du21").show(50);
		}
		else{
			$(".du21").hide(1);
		$(".l21").show(50);
		
			}
	});
	
var u22=0;
	var v22=0;
	$("#hurdu22").click(function(e) {
        ++u22;
		v22=u22%2;
		$("#hadithurdu22").slideToggle(500);
		if(v22==1){
		$(".l22").hide(1);
		$(".du2").show(50);
		}
		else{
			$(".du22").hide(1);
		$(".l22").show(50);
		
			}
	});
	
var u23=0;
	var v23=0;
	$("#hurdu23").click(function(e) {
        ++u23;
		v23=u23%2;
		$("#hadithurdu23").slideToggle(500);
		if(v23==1){
		$(".l23").hide(1);
		$(".du23").show(50);
		}
		else{
			$(".du23").hide(1);
		$(".l23").show(50);
		
			}
	});
	
var u24=0;
	var v24=0;
	$("#hurdu24").click(function(e) {
        ++u24;
		v24=u24%2;
		$("#hadithurdu24").slideToggle(500);
		if(v24==1){
		$(".l24").hide(1);
		$(".du24").show(50);
		}
		else{
			$(".du24").hide(1);
		$(".l24").show(50);
		
			}
	});
	
var u25=0;
	var v25=0;
	$("#hurdu25").click(function(e) {
        ++u25;
		v25=u25%2;
		$("#hadithurdu25").slideToggle(500);
		if(v25==1){
		$(".l25").hide(1);
		$(".du25").show(50);
		}
		else{
			$(".du25").hide(1);
		$(".l25").show(50);
		
			}
	});
	
var u26=0;
	var v26=0;
	$("#hurdu26").click(function(e) {
        ++u26;
		v26=u26%2;
		$("#hadithurdu26").slideToggle(500);
		if(v26==1){
		$(".l26").hide(1);
		$(".du26").show(50);
		}
		else{
			$(".du26").hide(1);
		$(".l26").show(50);
		
			}
	});
	
var u27=0;
	var v27=0;
	$("#hurdu27").click(function(e) {
        ++u27;
		v27=u27%2;
		$("#hadithurdu27").slideToggle(500);
		if(v27==1){
		$(".l27").hide(1);
		$(".du27").show(50);
		}
		else{
			$(".du27").hide(1);
		$(".l27").show(50);
		
			}
	});
	
var u28=0;
	var v28=0;
	$("#hurdu28").click(function(e) {
        ++u28;
		v28=u28%2;
		$("#hadithurdu28").slideToggle(500);
		if(v28==1){
		$(".l28").hide(1);
		$(".du28").show(50);
		}
		else{
			$(".du28").hide(1);
		$(".l28").show(50);
		
			}
	});
	
	
var u29=0;
	var v29=0;
	$("#hurdu29").click(function(e) {
        ++u29;
		v29=u29%2;
		$("#hadithurdu29").slideToggle(500);
		if(v29==1){
		$(".l29").hide(1);
		$(".du29").show(50);
		}
		else{
			$(".du29").hide(1);
		$(".l29").show(50);
		
			}
	});
	
	
var u30=0;
	var v30=0;
	$("#hurdu30").click(function(e) {
        ++u30;
		v30=u30%2;
		$("#hadithurdu30").slideToggle(500);
		if(v30==1){
		$(".l30").hide(1);
		$(".du30").show(50);
		}
		else{
			$(".du30").hide(1);
		$(".l30").show(50);
		
			}
	});
	
	
		
var u31=0;
	var v31=0;
	$("#hurdu31").click(function(e) {
        ++u31;
		v31=u31%2;
		$("#hadithurdu31").slideToggle(500);
		if(v31==1){
		$(".l31").hide(1);
		$(".du31").show(50);
		}
		else{
			$(".du31").hide(1);
		$(".l31").show(50);
		
			}
	});
	
	
	
	
	
	
	
})