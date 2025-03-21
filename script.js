document.querySelector('.Place-an-Order').addEventListener('click', function(e) {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
    
    const orderSection = document.querySelector('.order-registration');
    orderSection.scrollIntoView({ 
        behavior: 'smooth', // اسکرول نرم
        block: 'start'     // اسکرول به ابتدای المان
    });
});
