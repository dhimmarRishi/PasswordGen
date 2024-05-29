let alpha = "qwertyuiopasdfghjklzxcvbnm"
let num = "1234567890"
let sp = "!#$%&'()*+,-./:;=>?@[]^_`{|}~"

const display = document.getElementById('display')
const length = document.getElementById('lennum')
const range = document.getElementById('range')
let check = document.getElementsByClassName("check")



function update(n) {
    let isnum = document.getElementsByClassName("check")[0].checked
    ischar = document.getElementsByClassName("check")[1].checked
    issp = document.getElementsByClassName("check")[2].checked
    password = ""
    if (isnum || ischar || issp) {
        while (n > 0) {
            console.log(isnum)
            i = Math.floor(Math.random() * 3)
            // console.log("i " + i)
            switch (i) {
                case 0:
                    if (ischar) {
                        j = Math.floor(Math.random() * alpha.length)
                        // console.log(j + " " + alpha[j])
                        password += alpha[j]
                        n--;
                    }

                    break;
                case 1:
                    if (isnum) {

                        j = Math.floor(Math.random() * num.length)
                        // console.log(j + " " + num[j])
                        password += num[j]
                        n--;

                    }
                    break;
                case 2:
                    if (issp) {

                        j = Math.floor(Math.random() * sp.length)
                        // console.log(j + " " + sp[j])
                        password += sp[j]
                        n--;

                    }
                    break;
            }
        }
    }
    else {
        alert("Select password content")
    }
    display.innerHTML = password

console.log(password)
return password
}
    

range.addEventListener("change", () => {
    lennum.innerText = range.value
    update(Number(range.value))
})

check = Array.from(check)
check.forEach(element => {
    element.addEventListener("click", () => {
        update(Number(range.value))
    })
});

