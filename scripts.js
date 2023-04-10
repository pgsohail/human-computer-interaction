document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulate successful login
    const username = document.getElementById('username').value;
    const dashboardTemplate = document.getElementById('dashboard-template');
    const dashboardContent = dashboardTemplate.content.cloneNode(true);
    dashboardContent.querySelector('#user-name').textContent = username;
    document.querySelector('main').replaceChild(dashboardContent, document.querySelector('.login'));

    // Add lunch options
    const lunchOptions = [
        { id: 1, name: 'Sandwich', price: 5.99, img: 'sandwich.jpg' },
        { id: 2, name: 'Salad', price: 6.99, img: 'salad.jpg' },
        { id: 3, name: 'Pizza', price: 7.99, img: 'pizza.jpg' },
        { id: 4, name: 'Burger', price: 8.99, img: 'burger.jpg' },
    ];

    const lunchOptionsContainer = document.querySelector('.lunch-options');
    lunchOptions.forEach(option => {
        const lunchOption = document.createElement('div');
        lunchOption.classList.add('lunch-option');

        const lunchOptionImage = document.createElement('img');
        lunchOptionImage.src = option.img;
        lunchOptionImage.alt = option.name;

        const lunchOptionName = document.createElement('h3');
        lunchOptionName.textContent = option.name;

        const lunchOptionPrice = document.createElement('p');
        lunchOptionPrice.textContent = `$${option.price.toFixed(2)}`;

        lunchOption.appendChild(lunchOptionImage);
        lunchOption.appendChild(lunchOptionName);
        lunchOption.appendChild(lunchOptionPrice);

        lunchOptionsContainer.appendChild(lunchOption);
    });
});
