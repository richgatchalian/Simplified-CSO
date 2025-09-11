// Select the container
const orgContainer = document.getElementById("orgContainer");

// Loop through organizations and create cards dynamically
organizations.forEach((org, i) => {
    const cardHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <a href="org.html?index=${i}" class="text-decoration-none text-dark">
                <div class="card card-cover h-100 overflow-hidden text-white bg rounded-5 shadow-lg" 
                    style="background-image: url('${org.logo}'); background-size: cover;">

                    <div class="card-overlay"></div>   
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${org.name}</h2>
                    </div>
                </div>
            </a>
        </div>
    `;
    orgContainer.innerHTML += cardHTML;
});


