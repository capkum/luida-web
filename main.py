# -*- coding: utf-8 -*-

from flask import Flask
from web_app.sign_in.views import signIn
from web_app.sign_up.views import signUp
from web_app.user_info.views import usrInfo

app = Flask(__name__)
app.config.from_object('luida_web.settings.DevelopmentConfig')


# web application
app.register_blueprint(signIn)
app.register_blueprint(signUp)
app.register_blueprint(usrInfo)


# error handler
from luida_web.error_handler import *  # noqa

if __name__ == '__main__':
    app.run()
