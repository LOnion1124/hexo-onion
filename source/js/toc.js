$(document).ready(function() {
    const toc = $('<div class="list-group list-group-flush"></div>');

    $('div.article h3').each(function() {
        const heading = $(this);
        const headingId = heading.attr('id') || heading.text().replace(/\s+/g, '-');
        heading.attr('id', headingId); // 确保每个标题都有 ID

        // const listItem = $('<li class="list-group-item list-group-item-action"></li>');
        // listItem.append(`<a href="#${headingId}" class="stretched-link"><div class="text-truncate">${heading.text()}</div></a>`);
        const listItem = $(`<a href="#${headingId}" class="list-group-item list-group-item-action"><div class="text-truncate">${heading.text()}</div></a>`);
        toc.append(listItem);
    });

    $('#toc').append(toc);

    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();
        $('h3').each(function() {
            const heading = $(this);
            const offsetTop = heading.offset().top;
            const id = heading.attr('id');
            
            // 检查该标题是否在视口内
            if (scrollPosition >= offsetTop - 10 && scrollPosition < offsetTop + heading.outerHeight()) {
                // 高亮对应的目录项
                $('#toc a').removeClass('active');
                $(`#toc a[href="#${id}"]`).addClass('active');
            }
        });
    });

    // // 点击目录项时平滑滚动
    // $('#toc a').on('click', function(event) {
    //     event.preventDefault();
    //     const targetId = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(targetId).offset().top
    //     }, 500);
    // });
});