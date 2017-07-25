var success = 200;

class Signin {
    constructor(api_url, signup_url) {
        this.api_url = api_url + "/login";
        this.signup_url = signup_url;
    }

    goSignUp() {
        location.replace(this.signup_url);
    }

    goSignin() {
        var email = $('#email').val();
        var passwd = $('#passwd').val();

        if (!validateEmail(email)) {
            alert("Invalide Email");
            $('#email').focus();
            return false;
        }

        if (!validatePwd(passwd)) {
            alert("Invalide Password");
            $('#passwd').val('');
            $('#passwd').focus();
            return false;
        }

        $.ajax({
            url: this.api_url,
            method: 'POST',
            dataType: 'JSON',
            data: $('form').serialize(),
            success: function (data, status, xhr) {
                var objs = data;
                objs['auth_tk'] = xhr.getResponseHeader('autho_tk');
                signinAction(objs);
            }
        });

        var signinAction = function (data) {
            if (data.status === success) {
                var objs = data;
                post_redirect(objs);
            } else {
                alert('이메일 비밀번호가 잘못되었습니다.');
                return false;
            }
        }

        var post_redirect = function (objs) {
            $('#myForm').remove();
            var form = document.createElement('form');
            form.setAttribute("id", "myForm");
            document.body.appendChild(form);

            $.each(objs, function(k, v){
                var input = document.createElement("INPUT");
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', k);
                input.setAttribute('value', v);
                document.getElementById('myForm').appendChild(input);
            });
            form.method = 'POST';
            form.action = '/auth';
            form.submit();
        }

    }
}