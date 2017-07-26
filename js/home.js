function show(elem, pageurl, cuurent){ 
var mainNav = document.getElementById('nav');
var arr = mainNav.getElementsByTagName('li');
for (var i=0;i<arr.length;i++){
if(i != cuurent){ 
arr[i].className = 'tab_inactive';
}else {
arr[i].className = 'tab_active';
}
}  
go(pageurl);
}

function go(pageurl){
if (pageurl == 'index'){
window.location.href =  pageurl + ".html";
} else{
document.getElementById('tblRight').style.display = "none";
var pageHeight = document.documentElement.clientHeight;
pageHeight = (pageHeight * 76) / 100;
var pagewidth = document.documentElement.clientWidth;
pagewidth = (pagewidth * 84) / 100;
document.getElementById('navigationFrame').height= pageHeight;
document.getElementById('navigationFrame').width=pagewidth;  //85% of window width.
document.getElementById('navigationFrame').src = pageurl + ".html";
return false;
}
}