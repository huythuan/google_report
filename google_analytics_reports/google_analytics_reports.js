/**
 * @file
 * Loads report blocks via ajax.  This is done because the API requests to Google
 * Analytics can add significant latency to page loads otherwise.
 */
(function ($) {

Drupal.behaviors.googleAnalyticsReports = {
  attach: function (context, settings) {
    $('#block-google-analytics-reports-path-mini,#block-google-analytics-reports-dashboard', context).show();

    if ($('.google-analytics-reports-path-mini', context).length) {
      $.ajax({
        url: Drupal.settings.googleAnalyticsReportsAjaxUrl + '/path-mini',
        dataType: 'json',
        data: ({ path: window.location.pathname + window.location.search }),
        success: function(data) {
          $('.google-analytics-reports-path-mini', context).html(data.content).hide().slideDown('fast');
        },
        error: function(data) {
          // @TODO
        }
      });
    }

    if ($('.google-analytics-reports-dashboard', context).length) {
      $.ajax({
        url: Drupal.settings.googleAnalyticsReportsAjaxUrl + '/dashboard',
        dataType: 'json',
        success: function(data) {
          $('.google-analytics-reports-dashboard', context).html(data.content).hide().slideDown('fast');
        },
        error: function(data) {
          // @TODO
        }
      });
    }
  }
}

})(jQuery);
