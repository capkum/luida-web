# -*- coding: utf-8 -*-


from flask import jsonify, render_template
from main import app

import http

TARGET_HTTP_ERROR_CODES = (
    http.client.BAD_REQUEST,
    http.client.UNAUTHORIZED,
    http.client.FORBIDDEN,
    http.client.NOT_FOUND,
    http.client.METHOD_NOT_ALLOWED,
    http.client.NOT_ACCEPTABLE,
    http.client.REQUEST_TIMEOUT,
    http.client.CONFLICT,
    http.client.GONE,
    http.client.LENGTH_REQUIRED,
    http.client.PRECONDITION_FAILED,
    http.client.REQUEST_ENTITY_TOO_LARGE,
    http.client.REQUEST_URI_TOO_LONG,
    http.client.UNSUPPORTED_MEDIA_TYPE,
    http.client.REQUESTED_RANGE_NOT_SATISFIABLE,
    http.client.EXPECTATION_FAILED,
    http.client.INTERNAL_SERVER_ERROR,
    http.client.NOT_IMPLEMENTED,
    http.client.BAD_GATEWAY,
    http.client.SERVICE_UNAVAILABLE,
    http.client.GATEWAY_TIMEOUT,
    http.client.HTTP_VERSION_NOT_SUPPORTED
)


def error_handler(err):
    """error to JSON format"""
    error_response = jsonify(
        code=getattr(err, 'code', http.client.INTERNAL_SERVER_ERROR),
        name=getattr(err, 'name', 'Unkonwn'),
        message=getattr(err, 'description', '')
    )

    return error_response


for error in TARGET_HTTP_ERROR_CODES:
    app.register_error_handler(error, error_handler)


@app.errorhandler(404)
def page_not_found(err):
    return render_template('err/404.html')
