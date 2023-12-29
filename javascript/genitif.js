const reponses_exo1 = ["2", "1", "2", "1", "2"];
var reponseUser_exo1 = [];

const reponses_exo2 = ["2", "2", "1", "1", "1"];
var reponseUser_exo2 = [];

function valideRep_Exo1() {
    var memeEmplacement = [];
    var autreEmplacement = [];

    reponseUser_exo1 = [];

    const exercice_1 = document.getElementById('exo1'),
    exercice_2 = document.getElementById('exo2'),
    exercice_3 = document.getElementById('exo3'),
    exercice_4 = document.getElementById('exo4'),
    exercice_5 = document.getElementById('exo5')


    if(exercice_1.value == 0 || exercice_2.value == 0 || exercice_3.value == 0 || exercice_4.value == 0 || exercice_5.value == 0) {
        document.getElementById('message_exo1').innerHTML = 'Certains champs n\'ont pas été remplis.'
        document.getElementById('message_exo1').classList.add('active')
        document.getElementById('message_exo1').classList.add('erreur')

    } else {
        reponseUser_exo1.push(
            exercice_1.value,
            exercice_2.value,
            exercice_3.value,
            exercice_4.value,
            exercice_5.value,
        );
    }

    for (let i = 0; i < reponses_exo1.length; i++) {

        if(reponses_exo1[i] === reponseUser_exo1[i]) {
            memeEmplacement.push(reponses_exo1[i]);
            
            document.getElementById('message_exo1').innerHTML = 'Il y a ' + memeEmplacement.length + ' bonne(s) réponse(s)';
            document.getElementById('message_exo1').classList.add('active');

        } else if (reponses_exo1.indexOf(reponseUser_exo1[i]) !== -1) {
            autreEmplacement.push(reponseUser_exo1[i]);
        }
    }

    if(memeEmplacement.length <= 4) {
        document.getElementById('message_exo1').classList.add('almost-valid');
        document.getElementById('message_exo1').classList.remove('erreur');

    } else if (memeEmplacement.length === 5) {
        document.getElementById('message_exo1').innerHTML = 'Bien joué t\'as tout bon !';

        document.getElementById('message_exo1').classList.add('valid');
        document.getElementById('message_exo1').classList.remove('erreur');

        for(let index = 0; index < Math.floor(Math.random() * 8) + 1; index++) {
            confetti({
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.1
                }
            })
        }
    }
}

function valideRep_Exo2() {
    var memeEmplacement = [];
    var autreEmplacement = [];

    reponseUser_exo2 = [];

    const exercice_6 = document.getElementById('exo6'),
    exercice_7 = document.getElementById('exo7'),
    exercice_8 = document.getElementById('exo8'),
    exercice_9 = document.getElementById('exo9'),
    exercice_10 = document.getElementById('exo10')


    if(exercice_6.value == 0 || exercice_7.value == 0 || exercice_8.value == 0 || exercice_9.value == 0 || exercice_10.value == 0) {
        document.getElementById('message_exo2').innerHTML = 'Certains champs n\'ont pas été remplis.'
        document.getElementById('message_exo2').classList.add('active')
        document.getElementById('message_exo2').classList.add('erreur')

    } else {
        reponseUser_exo2.push(
            exercice_6.value,
            exercice_7.value,
            exercice_8.value,
            exercice_9.value,
            exercice_10.value,
        );
    }

    for (let i = 0; i < reponses_exo2.length; i++) {

        if(reponses_exo2[i] === reponseUser_exo2[i]) {
            memeEmplacement.push(reponses_exo2[i]);
            
            document.getElementById('message_exo2').innerHTML = 'Il y a ' + memeEmplacement.length + ' bonne(s) réponse(s)';
            document.getElementById('message_exo2').classList.add('active');

        } else if (reponses_exo2.indexOf(reponseUser_exo2[i]) !== -1) {
            autreEmplacement.push(reponseUser_exo2[i]);
        }
    }

    if(memeEmplacement.length <= 4) {
        document.getElementById('message_exo2').classList.add('almost-valid');
        document.getElementById('message_exo2').classList.remove('erreur');

    } else if (memeEmplacement.length === 5) {
        document.getElementById('message_exo2').innerHTML = 'Bien joué t\'as tout bon !';

        document.getElementById('message_exo2').classList.add('valid');
        document.getElementById('message_exo2').classList.remove('erreur');

        for(let index = 0; index < Math.floor(Math.random() * 8) + 1; index++) {
            confetti({
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.1
                }
            })
        }
    }
}