var validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var validatePwd = function (passwd) {
    var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

    if (passwd.search(/₩s/) != -1) {
        return false;
    }
    if (passwd.length < 8 || passwd.length > 20) {
        return false;
    }
    return reg_pwd.test(passwd)
};

var test1 = function () {
    return 'capkuma'
};

var validateName = function(name) {
    var reg_name = /^[A-Za-z?]{2,60}|^[가-힣]{2,60}/;

    return reg_name.test(name);
};

var validateNickName = function(nickname) {
    var reg_name = /^[A-Za-z]{2,20}|^[가-힣]{2,20}/;

    return reg_name.test(nickname);
};
