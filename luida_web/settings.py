# -*- coding: utf-8 -*-

import os


class Config(object):
    ''' default '''
    DEBUG = False
    TESTING = False
    HOST = '0.0.0.0'
    PORT = 80
    # app root path
    ROOT_PATH = os.path.dirname(os.path.abspath(__file__))
    SERVER_NAME = None

    # securety
    SECRET_KEY = '\xe3k\xc1\xdau9\x99\x95*x\x82O~7\xa9\xddh5$\xdc~H*{'


class DevelopmentConfig(Config):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True
    API_SERVER_URL = 'http://127.0.0.1:5000'
    PORT = 8000


class QaConfig(Config):
    pass


class ProductConfig(Config):
    pass
