var success = 200;
var duplicat = 4101;

class SignUp {
    constructor(api_url) {
        this.api_url = api_url + "/account";
    }

    goSignUp() {
        var email = $('[name=email]').val();
        var name = $('[name=name]').val();
        var nickname = $('[name=nickname]').val();
        var passwd = $('[name=passwd]').val();
        var confirm = $('#confirm').val();

        if (!validateEmail(email)) {
            alert("Invalide Email");
            $('[name=email]').focus();
            return false;
        }

        if (!validateName(name)) {
            alert("Invalide Name");
            $('[name=name]').focus();
            return false;
        }

        if (!validateNickName(nickname)) {
            alert("Invalide Nick Name");
            $('[name=nickname]').focus();
            return false;
        }

        if (!validatePwd(passwd)) {
            alert("Invalide Password");
            $('[name=passwd]').val('');
            $('[name=passwd]').focus();
            return false;
        }

        $.ajax({
            url: this.api_url,
            method: 'POST',
            dataType: 'JSON',
            data: $('form').serialize(),
            success: function (data, status, xhr) {
                if (data.status === duplicat) {
                    alert('이미 가입된 정보입니다.');
                    return false;
                } else if (data.status === success) {
                    alert('성공적으로 가입되었습니다.');
                    location.replace('/sign_in');

                } else {
                    alert('기입 정보가 잘못되었습니다.');
                    return false;
                }
            }
        });

    }

}