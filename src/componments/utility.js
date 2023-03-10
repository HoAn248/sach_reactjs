export function sumPrice(data) {
    let sum = 0;
    data.forEach(e => {
        sum += e.sumPrice
    });
    return sum
}

export function makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 100; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

export function checkEmail(value) {
    if (value === '') {
        alert('Vui lòng nhập email')
        return false
    } else if (!isEmail(value)) {
        alert('Cú pháp email không đúng')
        return false
    }
    return true
}

export function checkPass(value, repassword) {
    if (value === '') {
        alert('Vui lòng nhập password')
        return false
    } else if (value.length < 6 || value.length > 11) {
        alert('Chiều dài password từ 6-10 kí tự')
        return false
    }

    if(repassword){
        if (repassword !== value) {
            alert('Mật khẩu nhập lại không giống')
        }
    }
    return true

}

export function checkName(value) {
    if (value === '') {
        alert('Vui lòng nhập tên người dùng')
    } else if ((value.length < 8) || (value.length > 21)) {
        alert('Tên người dùng từ 8-20 kí tự')
    }
}

export function checkAddress(value) {
    if (value === '') {
        alert('Vui lòng nhập địa chỉ')
    } else if ((value.length < 6) || (value.length > 30)) {
        alert('Địa chỉ người dùng từ 6-30 kí tự')
    }
}