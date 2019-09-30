if (window.addEventListener) {              
    window.addEventListener("resize", browserResize);
} else if (window.attachEvent) {                 
    window.attachEvent("onresize", browserResize);
}
var xbeforeResize = window.innerWidth;
var ybeforeResize = window.innerWidth;
var zbeforeResize = window.innerWidth;


function skyscraperResize() {
if (window.innerWidth < 975 + 17) {
			document.getElementById("div-gpt-ad-1422003450156-5").style.minHeight="0";
		}
}

function browserResize() {
    var afterResize = window.innerWidth;
    if ((xbeforeResize < (1450 + 14) && afterResize >= (1450 + 14)) || (xbeforeResize >= (1450 + 14) && afterResize < (1450 + 14)) ||
        (xbeforeResize < (700 + 14) && afterResize >= (700 + 14)) || (xbeforeResize >= (700 + 14) && afterResize < (700 + 14)) ||
        (xbeforeResize < (480 + 17) && afterResize >= (480 + 17)) ||(xbeforeResize >= (480 + 17) && afterResize < (480 + 17))) {
        xbeforeResize = afterResize;
        googletag.cmd.push(function() {
            googletag.pubads().refresh([gptAdSlots[0]]);
        });
    }
    if ((ybeforeResize < (1675 + 14) && afterResize >= (1675 + 14)) || (ybeforeResize >= (1675 + 14) && afterResize < (1675 + 14)) ||
    	(ybeforeResize < (1100 + 14) && afterResize >= (1100 + 14)) || (ybeforeResize >= (1100 + 14) && afterResize < (1100 + 14)) ||
        (ybeforeResize < (975 + 17) && afterResize >= (975 + 17)) || (ybeforeResize >= (975 + 17) && afterResize < (975 + 17))) {
        ybeforeResize = afterResize;
       	skyscraperResize()
        googletag.cmd.push(function() {
            googletag.pubads().refresh([gptAdSlots[1]]);
        });
    }
    if ((zbeforeResize < (1200 + 14) && afterResize >= (1200 + 14)) || (zbeforeResize >= (1200 + 14) && afterResize < (1200 + 14))) {
        zbeforeResize = afterResize;
        googletag.cmd.push(function() {
            googletag.pubads().refresh([gptAdSlots[2], gptAdSlots[3]]);
        });
	}
}
skyscraperResize();

function open_menu() {
    var x, m;
    m = (document.getElementById("leftmenu") || document.getElementById("sidemenu"));
    if (m.style.display == "block") {
        close_menu();
    } else {
        w3_close_all_nav();    
        m.style.display = "block";
        if (document.getElementsByClassName) {
            x = document.getElementsByClassName("chapter")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
            x = document.getElementsByClassName("nav")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
            x = document.getElementsByClassName("sharethis")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
        }
        fix_sidemenu();
    }
}
function close_menu() {
    var m;
    m = (document.getElementById("leftmenu") || document.getElementById("sidemenu"));
    m.style.display = "none";    
    if (document.getElementsByClassName) {
        x = document.getElementsByClassName("chapter")
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = "visible";
        }
        x = document.getElementsByClassName("nav")
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = "visible";
        }
        x = document.getElementsByClassName("sharethis")
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = "visible";
        }                        
    }
}
if (window.addEventListener) {
    window.addEventListener("scroll", function () {fix_sidemenu(); });
    window.addEventListener("resize", function () {fix_sidemenu(); });    
    window.addEventListener("touchmove", function () {fix_sidemenu(); });    
    window.addEventListener("load", function () {fix_sidemenu(); });
} else if (window.attachEvent) {
    window.attachEvent("onscroll", function () {fix_sidemenu(); });
    window.attachEvent("onresize", function () {fix_sidemenu(); });    
    window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
    window.attachEvent("onload", function () {fix_sidemenu(); });
}
function fix_sidemenu() {
    if (document.getElementById("leftmenu")) {
    var w, top;
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    top = scrolltop()      
    if (w < 993 && w > 600) {
        if (top == 0) {
            document.getElementById("leftmenu").style.paddingTop = "147px";            
        }
        if (top > 0 && top < 100) {
            document.getElementById("leftmenu").style.paddingTop = (140 - top) + "px";            
        }
        if (top > 100) {
            document.getElementById("leftmenu").style.paddingTop = document.getElementById("topnav").offsetHeight + "px";
            document.getElementById("belowtopnav").style.paddingTop = "44px";        
            document.getElementById("topnav").style.position = "fixed";        
            document.getElementById("topnav").style.top = "0";                
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
/*SCROLLNYTT:*/        
        document.getElementById("leftmenuinner").style.paddingTop = "0";
/*SLUTT*/
    } else {
        if (top == 0) {
            if (w < 600) {
                document.getElementById("leftmenu").style.paddingTop = "109px";
            } else {
                document.getElementById("leftmenu").style.paddingTop = "0";
            }
        }
        if (top > 0 && top < 63) {
            document.getElementById("leftmenu").style.paddingTop = (109 - top) + "px";            
        }
        if (top > 63) {
            document.getElementById("leftmenu").style.paddingTop = "44px";            
/*SCROLLNYTT:*/       
            if (w > 992) {
                document.getElementById("leftmenuinner").style.paddingTop = "44px";                        
            }
/*SLUTT*/
            document.getElementById("belowtopnav").style.paddingTop = "44px";        
            document.getElementById("topnav").style.position = "fixed";        
            document.getElementById("topnav").style.top = "0";                
        } else {
/*SCROLLNYTT:*/       
            if (w > 992) {
                document.getElementById("leftmenuinner").style.paddingTop = (112 - top) + "px";
            }
/*SLUTT*/        
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
    }
    } else {



    var w, top;
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    top = scrolltop()      
    if (w < 993 && w > 600) {
        if (top == 0) {
            document.getElementById("sidemenu").style.paddingTop = "147px";            
        }
        if (top > 0 && top < 100) {
            document.getElementById("sidemenu").style.paddingTop = (140 - top) + "px";            
        }
        if (top > 100) {
            document.getElementById("sidemenu").style.paddingTop = document.getElementById("topnav").offsetHeight + "px";            
            document.getElementById("belowtopnav").style.paddingTop = "44px";        
            document.getElementById("topnav").style.position = "fixed";        
            document.getElementById("topnav").style.top = "0";                
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
    } else {
        if (top == 0) {
            if (w < 600) {
                document.getElementById("sidemenu").style.paddingTop = "109px";
            } else {
                document.getElementById("sidemenu").style.paddingTop = "0";
            }
        }
        if (top > 63) {
            document.getElementById("sidemenu").style.paddingTop = "0";            
            document.getElementById("belowtopnav").style.paddingTop = "44px";        
            document.getElementById("topnav").style.position = "fixed";        
            document.getElementById("topnav").style.top = "0";                
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
    }
    }
}
function scrolltop() {
    var top = 0;
    if (typeof(window.pageYOffset) == "number") {
        top = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    return top;
}
function w3_open_nav(x) {
    var contentNode;
    if (document.getElementById("nav_" + x).style.display == "block") {
        w3_close_nav(x);
    } else {
        w3_close_all_nav();
        if (document.getElementById("nav_" + x).innerHTML == "") {
            contentNode = document.body.removeChild(document.getElementById("nav_" + x + "_content"));
            document.getElementById("nav_" + x).appendChild(contentNode);
            document.getElementById("nav_" + x + "_content").style.display = "block";
        }
        document.getElementById("nav_" + x).style.display = "block";        
        if (document.getElementById("topnavbtn_" + x)) {        
            document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
            document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";                
        }
        if (x == "search") {
            if (document.getElementById("gsc-i-id1")) {document.getElementById("gsc-i-id1").focus(); }
        }  
    }
}
function w3_close_nav(x) {
    document.getElementById("nav_" + x).style.display = "none";
    if (document.getElementById("topnavbtn_" + x)) {
        document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
        document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[1].style.display = "none";                
    }
}
function w3_close_all_nav() {
    w3_close_nav("tutorials");
    w3_close_nav("references");
    w3_close_nav("examples");
    w3_close_nav("translate");
    w3_close_nav("search");
    close_menu();
}
(function () {
    var x, i, a, b, m;
    m = (document.getElementById("leftmenu") || document.getElementById("sidemenu"));
    x = m.getElementsByTagName("A");
    i;
    for (i = 0; i < x.length; i++) {
        if(document.location.href.indexOf(x[i].href) >= 0) {
          x[i].className = "active";
       }
    }
    x = document.getElementById("topnav").getElementsByTagName("A");
    for (i = 0; i < x.length; i++) {
        a = document.location.pathname;
        b = x[i].pathname;
        if (a.substr(0, a.indexOf("../index.html",1)) ==  b.substr(0, b.indexOf("../index.html",1))) {
            x[i].className = "active";
       }
    }
    if (window.addEventListener) { 
        document.getElementById("main").addEventListener("click", w3_close_all_nav, true);
        m.addEventListener("click", w3_close_all_nav, true);
        document.getElementById("right").addEventListener("click", w3_close_all_nav, true);
    } else if (window.attachEvent) {                 
        document.getElementById("main").attachEvent("onclick", w3_close_all_nav);
        m.attachEvent("onclick", w3_close_all_nav);
        document.getElementById("right").attachEvent("onclick", w3_close_all_nav);
    }
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
        document.getElementById("leftmenuinnerinner").style.overflowY = "scroll";
    }
})();



(function() {
  var cx = '012971019331610648934:m2tou3_miwy';
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();

function searchfield_focus(obj)
{
obj.style.color=""
obj.style.fontStyle=""
if (obj.value=="Search w3schools.com")
	{obj.value=""}
}
var addr=document.location.href;
function displayError()
{
document.getElementById("err_url").value=addr;
document.getElementById("err_form").style.display="block";
document.getElementById("err_email").focus();
hideSent();
}
function hideError()
{
document.getElementById("err_form").style.display="none";
}
function hideSent()
{
document.getElementById("err_sent").style.display="none";
}
function sendErr()
{
var xmlhttp;
var err_url=document.getElementById("err_url").value;
var err_email=document.getElementById("err_email").value;
var err_desc=document.getElementById("err_desc").value;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("POST.html","../err_sup.html",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("err_url=" + err_url + "&err_email=" + err_email + "&err_desc=" + escape(err_desc));
document.getElementById("err_desc").value="";
hideError();
document.getElementById("err_sent").style.display="block";
}
function clickFBLike() {
    document.getElementById("fblikeframe").style.display='block'
    document.getElementById("popupDIV").innerHTML = "<iframe src='/fblike.asp?r=" + Math.random() + "' frameborder='no' style='height:200px;width:300px;'></iframe><br><button onclick='hideFBLike()'>Close</button>";
}
function hideFBLike() {
    document.getElementById("fblikeframe").style.display='none'
}
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'en',
		autoDisplay: false,    
		gaTrack: true,
		gaId: 'UA-3855518-1',
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, 'google_translate_element');
}

function printPage() {
    var content = document.getElementById("main").innerHTML;
    var css = "", i, j, c = document.getElementById("main").cloneNode(true);
    for (i = 0; i < c.childNodes.length; i++) {
        if (c.childNodes[i].nodeType == 1 && c.childNodes[i].getAttribute("id") == "mainLeaderboard") {
            c.removeChild(c.childNodes[i]);
            content = c.innerHTML;
            break;
        }
    }
    var head = document.getElementsByTagName("head")[0].innerHTML;
/*    var styles = document.styleSheets;
    for (i = 0; i < styles.length; i++) {
        rules = styles[i].cssRules;
        if (rules) {
            for (j = 0; j < rules.length; j++) {
                css += rules[j].cssText;
            }
        }
    }*/
    var myWindow=window.open('','','');
    myWindow.document.write("<html><head>"+head+"<style>body{padding:15px;}@media print {.printbtn {display:none;}}</style></head><body><button class='printbtn' onclick='window.print()'>Print Page</button><br><br>"+content+"<p><a href='/about/about_copyright.asp'>Copyright 1999-2015</a> by Refsnes Data. All Rights Reserved.</p></body></html>");
    //myWindow.document.write("<html><head><style>"+css+"body{padding:15px;}@media print {.printbtn {display:none;}}</style></head><body><button class='printbtn' onclick='window.print()'>Print Page</button><br><br>"+content+"<p><a href='/about/about_copyright.asp'>Copyright 1999-2015</a> by Refsnes Data. All Rights Reserved.</p></body></html>");
}

function openGoogleTranslate() {
  var d = "text/javascript",
    e = "text/css",
    f = "stylesheet",
    g = "script",
    h = "link",
    k = "head",
    l = "complete",
    m = "UTF-8",
    n = ".";
  document.getElementById("google_translate_element").innerHTML = "";

  function p(b) {
    var a = document.getElementsByTagName(k)[0];
    a || (a = document.body.parentNode.appendChild(document.createElement(k)));
    a.appendChild(b)
  }

  function _loadJs(b) {
    var a = document.createElement(g);
    a.type = d;
    a.charset = m;
    a.src = b;
    p(a)
  }

  function _loadCss(b) {
    var a = document.createElement(h);
    a.type = e;
    a.rel = f;
    a.charset = m;
    a.href = b;
    p(a)
  }

  function _isNS(b) {
    b = b.split(n);
    for (var a = window, c = 0; c < b.length; ++c)
      if (!(a = a[b[c]])) return !1;
    return !0
  }

  function _setupNS(b) {
    b = b.split(n);
    for (var a = window, c = 0; c < b.length; ++c) a.hasOwnProperty ? a.hasOwnProperty(b[c]) ? a = a[b[c]] : a = a[b[c]] = {} : a = a[b[c]] || (a[b[c]] = {});
    return a
  }
  window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded", function() {
    document.readyState = l
  }, !1);
  if (_isNS('google.translate.Element')) {
    return
  }(function() {
    var c = _setupNS('google.translate._const');
    c._cl = 'no';
    c._cuc = 'googleTranslateElementInit';
    c._cac = '';
    c._cam = '';
    var h = 'translate.googleapis.com';
    var s = (true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http') + '://';
    var b = s + h;
    c._pah = h;
    c._pas = s;
    c._pbi = b + '/translate_static/img/te_bk.gif';
    c._pci = b + '/translate_static/img/te_ctrl3.gif';
    c._pli = b + '/translate_static/img/loading.gif';
    c._plla = h + '/translate_a/l';
    c._pmi = b + '/translate_static/img/mini_google.png';
    c._ps = b + '/translate_static/css/translateelement.css';
    c._puh = 'translate.google.com';
    _loadCss(c._ps);
    _loadJs(b + '/translate_static/js/element/main_no.js');
  })();
}

(function () {
function lookAhead(x, ipos, n) {
var i, c, text;
text = "";
for (i = ipos; i < ipos + n; i++) {
  if (i < x.length) {
    c = x.charAt(i);
    text += c;
  }
}
return text.toUpperCase();
}
var x, y, z, i, j, c, ch, text, status, ele;
if (!document.getElementsByClassName) {return;}
y = document.getElementsByClassName("htmlHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
ele = "";
text = "";
script = false;
status = "TAGW";
x = z.innerHTML;

for (i = 0; i < x.length; i++) {
c = x.charAt(i);
ch = c.charCodeAt(0);  
if (status == "ANG") {
  if (c == "}") {
    if (lookAhead(x, i, 2) == "}}") {
      text += "}}" + "</span>";
      i++;
      status = "TAGW";
      continue;
    }
  }
} 
if (status == "TAGW") {
  if (c == "&") {
    if (lookAhead(x, i, 7) == "&LT;!--") {
      text += "<span class='highCOM'>" + c;
      status = "COM";
      continue;
    }
    if (lookAhead(x, i, 4) == "&LT;") {
      if (script == true) {
        if (lookAhead(x, i, 11) != "&LT;/SCRIPT") {
          text += c;
          continue;
        }
        if (lookAhead(x, i, 11) == "&LT;/SCRIPT") {
          script = false;
        }
      }
      text += "<span class='highLT'>" + c;
      status = "LT";
      continue;
    }         
  }
  if (c == "{") {
    if (lookAhead(x, i, 2) == "{{") {
      text += "<span class='highATT'>" + c;
      status = "ANG";
      continue;
    }
  }    
}          
if (status == "ELEW") {
  if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
    text += "<span class='highELE'>" + c;
    ele = c;
    status = "ELE";
    if (lookAhead(x, i, 9) == "SCRIPT&GT") {script = true;}
    continue;
  }
} 
if (status == "ELE") {
  if (ch == 32 || ch == 10 || ch == 13 || ch == 9) {
    text += "</span>";
    status = "ATTW"; 
  }
  if (c == "&") {
    if (lookAhead(x, i, 4) == "&GT;") {
      text += "</span><span class='highGT'>" + c;
      status = "GT";
      continue;
    }
  }
  ele += c;
}        
if (status == "ATTW") {
  if (c == "&")
    if (lookAhead(x, i, 4) == "&GT;") {
      text += "<span class='highGT'>" + c;
      status = "GT";
      continue;
    }
  if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
    text += "<span class='highATT'>" + c;
    status = "ATT";
    continue;
  }
} 
if (status == "ATT") {
  if (c == "=") {
    text += c + "</span><span class='highVAL'>";
    status = "VALW";
    continue;
  }
  if (c == "&") {
    if (lookAhead(x, i, 4) == "&GT;") {
      text += "</span><span class='highGT'>" + c;
      status = "GT";
      continue;
    }
  }       
}
if (status == "COM") {
  if (c == "-") {
    if (lookAhead(x, i, 6) == "--&GT;") {
      text += c;
      status = "COMW";
      continue;
    }
  }
}       
if (status == "COMW") {
  if (c == "&") {
    if (lookAhead(x, i, 4) == "&GT;") {
      text += c;
      status = "GT";
      continue;
    }
  }
}       
if (status == "VALS") {
  if (c == "'") {
    text += c + "</span>";
    status = "ATTW";
    continue;
  }
}
if (status == "VALD") {
  if (c == '"') {
    text += c + "</span>";
    status = "ATTW";
    continue;
  }
}
if (status == "VALW") {
  if (c == "'") {
    status = "VALS";
    text += c;
    continue;
  }
  if (c == '"') {
    status = "VALD";
    text += c;
    continue;
  }    
}  
if (status == "LT") {
  if (c == ";") {
    text += c + "</span>";
    status = "ELEW";
    continue;
  }
} 
if (status == "GT") {
  if (c == ";") {
    text += c + "</span>";
    status = "TAGW";
    continue;
  }
} 
text += c;
}
z.innerHTML = text;


}})();

(function () {
function lookAhead(x, ipos, n) {
var i, c, text;
text = "";
for (i = ipos; i < ipos + n; i++) {
  if (i < x.length) {
    c = x.charAt(i);
    text += c;
  }
}
return text.toUpperCase();
}
var x, y, z, i, j, c, ch, text, status, temp, span;
if (!document.getElementsByClassName) {return;}
y = document.getElementsByClassName("cssHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
text = "";
temp = "";
span = false;
status = "SELW";
x = z.innerHTML;

for (i = 0; i < x.length; i++) {
c = x.charAt(i);
ch = c.charCodeAt(0);  
if (c == "<") {
  text += c;
  temp = status;
  status = "TAG";
  continue;
}
if (c == "../index.html") {
  if (lookAhead(x, i, 2) == "/*") {
    text += "<span class='highCOM'>";
    span = true;
    temp = status;
    status = "COM";
  }     
  text += c;
  continue;   
} 
if (status == "COM" ) {
  if (c == "*") {
      if (lookAhead(x, i, 2) == "*/") {
        if (span) {
          text += c;
          i++;
          text += x.charAt(i);
          text += "</span>";
          span = false;
          status = temp;
        }
      } else {
        text += c;
      }    
  continue;   
  }    
} 
if (status == "MED") {
  if (c == "{") {
    text += "</span>" + c;
    span = false;
    status = "SELW";
    continue;
  }
}           
if (status == "SELW") {
  if (c == "@") {
    if (lookAhead(x,i,5) == "@FONT") {
      text += "<span class='highELE'>" + c;
      span = true;
      status = "SEL";
      continue;
    } else {
      text += "<span class='highELE'>" + c;
      span = true;
      status = "MED";
      continue;
    }
  }
  if (c == "}") {
    text += c;
    continue;
  }
  if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
    text += "<span class='highELE'>" + c;
    span = true;
    status = "SEL";
    continue;
  }
}           
if (status == "TAG") {
  text += c;
  if (c == ">") {
    status = temp;
  }        
  continue;
}
if (c == "&") {
  text += c;
  if (lookAhead(x, i, 6) == "&NBSP;") {
    temp = status;
    status = "NBSP";
  }
  continue; 
}
if (status == "NBSP") {
  text += c;
  if (c == ";") {
    status = temp;
  }        
  continue;
}
if (status == "SEL") {
  if (c == "{") {
    if (span) {
      text += "</span>";
      span = false;
    }
    text += c;
    status = "PROW"; 
    continue;
  }
}        
if (status == "PROW") {
  if (c == "}") {
    if (span) {
      text += "</span>";
      span = false;
    }
    text += c;
    status = "SELW"; 
    continue;
  } 
  if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
    text += "<span class='highATT'>" + c;
    span = true;
    status = "VALW"; 
    continue;
  }
}        
if (status == "VALW") {
  if (c == ":") {
    text += c; 
    if (span) {
      text += "</span>";
      span = false;
    }
    text += "<span class='highVAL'>";
    span = true;
    status = "VAL"; 
    continue;
    }
}        
if (status == "VAL") {
  if (c == "}") {
    if (span) {
      text += "</span>";
      span = false;
    }
    text += c;
    status = "SELW"; 
    continue;
  }
  if (c == ";") {
    text += c;
    if (span) {
      text += "</span>";
      span = false;
    }
    status = "PROW"; 
    continue;
  }
}        
text += c;
}

z.innerHTML = text;

}})();

(function () {
function lookAhead(x, ipos, n) {
var i, c, text;
text = "";
for (i = ipos; i < ipos + n; i++) {
  if (i < x.length) {
    c = x.charAt(i);
    text += c;
  }
}
return text.toUpperCase();
}
var x, y, z, i, j, c, ch, text, status;
if (!document.getElementsByClassName) {return;}
y = document.getElementsByClassName("jsonHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
text = "";
status = "";
x = z.innerHTML;

for (i = 0; i < x.length; i++) {
c = x.charAt(i);
ch = c.charCodeAt(0);  
 
if (status == "") {
  if (c == '"') {
    status = "OBJNAME";
    text += "<span class='highELE'>" + c;
    continue;
  }        
  if (c == "{") {
    status = "OBJECT";
    text += c;
    continue;
  }
  text += c;
  continue;
}
if (status == "OBJECT") {
  if (c == '"') {
    status = "OBJNAME";
    text += "<span class='highELE'>" + c;
    continue;
  }        
  text += c;
  continue;
}
if (status == "OBJNAME") {
  if (c == '"') {
    status = "WAITCOLON";
    text += c + "</span>"
    continue;
  }        
  text += c;
  continue;
}
if (status == "WAITCOLON") {
  if (c == ":") {
    status = "COLON";
    text += c;
    continue;
  }
  text += c;
  continue;
}        
if (status == "COLON") {
  if (c == '"') {
    status = "VALUE";
    text += "<span class='highVAL'>" + c;
    continue;
  }
  if (ch > 47 && ch < 58) {
    status = "NUMBER";
    text += "<span class='highVAL'>" + c;
    continue;
  }
  if (c == "{") {
    status = "OBJECT";
    text += c;
    continue;
  }
  if (c == "[") {
    status = "ARRAY";
    text += c;
    continue;
  }
  text += c;
  continue;
}
if (status == "ARRAY") {
  if (c == ']') {
    status = ""; 
    text += c;
    continue;
  }
  if (c == '{') {
    status = "OBJECT"; 
    text += c;
    continue;
  }
  text += c;
  continue;
}        
if (status == "VALUE") {
  if (c == '"') {
    status = "OBJECT"; 
    text += c + "</span>";
    continue;
  }
  text += c;
  continue;
}
if (status == "NUMBER") {
  if (ch < 48 || ch > 57) {
    status = ""; 
    text += "</span>" + c;
    continue;
  }
  text += c;
  continue;
} 
text += c;
}
z.innerHTML = text;
}})();

(function () {
function lookAhead(x, ipos, n) {
var i, c, ch, text;
text = "";
for (i = ipos; i < ipos + n; i++) {
  if (i < x.length) {
    c = x.charAt(i);
    ch = c.charCodeAt(0);  
    if (ch == 32 || ch == 10 || ch == 13 || ch == 9 ) {
      text += " ";        
    } else {
      text += c;
    }
  }
}
return text;
}
function lookWord(x, ipos) {
var i, c, ch, text;
text = "";
for (i = ipos; i < x.length; i++) {
  c = x.charAt(i);
  ch = c.charCodeAt(0);  
  if (ch == 10 || ch == 13 || ch == 9 || ch == 32 || ch == 38 || ch == 40 || ch == 41 || ch == 42 || ch == 43 ||
  ch == 44 || ch == 58 || ch == 47 || ch == 58 || ch == 59 || ch == 60 || ch == 61 || ch == 91 || ch == 93) {
    return text;        
  } else {
    text += c;
  }
}
return text;
}
var x, y, z, i, j, k, c, ch, text, status, ele, comp, pos;
jsArr = ["var","boolean","break","case","catch","continue","debugger","default","do","else","finally","for",
"function","if","in","new","return","switch","throw","try","typeof","while","with"];
if (!document.getElementsByClassName) {return;}
y = document.getElementsByClassName("jsHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
ele = "";
text = "";
status = "";
x = z.innerHTML;

for (i = 0; i < x.length; i++) {
  c = x.charAt(i);
  ch = c.charCodeAt(0);
  if (ch == 32 || ch == 10 || ch == 13 || ch == 9 ) {
    text += c;
    continue;
  }
  if (lookAhead(x, i, 2) == "//") {
    text += "<span class='highCOM'>";  
    pos = x.substr(i).indexOf("<br>");
    if (pos == -1) {
      text += x.substr(i); 
      i = x.length;
    } else {
      text += x.substr(i,pos + 4);
      i += pos + 3;
    }  
    text += "</span>"
    continue;
  }
  if (lookAhead(x, i, 2) == "/*") {
    text += "<span class='highCOM'>";  
    pos = x.substr(i).indexOf("*/");
    if (pos == -1) {
      text += x.substr(i); 
      i = x.length;
    } else {
      text += x.substr(i,pos + 2);
      i += pos + 1;
    }  
    text += "</span>"
    continue;
  }
  if (c == "&") {
    pos = x.substr(i).indexOf(";");
    if (pos == -1) {
      text += x.substr(i); 
      i = x.length;
    } else {
      text += x.substr(i,pos + 1);
      i += pos;
    }  
    continue;
  }
  if (c == "'" || c == '"') {
    text += "<span class='highVAL'>";  
    pos = x.substr(i+1).indexOf(c);
    if (pos == -1) {
      text += x.substr(i); 
      i = x.length;
    } else {
      text += x.substr(i, pos + 2);
      i += pos + 1;
    }  
    text += "</span>"
    continue;
  }
  if (lookAhead(x, i, 4) == "<br>") {
    i += 3;
    text += "<br>";
    continue
  }
  ele = lookWord(x, i);
  if (ele) {
    if (ele =="true" || ele == "false" || ele == "null" || isNaN(ele) == false) {  
      text += "<span class='highVAL'>" + x.substr(i,ele.length) + "</span>";
      i += ele.length - 1;
      status = "";
      continue;
    }
    for (k = 0; k < jsArr.length; k++) {
      if (ele == jsArr[k]) {
        text += "<span class='highELE'>" + x.substr(i,ele.length) + "</span>";
        i += ele.length - 1;
        status = "SPW";
        break;
      }  
    }
    if (status == "SPW") {
      status = "";
      continue;   
    } else {
      text += x.substr(i, ele.length);
      i += ele.length - 1;
      continue;
    }
  }
  text += c;
}
z.innerHTML = text;
}})();


