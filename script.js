const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const themeToggle = document.getElementsByClassName('theme-toogle');

// show sidebar
menuBtn.addEventListener('click', () =>{
        sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none'
})

//change theme
themeToggle.addEventListener('click', ()=> {
    // document.body.classList.toggle('dark-theme-variable');

    themeToggle.getElementsByClassName('sun').classList('active');
    themeToggle.getElementsByClassName('moon').classList('active');
})

// fill orders in table
Orders.forEach( order => {
    const tr = document.createElement('tr');
    const trContent = `
                    <tr>
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined'? 'danger': order.shipping === 'pending'? 'warning':'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
                    </tr>
                `;
                tr.innerHTML = trContent;
                document.querySelector('table tbody').appendChild(tr);
})