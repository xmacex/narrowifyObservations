function toggleheader(event) {
    var header = "category, tag\n";
    var output = document.getElementById("output");
    if (event.target.checked) {
	output.innerText = header + output.innerText;
	output.classList.add("highlightheader");
    } else {
	output.innerText = output.innerText.replace(header, "");
	output.classList.remove("highlightheader");
    }
}

function split() {
    var data = document.getElementById("datainput").value.split('\n');
    var output = document.getElementById("output");
    output.innerText += data.map(splitLine).join('');
}

function splitLine(line) {
    if (line.includes(',')) {
	var [head, tail] = line.split(',');
	return tail.split(';').map(
	    sf => head.trim() + ', ' + sf.trim() + '\n'
	).join('');
    }
}

function copy() {
    var output = document.getElementById("output");
    var range = document.createRange();
    range.selectNodeContents(output);
    var selection = window.getSelection();
    selection.addRange(range);
    document.execCommand("copy");
}
