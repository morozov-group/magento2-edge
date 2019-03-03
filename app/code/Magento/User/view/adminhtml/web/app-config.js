/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @deprecated since version 2.2.0
 */
require.config({
    'waitSeconds': 0,
    'shim': {
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/common': ['jquery'],
        'mage/webapi': ['jquery'],
        'ko': {
            exports: 'ko'
        },
        'moment': {
            exports: 'moment'
        }
    },
    'paths': {
        'jquery/ui': 'jquery/jquery-ui',
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileupload-fp',
        'prototype': 'prototype/prototype-amd',
        'text': 'requirejs/text',
        'domReady': 'requirejs/domReady',
        'ko': 'ko/ko'
    }
});

require(['jquery'], function (jQuery) {
    'use strict';

    jQuery.noConflict();
});
