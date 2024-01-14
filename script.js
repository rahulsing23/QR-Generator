API_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const inputData = document.getElementById('text')
const dislay_qr = document.getElementById('QR')
const qr_code = document.getElementById('qr-code')

console.log(inputData.value)
function getQRCode()
{
    dislay_qr.src = API_URL + inputData.value;
    qr_code.classList.add("show-image")
}

