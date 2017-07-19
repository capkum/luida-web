# -*- coding: utf-8 -*-

from flask import render_template
from .import signUp


@signUp.route('/sign_up')
def sign_up():
    data = {}
    data['title'] = 'SIGN_UP'
    return render_template('sign_up/sign_up.html', data=data)
