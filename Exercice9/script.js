// votre code ici
function checkAge(age) {
    let msg;
    if (age < 18) {
        msg = "Vous êtes mineur.";
    } else if (age < 65) {
        msg = "Vous êtes majeur.";
    } else {
        msg = "Vous êtes senior.";
    }
    return msg;
}
export default checkAge;