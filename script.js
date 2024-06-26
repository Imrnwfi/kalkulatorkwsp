function calculate() {
    const balance = parseFloat(document.getElementById('balance').value);
    let result;

    if (balance >= 3000) {
        result = `Anda boleh memindahkan sebanyak RM${(balance * 0.3333333).toFixed(2)} ke Akaun 3.`;
    } else if (balance >= 1000) {
        result = `Anda boleh memindahkan sebanyak RM1000 ke Akaun 3.`;
    } else {
        result = `Anda boleh memindahkan seluruh baki RM${balance} ke Akaun 3.`;
    }

    document.getElementById('result').innerText = result;
}
