jQuery(document).ready(function (n) {
  var t = localStorage.tealium_va_msft_main,
    i, r;
  t !== undefined && (i = JSON.parse(t), r = JSON.stringify(i.badges), n.ajax({
    type: "GET",
    url: GetTealiumCacheUrl(),
    data: {
      data: r
    }
  }))
})