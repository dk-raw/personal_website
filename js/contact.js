let isValid = false;
(() => {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    isValid = true;
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
var form_id = 'contact-form';
const data_js = {
    "access_token": "h0sshvxsvon1cr7y8jo4vstm"
};
const js_onSuccess = () => {
    btn_send.innerText = 'Sent!';
    btn_send.disabled = true;
    document.getElementById('form-result').style.display = 'block';
    document.getElementById('form-result').classList.add('text-success');
    document.getElementById('form-result').innerHTML = 'Success! I will get back to you shortly with the email you provided.';
}
const js_onError = (error) => {
    document.getElementById('form-result').style.display = 'block';
    document.getElementById('form-result').classList.add('text-warning');
    document.getElementById('form-result').innerHTML = `Error: ${error.message}`;
}
const btn_send = document.getElementById('btn-send');
const js_send = () => {
    if (isValid) {
        btn_send.innerText = 'Sending…';
        btn_send.disabled = true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
                if (request.readyState == 4) {
                    js_onError(request.response);
                }
        };
        let subject = document.querySelector('#' + form_id + " [name='subject']").value + ' | ' + document.querySelector('#' + form_id + " [name='name']").value + ' | ' + document.querySelector('#' + form_id + " [name='email']").value;
        let message = document.querySelector('#' + form_id + " [name='text']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
        return false;
    }
}
document.getElementById(form_id).onsubmit = js_send;
const toParams = (data_js) => {
    let form_data = [];
    for (var key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    return form_data.join("&");
}