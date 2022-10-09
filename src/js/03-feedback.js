import '../css/common.css';
import '../css/03-feedback.css';
import { throttle } from 'lodash';


const feedbackForm = document.querySelector(".feedback-form");
const INPUT_KEY = "feedback-form-state";
const savedFormData = JSON.parse(localStorage.getItem(INPUT_KEY));

if (savedFormData !== null) {
    feedbackForm["email"].value = savedFormData.email;
    feedbackForm["message"].value = savedFormData.message;
};

feedbackForm.addEventListener("input", throttle(event => {

    const formData = { email: `${feedbackForm["email"].value}`, message: `${feedbackForm["message"].value}` };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(INPUT_KEY, formDataJSON);

}, 500));

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const formData = { email: `${feedbackForm["email"].value}`, message: `${feedbackForm["message"].value}` };
    console.log(formData);

    localStorage.removeItem(INPUT_KEY);
    feedbackForm["email"].value = "";
    feedbackForm["message"].value = "";

});
