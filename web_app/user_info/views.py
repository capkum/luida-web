# -*- coding: utf-8 -*-

from flask import render_template
from .import usrInfo


@usrInfo.route('/user_info', methods=['GET', 'POST'])
def index():
    data = {}
    data['title'] = 'USER INFO'
    return render_template('users/user_info.html', data=data)
