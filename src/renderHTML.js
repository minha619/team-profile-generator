

const renderHTML = (data) => {
    memberArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${manager.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email:<a herf="${manager.email}"></a> </li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>`
        }

        if (role === 'Engineer') {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${engineer.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email:<a herf="${engineer.email}"></a> </li>
                    <li class="list-group-item">Github: <a herf="${engineer.github}"></a></li>
                </ul>
            </div>`
        }

        if (role === 'Intern') {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${intern.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email:<a herf="${intern.email}"></a> </li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>`
        }
    }
    const memberCards = memberArray.join('');

    const renderMemberCards = startHTML(memberCards);
    return renderMemberCards;
}

const startHTML = function (renderMemberCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-text">
                       Team Profile
                     </span>
                 </div>
            </nav>
        </header>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
              ${memberCards}
            </div>
        </div>
    </body>
    </html>
    `
}

module.exports = renderHTML;