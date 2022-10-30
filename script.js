// "use strict"
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);


//     async function formSend(e) {
//         e.preventDefault();


//         let error = formValidate(form);

//         let formData = new formData(form);
//         formData.append

//         if (error = 0) {
//             form.classList.add('_sending');
//             let reponse = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 let result = await reponse.json();
//                 alert(result.message);
//                 formPreview.innerHTML = '';
//                 form.requestFullscreen();
//                 form.classList.remove('_sending');
//             } else {
//                 alert("Ошибка");
//                 form.classList.remove('_sending');
//             }
//         } else {
//             alert('Заполните обзательние поля');
//         }
//     }
// })