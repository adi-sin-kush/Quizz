const banner = document.getElementById('despage');
const accbtn = document.getElementById('g-st');
const subtn = document.getElementById('btn-submit');
const regform = document.getElementById('userpage');

const fname = document.getElementById('fname');
const email = document.getElementById('email');
const gender = document.getElementsByName('gender');
const favlang = document.getElementById('favLag');

const questions = document.getElementById('questions');
const questionNo = document.getElementById('qnum');
const cardy = document.getElementById('cardry');
const bQues = document.getElementById('bQ');
const fQues = document.getElementById('fQ');

const result_panel = document.getElementById('result-c1');
console.log(result_panel);

// bQues.disabled = true;
// fQues.disabled = true;
// bQues.style.cursor = 'not-allowed';
// fQues.style.cursor = 'not-allowed';

fname.addEventListener('keyup', e => {
    if (fname.value.trim().length < 3) {
        fname.style.borderColor = 'red';
    } else {
        fname.style.borderColor = 'inherit';
        document.getElementById('err-name').style.display = 'none';

    }
})

email.addEventListener('keyup', e => {
    if (email.value.length == 0) {
        email.style.borderColor = 'red';
    } else {
        email.style.borderColor = 'inherit';
        document.getElementById('err-email').style.display = 'none';
    }
})

const A_option = document.getElementById('A-option');
const B_option = document.getElementById('B-option');
const C_option = document.getElementById('C-option');
const D_option = document.getElementById('D-option');

const A_option_value = document.getElementById('A-option-value');
const B_option_value = document.getElementById('B-option-value');
const C_option_value = document.getElementById('C-option-value');
const D_option_value = document.getElementById('D-option-value');

const q_radio_value = document.getElementsByName('quizz');

const save_btn = document.getElementById('btn-save');
const btn_submit_test = document.getElementById('btn-submit-test');

save_btn.disabled = true;
save_btn.style.cursor = 'not-allowed';

btn_submit_test.disabled = true;
btn_submit_test.style.display = 'none';
btn_submit_test.style.cursor = 'not-allowed';

// console.log(q_radio_value);

let genderValue = '';
let favLagValue = '';

let qnumber = -1;

let userAnswer = [];
let userAnswerIndex = -1;
var user;

accbtn.onclick = hidePage;

class User {
    constructor(fname, email, gender, favlang) {
        this.fname = fname;
        this.email = email;
        this.gender = gender;
        this.favlang = favlang;
    }
}

function hidePage() {
    banner.style.display = "none";
    setTimeout(() => {
        regform.style.display = "block";
    }, 10);
}

function validateForm() {

    if (fname.value == '' && fname.value == null && email.value == '' && email.value == null && genderValue == '' && genderValue == null && favLagValue == null && favLagValue == '') {
        document.getElementById('err-name').style.display = 'inherit';
        document.getElementById('err-email').style.display = 'inherit';
        document.getElementById('err-gender').style.display = 'inherit';
        document.getElementById('err-fav').style.display = 'inherit';
    } else {
        if (fname.value == '' || fname.value == null) {
            document.getElementById('err-name').style.display = 'inherit';
        }
        if (email.value == '' || email.value == null) {
            document.getElementById('err-email').style.display = 'inherit';
        }
        if (genderValue == '' || genderValue == null) {
            document.getElementById('err-gender').style.display = 'inherit';
        }
        if (favLagValue == '' || favLagValue == null) {
            document.getElementById('err-fav').style.display = 'inherit';
        }
    }

    gender.forEach(i => {
        i.addEventListener('click', e => {
            document.getElementById('err-gender').style.display = 'none';
        });
    })


    favlang.addEventListener('click', e => {

        favLagValue = favlang.options[favlang.selectedIndex].value;
        console.log(favLagValue);
        if(favLagValue == ''){
            document.getElementById('err-fav').style.display = 'inherit';        
        }else{
            document.getElementById('err-fav').style.display = 'none';
        }

    })
}

document.getElementById('quizz-choice').addEventListener('click', e => {
    let x = document.getElementById('quizz-choice').options[document.getElementById('quizz-choice').selectedIndex].value;
    console.log(x);
    
    if(x != '') document.getElementById('q-topic').innerText = x+' Quizz';
});

subtn.addEventListener('click', e => {
    e.preventDefault();
    gender.forEach(i => {
        if (i.checked) {
            genderValue = i.value;
        }
    });
    favLagValue = favlang.options[favlang.selectedIndex].value;
    // console.log(favLagValue);
    if (fname.value == '' || fname.value == null || email.value == '' || email.value == null || genderValue == '' || genderValue == null || favLagValue == null || favLagValue == '') {
        console.log('Incomplete Form');
        validateForm();
    } else {
        user = new User(fname.value, email.value, genderValue, favLagValue);
        regform.style.display = "none";
        cardy.style.display = "flex";
        setIntial();
    }
});

const questionArr = [
    'What was the first emoticon ever used?',
    'What technology is used to record cryptocurrency transactions?',
    'What tool would you use to reduce the digital image size?',
    'Why is Big Data important?',
    'What kind of malware is designed to take advantage of a security hole before it is known?',
    'Making a compressed digital archive might produce what type of file format?',
    'What does acronym FOSS stand for?',
    'What technology is used to make telephone calls over the Internet possible?',
    'What is the term for text that automatically continues from one line to the next?',
    'What does it mean to uncloud?',
    'Which computer language is the most widely used?',
    'Approximately, how much data exists in the digital universe today?',
    'Which tech buzzword is closely related to Artificial Intelligence (AI)?',
    'Which of the following is an important step towards the paperless concept?',
    'What was the first cross-platform PDF software?'
];

const answerArr = [
    ['smile', 'laugh', 'sad', 'angry'],
    ['Digital wallet', 'Mining', 'BlockChain', 'Token'],
    ['Filter', 'Brush', 'Rotate', 'Crop'],
    ['Because it is structured', 'Because it may be analyzed to reveal patterns and trends', 'Because of its complexity', 'Because of its size'],
    ['Zero-day exploit', 'Virus', 'Ransonware', 'Trojan horse'],
    ['PDF', 'JPEG', 'ZIP', 'MP3'],
    ['Free and Open-Source Software', 'Full Option Sensor System', 'Follow-On Support Service', 'Fiber Optics Science System'],
    ['Bluetooth', 'Ethernet', 'NFC', 'VoIP'],
    ['Word processing', 'Word wrapping', 'Word flowing', 'Word binding'],
    ['Organize cloud storage', 'Remove all files from the cloud', 'Print a file from the cloud', 'Delete a cloud service account'],
    ['C#', 'Swift', 'PHP', 'Java'],
    ['2.7 megabytes', '2.7 gigabytes', '2.7 zetabytes', '2.7 terabytes'],
    ['Virtual reality', 'Machine learning', 'Cryptocurrency', 'Microservices'],
    ['Doxing', 'Digitizing', 'Debugging', 'Downloading'],
    ['Adobe Acrobat', 'Foxit PhantomPDF', 'Nitro Pro', 'Able2Extract Professional']
];

const finalAnsArr = [
    'smile', 'BlockChain', 'Crop', 'Because it may be analyzed to reveal patterns and trends', 'Zero-day exploit', 'ZIP', 'Free and Open-Source Software', 'VoIP', 'Word wrapping', 'Organize cloud storage', 'Java', '2.7 zetabytes', 'Machine learning', 'Digitizing', 'Able2Extract Professional'
]


q_radio_value.forEach(i => {
    i.addEventListener('click', e => {
        save_btn.disabled = false;
        // bQues.disabled = false;
        // fQues.disabled = false;

        save_btn.style.cursor = 'pointer';
        // bQues.style.cursor = 'pointer';
        // fQues.style.cursor = 'pointer';

    });
});


save_btn.addEventListener('click', e => {
    for (let i = 0; i < q_radio_value.length; i++) {
        if (q_radio_value[i].checked) {
            console.log(q_radio_value[i].value);
            userAnswer[userAnswerIndex] = q_radio_value[i].value;
            console.log(userAnswer);
            forwardquestion();
        }
    }

    if (qnumber == questionArr.length - 1) {
        btn_submit_test.style.cursor = 'pointer';
        btn_submit_test.disabled = false;
    } else {
        btn_submit_test.style.display = 'none';
        btn_submit_test.style.cursor = 'not-allowed';
    }

});


bQues.addEventListener('click', e => {
    console.log('back button clicked');

    for (let i = 0; i < q_radio_value.length; i++) {
        if (q_radio_value[i].checked) {
            q_radio_value[i].checked = false;
        }
    }

    if (qnumber > 0) {
        qnumber--;

        questionNo.innerText = (qnumber + 1 + `.`);
        questions.innerText = questionArr[qnumber];

        valueAssignment();

        userAnswerIndex--;
    }

    if (qnumber < questionArr.length - 1) {
        fQues.style.display = 'inline-block';
        btn_submit_test.style.display = 'none';
    }

});

function valueAssignment() {
    A_option.value = answerArr[qnumber][0];
    B_option.value = answerArr[qnumber][1];
    C_option.value = answerArr[qnumber][2];
    D_option.value = answerArr[qnumber][3];

    A_option_value.innerText = answerArr[qnumber][0];
    B_option_value.innerText = answerArr[qnumber][1];
    C_option_value.innerText = answerArr[qnumber][2];
    D_option_value.innerText = answerArr[qnumber][3];
}

function setInterval() {
    setTimeout(() => {
        forwardquestion();        
    }, 60000);
}

function setIntial() {
    qnumber++;
    questionNo.innerText = (qnumber + 1 + `.`);
    questions.innerText = questionArr[qnumber];

    valueAssignment();
    setInterval();
    userAnswerIndex++;
}

fQues.addEventListener('click', forwardquestion);

function forwardquestion() {

    for (let i = 0; i < q_radio_value.length; i++) {
        if (q_radio_value[i].checked) {
            q_radio_value[i].checked = false;
        }
    }
    if (qnumber < questionArr.length - 1) {
        console.log('called from savefrom');
        qnumber++;
        questionNo.innerText = (qnumber + 1 + `.`);
        questions.innerText = questionArr[qnumber];

        valueAssignment();

        save_btn.disabled = true;
        // bQues.disabled = true;
        // fQues.disabled = true;

        save_btn.style.cursor = 'not-allowed';
        // bQues.style.cursor = 'not-allowed';
        // fQues.style.cursor = 'not-allowed';
        setInterval();
        userAnswerIndex++;
    }

    if (qnumber == questionArr.length - 1) {
        fQues.style.display = 'none';
        btn_submit_test.style.display = 'inline-block';
    }
}

let marks = 0;

function checkAnswer() {

    console.log('checking......');
    for (let i = 0; i < finalAnsArr.length; i++) {
        if (finalAnsArr[i] == userAnswer[i]) {
            marks++;
        }
    }
    console.log('marks', marks);
}


btn_submit_test.addEventListener('click', e => {
    console.log('test submitted');
    checkAnswer();
    cardy.style.display = 'none';
    result_panel.style.display = 'block';
    document.getElementById('username').innerText = user.fname;
    document.getElementById('noofq').innerText = questionArr.length;
    document.getElementById('score').innerText = marks + 1;
});

