
class Signin {
    constructor(api_url, signup_url) {
        this.api_url = api_url;
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
            success: function (data) {
                console.log(data);
                console.log(data.status);
            }
        });
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
