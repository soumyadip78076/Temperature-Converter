document.addEventListener('DOMContentLoaded', function() {
    const cel = document.getElementById("cel");
    const fah = document.getElementById("fah");

    cel.addEventListener('input', function() {
        let c = parseFloat(this.value);
        let f = (c * 9/5) + 32;
        fah.value = !Number.isInteger(f) ? f.toFixed(4) : f;
    });

    fah.addEventListener('input', function() {
        let f = parseFloat(this.value);
        let c = (f - 32) * 5/9;
        cel.value = !Number.isInteger(c) ? c.toFixed(4) : c;
    });
});
