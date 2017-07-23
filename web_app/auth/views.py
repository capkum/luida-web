# -*- coding: utf-8 -*-

from flask import request, session, redirect, url_for
from web_app.auth import auth


@auth.route('/auth', methods=['GET', 'POST'])
def auth_index():
    if request.method == 'POST':

        status = request.values.get('status')
        if status == '200':
            session['uid'] = request.values.get('uid')
            session['nickName'] = request.values.get('nickName')
            session['auth_tk'] = request.values.get('auth_tk')
            
            return redirect(url_for('user_info.index'))

        else:
            return redirect(url_for('sign_in'))

    return 'auth 처리'
