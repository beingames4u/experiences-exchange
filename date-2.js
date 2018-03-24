/*<![CDATA[*/
document.write("<div id='cnmumeladate'>");
var mydate=new Date()
var year=mydate.getYear()
if (year < 1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
var dayarray=new Array("الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت")
var montharray=new Array("يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر")
document.write("<span class='cnmdaylabel'>"+dayarray[day]+"<\/span><span class='fasel'> / <\/span><span class='daylnum'>"+daym+"<\/span><span class='fasel'> <\/span><span class='month'>"+montharray[month]+"<\/span><span class='fasel'> / <\/span><span class='year'>"+year+"<\/span><span class='melady'> م <\/span>")
document.write("<\/div>");
/*]]>*/
