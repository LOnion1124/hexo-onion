// 为post页面元素添加bs5类标签

$(document).ready(function () {
    // 将文档中的三四五级标题替换为五级标题
    $('div.article h3, div.article h4, div.article h5').each(function () {
        var content = $(this).html();
        var newElement = $('<h5></h5>').html(content);
        $(this).replaceWith(newElement);
    });
    // 将文档中的一二级标题替换为三级标题
    $('div.article h1, div.article h2').each(function () {
        var content = $(this).html();
        var newElement = $('<h3></h3>').html(content);
        $(this).replaceWith(newElement);
    });
    // 标题样式
    $('div.article h3, div.article h5').each(function () {
        $(this).addClass('text-dark-emphasis border-bottom');
    });
    // 图片样式
    $('div.article img').each(function () {
        $(this).addClass('img-fluid rounded mx-auto d-block');
    });
    // 链接样式
    $('div.article a').each(function () {
        $(this).addClass('link-primary link-offset-3 link-underline-opacity-0 link-underline-opacity-75-hover');
    });
    // 引用格式
    $('div.article blockquote').each(function () {
        $(this).addClass('border-start border-4 border-secondary-subtle ps-2 text-muted');
    });
    // 表格样式
    $('div.article table').each(function () {
        $(this).addClass('table table-light table-striped table-bordered');
    });
    // 脚注样式
    // 依赖hexo-reference插件
    $('div.article sup').filter(function() {
        return /fnref:/.test($(this).attr('id'));
    }).each(function() {
        $(this).find('a').each(function() {
            $(this).removeClass();
            $(this).addClass('link-primary fw-bold');
        });
    });
    $('#footnotes').addClass('text-muted fw-light');
    $('a[rev="footnote"]').each(function () {
        $(this).parent().prev().addClass('font-monospace');
        $(this).removeClass();
        $(this).addClass('link-primary link-underline-opacity-0');
        $(this).html('&nbsp;<i class="bi bi-chevron-double-up"></i>');
    });
});