/*!
 * FileInput Chinese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kangqf <kangqingfei@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {
    "use strict";

    $.fn.fileinputLocales['zh'] = {
        sizeUnits: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], 
        bitRateUnits: ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s', 'PB/s', 'EB/s', 'ZB/s', 'YB/s'],
        fileSingle: 'File',
        filePlural: 'Files',
        browseLabel: 'Select &hellip;',
        removeLabel: 'Remove',
        removeTitle: 'Clear selected files',
        cancelLabel: 'Cancel',
        cancelTitle: 'Cancel an upload in progress',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause upload',
        uploadLabel: 'Upload',
        uploadTitle: 'Upload selected files',
        msgNo: 'None',
        msgNoFilesSelected: 'No file selected',
        msgPaused: 'Paused',
        msgCancelled: 'Cancel',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'Detailed preview',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'File "{name}" (<b>{size}</b>) Must be larger than limit size <b>{minSize}</b>.',
        msgSizeTooLarge: 'File "{name}" (<b>{size}</b>) Exceeds allowed size <b>{maxSize}</b>.',
        msgFilesTooLess: 'You must choose the minimum <b>{n}</b> {files} to upload. ',
        msgFilesTooMany: 'Selected number of uploaded files <b>({n})</b> Maximum number of files exceeded <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload up to <b>{m}</b> files (Currently there are <b>{n}</b> files).',
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions, to prevent files from being read "{name}".',
        msgFileNotReadable: 'File "{name}" Unreadable.',
        msgFilePreviewAborted: 'Cancel "{name}" Preview.',
        msgFilePreviewError: 'Read "{name}" An error occurred.',
        msgInvalidFileName: 'File "{name}" Contains illegal characters.',
        msgInvalidFileType: 'incorrect type "{name}". Only supports "{types}" type of file.',
        msgInvalidFileExtension: 'Incorrect file extension "{name}". Only supports "{extensions}" file extension.',
        msgFileTypes: {
            'image': 'image',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'The file upload was aborted',
        msgUploadThreshold: 'Processing &hellip;',
        msgUploadBegin: 'Initializing &hellip;',
        msgUploadEnd: 'Complete',
        msgUploadResume: 'Continue uploading &hellip;',
        msgUploadEmpty: 'Invalid file upload.',
        msgUploadError: 'Upload error',
        msgDeleteError: 'Delete error',
        msgProgressError: 'Upload error',
        msgValidationError: 'Validation error',
        msgLoading: 'Loading file {index} of {files} &hellip;',
        msgProgress: 'Loading {index} file {files} - {name} - {percent}% completed.',
        msgSelected: '{n} {files} selected',
        msgProcessing: 'Processing...',
        msgFoldersNotAllowed: 'Only supports dragging files! Skip {n} dragged folders.',
        msgImageWidthSmall: 'The width of the image file "{name}" must be at least {size} pixels.',
        msgImageHeightSmall: 'The height of the image file "{name}" must be at least {size} pixels.',
        msgImageWidthLarge: 'The width of the image file "{name}" cannot exceed {size} pixels.',
        msgImageHeightLarge: 'The height of the image file "{name}" cannot exceed {size} pixels.',
        msgImageResizeError: 'Unable to obtain image resize. ',
        msgImageResizeException: 'An error occurred while resizing the image. <pre>{errors}</pre>',
        msgAjaxError: '{operation} error occurred. Please try again!',
        msgAjaxProgressError: '{operation} failed',
        msgDuplicateFile: 'File "{name}", size "{size}" has been selected. Ignore identical files.',
        msgResumableUploadRetriesExceeded: 'File <b>{file}</b> failed to upload for more than <b>{max}</b> retries! Error details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'Calculating remaining time',
        ajaxOperations: {
            deleteThumb: 'Delete file',
            uploadThumb: 'Upload file',
            uploadBatch: 'Batch upload',
            uploadExtra: 'Form data upload'
        },
        dropZoneTitle: 'Drag files here &hellip;<br>Supports uploading multiple files at the same time',
        dropZoneClickTitle: '<br>(or click the {files} button to select a file)',
        fileActionSettings: {
            removeTitle: 'Delete file',
            uploadTitle: 'Upload file',
            downloadTitle: 'Download file',
            uploadRetryTitle: 'Retry',
            rotateTitle: 'Rotate 90 degrees clockwise',
            zoomTitle: 'View details',
            dragTitle: 'Move/Reset',
            indicatorNewTitle: 'No upload',
            indicatorSuccessTitle: 'Upload',
            indicatorErrorTitle: 'Upload error',
            indicatorPausedTitle: 'Upload has been paused',
            indicatorLoadingTitle: 'Upload &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Preview previous file',
            next: 'Preview next file',
            rotate: 'Rotate 90 degrees clockwise',
            toggleheader: 'zoom',
            fullscreen: 'full screen',
            borderless: 'borderless mode',
            close: 'Close the current preview'
        }
    };
}));
