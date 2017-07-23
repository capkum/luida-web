# -*- coding: utf-8 -*-

from flask import render_template, session, redirect
from flask import url_for
from .import signUp


@signUp.route('/sign_up')
def sign_up():
    data = {}
    data['title'] = 'SIGN_UP'

    if 'auth_tk' in session:
        return redirect(url_for('user_info.index'))

    else:
        return render_template('sign_up/sign_up.html', data=data)
