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

const bQues = document.getElementById('bQ');
const fQues = document.getElementById('fQ');

bQues.disabled = true;
fQues.disabled = true;
bQues.style.cursor = 'not-allowed';
fQues.style.cursor = 'not-allowed';


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

save_btn.disabled = true;
save_btn.style.cursor = 'not-allowed';

// console.log(q_radio_value);

let genderValue = '';
let favLagValue = '';

let qnumber = -1;

accbtn.onclick = hidePage;

class User {
    constructor(fname, email, gender, favlang){
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
    }, 100);
}

subtn.addEventListener('click', e => {
    e.preventDefault();
    gender.forEach(i => {
        if(i.checked){
            genderValue = i.value;
            console.log(i.value);
        }
    });
    favLagValue = favlang.options[favlang.selectedIndex].value;
    // console.log(favLagValue);
    if(fname.value == '' || fname.value == null || email.value == '' || email.value == null || genderValue == '' || genderValue == null || favLagValue == null || favLagValue == ''){
        console.log('Incomplete Form');        
    }else{
        const user = new User(fname.value, email.value, genderValue, favLagValue);
        console.log(user);
        regform.style.display = "none";
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
    [ 'smile','laugh','sad','angry' ],
    [ 'Digital wallet','Mining','BlockChain','Token' ],
    [ 'Filter','Brush','Rotate','Crop' ],
    [ 'Because it is structured','Because it may be analyzed to reveal patterns and trends','Because of its complexity','Because of its size' ],
    [ 'Zero-day exploit','Virus','Ransonware','Trojan horse' ],
    [ 'PDF','JPEG','ZIP','MP3' ],
    [ 'Free and Open-Source Software','Full Option Sensor System','Follow-On Support Service','Fiber Optics Science System' ],
    [ 'Bluetooth','Ethernet','NFC','VoIP' ],
    [ 'Word processing','Word wrapping','Word flowing','Word binding' ],
    [ 'Organize cloud storage','Remove all files from the cloud','Print a file from the cloud','Delete a cloud service account' ],
    [ 'C#','Swift','PHP','Java' ],
    [ '2.7 megabytes','2.7 gigabytes','2.7 zetabytes','2.7 terabytes' ],
    [ 'Virtual reality','Machine learning','Cryptocurrency','Microservices' ],
    [ 'Doxing','Digitizing','Debugging','Downloading'],
    [ 'Adobe Acrobat','Foxit PhantomPDF','Nitro Pro','Able2Extract Professional']
];

const finalAnsArr = [
    'smile','BlockChain','Crop','Because it may be analyzed to reveal patterns and trends','Zero-day exploit','ZIP','Free and Open-Source Software','VoIP','Word wrapping','Organize cloud storage','Java','2.7 zetabytes','Machine learning','Digitizing','Able2Extract Professional'
]


q_radio_value.forEach(i => {
    i.addEventListener('click', e => {
        // console.log('clicked');
        save_btn.disabled = false;
        bQues.disabled = false;
        fQues.disabled = false;

        save_btn.style.cursor = 'pointer';
        bQues.style.cursor = 'pointer';
        fQues.style.cursor = 'pointer';
    });
});

save_btn.addEventListener('click', e => {
    // console.log('save btn clicked');
    for(let i = 0 ; i < q_radio_value.length ; i++){
        if(q_radio_value[i].checked)
        {
            console.log(q_radio_value[i].value);
        }
    }
});


bQues.addEventListener('click', e => {
    
    if(qnumber != 0){
        qnumber--;
         
    }

});

function setIntial() {
    qnumber++;
    questionNo.innerText = (qnumber + 1+`.`);
    questions.innerText = questionArr[qnumber];
    // for(let i = 0; i < answerArr[qnumber].length; i++) {
        // console.log(answerArr[qnumber][i]);   
    // }
    
    A_option.value = answerArr[qnumber][0];
    B_option.value = answerArr[qnumber][1];
    C_option.value = answerArr[qnumber][2];
    D_option.value = answerArr[qnumber][3];
    
    A_option_value.innerText = answerArr[qnumber][0];
    B_option_value.innerText = answerArr[qnumber][1];
    C_option_value.innerText = answerArr[qnumber][2];
    D_option_value.innerText = answerArr[qnumber][3];        

}

fQues.addEventListener('click', e => {
    // console.log(questionArr.length);
    for(let i = 0 ; i < q_radio_value.length ; i++){
        if(q_radio_value[i].checked)
        {
            q_radio_value[i].checked = false;
        }
    }
    if(qnumber < questionArr.length-1){
        qnumber++;
        // console.log(qnumber);
        // console.log(questionArr[qnumber]);
        questionNo.innerText = (qnumber + 1+`.`);
        questions.innerText = questionArr[qnumber];
        // for(let i = 0; i < answerArr[qnumber].length; i++) {
        //     console.log(answerArr[qnumber][i]);
        // }

        A_option.value = answerArr[qnumber][0];
        B_option.value = answerArr[qnumber][1];
        C_option.value = answerArr[qnumber][2];
        D_option.value = answerArr[qnumber][3];
        
        A_option_value.innerText = answerArr[qnumber][0];
        B_option_value.innerText = answerArr[qnumber][1];
        C_option_value.innerText = answerArr[qnumber][2];
        D_option_value.innerText = answerArr[qnumber][3];        

        save_btn.disabled = true;
        bQues.disabled = true;
        fQues.disabled = true;

        save_btn.style.cursor = 'not-allowed';
        bQues.style.cursor = 'not-allowed';
        fQues.style.cursor = 'not-allowed';


    }

});



