const gridContainer = document.querySelector('.grid-container');

const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

// Event Listeners
daily.addEventListener('click', async () => {   
    
    
    weekly.style.color = "hsl(235, 45%, 61%)";
    daily.style.color = '#fff';
    monthly.style.color = 'hsl(235, 45%, 61%)';
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    
    gridContainer.innerHTML = '';

    data.forEach(user => {
        
        gridContainer.innerHTML += `
        <div class="first-block">
          
          <p class="work">${user.title}</p>
          <img class="pontos" src="./images/icon-ellipsis.svg" alt="">
          <h1 class="hours">${user.timeframes.daily.current}hrs</h1>
          <p class="previous">Previous - ${user.timeframes.daily.previous}hrs</p>
        
        </div>
        `
    })
});

weekly.addEventListener('click', async () => {
    weekly.style.color = "#fff";
    daily.style.color = 'hsl(235, 45%, 61%)';
    monthly.style.color = 'hsl(235, 45%, 61%)';
    
    
    console.log("click weekly")
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    
    gridContainer.innerHTML = '';

    data.forEach(user => {
        
        gridContainer.innerHTML += `
        <div class="first-block">
          
          <p class="work">${user.title}</p>
          <img class="pontos" src="./images/icon-ellipsis.svg" alt="">
          <h1 class="hours">${user.timeframes.weekly.current}hrs</h1>
          <p class="previous">Previous - ${user.timeframes.weekly.previous}hrs</p>
        
        </div>
        `
    })
    

})


monthly.addEventListener('click', async () => {
    
    weekly.style.color = "hsl(235, 45%, 61%)";
    daily.style.color = 'hsl(235, 45%, 61%)';
    monthly.style.color = '#fff';
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    
    gridContainer.innerHTML = '';

    data.forEach(user => {
        
        gridContainer.innerHTML += `
        <div class="first-block">
          
          <p class="work">${user.title}</p>
          <img class="pontos" src="./images/icon-ellipsis.svg" alt="">
          <h1 class="hours">${user.timeframes.monthly.current}hrs</h1>
          <p class="previous">Previous - ${user.timeframes.monthly.previous}hrs</p>
        
        </div>
        `
    })
        
})


//fetch 
async function getfetch()  {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
    gridContainer.innerHTML = '';

    data.forEach(user => {
        gridContainer.innerHTML += `
        <div class="first-block">
          
          <p class="work">${user.title}</p>
          <img class="pontos" src="./images/icon-ellipsis.svg" alt="">
          <h1 class="hours">${user.timeframes.daily.current}hrs</h1>
          <p class="previous">Previous - ${user.timeframes.daily.previous}hrs</p>
        
        </div>
        `
    })
} 


// funcao limpa grid


getfetch()