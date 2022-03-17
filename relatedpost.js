// Related Posts
$(document).ready(function() {
    function relatedPost(g, e, r) {
        $.ajax({
            url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + r,
            type: "get",
            dataType: "jsonp",
            success: function(t) {
                for (var u = "", h = '<div class="related">', x = 0; x < t.feed.entry.length; x++) {
                    for (var z = 0; z < t.feed.entry[x].link.length; z++) {
                        if ("alternate" == t.feed.entry[x].link[z].rel) {
                            u = t.feed.entry[x].link[z].href;
                            break
                        }
                    }
                    var p = t.feed.entry[x].title.$t;
                    var c = t.feed.entry[x].content.$t;
                    var y = $('<div>').html(c);
                    h += '<li><div class="related-thumb"><a class="related-img lazyload" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' + u + '">' + p + '</a></h3></li>'
                }
                h += '</div>', g.html(h);
            }
        })
    };
    $("#related-posts").each(function() {
        var g = $(this),
            e = g.text(),
            r = 6;
        relatedPost(g, e, r);
    });
});
