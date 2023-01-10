const createCard = (employee) => {
    let otherInfo;

    if (employee.getRole() === 'Manager'){
        otherInfo = 'Office Number: ' + employee.officeNumber;
    } else if (employee.getRole() === 'Engineer') {
        otherInfo = 'GitHub Username: ' + employee.github;
    } else if (employee.getRole() === 'Intern') {
        otherInfo = 'School Name: ' + employee.school;
    }

    return `
    <div class="col-12 col-md-6 col-lg-4 p-3">
        <div class="card bg-info">
            <div class="card-header bg-primary text-white text-center">
                <h2>${employee.getRole()}</h2>
            </div>
            <div class="card-body bg-info">
                <ul>
                    <li>Name: ${employee.name}</li>
                    <li>ID: ${employee.id}</li>
                    <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li>${otherInfo}</li>
                </ul>
            </div>
        </div>
    </div>`
}

const generateHTML = (teamList) => {

    let cards = "";
    teamList.forEach((employee)=> {
        cards += createCard(employee);
    }) 

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
    </head>
    <body >
        <header class="text-center p-3 border-bottom border-dark bg-dark text-light">
            <h1>Team Profile</h1>
        </header>
        <main class="container pt-3">
            <div class="row justify-content-center">
                ${cards}
            </div>
        </main>
        
    </body>
    </html>`
}
module.exports = generateHTML;