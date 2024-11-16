// 侧边栏样式

$(document).ready(function () {
    $('ul.site-category-list').addClass('list-group');
    $('li.site-category-list-item').each(function () {
        $(this).addClass('d-flex justify-content-between list-group-item list-group-item-action');
    });
    $('a.site-category-list-link').each(function () {
        $(this).addClass('stretched-link link-dark link-underline link-underline-opacity-0');
    });
    $('span.site-category-list-count').each(function () {
        $(this).addClass('badge text-primary');
    });
    $('a.site-tag-link').each(function () {
        $(this).wrap('<span class="me-2"></span>')
        $(this).wrapInner('<button class="btn btn-outline-dark btn-sm position-relative mb-3"></button>');
    });
    $('span.site-tag-count').each(function () {
        $(this).addClass('position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary');
    });
});