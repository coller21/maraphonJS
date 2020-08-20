function getFomatedPhone(phone) {
    let resultPhone = '';
    for (let i = 0; i < phone.length; i++) {
        if (1 === i) {
            resultPhone = '+' + phone.charAt(i) + ' (';
        } else if (4 === i) {
            resultPhone += phone.charAt(i) + ') ';
        } else if (7 === i || 9 === i) {
            resultPhone += phone.charAt(i) + '-';
        }
        else {
            resultPhone += phone[i];
        }
    }

    return resultPhone;
}

console.log(getFomatedPhone('+79282297414'));