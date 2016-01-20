function user(){
    try{
    var a = localStorage.getItem("userdemoterminal");
    document.getElementById("user").innerHTML = a.replace("null", "") + '@terminaljs:~$';
    var b = localStorage.getItem("bash.colors");
    var c = b.split("<!>");
    document.body.style.background = c[1];
    document.body.style.color = c[2];
    }
    catch(err){
        document.getElementById("user").innerHTML = "guest@terminaljs:~$";
    }
}
function save(n){
    localStorage.setItem(n, document.getElementById('eit').innerHTML);
}
/*function up(e){
    e = e || window.event;
    if (e.keyCode == 38){
        document.getElementById("input").innerText = localStorage.getItem("terminallast");
        return false;
    }
    return true;
}*/
function searchKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        var input = document.getElementById('input').innerHTML;
        var input2 = input.split(" ");
        try{
            var a = localStorage.getItem("userdemoterminal");
            var ab = a.replace("null", "") + '@terminalsjs:~$';
        }
        catch(err){
            var ab = "guest@terminaljs:~$";    
        }
        var s = document.getElementById('terminal').innerHTML;
        var t = s.replace('<span id="input"', '<span id="history"');
        var sd = t.replace('contenteditable="true"', '');
        var u = sd.replace('id="eit"', '');
        localStorage.setItem("history", localStorage.getItem("history") + "<br>" + input);
        var d = ' not recognized as a command.';
        var d23 = ' ';
        if (input2[0] == "open"){
            window.open(input2[1]);
            var d = "<br>Opened New tab...";
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "wget"){
            //window.open(input2[1]);
            var d = "<br>Downloading...";
            var link = document.createElement("a");
            link.download = input2[1];
            link.href = input2[1];
            link.click();
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "new"){
            window.open(window.location.href);
            var d = "<br>Opened New Terminal tab...";
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "history"){
            var a = localStorage.getItem("history");
            var d = a.replace("null", "");
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
            //alert(d);
        }
        if (input2[0] == "clear(history)"){
            localStorage.removeItem("history");
            var d = "<br>History cleared";
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "touch"){
            localStorage.setItem(input2[1], "");
            var d = '<br>Created file: ' + input2[1];
            localStorage.setItem("filesdemo", localStorage.getItem("filesdemo") + "<br>" + input2[1]);
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "cat" && input2[1] == "\\"){
            var d = '<br>Editing file: ' + input2[2] + '<br><div id="eit" contenteditable="true" onkeyup="save(' + "'" + input2[2] + "'" + ');"></div>';
        }
        if (input2[0] == "cat" && input2[1] == "/"){
            var d = '<br>Reading file "' + input2[2] + '"...<br>' + localStorage.getItem(input2[2]);
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "location"){
            var d = '<br>You are located at: <a href="' + window.location.href + '">' + window.location.href + '</a>';
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "set"){
            localStorage.setItem("userdemoterminal", input2[1]);
            var d = '<br>Account Set!';
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "reload"){
            location.reload();
        }
        if (input2[0] == "help"){
            var d = '<br><br>Get Your History -- history<br>Clear Your History -- clear(history)<br>Create file -- touch (filename)<br>edit a file -- cat \\ (filename)<br>Read a file -- cat / (filename)<br>Window Location -- location<br>Change Name -- set (name)<br>Change color -- bash.colors color1= (backgroundcolor) color2= (textcolor)<br>Reload Page -- reload<br>List of your files -- ls<br>Run a js file -- run js (filename)<br>Download a file -- download (filename)<br>Remove a file -- rm (filename)<br>Open a New Terminal -- new<br>Open a New Tab with your url -- open (url)<br>Download a file -- wget (url)<br>Add a command -- alias (name) (script to run)<br>run alias -- ./ (command name)<br>List of personal commands -- bashrc<br>Get last command -- last<br>';
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "ls"){
            var d = "<br>" + localStorage.getItem("filesdemo");
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
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
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "rm"){
            localStorage.removeItem(input2[1]);
            var lsa = localStorage.getItem("filesdemo");
            localStorage.setItem("filesdemo", lsa.replace("<br>" + input2[1], ""));
            var d = "<br>File deleted...";
            //document.getElementById('terminal').innerHTML = u + '<br>' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">  </span>';
        }
        if (input2[0] == "last"){
            //document.getElementById("input").innerText = localStorage.getItem("terminallast");
            var d = "<br>Last Command: " + localStorage.getItem("terminallast");
            var d23 = localStorage.getItem("terminallast");
        }
        if (input2[0] == "bash.colors"){
            localStorage.setItem("bash.colors", "<!>" + input2[2] + "<!>" + input2[4] + "<!>");
            var d = "<br>Changed Bash Colors, colors saved in bash.colors file...";
        }
        if (input2[0] == "run" && input2[1] == "js"){
            eval(localStorage.getItem(input2[2]));
            var d = "<br>JavaScript is running...";
        }
        if (input2[0] == "alias"){
            localStorage.setItem("bashrc", localStorage.getItem("bashrc") + "<br>" + input2[1]);
            localStorage.setItem(input2[1], input2[2]);
            var d = "<br>Alias set!";
        }
        if (input2[0] == "./"){
            var bna = localStorage.getItem(input2[1]);
            eval(localStorage.getItem(bna));
            var d = "";
        }
        if (input2[0] == "bashrc"){
            var d = localStorage.getItem("bashrc").replace("null", "");
        }
        localStorage.setItem("terminallast", input);
        document.getElementById('terminal').innerHTML = u + '<br>bash: ' + input + d + '<br><span class="prompt"><content>' + ab + ' </content></span><span id="input" onkeypress="return searchKeyPress(event);" contenteditable="true" class="input">' + d23 + '</span>';
        return false;
    }
    return true;
}
