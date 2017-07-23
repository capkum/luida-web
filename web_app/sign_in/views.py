# -*- coding: utf-8 -*-

from flask import render_template
from web_app.sign_in import signIn


@signIn.route('/sign_in', methods=['POST', 'GET'])
def sign_in():
    from main import app
    data = {}
    data['title'] = 'SIGN IN'
    data['api_url'] = app.config['API_SERVER_URL']

    return render_template('sign_in/sign_in.html', data=data)
