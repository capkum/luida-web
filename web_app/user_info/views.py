# -*- coding: utf-8 -*-

from .import usrInfo


@usrInfo.route('/user_info', methods=['GET'])
def index():
    return 'user info page'
