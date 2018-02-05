$(document).ready(() => {
  if ($('.portfolio-container .button-load-more').length > 0) {
    $('.portfolio-container .button-load-more').on('click', onLoadButtonClick)
  }

  function onLoadButtonClick(e) {
    e.preventDefault();
    var button = $(this);

    var page = button.data('page');
    var limit = button.data('limit');

    var params = {
      limit: limit,
      page: page,
      action: 'get_portfolio_items'
    }

    $.ajax({
      type: 'POST',
      url: locals.ajaxurl,
      data: params,
      success: (res) => {
        let itemContainer = $('.portfolio-container .portfolio-grid');
        for (let item of res.items) {
          itemContainer.append(item.data);
        }

        // if this wasn't our last page, increment the page variable on the button. 
        if (res.totalPages > page) {
          button.data('page', page + 1);
        } else {
          button.off('click', onLoadButtonClick);
          button.fadeOut();
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
});