

const renderHTML = (data) => {
    memberArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = function (manager) {
                return `
            <div class="card" style="width: 18rem; margin: 10px;">
                <div class="card-header">
                    <h2>${manager.name}</h2>
                    <h4>Manager</h4>
                    <i class="bi-person-badge-fill" style="font-size: 2rem"></i>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>`
            }
            memberArray.push(managerCard(employee));
            //console.log(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = function (engineer) {
                return `
            <div class="card" style="width: 18rem; margin: 10px;">
                <div class="card-header">
                    <h2>${engineer.name}</h2>
                    <h4>Engineer</h4>
                    <i class="bi-person-badge" style="font-size: 2rem"></i>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>`
            }
            memberArray.push(engineerCard(employee));
        }

        if (role === 'Intern') {
            const internCard = function (intern) {
                return `
            <div class="card" style="width: 18rem; margin: 10px;">
                <div class="card-header">
                    <h2>${intern.name}<h2>
                    <h4>Intern</h4>
                    <i class="bi-person" style="font-size: 2rem"></i>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>`
            }
            memberArray.push(internCard(employee));
        }
    }

    const memberCards = memberArray.join('');
    console.log(memberCards);

    const renderMemberCards = startHTML(memberCards);
    return renderMemberCards;
}

const startHTML = function (renderMemberCards) {
    const memberCards = memberArray.join('');
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">
                        TEAM PROFILE
                    </span>
                </div>
            </nav>
        </header>
        <div class="container">
            <div class="row justify-content-center" id="team-cards" style="margin:40px">
              ${memberCards}
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = renderHTML;