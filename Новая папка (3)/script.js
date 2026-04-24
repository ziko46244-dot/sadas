const modal = document.getElementById('cardModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');


        modalTitle.innerText = title;
        modalDesc.innerText = description;
        modal.style.display = 'flex';
    });
});

if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

const bookingForm = document.getElementById('bookingForm');
const bookingResult = document.getElementById('bookingResult');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('clientName').value;
        const phone = document.getElementById('clientPhone').value;
        const bookingData = {
            name: name,
            phone: phone,
            date: new Date().toLocaleString() 
        };

        localStorage.setItem('cafe_booking', JSON.stringify(bookingData));

        bookingForm.style.display = 'none';
        bookingResult.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #6f4e37;">✓ Забронировано!</h3>
                <p>Спасибо, <b>${name}</b>. Мы сохранили вашу заявку в Local Storage.</p>
            </div>
        `;

        console.log("Данные сохранены:", bookingData);
    });
}

// --- 3. ФИЛЬТРАЦИЯ МЕНЮ ---
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        menuItems.forEach(item => {
            const category = item.getAttribute('data-cat');
            if (filterValue === 'all' || category === filterValue) {
                item.classList.remove('hide'); 
            } else {
                item.classList.add('hide'); 
            }
        });
    });
});

const scrollBtn = document.getElementById('scrollMenu');
if (scrollBtn) {
    scrollBtn.onclick = () => {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    };
}