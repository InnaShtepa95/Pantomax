function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  //var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(Math.random() * 0)  ;
  var min=Math.floor(Math.random()* 0 ) ;
  var sec=Math.floor(Math.random() * 9) + 1;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   //timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption"></div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption"></div><span class="number min">'+min+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption"></div><span class="number sec">'+sec+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},1000 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2020/01/01 00:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}