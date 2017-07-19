# -*- coding: utf-8 -*-

from flask import render_template
from web_app.sign_in import signIn


@signIn.route('/sign_in')
def sign_in():
    data = {}
    data['title'] = 'SIGN_UP'
    return render_template('sign_in/sign_in.html')
