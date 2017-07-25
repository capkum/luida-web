# -*- coding: utf-8 -*-

from flask import render_template, session, redirect
from flask import url_for
from .import signUp


@signUp.route('/sign_up')
def sign_up():
    from main import app
    data = {}
    data['title'] = 'SIGN_UP'
    data['api_url'] = app.config['API_SERVER_URL']

    if 'auth_tk' in session:
        return redirect(url_for('user_info.index'))

    else:
        return render_template('sign_up/sign_up.html', data=data)
