var image = ['Chandiagrh.jpg', 'elante.jpg', 'goldentemple.jpg']
var first_name = ['Amandeep', 'Rupinderjeet', 'Mounika']
var last_name = ['Khangura', 'kaur', 'BAdge']
var job = ['Student', 'Student', 'Student']
var salary = ['20', '20', '20']

function create_row(a, b, c, d, g, index) {
    var row = ""
    row += "<tr id='" + index + "'>\n"
    row += "<td><img src=Photos/" + a + " height='100' width='100' ></td>\n"
    row += "<td>" + b + "</td>\n"
    row += "<td>" + c + "</td>\n"
    row += "<td>" + d + "</td>\n"
    row += "<td>" + g + "</td>\n"
    row += "<td><img src='Photos/sign.png' height='30' width='30' onclick='remove_row(" + index + ")'></td>\n"
    row += "</tr>"
    return row
}

function refresh_table() {
    var code_snippet = ""
    for (var index in first_name)
        code_snippet += create_row(image[index], first_name[index], last_name[index], job[index], salary[index], index)
    var table = document.querySelector('#table')
    table.innerHTML = code_snippet
}

function remove_row(index) {
    image.splice(index, 1)
    first_name.splice(index, 1)
    last_name.splice(index, 1)
    job.splice(index, 1)
    salary.splice(index, 1)
    refresh_table()
}

function onEnterUp(event) {
    if (event.code !== 'Enter') return
    var f_v = document.getElementById("img")
    var file_name = document.getElementById("img").files[0].name
    var f_name = document.getElementById("1st")
    var l_name = document.getElementById("las")
    var jobl = document.getElementById("job")
    var sa = document.getElementById("sal")
    image.push(file_name)
    first_name.push(f_name.value)
    last_name.push(l_name.value)
    job.push(jobl.value)
    salary.push(sa.value)
    f_v.value = ""
    f_name.value = ""
    l_name.value = ""
    jobl.value = ""
    sa.value = ""
    refresh_table()
}