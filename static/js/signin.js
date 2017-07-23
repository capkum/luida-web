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

        if (!this.validateEmail(email)) {
            alert("Invalide Email");
            $('#email').focus();
            return false;
        }

        if (!this.validatePwd(passwd)) {
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
            if (data.status == 200) {
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


    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePwd(passwd) {
        var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

        if (passwd.search(/₩s/) != -1) {
            return false;
        }
        if (passwd.length < 8 || passwd.length > 20) {
            return false;
        }
        return reg_pwd.test(passwd)
    }
}