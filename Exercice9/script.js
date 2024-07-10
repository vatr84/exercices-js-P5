// votre code ici
function checkAge(age) {
    let msg;
    if (age < 18) {
        msg = "mineur";
    } else if (age <= 65) {
        msg = "majeur";
    } else {
        msg = "senior";
    }
    console.log("Vous êtes " + msg);
}
export default checkAge;
