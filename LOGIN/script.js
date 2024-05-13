function btn(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var texto;

    if(senha=== "4321" && login=== "4321"){
        texto= "Você está logado!"
        window.location.href= "https://www.bing.com/ck/a?!&&p=368f027c5518a00aJmltdHM9MTcxNTU1ODQwMCZpZ3VpZD0wMTI2M2YwNS1iYzQ1LTY5MWUtM2UyOS0yYjdiYmQ5ODY4YWMmaW5zaWQ9NTIyNw&ptn=3&ver=2&hsh=3&fclid=01263f05-bc45-691e-3e29-2b7bbd9868ac&psq=rickroll&u=a1aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1kUXc0dzlXZ1hjUQ&ntb=1"
    }

    else{
        texto= "Falha no login!"
    }

    document.getElementById('resultado'). innerText=texto
}