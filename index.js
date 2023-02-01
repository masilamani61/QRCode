const wrapper=document.querySelector('.wrapper');
generatebtn=document.querySelector('.form button')
qrinput=document.querySelector('.form input')
qrimg=document.querySelector('.qrcode img')
generatebtn.addEventListener("click",()=>{
    let qrvalue=qrinput.value;
    if (!qrvalue){
        return;
    }
    generatebtn.innerText="Generating QR Code"
    qrimg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrvalue+''
    qrimg.addEventListener('load',()=>{
        wrapper.classList.add('active')
        generatebtn.innerText="Generate QR Code";
    })
    
   
    
})
qrinput.addEventListener("keyup",()=>{
    if (!qrinput.value){
        wrapper.classList.remove('active');
    }
})