function user(){
    var a = localStorage.getItem("userdemoterminal");
    document.getElementById("user").innerHTML = a.replace("null", "") + '@terminaljs:~$';
}
function save(n){
    localStorage.setItem(n, document.getElementById('eit').innerHTML);
}
function searchKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        var input = document.getElementById('input').innerHTML;
        var input2 = input.split(" ");
        var a = localStorage.getItem("userdemoterminal");
        var ab = a.replace("null", "") + '@demoterminalsjs:~$';
        var s = document.getElementById('terminal').innerHTML;
        var t = s.replace('<span id="input"', '<span id="history"');
        var sd = t.replace('contenteditable="true"', '');
        var u = sd.replace('id="eit"', '');
        localStorage.setItem("history", localStorage.getItem("history") + "<br>" + input);
        var d = ' not recognized as a command.';
        if (input2[0] == "history"){
            var a = localStorage.getItem("history");
            var d = a.replace("null", "");
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
            //alert(d);
        }
        if (input2[0] == "clear(history)"){
            localStorage.removeItem("history");
            var d = "<br>History cleared";
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "touch"){
            localStorage.setItem(input2[1], "");
            var d = '<br>Created file: ' + input2[1];
            localStorage.setItem("filesdemo", localStorage.getItem("filesdemo") + "<br>" + input2[1]);
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "edit"){
            var d = '<br>Editing file: ' + input2[0];
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><div id="eit" contenteditable="true" onkeyup="save(' + "'" + input2[1] + "'" + ');"></div>' + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "read"){
            var d = '<br>Reading file "' + input2[1] + '"...<br>' + localStorage.getItem(input2[1]);
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "location"){
            var d = '<br>You are located at: <a href="' + window.location.href + '">' + window.location.href + '</a>';
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "set"){
            localStorage.setItem("userdemoterminal", input2[1]);
            var d = '<br>Account Set!';
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "reload"){
            location.reload();
        }
        if (input2[0] == "help"){
            var d = '<br><br>Get Your History -- history<br>Clear Your History -- clear(history)<br>Create file -- touch (filename)<br>edit a file -- edit (filename)<br>Read a file -- read (filename)<br>Window Location -- location<br>Change Name -- set (name)<br>Reload Page -- reload<br>List of your files -- ls<br>Download a file -- download (filename)<br>Remove a file -- rm (filename)<br><br>';
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "ls"){
            var d = "<br>" + localStorage.getItem("filesdemo");
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
            }
        if (input2[0] == "download"){
            var text = localStorage.getItem(input2[1]);
            var filename = input2[1];
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            var d = "<br>File downloaded...";
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "rm"){
            localStorage.removeItem(input2[1]);
            var lsa = localStorage.getItem("filesdemo");
            localStorage.setItem("filesdemo", lsa.replace(input2[1], ""));
            var d = "<br>File deleted...";
            document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        
        return false;
    }
    return true;
}