let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dates = date.getDate();
let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let dayExams = document.getElementById('dateId');
let firstButton = document.getElementById('buttons1Id');
let secondButton = document.getElementById('buttons2Id');
let firstA = document.getElementById('firstA');
let secondA = document.getElementById('secondA');
let title = document.getElementById('title');
let hoursChange = document.getElementById('hoursId');

function setUp(){
    dayExams = document.getElementById('dateId');
    firstButton = document.getElementById('buttons1Id');
    firstA = document.getElementById('firstA');
    secondA = document.getElementById('secondA');
    secondButton = document.getElementById('buttons2Id');
    title = document.getElementById('title');
    hoursChange = document.getElementById('hoursId');
}

function setDate(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    dates = date.getDate();
    hours = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    setQuestions();
}

function setQuestions(){
    secondButton.style.visibility = 'visible';
    firstButton.style.visibility = 'visible';
    title.textContent = 'Pilih Mata Pelajaran Untuk Mengerjakan!'
    if(year == 2024 && month == 4 && dates <= 31){
        if(hours >= 12 && dates == 31){
            day2();
        }
        else{
            day1();
        }
    }
    else if(year == 2024 && month == 5 && dates < 3 && dates >= 1){
        day2();
    }
    else if (year == 2024 && month == 5 && dates == 3){
        if(hours >= 12){
            day3();
        }
        else{
            day2();
        }
    }
    else if (year == 2024 && month == 5 && dates == 4){
        if(hours >= 12){
            day4();
        }
        else{
            day3();
        }
    }
    else if (year == 2024 && month == 5 && dates == 5){
        if(hours >= 12){
            day5();
        }
        else{
            day4();
        }
    }
    else if (year == 2024 && month == 5 && dates == 6){
        if(hours >= 12){
            day6();
        }
        else{
            day5();
        }
    }
    else if (year == 2024 && month == 5 && dates == 7){
        if(hours >= 12){
            lockAllExams();
        }
        else{
            day6();
        }
    }
    else{
        lockAllExams();
    }
}

function checkQuizAvailable(){
    const theTheme = event.target.textContent;
    if(theTheme == 'IPS'){
        window.location.href = ('https://forms.gle/znbCkSQXmeSQNHkZA');
    }
    else if(theTheme == 'IPA'){
        notAvailable();
    }
    else if(theTheme == 'Prakarya'){
        window.location.href = ('https://forms.gle/ikdb7ZCBedqtecXZ7');
    }
    else if(theTheme == 'Bahasa Indonesia'){
        notAvailable();
    }
    else if(theTheme == 'PPKN'){
        window.location.href = ('https://forms.gle/2viYhpmtcUA8xnHr6');
    }
    else if(theTheme == 'Bahasa Inggris'){
        window.location.href = ('https://forms.gle/pAvxzr6p4fGD9sdc6');
    }
    else if(theTheme == 'PJOK'){
        window.location.href = ('https://forms.gle/KzDTGy88nRsgNi6a6');
    }
    else if(theTheme == 'Matematika'){
        notAvailable();
    }
    else if(theTheme == 'Agama Katolik'){
        window.location.href = ('https://forms.gle/Q2KLfvhcYiCNHKFm7');
    }
    else if(theTheme == 'Informatika'){
        window.location.href = ('https://forms.gle/tZ1yp2zJJKd7zSLUA');
    }
    else if(theTheme == 'Kemarsudirinian'){
        window.location.href = ('https://forms.gle/7ip5wRk6T29XErTUA');
    }
    else{
        console.error("ERROR!")
    }
    
}

function day1(){
    firstButton.textContent = 'IPS';
    secondButton.style.visibility = 'hidden';
    dayExams.textContent = 'Jumat, 31 Mei 2024';
}

function day2(){
    firstButton.textContent = 'IPA';
    secondButton.textContent = 'Prakarya';
    dayExams.textContent = 'Senin, 03 Juni 2024';;
}

function day3(){
    firstButton.textContent = 'Bahasa Indonesia';
    secondButton.textContent = 'PPKN';
    dayExams.textContent = 'Selasa, 04 Juni 2024';
}
function day4(){
    firstButton.textContent = 'Bahasa Inggris';
    secondButton.textContent = 'PJOK';
    dayExams.textContent = 'Rabu, 05 Juni 2024';
}
function day5(){
    firstButton.textContent = 'Matematika';
    secondButton.textContent = 'Agama Katolik';
    dayExams.textContent = 'Kamis, 06 Juni 2024';
}
function day6(){
    firstButton.textContent = 'Informatika';
    secondButton.textContent = 'Kemarsudirinian';
    dayExams.textContent = 'Jumat, 07 Juni 2024';
}
function lockAllExams(){
    title.textContent = 'Ulangan Sudah Selesai, Beritahu Jika Ada Kesalahan';
    secondButton.style.visibility = 'hidden';
    firstButton.style.visibility = 'hidden';
    dayExams.textContent = "-";
}

function notAvailable(){
    Swal.fire({
      icon: "error",
      title: "Soal Tidak Tersedia!",
      text: "Mohon Tunggu Atau Memang Soal Tidak Dibuat!",
    });}

setUp();
setDate();
setInterval(setDate, 1000);
setTimeout(setUp, 550);
