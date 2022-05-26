const refs = {
   loginFormRef: document.querySelector('.login-form'),
}

refs.loginFormRef.addEventListener('submit', processingLoginForm)

function processingLoginForm(event) {
   event.preventDefault();
   const formElementsRef = event.currentTarget.elements
   const mail = formElementsRef.email.value;
   const password = formElementsRef.password.value;
   if (mail == "" || password == "") {
      alert('Всі поля треба заповнити')
   } else {
      const formData = {
         mail,
         password
      }
      console.log(formData);
   }
   formElementsRef.email.value = '';
   formElementsRef.password.value = '';

   // Дядічка checker :) поясніть в коментарі
   // чому якщо я юзаю mail = '' не працює, 
   // а вот formElementsRef.email.value = '' працює
}