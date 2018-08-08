module.exports = class UsuarioView {
    list (usuarios) {
        let html_1 = `
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Index</title>
    </head>
    <body>
        <h1>Lista de usuários</h1>
        <ul>
            <li><a href="nome">Nome</a></li>
            <li><a href="profissao">Profissão</a></li>
        </ul>
        `;

        let html_2 = '<ul>';
        for (let user of usuarios) {
            html_2 += `<li>${user.nome} ${user.profissao}</li>`;
        };
        html_2 += '</ul>';
        let html_3 = `
    </body>
</html>`;
        return [html_1, html_2, html_3].join("");
    }
}
