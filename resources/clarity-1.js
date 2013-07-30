(function () {
    this.SHT || (this.SHT = {}), this.SHT["experts/profile"] = Handlebars.template(function (a, b, c, d, e) {
        function n(a, b) {
            return 'style="padding-bottom:7px;"'
        }

        function o(a, b) {
            return "no-bio"
        }

        function p(a, b) {
            return '\n        <button data-action="toggle-favorite" rel="tooltip" class="makefavorite" data-placement="bottom">\n          <span>&nbsp;</span>\n        </button>\n      '
        }

        function q(a, b) {
            var c = "",
                d;
            return c += '\n        <div class="location">' + k((d = (d = a.expert, d == null || d === !1 ? d : d.location), typeof d === j ? d.apply(a) : d)) + "</div>\n      ", c
        }

        function r(a, b) {
            var d = "",
                e;
            d += '\n          <span class="bio-content">', (e = c.formatted_bio) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.formatted_bio, e = typeof e === j ? e.apply(a) : e);
            if (e || e === 0) d += e;
            d += "</span>\n          ", e = c["if"].call(a, a.showing_current_member_profile, {
                hash: {},
                inverse: l.noop,
                fn: l.program(10, s, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n        ", d
        }

        function s(a, b) {
            return '<a href="/account/edit" class="edit-this internal">Edit</a>'
        }

        function t(a, b) {
            return '\n        <div class="hourly-rate-box free">Free</div>\n      '
        }

        function u(a, b) {
            var d = "",
                e;
            return d += '\n        <div class="hourly-rate-box">\n          <span>', (e = c.formatted_cost) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.formatted_cost, e = typeof e === j ? e.apply(a) : e), d += k(e) + "</span>/min\n        </div>\n      ", d
        }

        function v(a, b) {
            return '\n        <!-- <a data-action="edit-profile" class="btn btn-clarity">Edit Your Profile</a> -->\n        <a class="btn btn-green disabled">Schedule a Call</a>\n      '
        }

        function w(a, b) {
            return '\n        <a class="btn btn-clarity" data-action="toggle-vacation-subscription">Unavailable (Get Notified)</a>\n      '
        }

        function x(a, b) {
            return '\n        <a class="btn btn-clarity" data-action="toggle-vacation-subscription">Unsubscribe</a>\n      '
        }

        function y(a, b) {
            return '\n        <div class="btn-split">\n          <a data-action="call-now" class="btn btn-green">Schedule a Call</a>\n          <button class="dropdown-toggle" data-action="ask-question">\n            <span class="envelope">&nbsp;</span>\n          </button>\n        </div>\n      '
        }

        function z(a, b) {
            return '\n        <a data-action="call-now" class="btn btn-green">Schedule a Call</a>\n      '
        }

        function A(a, b) {
            var d = "",
                e, f;
            return d += '\n    <div class="charity">\n      <div class="charity-logo">\n        <img src="' + k((e = (e = a.charity, e == null || e === !1 ? e : e.logo_url), typeof e === j ? e.apply(a) : e)) + '" style="height:34px;"/>\n      </div>\n      <div class="charity-text">\n        ' + k((e = (e = a.expert, e == null || e === !1 ? e : e.first_name), typeof e === j ? e.apply(a) : e)) + " donates to <em>" + k((e = (e = a.charity, e == null || e === !1 ? e : e.name), typeof e === j ? e.apply(a) : e)) + " ", (f = c.amount_generated_for_charity) ? f = f.call(a, {
                hash: {},
                data: b
            }) : (f = a.amount_generated_for_charity, f = typeof f === j ? f.apply(a) : f), d += k(f) + "</em>\n      </div>\n    </div>\n  ", d
        }

        function B(a, b) {
            var d = "",
                e;
            d += '\n  <div class="known-for" style="margin-bottom: -5px">\n    ', e = c.each.call(a, a.topics, {
                hash: {},
                inverse: l.noop,
                fn: l.program(29, C, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += "\n    ", e = c["if"].call(a, a.showing_current_member_profile, {
                hash: {},
                inverse: l.noop,
                fn: l.program(31, D, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n  </div>\n", d
        }

        function C(a, b) {
            var d = "",
                e;
            return d += '\n      <div class="tag tag-white tag-profile tag-link" data-href="/topics/', (e = c.slug) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.slug, e = typeof e === j ? e.apply(a) : e), d += k(e) + '">\n      <span class="tag-name">', (e = c.name) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.name, e = typeof e === j ? e.apply(a) : e), d += k(e) + "</span>\n      </div>\n    ", d
        }

        function D(a, b) {
            return '<a href="/account/topics" class="edit-this internal">Edit</a>'
        }

        function E(a, b) {
            var d = "",
                e;
            d += '\n        <span class="', (e = c.name) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.name, e = typeof e === j ? e.apply(a) : e), d += k(e) + " ", e = c["if"].call(a, a.status, {
                hash: {},
                inverse: l.noop,
                fn: l.program(34, F, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += '"></span>\n      ', d
        }

        function F(a, b) {
            return "verified"
        }

        function G(a, b) {
            var d = "",
                e;
            d += "\n      ", e = c["if"].call(a, a.profile_url, {
                hash: {},
                inverse: l.program(41, K, b),
                fn: l.program(37, H, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n    ", d
        }

        function H(a, b) {
            var d = "",
                e;
            d += '\n        <a href="', (e = c.profile_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.profile_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="external ', (e = c.name) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.name, e = typeof e === j ? e.apply(a) : e), d += k(e) + " linked ", e = c["if"].call(a, a.status, {
                hash: {},
                inverse: l.noop,
                fn: l.program(34, F, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += '">\n          <span class="label">', (e = c.label) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.label, e = typeof e === j ? e.apply(a) : e), d += k(e) + "</span>", e = c["if"].call(a, a.status, {
                hash: {},
                inverse: l.noop,
                fn: l.program(38, I, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n        </a>\n\n      ", d
        }

        function I(a, b) {
            var d;
            return d = c["if"].call(a, a.value, {
                hash: {},
                inverse: l.noop,
                fn: l.program(39, J, b),
                data: b
            }), d || d === 0 ? d : ""
        }

        function J(a, b) {
            var d = "",
                e;
            return d += '<span class="status">', (e = c.value) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.value, e = typeof e === j ? e.apply(a) : e), d += k(e) + "</span>", d
        }

        function K(a, b) {
            var d = "",
                e;
            d += '\n        <a class="', (e = c.name) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.name, e = typeof e === j ? e.apply(a) : e), d += k(e) + " ", e = c["if"].call(a, a.status, {
                hash: {},
                inverse: l.noop,
                fn: l.program(34, F, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += '">', (e = c.label) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.label, e = typeof e === j ? e.apply(a) : e), d += k(e), e = c["if"].call(a, a.status, {
                hash: {},
                inverse: l.noop,
                fn: l.program(38, I, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "</a>\n      ", d
        }

        function L(a, b) {
            var d = "",
                e;
            d += '\n  <div class="video-embed">\n    ', e = c["if"].call(a, a.link_to_video, {
                hash: {},
                inverse: l.program(46, N, b),
                fn: l.program(44, M, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n  </div>\n", d
        }

        function M(a, b) {
            var c = "",
                d;
            return c += '\n      <a href="' + k((d = (d = a.expert, d == null || d === !1 ? d : d.video_embed_url), typeof d === j ? d.apply(a) : d)) + '" class="external">\n        <img src="' + k((d = (d = a.expert, d == null || d === !1 ? d : d.video_embed_thumbnail_url), typeof d === j ? d.apply(a) : d)) + '">\n      </a>\n    ', c
        }

        function N(a, b) {
            var c = "",
                d, e;
            c += "\n      ", e = (d = (d = a.expert, d == null || d === !1 ? d : d.video_embed_code), typeof d === j ? d.apply(a) : d);
            if (e || e === 0) c += e;
            return c += "\n    ", c
        }

        function O(a, b) {
            var d = "",
                e;
            d += '\n  <div class="expertise-section">\n    <h3 class="section-title">\n      Call me to talk about\n      ', e = c["if"].call(a, a.viewing_current_member_profile, {
                hash: {},
                inverse: l.noop,
                fn: l.program(49, P, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += '\n    </h3>\n    <div class="expertise">\n      ', e = c.each.call(a, a.expertise, {
                hash: {},
                inverse: l.noop,
                fn: l.program(51, Q, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n    </div>\n  </div>\n", d
        }

        function P(a, b) {
            return '<a href="/account/expertise" class="edit-this internal">Edit</a>'
        }

        function Q(a, b) {
            var d = "",
                e;
            d += '\n        <div class="item">\n          <div class="click-overlay" data-expertise-id="', (e = c.id) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.id, e = typeof e === j ? e.apply(a) : e), d += k(e) + '"></div>\n          <div class="title">', (e = c.title) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.title, e = typeof e === j ? e.apply(a) : e), d += k(e) + '</div>\n          <span class="desc">', (e = c.formatted_description) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.formatted_description, e = typeof e === j ? e.apply(a) : e);
            if (e || e === 0) d += e;
            d += "</span>\n          ", e = c["if"].call(a, a.link, {
                hash: {},
                inverse: l.noop,
                fn: l.program(52, R, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n        </div>\n      ", d
        }

        function R(a, b) {
            var d = "",
                e;
            return d += '\n            <div class="link typo-ellipsis">\n              <i class="icon-external-link"></i> <a href="', (e = c.link) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.link, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="external">', (e = c.link) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.link, e = typeof e === j ? e.apply(a) : e), d += k(e) + "</a>\n            </div>\n          ", d
        }

        function S(a, b) {
            var d = "",
                e;
            d += '\n  <div class="reviews-section">\n    <h3 class="section-title reviews-header">\n      Reviews (', (e = c.reviews_count) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.reviews_count, e = typeof e === j ? e.apply(a) : e), d += k(e) + ")\n      ", e = c["if"].call(a, a.viewing_current_member_profile, {
                hash: {},
                inverse: l.noop,
                fn: l.program(55, T, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += '\n    </h3>\n    <div class="expertise">\n      ', e = c.each.call(a, a.reviews, {
                hash: {},
                inverse: l.noop,
                fn: l.program(57, U, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n    </div>\n  </div>\n", d
        }

        function T(a, b) {
            return '<a href="/account/reviews" class="edit-this internal">Edit</a>'
        }

        function U(a, b) {
            var d = "",
                e;
            d += '\n        <div class="item recommendation">\n          <div class="quote">\n            <span class="desc">\n              ', (e = c.formatted_comment) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.formatted_comment, e = typeof e === j ? e.apply(a) : e);
            if (e || e === 0) d += e;
            d += "\n\n              ", e = c["if"].call(a, a.clarity_profile_url, {
                hash: {},
                inverse: l.noop,
                fn: l.program(58, V, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += "\n\n              ", e = c["if"].call(a, a.recommender_linkedin_profile_url, {
                hash: {},
                inverse: l.noop,
                fn: l.program(60, W, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += '\n\n                <span class="avatar">\n                  <div class="user-profile-image-wrapper"><img class="user-profile-image extra-small" src="', (e = c.image_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.image_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" /></div>\n                </span>\n                <span class="name">', (e = c.name) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.name, e = typeof e === j ? e.apply(a) : e), d += k(e) + "</span>\n              </a>\n            </span>\n\n          ", e = c["if"].call(a, a.from_linkedin, {
                hash: {},
                inverse: l.noop,
                fn: l.program(62, X, b),
                data: b
            });
            if (e || e === 0) d += e;
            d += "\n\n          ", e = c["if"].call(a, a.from_clarity, {
                hash: {},
                inverse: l.noop,
                fn: l.program(67, $, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += '\n          </div>\n          <div class="clearfix" />\n        </div>\n\n      ', d
        }

        function V(a, b) {
            var d = "",
                e;
            return d += '\n                <a class="recommender clearfix internal" style="cursor: pointer;" href="', (e = c.clarity_profile_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.clarity_profile_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '">\n              ', d
        }

        function W(a, b) {
            var d = "",
                e;
            return d += '\n                <a class="recommender clearfix external" href="', (e = c.recommender_linkedin_profile_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.recommender_linkedin_profile_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '">\n              ', d
        }

        function X(a, b) {
            var d = "",
                e;
            d += '\n            <em class="source">\n              Source:\n              ', e = c["if"].call(a, a.recommender_linkedin_profile_url, {
                hash: {},
                inverse: l.program(65, Z, b),
                fn: l.program(63, Y, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n            </em>\n          ", d
        }

        function Y(a, b) {
            var d = "",
                e;
            return d += '\n                <a href="', (e = c.recommender_linkedin_profile_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.recommender_linkedin_profile_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="external">LinkedIn</a>\n              ', d
        }

        function Z(a, b) {
            return "\n                LinkedIn\n              "
        }

        function $(a, b) {
            var d = "",
                e;
            d += '\n            <em class="source">\n              Source:\n              ', e = c["if"].call(a, a.clarity_profile_url, {
                hash: {},
                inverse: l.program(70, ab, b),
                fn: l.program(68, _, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n            </em>\n          ", d
        }

        function _(a, b) {
            var d = "",
                e;
            return d += '\n                <a href="', (e = c.clarity_profile_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.clarity_profile_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="internal" style="cursor: pointer;">Clarity</a>\n              ', d
        }

        function ab(a, b) {
            return "\n                Clarity\n              "
        }

        function bb(a, b) {
            var d = "",
                e;
            d += '\n  <div class="social-share">\n    Share on:\n    <a href="', (e = c.linkedin_share_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.linkedin_share_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="linkedin external"><span>LinkedIn</span></a> |\n    <a href="', (e = c.twitter_share_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.twitter_share_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="twitter external"><span>Twitter</span></a> |\n    <a href="', (e = c.facebook_share_url) ? e = e.call(a, {
                hash: {},
                data: b
            }) : (e = a.facebook_share_url, e = typeof e === j ? e.apply(a) : e), d += k(e) + '" class="facebook external"><span>Facebook</span></a>\n    ', e = c.unless.call(a, a.native_app, {
                hash: {},
                inverse: l.noop,
                fn: l.program(73, cb, b),
                data: b
            });
            if (e || e === 0) d += e;
            return d += "\n  </div>\n", d
        }

        function cb(a, b) {
            var c = "",
                d;
            return c += '\n      | <a href="/' + k((d = (d = a.expert, d == null || d === !1 ? d : d.screen_name), typeof d === j ? d.apply(a) : d)) + '/widget" class="internal"><span>Embed</span></a>\n    ', c
        }
        this.compilerInfo = [2, ">= 1.0.0-rc.3"], c = c || a.helpers, e = e || {};
        var f = "",
            g, h, i, j = "function",
            k = this.escapeExpression,
            l = this,
            m = c.helperMissing;
        f += '<div class="top" ', g = c["if"].call(b, b.charity, {
            hash: {},
            inverse: l.noop,
            fn: l.program(1, n, e),
            data: e
        });
        if (g || g === 0) f += g;
        f += '>\n  <div>\n    <div class="image">\n      <div class="user-profile-image-wrapper bigger-border"><img style="display:block;"  class="user-profile-image" src="', (g = c.image_url) ? g = g.call(b, {
            hash: {},
            data: e
        }) : (g = b.image_url, g = typeof g === j ? g.apply(b) : g), f += k(g) + '" /></div>\n      <div class="rating" class="rated-4"></div>\n    </div>\n    <div class="profile ', g = c.unless.call(b, b.formatted_bio, {
            hash: {},
            inverse: l.noop,
            fn: l.program(3, o, e),
            data: e
        });
        if (g || g === 0) f += g;
        f += '">\n      ', g = c.unless.call(b, b.showing_current_member_profile, {
            hash: {},
            inverse: l.noop,
            fn: l.program(5, p, e),
            data: e
        });
        if (g || g === 0) f += g;
        f += "\n      <h1>", (g = c.expert_name) ? g = g.call(b, {
            hash: {},
            data: e
        }) : (g = b.expert_name, g = typeof g === j ? g.apply(b) : g), f += k(g) + "</h1>\n      ", h = c["if"].call(b, (g = b.expert, g == null || g === !1 ? g : g.location), {
            hash: {},
            inverse: l.noop,
            fn: l.program(7, q, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += '\n      <div class="bio">\n        ', h = c["if"].call(b, b.formatted_bio, {
            hash: {},
            inverse: l.noop,
            fn: l.program(9, r, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += '\n      </div>\n    </div>\n    <div class="request-call">\n      ', h = c["if"].call(b, b.is_free, {
            hash: {},
            inverse: l.program(14, u, e),
            fn: l.program(12, t, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n      ", h = c["if"].call(b, b.showing_current_member_profile, {
            hash: {},
            inverse: l.noop,
            fn: l.program(16, v, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n      ", h = c["if"].call(b, b.show_vacation_subscription, {
            hash: {},
            inverse: l.noop,
            fn: l.program(18, w, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n      ", h = c["if"].call(b, b.show_vacation_unsubscribe, {
            hash: {},
            inverse: l.noop,
            fn: l.program(20, x, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n      ", h = c["if"].call(b, b.accepts_paid_questions, {
            hash: {},
            inverse: l.noop,
            fn: l.program(22, y, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n      ", h = c["if"].call(b, b.request_a_call, {
            hash: {},
            inverse: l.noop,
            fn: l.program(24, z, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n    </div>\n  </div>\n\n  ", h = c["if"].call(b, b.charity, {
            hash: {},
            inverse: l.noop,
            fn: l.program(26, A, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += '\n\n</div>\n\n<div class="stats-table">\n  <table cellspacing="0" cellpadding="0">\n    <tbody>\n      <tr>\n        <td>\n          <div>\n            <em>', i = {
            hash: {},
            data: e
        }, f += k((g = c.mdash, g ? g.call(b, b.total_calls, i) : m.call(b, "mdash", b.total_calls, i))) + "</em>\n            <h3>", i = {
            hash: {},
            data: e
        }, f += k((g = c.pluralize, g ? g.call(b, b.total_calls, "Call", "Calls", i) : m.call(b, "pluralize", b.total_calls, "Call", "Calls", i))) + "</h3>\n          </div>\n        </td>\n        <td>\n          <div>\n            <em>", i = {
            hash: {},
            data: e
        }, f += k((g = c.mdash, g ? g.call(b, b.reviews_count, i) : m.call(b, "mdash", b.reviews_count, i))) + "</em>\n            <h3>", i = {
            hash: {},
            data: e
        }, f += k((g = c.pluralize, g ? g.call(b, b.reviews_count, "Review", "Reviews", i) : m.call(b, "pluralize", b.reviews_count, "Review", "Reviews", i))) + "</h3>\n          </div>\n        </td>\n        <td>\n          <div>\n            <em>", i = {
            hash: {},
            data: e
        }, f += k((g = c.mdash, g ? g.call(b, b.average_call_duration, i) : m.call(b, "mdash", b.average_call_duration, i))) + "</em>\n            <h3>Avg. call</h3>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n", h = c["if"].call(b, b.topics, {
            hash: {},
            inverse: l.noop,
            fn: l.program(28, B, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += '\n\n\n<div class="verified-networks flat dropdown collapsed">\n  <div class="dropdown-header">\n    <h2>Verified</h2>\n    <div class="networks collapsed-content">\n      ', h = c.each.call(b, b.verified, {
            hash: {},
            inverse: l.noop,
            fn: l.program(33, E, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += '\n    </div>\n  </div>\n  <div class="expanded-content">\n    ', h = c.each.call(b, b.verified, {
            hash: {},
            inverse: l.noop,
            fn: l.program(36, G, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n  </div>\n</div>\n\n", h = c["if"].call(b, (g = b.expert, g == null || g === !1 ? g : g.video_embed_code), {
            hash: {},
            inverse: l.noop,
            fn: l.program(43, L, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n", h = c["if"].call(b, b.expertise, {
            hash: {},
            inverse: l.noop,
            fn: l.program(48, O, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n", h = c["if"].call(b, b.reviews, {
            hash: {},
            inverse: l.noop,
            fn: l.program(54, S, e),
            data: e
        });
        if (h || h === 0) f += h;
        f += "\n\n", h = c["if"].call(b, b.linkedin_share_url, {
            hash: {},
            inverse: l.noop,
            fn: l.program(72, bb, e),
            data: e
        });
        if (h || h === 0) f += h;
        return f += '\n\n<span class="member-since">\n  <em>Member since</em> ', (h = c.created_at) ? h = h.call(b, {
            hash: {},
            data: e
        }) : (h = b.created_at, h = typeof h === j ? h.apply(b) : h), f += k(h) + '\n</span>\n\n<div class="social-share" style="margin-top:-10px;margin-bottom:10px">\n  <a href="/' + k((g = (g = b.expert, g == null || g === !1 ? g : g.screen_name), typeof g === j ? g.apply(b) : g)) + '/related" class="internal">Related to ', (h = c.expert_name) ? h = h.call(b, {
            hash: {},
            data: e
        }) : (h = b.expert_name, h = typeof h === j ? h.apply(b) : h), f += k(h) + "</a>\n</div>\n", f
    })
}).call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Array.prototype.slice;
    a = function () {
        function a() {
            this.pcol = b(this.pcol, this), this.nextColor = b(this.nextColor, this), this.colors = ["red", "#4AA333", "blue", "fuchsia", "orange", "#3BB7CC"], this.index = -1
        }
        return a.prototype.nextColor = function () {
            return this.index += 1, this.index >= this.colors.length && (this.index = 0), this.colors[this.index]
        }, a.prototype.pcol = function () {
            var a, b;
            return a = 1 <= arguments.length ? c.call(arguments, 0) : [], b = "%c" + a.shift(), console.log.apply(console, [b, "color: " + this.nextColor() + ";"].concat(c.call(a)))
        }, a
    }(), window.pcol = (new a).pcol
}.call(this),
function () {
    var a, b, c, d, e, f;
    window.Clarity || (window.Clarity = {}), (a = window.Clarity).Panels || (a.Panels = {}), (b = window.Clarity).Views || (b.Views = {}), (c = window.Clarity).panels || (c.panels = {}), (d = window.Clarity).Helpers || (d.Helpers = {}), (e = window.Clarity).Auth || (e.Auth = {}), (f = window.Clarity.Auth).Panels || (f.Panels = {})
}.call(this),
function () {
    var a;
    a = function () {
        function a() {}
        return a.present = function (a) {
            return /[a-z]/i.test(a)
        }, a.validEmail = function (a) {
            var b;
            return b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, b.test(a)
        }, a.validName = function (a) {
            return a.replace(/\ /g, "") !== ""
        }, a.validPhone = function (a) {
            return a.replace(/\D/g, "").slice(-10).length >= 10
        }, a.requiredValidator = function (a, b, c) {
            if (!b) return "" + a + " is required"
        }, a.lengthValidator = function (a, b, c) {
            if (b) {
                if (c.min && b.length < c.min) return "" + a + " is too short";
                if (c.max && b.length > c.max) return "" + a + " is too long"
            }
        }, a.patternValidator = function (a, b, c) {
            if (b && !b.match(c)) return "" + a + " is invalid"
        }, a.numericValidator = function (a, b, c) {
            if (b) {
                if (c.onlyInteger && !b.match(/^-?\d*$/)) return "" + a + " must be an integer";
                if (c.greater_than && parseInt(b, 10) < c.greaterThan) return "" + a + " must be greater than " + c.greaterThan;
                if (c.less_than && parseInt(b, 10) > c.lessThan) return "" + a + " must be less than " + c.lessThan;
                if (!b.match(/-?\d*\.?\d*/)) return "" + a + " must be a number"
            }
        }, a.currencyValidator = function (a, b, c) {
            var d;
            if (b) {
                d = parseInt(b.replace(/[^\d]/g, ""), 10);
                if (c.onlyInteger && !b.match(/^\$?(\d|,)+$/)) return "" + a + " must be a whole dollar amount";
                if (!b.match(/^\$?(\d|,)+\.?\d{0,2}$/)) return "" + a + " must be a dollar amount";
                if (c.max != null && d > c.max) return "" + a + " must be lower than " + c.max
            }
        }, a.phoneNumberValidator = function (a, b, c) {
            if (b) {
                if (!b.match(/^(\d|\(|\)|-|\.| )+\d$/)) return "" + a + " is invalid";
                if (b.replace(/\D/g, "").length < 7) return "" + a + " is too short"
            }
        }, a.emailValidator = function (a, b, c) {
            var d;
            d = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!b.match(d)) return "" + a + " must be a valid email address"
        }, a.uniqueEmailValidator = function (a, b, c) {
            return {
                resolve: function (a) {
                    return $.get("/api/members/unique_email?email=" + b).success(a).error(function (b) {
                        return b.globalHandlerCancelled = !0, a("That email address is already in use")
                    })
                }
            }
        }, a.timezoneValidator = function (a, b, c) {
            if (!b || b === "break") return "Please provide a timezone"
        }, a.linkValidator = function (a, b, c) {
            var d;
            d = /.+\..{2,}/;
            if (c.required === !1 && b !== "" && !b.match(d)) return "Please provide a valid link";
            if (c.required !== !1 && !b.match(d)) return "Please provide a valid link"
        }, a
    }(), window.Validator = a, Clarity.Validation = {
        invalidClass: "invalid",
        validClass: "valid",
        addEvents: function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m = this;
            this.events || (this.events = {}), k = this.fields;
            for (b in k) {
                e = k[b], $.isArray(e) || (e = [e]), this.fields[b] = [], c = null;
                for (g = 0, i = e.length; g < i; g++) {
                    d = e[g];
                    if (!d || typeof d != "object") d = {
                        "with": d
                    };
                    d.on || (d.on = "keyup,change"), d.selector = c || (c = d.selector || "[name=" + b + "]"), d.name || (d.name = b[0].toUpperCase() + b.slice(1).replace(/_/g, " ")), this.fields[b].push(d), l = d.on.split(","), f = function (b) {
                        return m.events["" + a + " " + c] = function (a) {
                            var c, d, e, f;
                            f = m.fields[b];
                            for (d = 0, e = f.length; d < e; d++) c = f[d], c.changed = !0;
                            return m.validateField(b, a)
                        }
                    };
                    for (h = 0, j = l.length; h < j; h++) a = l[h], f(b)
                }
            }
            return this.events = $.extend({}, this.defaultEvents, this.events)
        },
        setError: function (a, b, c, d) {
            var e, f, g, h;
            f = this.f[a], typeof b == "string" && (b = $.trim(b)), d && (e = f.data("errors") || {}, e[d] = b && c ? c : b, f.data("errors", e)), b && (f.removeClass(this.validClass).addClass(this.invalidClass), f.data("previously-errored", !0));
            if (!b) {
                h = f.data("errors");
                for (d in h) {
                    g = h[d];
                    if (g) return
                }
                f.removeClass(this.invalidClass);
                if (f.data("previously-errored")) return f.addClass(this.validClass)
            }
        },
        validateField: function (b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = this;
            e = this.f[b];
            if (e.length > 0) {
                this.setError(b), l = e.val(), p = this.fields[b], q = [];
                for (g = 0, o = p.length; g < o; g++) {
                    m = p[g], g += 1, d = function (a, c) {
                        return r.setError(b, a, r._opt(m.message, null, {
                            name: b,
                            error: a,
                            key: c
                        }), c)
                    };
                    for (h in m) {
                        n = m[h];
                        if (f = a["" + h + "Validator"]) i = this._opt(m[h]), i && (j = f(m.name, l, i), j && j.resolve ? j.resolve(function (a) {
                            return d(a, h + g)
                        }) : d(j, h + g))
                    }
                    if (f = m.trigger) $.isFunction(f) || (f = this[f]), c && f.call(this, c);
                    (f = m["with"]) ? ($.isFunction(f) || (f = this[f]), f.length < 2 ? q.push(d(f.call(this, l), g)) : (m.tag = k = {}, q.push(f.call(this, l, function (a) {
                        if (m.tag === k) return d(a, g)
                    })))) : q.push(void 0)
                }
                return q
            }
            return
        },
        validate: function () {
            var a, b, c, d;
            c = this.fields, d = [];
            for (a in c) b = c[a], d.push(this.validateField(a));
            return d
        },
        formHasChanged: function () {
            var a, b, c, d, e, f;
            f = this.fields;
            for (a in f) {
                c = f[a];
                for (d = 0, e = c.length; d < e; d++) {
                    b = c[d];
                    if (b.changed) return !0
                }
            }
            return !1
        },
        clearChangedValidators: function () {
            var a, b, c, d, e;
            d = this.fields, e = [];
            for (a in d) c = d[a], e.push(function () {
                var a, d, e;
                e = [];
                for (a = 0, d = c.length; a < d; a++) b = c[a], e.push(b.changed = !1);
                return e
            }());
            return e
        },
        isValid: function (a) {
            var b;
            return a == null && (a = !0), this.validate(), b = this.errors()[0], b && a && Alert.error(b), b ? !1 : (this.clearChangedValidators(), !0)
        },
        sortedFields: function () {
            var a, b, c, d, e, f;
            a = $(), c = function () {
                var a, c;
                a = this.f, c = [];
                for (d in a) b = a[d], c.push(b);
                return c
            }.call(this);
            for (e = 0, f = c.length; e < f; e++) b = c[e], a = a.add(b);
            return c.sort(function (b, c) {
                return a.index(b) - a.index(c)
            }), c
        },
        visitErrors: function (a) {
            var b, c, d, e, f, g, h;
            g = this.sortedFields(), h = [];
            for (e = 0, f = g.length; e < f; e++) b = g[e], h.push(function () {
                var e, f;
                e = b.data("errors"), f = [];
                for (c in e) d = e[c], d ? f.push(a(b, d)) : f.push(void 0);
                return f
            }());
            return h
        },
        errors: function () {
            var a;
            return a = [], this.visitErrors(function (b, c) {
                return a.push(c)
            }), a
        },
        included: function () {
            var a;
            return a = this.prototype.refreshElements, this.prototype.refreshElements = function () {
                var b, c, d, e;
                a.apply(this), this.f || (this.f = {}), d = this.fields, e = [];
                for (b in d) c = d[b], e.push(this.f[b] = this.$(c[0].selector));
                return e
            }
        }
    }
}.call(this),
function () {
    Clarity.Alert = function () {
        function a() {}
        return a.error = function (a) {
            return Notification.hide(), this.show(a, "error")
        }, a.notify = function (a) {
            return this.show(a, "notice")
        }, a.warn = function (a) {
            return this.show(a, "warning")
        }, a.show = function (a, b, c, d) {
            var e, f, g, h, i, j;
            return b == null && (b = "notice"), c == null && (c = 250), d == null && (d = !1), h = ClarityPanel.activating, this.currentMessage != null && h.alertDetails && !d ? (j = h.alertDetails.previous_header_height, i = h.alertDetails.previous_header_border) : (h.header.data("height") != null ? e = parseInt(h.header.data("height")) : e = parseInt(h.header.css("height")) - 1, j = parseInt(e), i = h.header.hasClass("no-border")), this.currentMessage = {
                message: a,
                type: b,
                occurredAt: new Date
            }, h.alertDetails = {
                previous_header_height: j,
                previous_header_border: i
            }, (f = h.header.find(".notice")).length > 0 || (h.header.append('<div class="notice"><span class="icon"><i/></span><span class="message"/></div>'), f = h.header.find(".notice")), f.removeClass("error").removeClass("warning"), b === "error" ? f.addClass("error") : b === "warning" && f.addClass("warning"), f.find(".close-wrapper").size() === 0 && f.append('<div class="close-wrapper"><a href="#" class="close">Close</a></div>'), App.header.setHeight(h, h.alertDetails.previous_header_height), f.find(".message").html(a), f.show(), g = f.outerHeight(), App.header.setHeight(h, h.alertDetails.previous_header_height + g, c), h.header.addClass("no-border")
        }, a.hide = function (a, b, c) {
            b == null && (b = 250), c == null && (c = !1), a == null && (a = ClarityPanel.activating);
            if (a.alertDetails) {
                App.header.setHeight(a, a.alertDetails.previous_header_height, b), a.alertDetails.previous_header_border || a.header.removeClass("no-border"), a.header.find(".notice").slideUp(b), a.alertDetails = null;
                if (!c) return this.currentMessage = null
            }
        }, a
    }(), window.Alert = Clarity.Alert
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure = function () {
            return b.__super__.constructor.configure.apply(this, arguments), this.bind("ajaxError", function (a, b, c, d, e) {
                var f;
                e == null && (e = {});
                if (f = e.error || a && a.errorHandler || this.errorHandler) return f(b, c, d), b.globalHandlerCancelled = !0
            })
        }, b.cacheVersion = function () {
            return this._cacheVersion || (this._cacheVersion = function () {
                var a;
                return a = {
                    "1.0": 100,
                    1.2: 103
                }, a[typeof IOS_APP_VERSION != "undefined" && IOS_APP_VERSION !== null ? IOS_APP_VERSION : null] || CLARITY_VERSION
            }())
        }, b.cache = function (a, b) {
            var c, d;
            return a = "" + this.cacheVersion() + "-" + a, d = localStorage[a], b && (c = JSON.stringify(b.toJSON(!0))), b ? localStorage[a] = c : localStorage[a] && delete localStorage[a], c !== d || !c
        }, b.fromCache = function (a) {
            var b;
            a = "" + this.cacheVersion() + "-" + a;
            if (b = localStorage[a]) return JSON.parse(b)
        }, b.findByCaseInsensitiveAttribute = function (a, b) {
            var c, d, e;
            if (b == null) return null;
            b = b.toLowerCase(), e = this.records;
            for (c in e) {
                d = e[c];
                if (d[a] != null && d[a].toLowerCase() === b) return d.clone()
            }
            return null
        }, b.fetchAndReturn = function (a, b) {
            var c, d, e = this;
            return c = null, d = null, a.success = function (a, b, e) {
                return c = a, d = e
            }, a.complete = function () {
                var a, f;
                return f = function () {
                    var b, d, e;
                    e = [];
                    for (b = 0, d = c.length; b < d; b++) a = c[b], e.push(this.find(a.id));
                    return e
                }.call(e), typeof b == "function" ? b(f, d) : void 0
            }, this.fetch(a)
        }, b.fetch = function (a) {
            var c, d;
            return a == null && (a = {}), $.isFunction(a) || (d = ClarityPanel.fetching, d && (c = a.complete, d.startFetch(a.wait), a.complete = function (b) {
                if (b.status < 400) return d.endFetch(c, a.wait)
            })), b.__super__.constructor.fetch.call(this, a)
        }, b.findOrFetch = function (a, b, c) {
            return this.get(a, b, c, !0)
        }, b.get = function (a, b, c, d) {
            var e = this;
            return $.isFunction(b) && (c = b, b = {}), this.exists(a) && d ? typeof c == "function" ? c(this.find(a)) : void 0 : (b.id = a, b.complete = function () {
                return typeof c == "function" ? c(e.find(a)) : void 0
            }, this.fetch(b))
        }, b.createdSort = function (a, b) {
            return a.created_at < b.created_at ? 1 : -1
        }, b.updatedSort = function (a, b) {
            return a.updated_at < b.updated_at ? 1 : -1
        }, b
    }(Spine.Model), window.ClarityModel = a
}.call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        }, e = Array.prototype.slice,
        f = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    a = function (a) {
        function c() {
            this.updateCharitiesList = b(this.updateCharitiesList, this), this.stepOutOfOnboardingIfDone = b(this.stepOutOfOnboardingIfDone, this), this.dataBehaviorTruncate = b(this.dataBehaviorTruncate, this), this.enableIScroll = b(this.enableIScroll, this), this.disableIScroll = b(this.disableIScroll, this), this.hideNotification = b(this.hideNotification, this), this.trackEvent = b(this.trackEvent, this), this.navigateBack = b(this.navigateBack, this), this.navigate = b(this.navigate, this), this.touch = b(this.touch, this), this.refresh = b(this.refresh, this), this._scroll = b(this._scroll, this);
            var a, d, e, f, g, h, i, j, k = this;
            this.events || (this.events = {});
            if (this.parentEvents != null) {
                i = this.parentEvents;
                for (d in i) a = i[d], (f = this.events)[d] || (f[d] = a)
            }
            this.addEvents(), c.__super__.constructor.apply(this, arguments), this.elements || this.refreshElements(), this.watch_cb = function () {
                return k.touch({
                    dirty: !0
                })
            };
            if (this.watch) {
                $.isArray(this.watch) || (this.watch = [this.watch]), j = this.watch;
                for (g = 0, h = j.length; g < h; g++) e = j[g], e.bind("change", this.watch_cb), e.bind("refresh", this.watch_cb)
            }
            this.currentMember = Member.current(), this.initializeFooter(), this._initializeHomeButton(), this._initializeBackButton(), this.dirty = !0, this.memberUpdatedCallback = function () {
                return k.currentMember = Member.current(), setTimeout(function () {
                    return k.autoRefresh !== !1 && k.touch({
                        dirty: !0
                    }), k.setUnreadBadges()
                })
            }, Member.bind("memberUpdated", this.memberUpdatedCallback), Consumable.bind("initial-consumable-load", function () {
                if (Consumable.all().length === 0) return;
                return setTimeout(function () {
                    return k.touch()
                })
            })
        }
        return d(c, a), c.prototype.filterStack = ["authentication", "payment", "onboarding", "onboarding_if_member", "call_rating"], c.prototype.promptFilterStack = ["old_call_rating"], c.prototype.requires_call_rating = !0, c.prototype.prompt_for_old_call_rating = !1, c.prototype.autoRefresh = !0, c.prototype.dirty = !0, c.prototype.history = !0, c.prototype.backButton = {
            show: !1
        }, c.prototype.defaultFooter = {
            show: null,
            activeItem: null
        }, c.prototype.spinner = {
            hide: !1
        }, c.prototype.scroll = "top", c.include(Clarity.Validation), c.prototype.defaultEvents = {
            "tap a.external": "externalLinkTap",
            "click a.external": "externalLinkClick",
            "tap a.internal": "internalLink",
            "tap [data-href]": "internalLink",
            "tap .notice": "hideNotification",
            "touchstart .list-item": "setActive",
            touchcancel: "clearActive",
            "focus [data-behavior=select-all]": function (a) {
                return $(a.currentTarget).select()
            },
            "mouseup [data-behavior=select-all]": function () {
                return !1
            }
        }, c.findActive = function () {
            var a, b, c, d, e, f, g;
            e = [null, null], b = e[0], a = e[1], f = Clarity.panels;
            for (c in f) d = f[c], d.isActive() && (g = [c, d], b = g[0], a = g[1]);
            return [b, a]
        }, c.prototype.dispose = function () {
            var a, b, c, d, e;
            typeof this.onDispose == "function" && this.onDispose(), Member.unbind("memberUpdated", this.memberUpdatedCallback);
            if (this.watch) {
                $.isArray(this.watch) || (this.watch = [this.watch]), e = this.watch;
                for (c = 0, d = e.length; c < d; c++) b = e[c], b.unbind("change", this.watch_cb), b.unbind("refresh", this.watch_cb)
            }
            return a = this.stage.manager.controllers.indexOf(this), a >= 0 && this.stage.manager.controllers.splice(a, a + 1), this.el.remove()
        }, c.prototype.active = function (a) {
            var b, d, e, f = this;
            ((e = c.deactivating) != null ? e.el.hasClass("active") : void 0) && c.deactivating.el.removeClass("active"), c.deactivating = c.activating, c.activating = this, this._failedRequirement = null, this._transition = null, c.__super__.active.apply(this, arguments), App.content = this.content, Log.create({
                status: "navigated",
                message: "to {{path:" + Spine.Route.path + "}}"
            });
            try {
                _kiq.push(["hideSurvey"]), _kiq.push(["set", {
                    path: Spine.Route.path
                }])
            } catch (g) {}
            return a._navigatingBack || (b = App.querystringFlash("backPath") || App.externalBackPath, d = App.querystringFlash("b"), b != null && b !== "" ? this._externalBackPath = b : d === "h" && (this._externalBackPath = "/home"), App.querystringFlash("c") && (this._closeWindowOnBack = !0), $(".viewport").one("webkitTransitionEnd", this._scroll)), this.params = a, this.verifiedRequirements(this.params) ? (this.waiting = 0, this.dirty && this.fetchInContext(function () {
                return f.start(f.params)
            }), this.touch(), this.restoreScroll(), this.updateHeaderAndFooter(), this.verifiedPromptRequirements(this.params), typeof this._transition == "function" && this._transition(), !0) : !0
        }, c.prototype.restoreScroll = function () {
            var a;
            return ((a = this.params) != null ? a._navigatingBack : void 0) ? this.content.scrollTop(this._scrollPosition + 1) : this._scroll()
        }, c.prototype.updateHeaderAndFooter = function () {
            return this
                ._setBackButtonVisibility(), this._setHeaderVisibility(), this._setFooterVisibility(), this.setUnreadBadges()
        }, c.prototype.startFetch = function (a) {
            a && (this.waiting += 1);
            if (a && !this.spinner.hide) return Notification.showSpinner(this.spinner.label)
        }, c.prototype.fetchInContext = function (a) {
            c.fetching = this, typeof a == "function" && a(), c.fetching = null;
            if (!this.waiting) {
                this._scroll();
                if (this.verifiedRequirements(this.params)) return this.dirty = !1, typeof this.analytics == "function" ? this.analytics() : void 0
            }
        }, c.prototype.endFetch = function (a, b) {
            return b && (this.waiting -= 1), this.fetchInContext(a), this.waiting || Notification.hideSpinner(), this.touch()
        }, c.prototype._scroll = function () {
            var a = this;
            return this.delay(function () {
                if (a._opt(a.scroll) === "top") return a.content.scrollTop(1);
                if (a._opt(a.scroll) === "bottom") return a.content.scrollTop(a.content.prop("scrollHeight"));
                if (a._opt(a.scroll) === "custom" && $.isFunction(a.customScroll)) return a.content.scrollTop(a._opt(a.customScroll))
            })
        }, c.prototype.refresh = function () {
            if (this.waiting) return this.content.html("");
            if (this.verifiedRequirements(this.params)) {
                this.updateHeaderAndFooter(), this.render();
                if (!this._transitioning) return this._opt(this.afterTransition)
            }
        }, c.prototype.touch = function (a) {
            a == null && (a = {}), a.dirty && (this.dirty = !0);
            if (this.isActive() && !this._transitioning) {
                this.refresh();
                if (a.resetScroll) return this._scroll()
            }
        }, c.prototype.navigate = function (a, b) {
            return b == null && (b = {}), (b != null ? b.pop : void 0) && Clarity.stack.pop(), window._gaq.push(["_trackPageview", "/" + Spine.Route.path]), c.__super__.navigate.apply(this, arguments)
        }, c.prototype._initializeBackButton = function () {
            return typeof this.backButton == "boolean" ? this.backButton = {
                show: this.backButton
            } : this.backButton.show == null && (this.backButton.show = !0), this._backButton = this.addButton("Back", this.navigateBack).addClass("back").hide()
        }, c.prototype._initializeHomeButton = function () {
            var a, b = this;
            a = this._opt(this.homeButton);
            if (a != null) {
                this._homeButton = this.addButton(this._opt(this.homeButton.label, "Home"), function () {
                    return window.location.href = "/home"
                });
                if (a.right === !0) return this._homeButton.addClass("right")
            }
        }, c.prototype.backPathAvailable = function () {
            return Clarity.stack.length >= 2 || function () {
                try {
                    return this._opt(this.backButton.defaultPath) || this._externalBackPath
                } catch (a) {}
            }.call(this)
        }, c.prototype._setBackButtonVisibility = function () {
            var a, b;
            return this._backButton.html(this._opt(this.backButton.label, "Back")), this._opt(this.backButton.show) && this.backPathAvailable() ? (a = this._backButton) != null ? a.show() : void 0 : (b = this._backButton) != null ? b.hide() : void 0
        }, c.prototype.navigateBackToLastCheckpoint = function (a) {
            var b;
            a == null && (a = {}), a["trans"] == null && (a.trans = "right"), Clarity.stack.revertToLastCheckpoint();
            if (b = Clarity.stack.last()) return this.navigateToLastStackPath(b, a);
            if (a.default_path != null) return this.navigate(a.default_path, a)
        }, c.prototype.navigateBack = function (a) {
            var b, c, d;
            a == null && (a = {});
            if (a.currentTarget && $(a.currentTarget).attr("data-prevent-default")) return;
            a.default_path != null ? b = a.default_path : b = this._opt(this.backButton.defaultPath, "/", a), d = this._opt(this.backButton.trans, a != null ? a.trans : void 0), d == null && (d = "left"), this._closeWindowOnBack && window.close();
            if (this._externalBackPath) {
                window.location.href = this._externalBackPath;
                return
            }
            if (this._opt(this.backButton.external)) {
                window.location.href = b;
                return
            }
            this._cancelLoad();
            if (this._opt(this.backButton.onClick, null, a)) return;
            if (this._opt(this.backButton.force)) {
                Clarity.stack.pop(), this.navigate(b, {
                    trans: d,
                    _navigatingBack: !0
                });
                return
            }
            return Clarity.stack.length === 1 && Clarity.stack.last().checkpoint ? (Clarity.stack.last().checkpoint = !1, this.navigateToLastStackPath(Clarity.stack.last(), {
                trans: d
            })) : (Clarity.stack.pop(), (c = Clarity.stack.last()) ? this.navigateToLastStackPath(c, {
                trans: d
            }) : this.navigate(b, {
                trans: d,
                _navigatingBack: !0
            }))
        }, c.prototype.navigateToLastStackPath = function (a, b) {
            var c;
            return b == null && (b = {}), c = a.params, c.trans = b.trans, c._navigatingBack = !0, this.navigate(a.params.match[0], !1), a.instance == null && (a.instance = Clarity.Router.findOrCreateInstance(a.panel_name, c)), a.instance.active(c), a
        }, c.prototype._opt = function (a, b, c) {
            return b == null && (b = null), c == null && (c = {}), $.isFunction(a) ? a.call(this, c) || b : a || b
        }, c.prototype.setUnreadBadges = function () {
            return this.setCallsBadge(), this.setUnreadMessagesBadge()
        }, c.prototype.setCallsBadge = function () {
            if (this.currentMember) return this._setBadge(".incoming-calls-badge", this.currentMember.calls_pending_my_confirmation_count)
        }, c.prototype.setUnreadMessagesBadge = function () {
            if (this.currentMember) return this._setBadge(".unread-messages-badge", Clarity.Helpers.Inbox.unreadCount)
        }, c.prototype._setBadge = function (a, b) {
            var c;
            return c = this.footer.find(a), b > 0 ? c.html(b).show() : c.hide()
        }, c.prototype.start = function (a) {}, c.prototype.restart = function () {
            var a = this;
            return this.dirty = !0, this.waiting = 0, this.fetchInContext(function () {
                return a.start(a.params)
            }), this.refresh()
        }, c.prototype.activate = function (a) {
            var b, d, e, f, g, h = this;
            a == null && (a = {});
            if (a.verify !== !1 && !this.verifiedRequirements(a)) return;
            this.el.addClass("active"), g = [this.el, this.header, this.content, this.footer];
            for (e = 0, f = g.length; e < f; e++) d = g[e], d.show();
            return b = a.transition || a.trans, b && $.support.transition && c.deactivating ? this._transition = function () {
                return h.transition(h, c.deactivating, b), c.deactivating.deactivatePanel()
            } : (this.content.add(this.header).show(), this.el.addClass("active"), c.deactivating && c.deactivating !== this && (c.deactivating.el.removeClass("active"), c.deactivating.deactivatePanel()), this._opt(this.afterTransition))
        }, c.prototype.deactivatePanel = function () {
            return this._scrollPosition = this.content.scrollTop(), typeof this.stop == "function" && this.stop(), Alert.hide(this, 0, !1)
        }, c.prototype.deactivate = function () {}, c.prototype.transition = function (a, b, c) {
            var d, e, f, g, h = this;
            f = {
                left: "right",
                right: "left",
                up: "down",
                down: "up"
            }, g = f[c], this._transitioning = !0, e = function () {
                return a.el.removeClass("transitioning"), b.el.removeClass("active transitioning"), h._transitioning = !1, h.refresh(), h._opt(h.afterTransition)
            };
            if (c === "left" || c === "right") {
                a.el.addClass("transitioning"), b.el.addClass("transitioning"), d = a.defaultFooter.custom || b.defaultFooter.custom, a.content.gfxSlideIn(this.effectOptions({
                    direction: c
                })), a.header.gfxSlideIn(this.effectOptions({
                    direction: c,
                    fade: !0,
                    distance: 50
                })), a.footer.is(":visible") && (!b.footer.is(":visible") || d) && a.footer.gfxSlideIn(this.effectOptions({
                    direction: c
                })), a.content.queueNext(e), b.content.gfxSlideOut(this.effectOptions({
                    direction: g
                })), b.header.gfxSlideOut(this.effectOptions({
                    direction: g,
                    fade: !0,
                    distance: 50
                }));
                if (b.footer.is(":visible") && (!a.footer.is(":visible") || d)) return b.footer.gfxSlideOut(this.effectOptions({
                    direction: g
                }))
            } else {
                if (c === "up") return a.el.addClass("transitioning"), a.el.gfxSlideIn(this.effectOptions({
                    direction: c
                })), a.el.queueNext(e);
                if (c === "down") return b.el.addClass("transitioning"), b.el.gfxSlideOut(this.effectOptions({
                    direction: g
                })), b.el.queueNext(e)
            }
        }, c.prototype.trackEvent = function (a, b) {
            b == null && (b = {}), _referrer && _referring_domain && (b.$referrer = _referrer, b.$referring_domain = _referring_domain), Clarity.track(a, b);
            try {
                return _kiq.push(["set", {
                    event: a
                }])
            } catch (c) {}
        }, c.prototype.append = function () {
            var a;
            return a = 1 <= arguments.length ? e.call(arguments, 0) : [], c.__super__.append.apply(this, arguments), this.refreshElements()
        }, c.prototype.externalLinkTap = function (a) {
            if (App["native"]()) return window.plugins.childBrowser.showWebPage($(a.currentTarget).attr("href"))
        }, c.prototype.externalLinkClick = function (a) {
            if (!App["native"]()) return $(a.currentTarget).attr("target", "_blank"), a.stopImmediatePropagation()
        }, c.prototype.internalLink = function (a, b) {
            var c, d;
            d = $(a.currentTarget).attr("href"), d == null && (d = $(a.currentTarget).data("href"));
            if (d === "") return;
            return a.stopImmediatePropagation(), c = $(a.currentTarget).data("transition") != null ? $(a.currentTarget).data("transition") : $(a.currentTarget).data("transition") === null ? null : "right", (b != null ? b.metaKey : void 0) || (b != null ? b.ctrlKey : void 0) ? window.open(d) : this.navigate(d, {
                trans: c
            })
        }, c.prototype.setActive = function (a) {
            return $(a.currentTarget).addClass("active")
        }, c.prototype.clearActive = function (a) {
            return this.$(".list-item").removeClass("active")
        }, c.prototype._cancelLoad = function () {
            if (Notification.isSpinnerShowing()) return this.dirty = !0, Notification.hideSpinner()
        }, c.prototype.showInlineSpinner = function () {
            var a;
            return a = $("<div class='inline-spinner'></div>"), this.content.append(a), a.spin(App.defaultSpinnerOptions), this.content.scrollTo(a)
        }, c.prototype.hideInlineSpinner = function () {
            return this.content.find(".inline-spinner-wrapper").remove()
        }, c.prototype.initializeFooter = function () {
            var a, b, c, d, e = this;
            if (this.defaultFooter.show && this.footer.find(".navigation").size() === 0) {
                this.footer.prepend(JST["app/views/elements/footer_navigation"]({
                    active: this._opt(this.defaultFooter.activeItem, null)
                })), b = {
                    callList: "callback",
                    search: "search",
                    "my-page": "account",
                    inbox: "inbox",
                    favorites: "favorites"
                }, d = [];
                for (a in b) c = b[a], d.push(function (a, b) {
                    return e.el.delegate("." + a, "tap", function () {
                        var a;
                        return a = $.isFunction(b) ? b() : b, Clarity.stack.reset(), e._cancelLoad(), e.navigate("/" + a, {
                            footer: !0
                        })
                    })
                }(a, c));
                return d
            }
        }, c.prototype._setHeaderVisibility = function () {
            var a;
            return this._opt((a = this.defaultHeader) != null ? a.custom : void 0)
        }, c.prototype._setFooterVisibility = function () {
            var a, b;
            return this.footer.find(".navigation > div").removeClass("active"), a = "." + this._opt(this.defaultFooter.activeItem, null), a && this.footer.find(a).addClass("active"), this._opt(this.defaultFooter.show, !1) === !0 ? App.footer.show(this) : this._opt(this.defaultFooter.show, !1) === !1 && App.footer.hide(this), this._opt((b = this.defaultFooter) != null ? b.custom : void 0)
        }, c.prototype.html = function (a, b) {
            var d, e, f = this;
            return b == null && (b = {}), b.scroll !== !1 && (App.android || App.iOS && App.iOSVersion <= 4) ? (this.isIScrollRequired = !0, d = typeof a == "string" ? a : a(), a = JST["app/views/elements/scrollable"]({
                content: d
            }), c.__super__.html.apply(this, arguments), setTimeout(function () {
                return f.enableIScroll()
            }, 0)) : c.__super__.html.apply(this, arguments), e = $("input[readonly!='readonly'],textarea[readonly!='readonly']", this.content), e.attr("readonly", !0), setTimeout(function () {
                return e.attr("readonly", !1)
            }, 500)
        }, c.prototype.hideNotification = function (a) {
            if ($(a.target).hasClass("allow-default")) return;
            return Alert.hide(this)
        }, c.prototype.disableIScroll = function () {
            if (!this.iScroll) return;
            return this.iScroll.destroy(), this.iScroll = null
        }, c.prototype.enableIScroll = function () {
            var a, b = this;
            if (!this.isIScrollRequired) return;
            a = $(this.content, ".wrapper"), this.iScroll = new iScroll(a.get(0), {
                useTransform: !0,
                onBeforeScrollStart: function (a) {
                    var b, c;
                    b = a.target;
                    while (b.nodeType !== 1) b = b.parentNode;
                    if ((c = !b.tagName) === "SELECT" || c === "INPUT" || c === "TEXTAREA" || c === "BUTTON") return a.preventDefault()
                }
            });
            if (App.android) return this.content.css("opacity", 0), setTimeout(function () {
                return b.content.css("opacity", 100)
            }, 0)
        }, c.prototype.dataBehaviorTruncate = function () {
            return $("[data-behavior=truncate]").each(function () {
                var a, b, c, d;
                $(this).data("max-lines") != null ? c = parseInt($(this).data("max-lines"), 10) : c = 1, a = parseInt($(this).css("line-height"), 10), b = c * a, d = [];
                while ($(this).outerHeight() > b) d.push($(this).text(function (a, b) {
                    return b.replace(/\W*\s(\S)*\W*\s(\S)*$/, "…")
                }));
                return d
            })
        }, c.prototype.isOnboardingExpert = function () {
            return /\/expert\//.test(Spine.Route.path)
        }, c.prototype.isOnboardingSeeker = function () {
            return /\/getting_started\//.test(Spine.Route.path)
        }, c.prototype.setOnboardingTitle = function (a, b) {
            var c;
            return b == null && (b = void 0), b != null && (this.isOnboardingExpert() || this.isOnboardingSeeker()) || b == null ? (c = this.isOnboardingExpert() ? 5 : 3, this.setTitle("Setup <span class='steps'>(step " + a + " of " + c + ")</span>")) : this.setTitle(b)
        }, c.prototype.stepOutOfOnboardingIfDone = function () {
            var a;
            if ((a = Member.current()) != null ? a.onboarded : void 0) {
                Member.unbind("memberUpdated", this.stepOutOfOnboardingIfDone);
                if (this.isOnboardingSeeker()) return this.stepOutOfOnboarding(!1)
            }
        }, c.prototype.stepOutOfOnboarding = function (a) {
            a == null && (a = !0), this.currentMember.onboarded = !0, this.isOnboardingExpert() ? (this.navigate("/me", {
                trans: "right"
            }), this.currentMember.log("completed_expert_onboarding", ""), Notification.show("Your application has been received and will be processed within 24 hours. You will receive an email once it's been reviewed.", {
                wide: !0
            })) : (Clarity.stack.revertToLastCheckpoint(), this.navigateBack({
                trans: "right",
                default_path: "/search"
            }));
            if (a) return this.currentMember.save()
        }, c.prototype.navigateToNextOnboardingStep = function (a) {
            return this.isOnboardingExpert() ? this.navigate("/expert/step" + (a + 1), {
                trans: "right"
            }) : this.navigate("/getting_started/step" + (a + 1), {
                trans: "right"
            })
        }, c.prototype.charityChanged = function (a) {
            var b;
            b = $(a.currentTarget).val();
            if (b === "add") return this.navigate("/charities/add", {
                trans: "right"
            })
        }, c.prototype.updateCharitiesList = function () {
            var a, b, c, d, e, f;
            if (this.f == null) return;
            this.f.charity.find("option").filter("[value!='none']").filter("[value!='add']").remove(), a = Charity.defaultList(), f = [];
            for (d = 0, e = a.length; d < e; d++) b = a[d], c = $("<option/>"), c.text(b.name), c.val(b.id), this.currentMember && this.currentMember.charity_id === b.id && c.attr("selected", !0), this.f.charity.append(c), f.push(this.f.charity.siblings(".select_value").html(this.f.charity.children("option:selected").text()));
            return f
        }, c.prototype.hourlyRateValues = function (a) {
            var b;
            return a == null && (a = {}), a.free == null && (a.free = !0), b = [0, 60, 100, 120, 150, 200, 250, 300, 350, 400, 450, 500, 600, 1e3], a.free || b.shift(), b
        }, c.prototype.selectedHourlyRate = function (a) {
            var b, c, d, e, g;
            a == null && (a = {}), c = this.hourlyRateValues();
            if (a["default"] && parseInt(this.currentMember.hourly_rate) === 0) return a["default"];
            b = parseInt(this.currentMember.hourly_rate);
            if (b > c[c.length - 1]) b = c[c.length - 1];
            else if (!(f.call(c, b) >= 0))
                for (e = 0, g = c.length; e < g; e++) {
                    d = c[e];
                    if (b < d) {
                        b = d;
                        break
                    }
                }
            return b
        }, c.prototype.toggleBasicSearch = function () {
            return this.currentMember.is_expert && this.f.hourly_rate.val() === "0" || !this.currentMember.is_expert ? ($(".include-in-public-search-block").hide(), !1) : ($(".include-in-public-search-block").show(), !0)
        }, c.prototype.hourlyRateChanged = function (a) {
            if (this.isOnboardingExpert() && this.f.hourly_rate.val() === "0" || this.currentMember.is_expert && !this.toggleBasicSearch()) return Notification.show("As an expert, setting your hourly rate to $0 will remove you from our public Clarity directory.", {
                wide: !0,
                closeOnElse: !1
            })
        }, c.prototype.verifiedPromptRequirements = function (a) {
            var b, c, d, e, f, g;
            g = this.promptFilterStack;
            for (e = 0, f = g.length; e < f; e++) {
                c = g[e], d = this["prompt_for_" + c], $.isFunction(d) && (d = d());
                try {
                    if (d === !0 && !this.checkRequirement(c)) {
                        b = c;
                        break
                    }
                } catch (h) {}
            }
            return b ? (this["" + b + "Display"](!1), !0) : !0
        }, c.prototype.verifiedRequirements = function (a) {
            var b, c, d, e, f, g;
            g = this.filterStack;
            for (e = 0, f = g.length; e < f; e++) {
                c = g[e], d = this["requires_" + c], $.isFunction(d) && (d = d());
                try {
                    if (d === !0 && !this.checkRequirement(c)) {
                        b = c;
                        break
                    }
                } catch (h) {}
            }
            return b ? (a && this._failedRequirement !== b && (this["" + b + "Display"](!1), this._failedRequirement = b), !1) : (this._failedRequirement = null, !0)
        }, c.prototype.checkRequirement = function (a) {
            switch (a) {
            case "authentication":
                return this.currentMember;
            case "payment":
                return this.currentMember && this.currentMember.hasCreditCard();
            case "onboarding":
                return this.currentMember && this.currentMember.phone_number && this.currentMember.onboarded || this.isOnboardingExpert();
            case "onboarding_if_member":
                return this.currentMember == null || this.currentMember && this.currentMember.phone_number && this.currentMember.onboarded || this.isOnboardingExpert();
            case "call_rating":
                return this.currentMember != null ? (this.consumable = Consumable.consume("call_rating_prompt"), this.consumable == null) : !0;
            case "old_call_rating":
                return this.currentMember == null || this.currentMember && (this.currentMember.unrated_calls_count <= 0 || App.cookie("old_call_rating_prompt_dismissed") != null || this.currentMember.discarded_unrated_calls_prompt_count >= 1)
            }
        }, c.prototype.old_call_ratingDisplay = function () {
            var a = this;
            return App.cookie("old_call_rating_prompt_dismissed", !0, {
                expires: 1
            }), Notification.show("You have " + Helper.pluralize(Member.current().unrated_calls_count, "call", "calls") + " that " + Helper.pluralizeWordOnly(Member.current().unrated_calls_count, "has", "have") + " not been rated.", {
                confirmation: !0,
                buttonText: "Rate now",
                buttonCancelText: "Dismiss",
                closeOnElse: !1,
                wide: !0,
                onClose: function (b) {
                    return $(b.target).hasClass("ok") ? a.navigate("/calls/history/rate", {
                        trans: "right"
                    }) : (a.currentMember.discarded_unrated_calls_prompt_count += 1, a.currentMember.save(), Alert.notify("You can find all calls to be rated in your <a href='/history' class='internal'>call history</a>"))
                }
            })
        }, c.prototype.call_ratingDisplay = function () {
            var a, b;
            if (((a = this.consumable) != null ? (b = a.payload) != null ? b.call_id : void 0 : void 0) != null) return this.navigate("/calls/" + this.consumable.payload.call_id + "/rate", {
                trans: "up",
                show_few_seconds_alert: !0
            })
        }, c.prototype.authenticationDisplay = function () {
            var a, b, c;
            return a = App.cookie("referral_id"), (!a || !Member.exists(a.split(".")[0])) && App.cookie("referral_id", "" + Spine.Route.path.slice(1) + ".link"), b = App["native"]() ? "signup" : "login", Clarity.auth.show({
                expert: (c = this.params) != null ? c.model : void 0,
                screen: b,
                panel: this
            })
        }, c.prototype.paymentDisplay = function () {
            var a, b;
            return Clarity.stack.pop(), a = ((b = this.params) != null ? b.model : void 0) ? "/" + this.params.model.screen_name : "", this.navigate("/credit-card" + a, {
                requirementForwardPath: Spine.Route.path
            })
        }, c.prototype.onboarding_if_memberDisplay = function () {
            return this.onboardingDisplay()
        }, c.prototype.onboardingDisplay = function () {
            return Member.bind("memberUpdated", this.stepOutOfOnboardingIfDone), Clarity.stack.setCheckpoint(), this.navigate("/getting_started/step1")
        }, c.prototype.appendTimezones = function (a, b) {
            var c = this;
            return Helper.getTimeZones(function (c) {
                var d, e, f, g, h, i, j;
                for (g = 0, h = c.length; g < h; g++) i = c[g], f = i[0], d = i[1], e = $("<option value='" + f + "'>" + d + "</option>"), (f === "break" || f === "") && e.attr("disabled", !0), e.attr("selected", ((j = Member.current()) != null ? j.timezone : void 0) === f), a.append(e);
                return typeof b == "function" && b(), a.change()
            })
        }, c
    }(Panel), window.ClarityPanel = a
}.call(this),
function () {
    var a, b, c = Array.prototype.slice;
    b = null, a = function () {
        function a() {}
        return a.buildQuerystring = function (a) {
            var b, c;
            a == null && (a = {}), this.params = [];
            for (b in a) c = a[b], this.params.push("" + b + "=" + encodeURIComponent(c));
            return this.params.join("&")
        }, a.preloadImages = function () {
            var a, b, d, e, f;
            a = 1 <= arguments.length ? c.call(arguments, 0) : [], f = [];
            for (d = 0, e = a.length; d < e; d++) b = a[d], f.push($("<img/>").attr("src", b));
            return f
        }, a.pluralize = function (a, b, c) {
            return a === 1 ? "1 " + b : "" + a + " " + c
        }, a.pluralizeWordOnly = function (a, b, c) {
            return a === 1 ? b : c
        }, a.relativeTime = function (a) {
            var b;
            return b = "-", a && (moment.lang("en-short-relative-times"), b = moment.duration(a, "seconds").humanize(), moment.lang("en")), b
        }, a.relativeTimeFromNow = function (a, b) {
            var c, d;
            return b == null && (b = {}), c = b.mini ? "en-mini-relative-times" : "en-short-relative-times", moment.lang(c), d = moment(a).fromNow(), moment.lang("en"), d
        }, a.getTimeZones = function (a) {
            if (a == null) return;
            return b ? a(b) : $.getJSON("/api/current-timezones-list", function (c) {
                return b = c, a(b)
            })
        }, a.countryCodes = [1, 20, 212, 213, 216, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 27, 290, 291, 297, 298, 299, 30, 31, 32, 33, 34, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 36, 370, 371, 372, 373, 374, 375, 376, 377, 378, 380, 381, 382, 385, 386, 387, 389, 39, 40, 41, 420, 421, 423, 43, 44, 45, 46, 47, 48, 49, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 51, 52, 53, 54, 55, 56, 57, 58, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 60, 61, 618, 62, 63, 64, 65, 66, 670, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 685, 686, 687, 688, 689, 690, 691, 692, 7, 808, 81, 82, 84, 850, 852, 853, 855, 856, 86, 872, 880, 886, 90, 91, 92, 93, 94, 95, 960, 961, 962, 963, 964, 965, 966, 967, 968, 970, 971, 972, 973, 974, 975, 976, 977, 98, 992, 993, 994, 995, 996, 998], a.fakeUuid = function () {
            var a;
            return a = function () {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            }, a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }, a.openExternalLink = function (a) {
            return App["native"]() ? window.plugins.childBrowser.showWebPage(a) : window.open(a, "_blank")
        }, a.hl = function (a, b) {
            return a = b.escape(a), b.safe(a.replace(/&lt;em&gt;/g, "<em>").replace(/&lt;\/em&gt;/g, "</em>"))
        }, a.topics_hl = function (a, b) {
            var c, d, e, f, g;
            a = b.escape(a), d = [], g = a.split(",");
            for (e = 0, f = g.length; e < f; e++) {
                c = g[e], c = $.trim(c);
                if (c.match(/^\.\.\./) || c.match(/\.\.\.$/)) continue;
                c = "<div class='tag tag-small'><span class='tag-name'>" + c + "</span></div>", d.push(c)
            }
            return d = d.sort(function (a, b) {
                return a.match(/&lt;em&gt;/) && !b.match(/&lt;em&gt;/) ? -1 : b.match(/&lt;em&gt;/) && !a.match(/&lt;em&gt;/) ? 1 : 0
            }), a = d.join(""), b.safe(a.replace(/&lt;em&gt;/g, "<em>").replace(/&lt;\/em&gt;/g, "</em>"))
        }, a
    }(), window.Helper = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.extend(Spine.Model.Ajax), b.ajax().constructor.prototype.fetch = function (a, b) {
            var c, d = this;
            return a == null && (a = {}), b == null && (b = {}), (c = a.id) ? (delete a.id, this.find(c, a).success(function (a) {
                return Spine.Ajax.disable(function () {
                    return d.model.refresh(a || [], b)
                })
            })) : this.all(a).success(function (a) {
                return Spine.Ajax.disable(function () {
                    return d.model.refresh(a || [], b)
                })
            })
        }, b
    }(Spine.Model), (new a).ajax().constructor.prototype.errorResponse = function (a) {
        var b = this;
        return a == null && (a = {}),
        function (c, d, e) {
            return b.record.trigger("ajaxError", c, d, e, a)
        }
    }
}.call(this),
function () {
    var a;
    a = function () {
        function a() {}
        return a.show = function (b, c) {
            var d, e, f;
            return c == null && (c = {}), c.template || (c.template = "app/views/elements/notification"), c.panel || (c.panel = ".panel.active"), c.closeOnElse = c["closeOnElse"] != null ? c.closeOnElse : !0, c.confirmation || (c.confirmation = !1), c.buttonText || (c.buttonText = "Close"), c.buttonCancelText || (c.buttonCancelText = "No"), c.successConfirmation || (c.successConfirmation = !1), c.wide || (c.wide = !1), c.wideText || (c.wideText = !1), c.starIcon || (c.starIcon = !1), c.hideCloseX || (c.hideCloseX = !1), c.successConfirmation && (c.template = "app/views/elements/confirmation-notification"), e = JST[c.template]({
                msg: b,
                confirmation: c.confirmation,
                copy: c.copy,
                link: c.link,
                starIcon: c.starIcon
            }), f = $(c.panel).append(e), f.find(".close.ok").text(c.buttonText), c.successConfirmation || f.find(".close.cancel").text(c.buttonCancelText), c.hideCancel && f.find(".close.cancel").hide(), c.wide && f.find(".notification-dialog").addClass("wide"), c.wideText && f.find(".notification-dialog .text").css("width", 182), c.hideCloseX && f.find(".notification-dialog .icon-close").hide(), d = [".notification-dialog .close"], c.closeOnElse && d.push(".notification-dialog-wrapper"), $(d.join(", ")).bind("tap", function (b) {
                a.hide();
                if (c.onClose) return c.onClose(b)
            }), c.timeout && setTimeout(function () {
                return a.hide()
            }, c.timeout), $(".notification-dialog-wrapper")
        }, a.showSpinner = function (b) {
            return b == null && (b = "Loading..."), a.show(b, {
                closeOnElse: !1,
                template: "app/views/elements/notification-spinner"
            })
        }, a.hideSpinner = function () {
            return $(".notification-dialog.spinner").parent().remove()
        }, a.isSpinnerShowing = function () {
            return $(".notification-dialog.spinner").length
        }, a.hide = function () {
            return $(".notification-dialog-wrapper").remove()
        }, a.isVisible = function () {
            return $(".notification-dialog-wrapper").size() > 0
        }, a
    }(), window.Notification = a, window.Notification.Examples = {
        ex_hide: function () {
            return a.hide()
        },
        ex_spinner: function () {
            return a.hide(), a.showSpinner()
        },
        ex_need_posted: function () {
            return a.hide(), a.show("Your need has been submitted", {
                msg: "Your need has been submitted",
                copy: "You will receive an email with expert suggestions matching your need within the next few hours.",
                link: "<a href='#' class='close'>Close</a>",
                successConfirmation: !0,
                closeOnElse: !1
            })
        },
        ex_call_requested_successfully: function () {
            return a.hide(), a.show("Your request has been sent to John Smith", {
                copy: "Once your pending request is confirmed - you will receive a calendar invite with all the call details (time, number, etc) via email.",
                link: "<a href='/calls' class='internal close'>View your call request</a>",
                successConfirmation: !0,
                closeOnElse: !1
            })
        },
        ex_call_rating_prompt: function () {
            return a.hide(), a.show("Please rate your last call with John Smith", {
                copy: "Rating calls helps us improve your search results and recommendations.",
                successConfirmation: !0,
                link: "<a href='#' class='close'>Okay</a>",
                closeOnElse: !1,
                starIcon: !0,
                wide: !0,
                wideText: !0,
                hideCloseX: !0
            })
        },
        ex_notification: function () {
            return a.hide(), a.show("This is just a plain message notification.")
        },
        ex_confirmation: function () {
            return a.hide(), a.show("Are you sure you want to mark all of your messages as read?", {
                confirmation: !0,
                buttonText: "Yes",
                closeOnElse: !1
            })
        }
    }
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.PanelCache = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.push = function (a, b) {
            return this.size() >= 50 && this.clear(), this[JSON.stringify(a)] = b
        }, c.prototype.find = function (a) {
            return this[JSON.stringify(a)]
        }, c.prototype.size = function () {
            var a, b, c;
            c = 0;
            for (b in this) a = this[b], this.hasOwnProperty(b) && (c += 1);
            return c
        }, c.prototype.clear = function () {
            var a, b;
            for (b in this) {
                a = this[b];
                if (!this.hasOwnProperty(b)) continue;
                if (a.el.hasClass("active")) continue;
                if (Clarity.stack.holds(b)) continue;
                a.dispose(), delete this[b]
            }
            return null
        }, c
    }(Object)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        }, c = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    Clarity.Router = function (a) {
        function d(a) {
            var b, c, e, f, g, h, i, j, k, l, m, n, o, p = this;
            d.__super__.constructor.apply(this, arguments), f = [];
            for (h = 0, k = a.length; h < k; h++) b = a[h], f.push(b);
            n = this.routes;
            for (i = 0, l = n.length; i < l; i++) b = n[i], f.push(b);
            g = function () {
                var a;
                return a = c, Spine.Route.add(e, function (b) {
                    var c;
                    return typeof a == "function" ? a.call(p, b) : (c = Clarity.Router.findOrCreateInstance(a, b, !0), c.active(b)), !0
                })
            };
            for (j = 0, m = f.length; j < m; j++) o = f[j], e = o[0], c = o[1], g()
        }
        return b(d, a), d.findOrCreateInstance = function (a, b, c) {
            var d, e, f, g;
            return c == null && (c = !1), e = Clarity.Router.filteredParams(b), d = [a, JSON.stringify(e)], f = Clarity.panel_cache.find(d), f == null && (g = Clarity.Panels[a]) && (f = new g, Clarity.panel_cache.push(d, f)), f.history && c && Clarity.stack.push({
                panel_name: a,
                params: e,
                instance: f,
                cache_key: JSON.stringify(d)
            }), f
        }, d.filteredParams = function (a) {
            var b, d, e, f;
            e = ["footer", "history", "shim", "trigger", "trans", "backPath", "_navigatingBack", "typeahead"], d = {};
            for (b in a) f = a[b], c.call(e, b) < 0 && (d[b] = f);
            return d
        }, d
    }(Spine.Controller)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        }, c = Array.prototype.slice,
        d = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    Clarity.Stack = function (a) {
        function e() {
            e.__super__.constructor.apply(this, arguments)
        }
        return b(e, a), e.prototype.revertToLastCheckpoint = function () {
            var a, b, c;
            c = [];
            while (this.length > 0 && !((a = this.last().instance) != null ? (b = a.stack) != null ? b.checkpoint : void 0 : void 0) && !this.last().checkpoint) c.push(this.pop());
            return c
        }, e.prototype.setCheckpoint = function () {
            return this.last().checkpoint = !0
        }, e.prototype.reset = function () {
            return this.splice(0, this.length)
        }, e.prototype.holds = function (a) {
            var b, c, d;
            for (c = 0, d = this.length; c < d; c++) {
                b = this[c];
                if (b.cache_key === a) return !0
            }
            return !1
        }, e.prototype.includeAnyOf = function () {
            var a, b, e, f, g;
            b = 1 <= arguments.length ? c.call(arguments, 0) : [];
            for (e = 0, f = this.length; e < f; e++) {
                a = this[e];
                if (g = a.panel_name, d.call(b, g) >= 0) return !0
            }
            return !1
        }, e.prototype.back = function (a) {
            var b, c;
            return a == null && (a = {}), b = (c = this.last()) != null ? c.instance : void 0, b != null ? (b.navigateBack(a), !0) : !1
        }, e.prototype.serialize = function () {
            var a, b, c, d, e, f, g, h, i;
            d = [];
            for (f = 0, g = this.length; f < g; f++) {
                b = this[f], a = {};
                for (c in b) e = b[c], c !== "instance" && (a[c] = e);
                a.checkpoint = a.checkpoint || ((h = b.instance) != null ? (i = h.stack) != null ? i.checkpoint : void 0 : void 0), d.push(a)
            }
            return sessionStorage["clarity-stack"] = JSON.stringify(d)
        }, e.prototype.deserialize = function () {
            var a, b, c, d;
            this.reset();
            try {
                if (sessionStorage["clarity-stack"]) {
                    b = JSON.parse(sessionStorage["clarity-stack"]), delete sessionStorage["clarity-stack"];
                    for (c = 0, d = b.length; c < d; c++) a = b[c], this.push(a)
                }
            } catch (e) {}
            return this
        }, e.prototype.print = function () {
            var a, b, c, d, e, f, g;
            a = 1, console.group("Clarity.stack");
            for (d = 0, e = this.length; d < e; d++) {
                c = this[d];
                if (c.checkpoint || ((f = c.instance) != null ? (g = f.stack) != null ? g.checkpoint : void 0 : void 0)) console.group("Checkpoint: %o", a), a += 1;
                console.log("%c%s%c%s", "color: #3BB7CC", c.panel_name, "color: #4AA333;", c.params.match[0])
            }
            for (b = 0; 0 <= a ? b <= a : b >= a; 0 <= a ? b++ : b--) console.groupEnd();
            return null
        }, e
    }(Array)
}.call(this),
function () {
    var App, initialized, updateRunning, __hasProp = Object.prototype.hasOwnProperty,
        __extends = function (a, b) {
            function d() {
                this.constructor = a
            }
            for (var c in b) __hasProp.call(b, c) && (a[c] = b[c]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    initialized = !1, updateRunning = !1, window.handleOpenURL = function (a) {
        window.url = a;
        if (a) return processUrl(a)
    }, window.processUrl = function (a) {
        var b, c, d, e;
        return window.callbackUrl = a, window.nonce = (b = a.match(/nonce=(.*?)(&|$)/)) != null ? b[1] : void 0, window.origin = (c = a.match(/origin=(.*?)(&|$)/)) != null ? c[1] : void 0, window.auth_error = (d = a.match(/auth_error=(.*?)(&|$)/)) != null ? d[1] : void 0, window.auth_message = (e = a.match(/auth_message=(.*?)(&|$)/)) != null ? e[1] : void 0, window.nonce ? (Notification.showSpinner(), Member.loadCurrent(!0, function () {
            var a;
            origin === "/search" && ((a = Member.current()) != null ? !a.onboarded : !void 0) ? Spine.Route.navigate("/") : Spine.Route.navigate(origin), Clarity.auth.showing && Clarity.auth.close(!0), Notification.hideSpinner();
            if (auth_message) return Notification.show(decodeURIComponent(auth_message))
        })) : auth_error && Clarity.auth.error({
            message: decodeURIComponent(auth_error)
        }), window.nonce = null
    }, $(document).on("pause", function () {
        return App.pausedAt = new Date
    }), $(document).on("resume", function () {
        var a;
        App.pausedAt = null, App.updateReady && window.location.reload();
        if (App.refreshOnResume && ((a = Clarity.auth) != null ? !a.showing : !void 0)) return ClarityPanel.activating.restart(), App.refreshOnResume = null
    }), $(function () {
        var a, b;
        !App["native"]() && (a = window.applicationCache) && (a.addEventListener("updateready", window.applicationCache.swapCache, !1), a.addEventListener("obsolete", function () {
            if (!App.loggingOut) return App.obsoleteClarityVersion()
        }, !1)), b = function (a, b, c, d) {
            var e;
            if (Clarity.useDefaultScrolling) return;
            return a.preventDefault(), e = $(".viewport > .panel.active > article"), e.scrollTop(e.scrollTop() - d * 30)
        }, $(".viewport > .panel > header, .viewport > .panel > footer").mousewheel(function () {
            return !1
        }), $(document).mousewheel(b);
        if (App.chromeiOS && !App.iPad && App.chromeiOSVersion >= 26) return $(".viewport").css("bottom", "44px")
    }), $.fn.id = function () {
        return $(this).data("id") || $(this).parents("[data-id]").data("id")
    }, App = function (_super) {
        function App(a, b) {
            b == null && (b = "/list"), App.loadedAt = new Date, this.determineMobile(), this.addBrowserSpecificBehavior(), App.externalBackPath = App.flash("externalBackPath"), App.__super__.constructor.apply(this, arguments)
        }
        return __extends(App, _super), App.prototype.determineMobile = function () {
            var a, b;
            return App.android = navigator.userAgent.match(/Android/i), App.iOS = navigator.userAgent.match(/iPod|iPhone|iPad/i), App.iPhone = navigator.userAgent.match(/iPhone/i), App.iPad = navigator.userAgent.match(/iPad/i), App.iOSVersion = (a = /OS (\d)_\d/i.exec(navigator.userAgent)) != null ? a[1] : void 0, App.chromeiOSVersion = parseInt((b = /CriOS\/(\d+)/i.exec(navigator.userAgent)) != null ? b[1] : void 0, 10), App.chromeiOS = navigator.userAgent.match(/CriOS/i), App.mobile = App.android || App.iOS
        }, App.prototype.addBrowserSpecificBehavior = function () {
            return App.mobile ? ($("body").addClass("mobile-browser"), App["native"]() && $("body").addClass("native"), $("body").on("touchmove", "footer,header", function (a) {
                return a.preventDefault()
            })) : $("body").addClass("desktop-browser")
        }, App["native"] = function () {
            return typeof NATIVE_APP != "undefined" && NATIVE_APP !== null
        }, App.postInit = function () {
            return Charity.cache("charities", null), Charity.fetch(), window.thirdPartyScripts(), Member.current() && (Member.setupPushUpdates(), Consumable.fetch({
                complete: function () {
                    return Consumable.trigger("initial-consumable-load")
                }
            })), Clarity.track("Visited site"), Log.startFlushingLogs()
        }, App.setup =
            function () {
                var authMessage, cache, headers, version;
                if (initialized) return;
                initialized = !0, App.clientId = Helper.fakeUuid(), headers = {
                    "X-CLARITY-VERSION": CLARITY_VERSION,
                    "X-CLIENT-ID": App.clientId
                }, typeof IOS_APP_VERSION != "undefined" && IOS_APP_VERSION !== null && (headers["X-IOS-APP-VERSION"] = IOS_APP_VERSION), $.ajaxSetup({
                    headers: headers,
                    timeout: 3e4,
                    beforeSend: function (a, b) {
                        this.url.match(/:\/\//) || (this.url = FRIENDLY_HOST + this.url);
                        if (this.url.substring(0, FRIENDLY_HOST.length) === FRIENDLY_HOST) return a.friendly = !0
                    },
                    complete: function (xhr) {
                        var path;
                        if (xhr.status < 400) {
                            xhr.getResponseHeader("X-EVAL") && xhr.friendly && eval(xhr.getResponseHeader("X-EVAL"));
                            if (xhr.getResponseHeader("X-OBSOLETE") && App["native"]() && !updateRunning) return updateRunning = !0, path = xhr.getResponseHeader("X-UPDATE-PATH") || "" + FRIENDLY_HOST + "/native/" + IOS_APP_VERSION + ".zip", Cordova.exec(function () {
                                return App.updateReady = !0
                            }, function () {}, "fm.clarity.Updater", "update", [path])
                        }
                    }
                }), $(document).ajaxError(App.errorHandler), $(document).ajaxSuccess(function () {
                    return App.offline = !1
                });
                if (typeof IOS_APP_VERSION != "undefined" && IOS_APP_VERSION !== null && IOS_APP_VERSION === "1.2" && !Member.fromCache("currentMember"))
                    for (version = 104; version <= 114; version++)
                        if (cache = localStorage["" + version + "-currentMember"]) delete localStorage["" + version + "-currentMember"], localStorage["103-currentMember"] = cache;
                Member.loadCurrent(!0), $(window).load(App.postInit), Clarity.auth = new Clarity.AppAuth, App.setupRoutes(), App.cookie("auth_error") && Spine.Route.navigate("/sign-in"), (authMessage = App.flash("auth_message")) && Notification.show(authMessage);
                if (!App.querystring().origin) return this.showServerAlerts()
        }, App.showServerAlerts = function () {
            var a, b;
            (b = App.flash("notice")) && Alert.notify(b);
            if (a = App.flash("error")) return Alert.error(a)
        }, App.setupRoutes = function () {
            var a, b, c, d, e;
            Spine.Route.getHash = function () {
                var a;
                return (a = window.location.href.split("#")[1]) ? "#" + a : ""
            }, Clarity.stack == null && (Clarity.stack = new Clarity.Stack), Clarity.stack.deserialize(), Clarity.panel_cache = new Clarity.PanelCache, Spine.Route.routes = [], new Clarity.Routes(App.dynamicRoutes), Spine.Route.setup(), d = Spine.Route.routes, e = [];
            for (b = 0, c = d.length; b < c; b++) a = d[b], e.push(a.route = new RegExp(a.route.source, "i"));
            return e
        }, App.notFound = function (a) {
            return a == null && (a = Spine.Route.path), $.get("/api/dynamic-routes").success(function (b) {
                return a.toLowerCase() in b ? (App.dynamicRoutes = b, App.setupRoutes(), Spine.Route.matchRoute(a)) : Spine.Route.navigate("/search/" + Spine.Route.path.replace(/\//ig, " ").slice(1), {
                    from_404: !0
                })
            })
        }, App.querystring = function () {
            var a, b, c, d, e, f, g, h;
            if (this.cachedQuerystring) return this.cachedQuerystring;
            c = (window.location.search || "").replace(/^\?/, ""), this.cachedQuerystring = {}, g = c.split("&");
            for (e = 0, f = g.length; e < f; e++) b = g[e], h = b.split("="), a = h[0], d = h[1], d != null && (this.cachedQuerystring[a] = decodeURIComponent(d));
            return this.cachedQuerystring
        }, App.querystringFlash = function (a) {
            var b, c, d;
            this._flashQuerystring || (this._flashQuerystring = {});
            if (!this._flashQuerystringInitialized) {
                d = this.querystring();
                for (b in d) c = d[b], this._flashQuerystring[b] = c;
                this._flashQuerystringInitialized = !0
            }
            return c = this._flashQuerystring[a], delete this._flashQuerystring[a], c
        }, App.railsErrorsAsString = function (a, b) {
            var c, d, e, f, g, h, i;
            b == null && (b = "\n");
            try {
                f = JSON.parse(a), g = [];
                for (e in f) {
                    d = f[e];
                    for (h = 0, i = d.length; h < i; h++) c = d[h], e === "scheduled_at" && c === "can't be double booked" ? g.push("You already have a call scheduled for the selected time.") : e === "base" ? g.push(c) : g.push("" + e.capitalize() + " " + c)
                }
                return g.join(b)
            } catch (j) {
                return App.genericErrorMessage
            }
        }, App.errorHandler = function (event, xhr, options) {
            var message, panel, path, verified;
            options == null && (options = {});
            if (!xhr.globalHandlerCancelled) {
                if (xhr.status === 0 && !App.offline && (xhr.statusText === "timeout" || navigator.onLine === !1)) return App["native"]() && App.pausedAt ? App.refreshOnResume = !0 : (App.offline = !0, message = navigator.onLine ? "because of a timeout" : "because they have no connectivity", Log.create({
                    status: "saw_offline_mode",
                    message: message
                }), Alert.error("Clarity is in offline mode.  Changes won't be persisted until you connect to a network."));
                if (xhr.status === 401) {
                    if (!Clarity.auth.showing) {
                        panel = ClarityPanel.activating, verified = panel != null ? panel.verifiedRequirements(panel.params) : void 0;
                        if (!panel || verified || panel._failedRequirement !== "authentication") return Clarity.auth.show()
                    }
                } else {
                    if (xhr.status === 404) return App.notFound();
                    if (xhr.status === 409 && xhr.getResponseHeader("X-OBSOLETE")) {
                        if (!App["native"]() && window.applicationCache && window.applicationCache.status) return window.applicationCache.update();
                        if (!App["native"]()) return App.obsoleteClarityVersion();
                        if (!updateRunning) return updateRunning = !0, path = xhr.getResponseHeader("X-UPDATE-PATH") || "" + FRIENDLY_HOST + "/native/" + IOS_APP_VERSION + ".zip", Cordova.exec(App.obsoleteClarityVersion, function () {}, "fm.clarity.Updater", "update", [path])
                    } else {
                        if (xhr.status === 409 && xhr.getResponseHeader("X-EVAL") && xhr.friendly) return eval(xhr.getResponseHeader("X-EVAL"));
                        if (xhr.status >= 400) {
                            Alert.error(App.genericErrorMessage);
                            if (xhr.status !== 500 || !xhr.getResponseHeader("X-SERVER-VERSION")) return Log.create({
                                status: "client_error",
                                message: "on client: " + xhr.statusText + " performing " + options.type + " " + options.url
                            })
                        }
                    }
                }
            }
        }, App.genericErrorMessage = "There was a problem contacting the Clarity servers.  Please contact <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a> if the problem persists.", App.showFailedPayment = function () {
            var a;
            if (a = Member.current().failed_payment) return Alert.error("There was an issue charing your credit card ($" + a.amount.toCurrency() + ")                 after your call with " + a.name + ".  Please                 <a href='/credit-card' class='internal'>update your credit card</a>                 to re-try, or contact <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a>")
        }, App.flash = function (a, b) {
            var c;
            b == null && (b = !0);
            if (c = App.cookie(a)) return App.cookie(a, null, {
                session: b
            }), c
        }, App.cookie = function (a, b, c) {
            var d, e, f, g;
            c == null && (c = {});
            if (b != null || b === null) {
                c.session != null && c.session ? f = null : c.expires != null && !isNaN(parseInt(c.expires, 10)) ? f = parseInt(c.expires, 10) : f = 3652, e = FRIENDLY_HOST.replace(/.*:\/\//, ".");
                if (g = e.match(/\..*?(\..*?\..*)/)) e = g[1];
                return e = e.replace(/:\d+/, ""), e.match(/^\.\d/) && (e = e.replace(/^\./, "")), $.cookie(a, b, {
                    expires: f,
                    path: "/",
                    domain: e
                })
            }
            return b === null ? $.removeCookie(a) : (d = $.cookie(a, {
                raw: !0
            }), d ? decodeURIComponent(d.replace(/\+/g, " ")) : d)
        }, App.logout = function () {
            return App.loggingOut = !0, Member.cache("currentMember", null), App["native"]() ? (Notification.showSpinner(), $.ajax("/signout").complete(function () {
                return setTimeout(function () {
                    return Spine.Route.navigate("/sign-in"), Notification.hideSpinner()
                }, 500)
            })) : window.applicationCache && window.applicationCache.status ? $.ajax("/signout").complete(function () {
                return window.applicationCache.update(), window.location.href = "/home"
            }) : window.location.href = "/signout"
        }, App.expireManifest = function (a) {
            return App.loggingOut = !0, Member.cache("currentMember", null), window.applicationCache && window.applicationCache.status ? $.ajax("/expire-manifest").complete(function () {
                return window.applicationCache.update(), window.location.href = a
            }) : window.location.href = a
        }, App.obsoleteClarityVersion = function () {
            var a;
            return new Date - App.loadedAt > 3e3 ? (a = function () {
                return window.location.reload()
            }, App["native"]() ? navigator.notification.alert("Clarity has been updated and must be reloaded.", a, "Clarity Update") : Notification.show("Clarity has been updated and must be reloaded.", {
                closeOnElse: !1,
                buttonText: "OK",
                onClose: a
            })) : window.location.reload()
        }, App.defaultSpinnerOptions = {
            lines: 11,
            length: 6,
            width: 2,
            radius: 5,
            corners: 1,
            trail: 60,
            speed: 1
        }, App.smallSpinnerOptions = {
            lines: 11,
            length: 3,
            width: 1.7,
            radius: 4,
            corners: 1,
            trails: 30,
            speed: 1
        }, App.footer = {
            hide: function (a) {
                return a.content.css("bottom", "0"), a.footer.hide()
            },
            show: function (a) {
                var b;
                return b = a.footer.css("height"), a.content.css("bottom", b), a.footer.show()
            },
            setHeight: function (a, b, c) {
                var d;
                return c == null && (c = 0), c === 0 ? (a.content.css({
                    bottom: "" + b + "px"
                }), a.footer.css({
                    height: "" + b + "px"
                })) : (d = a.footer.height(), b < d && a.content.css({
                    bottom: "" + b + "px"
                }), a.footer.animate({
                    height: "" + b + "px"
                }, c, function () {
                    if (b > d) return a.content.css({
                        bottom: "" + b + "px"
                    })
                }))
            }
        }, App.header = {
            hide: function (a) {
                return a.content.css("top", "0"), a.header.hide()
            },
            show: function (a) {
                var b;
                return b = a.header.css("height"), a.content.css("top", b), a.header.show()
            },
            setHeight: function (a, b, c) {
                return c == null && (c = 0), a.header.data("height", b), c === 0 ? (a.content.css({
                    top: "" + b + "px"
                }), a.header.css({
                    height: "" + (b - 1) + "px"
                })) : (a.content.animate({
                    top: "" + b + "px"
                }, c), a.header.animate({
                    height: "" + (b - 1) + "px"
                }, c))
            }
        }, App
    }(Stage.Global), window.App = App, window.addEventListener != null && window.addEventListener("message", App.receivePostMessage, !1)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.TimePickers = function (b) {
        function d(b) {
            this.onChange = a(this.onChange, this);
            var c, e, f, g, h, i, j, k, l;
            d.__super__.constructor.apply(this, arguments), i = b.suggested_times || [], e = b.dirty, this.approximate_length = b.approximate_length;
            if (b.auto_cascade && !e) {
                h = moment(), h.add("minutes", 60 - h.minutes()).add("hours", 1), l = [0, 1, 2];
                for (j = 0, k = l.length; j < k; j++) f = l[j], i[f] = h.clone(), this.approximate_length > 30 ? h.add("hours", 1) : h.add("minutes", 30)
            }
            g = [], c = this.onChange, this.$(".timepicker").each(function (a) {
                var b;
                return b = new Clarity.TimePicker({
                    el: this,
                    selectedDate: i[a],
                    onChange: function (b, d) {
                        return c(b, d, a)
                    },
                    dirty: e
                }), g.push(b)
            }), this.pickers = g
        }
        return c(d, b), d.prototype.selectedTimes = function () {
            var a, b, c, d, e;
            d = this.pickers, e = [];
            for (b = 0, c = d.length; b < c; b++) a = d[b], e.push(a.selectedDate);
            return e
        }, d.prototype.onChange = function (a, b, c) {
            var d, e, f, g, h, i, j, k, l;
            e = !1, j = this.pickers;
            for (d = 0, h = j.length; d < h; d++) g = j[d], d > c && this.pickers[d].dirty && (e = !0);
            if (e) return;
            f = a.selectedDate.clone(), k = this.pickers, l = [];
            for (d = 0, i = k.length; d < i; d++) g = k[d], !g.dirty && d > c ? (b.time ? this.approximate_length > 30 ? f = f.clone().add("hours", 1) : f = f.clone().add("minutes", 30) : (f = f.hours(g.selectedDate.hours()), f = f.minutes(g.selectedDate.minutes())), l.push(g.updateTime(f))) : l.push(void 0);
            return l
        }, d
    }(Spine.Controller)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.TimePicker = function (b) {
        function d(b) {
            this.closeDatePicker = a(this.closeDatePicker, this), d.__super__.constructor.apply(this, arguments), this.dirty = b.dirty || !1;
            if (this.selectedDate == null || this.selectedDate < moment()) this.selectedDate = moment(), this.selectedDate.minutes() < 30 ? this.selectedDate.minutes(30) : this.selectedDate.minutes(0).add("hours", 1);
            this.updateDate(this.selectedDate), this.generateTimeList()
        }
        return c(d, b), d.prototype.events = {
            "tap .date": "openDatePicker",
            "change .time": "selectedTime"
        }, d.prototype.elements = {
            ".date": "date",
            ".time": "time"
        }, d.prototype.updateTime = function (a) {
            return this.selectedDate = a, this.updateDate(this.selectedDate), this.generateTimeList()
        }, d.prototype.generateTimeList = function () {
            var a, b, c, d, e, f, g;
            this.time.html(""), c = moment(), d = !1, e = moment().sod(), b = moment().sod().add("hours", 24), g = [];
            while (e < b) {
                if (this.selectedDate.sod().valueOf() === c.sod().valueOf() && e < c) {
                    e.add("minutes", 30);
                    continue
                }
                a = e.format("h:mm A"), f = e.format("HH:mm"), a === this.selectedDate.format("h:mm A") && !d ? (d = !0, this.time.append("<option value='" + f + "' selected='selected'>" + a + "</option>")) : this.time.append("<option value='" + f + "'>" + a + "</option>"), g.push(e.add("minutes", 30))
            }
            return g
        }, d.prototype.updateDate = function (a) {
            return this.date.text(a.format("ddd, MMM D YYYY"))
        }, d.prototype.notifyChange = function (a) {
            return this.dirty = !0, typeof this.onChange == "function" ? this.onChange(this, a || {}) : void 0
        }, d.prototype.selectedTime = function (a) {
            var b, c, d;
            d = this.time.val().split(":"), b = d[0], c = d[1], this.selectedDate = this.selectedDate.hours(b).minutes(c);
            if (a !== !1) return this.notifyChange({
                time: !0
            })
        }, d.prototype.openDatePicker = function (a) {
            var b = this;
            return $("body").append("<div class='calendar-popup-overlay'></div>"), $("body").append("<div class='calendar-popup'><span class='datepicker'></span></div>"), $("body > .calendar-popup > .datepicker").datepick({
                defaultDate: this.selectedDate.toDate(),
                minDate: moment().sod().toDate(),
                changeMonth: !1,
                pickerClass: "noPrevNext",
                prevText: "<",
                todayText: "",
                nextText: ">",
                dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
                renderer: $.extend({}, $.datepick.defaultRenderer, {
                    picker: '<div class="datepick"><div class="datepick-nav">  <a href="#" class="datepick-custom-close">&times;</a>  <div class="datepick-custom-month"></div>  <div class="datepick-custom-links">{link:prev}{link:next}</div></div>{months}{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}<div class="datepick-clear-fix"></div></div>',
                    weekendClass: "",
                    defaultClass: ""
                }),
                onShow: function (a, c) {
                    return $(a).find(".datepick-custom-month").text($(a).find(".datepick-month-header").text()), $(a).find(".datepick-custom-close").on("tap", b.closeDatePicker)
                },
                onSelect: this.closeDatePicker
            })
        }, d.prototype.closeDatePicker = function (a) {
            return $.isArray(a) && (this.selectedDate = moment(a[0]), this.selectedTime(!1), this.updateDate(this.selectedDate), this.generateTimeList(), this.notifyChange()), $("body > .calendar-popup").remove(), $("body > .calendar-popup-overlay").css("opacity", 0), setTimeout(function () {
                return $("body > .calendar-popup-overlay").remove()
            }, 400)
        }, d
    }(Spine.Controller)
}.call(this),
function () {
    Clarity.Tracker = function () {
        function a() {}
        return a.log = function (b, c) {
            return c == null && (c = {}), c.mobile = a.mobileDevice(), c["native"] = typeof App != "undefined" && App !== null ? App["native"]() : void 0, c.flow = a.flow(), typeof App != "undefined" && App !== null ? c.url = Spine.Route.path : (c.page_name = document.title, c.url = window.location.pathname), mixpanel.track(b, c)
        }, a.mobileDevice = function () {
            var a, b;
            return a = navigator.userAgent.match(/Android/i), b = navigator.userAgent.match(/iPod|iPhone|iPad/i), a || b
        }, a.flow = function () {
            var a;
            return ((a = Clarity.auth.overlay) != null ? a.hasClass("widget") : void 0) ? "blog_widget" : (typeof App != "undefined" && App !== null ? App["native"]() : void 0) ? "native-ios" : typeof App != "undefined" && App !== null ? "app" : "site"
        }, a
    }.call(this), Clarity.track = Clarity.Tracker.log
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        }, c = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
    Clarity.Auth.BasePanel = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.include(Clarity.Validation), c
    }(Spine.Controller), Clarity.Auth.Panel = function (a) {
        function d() {
            this.visitConfirmEmail = c(this.visitConfirmEmail, this), this.template || (this.template = this.className.replace(/-/g, "_")), this.addEvents(), d.__super__.constructor.apply(this, arguments), $(this.el).on("focus blur keyup", "input, textarea", this.fill), $(this.el).on("focus keyup", "input, textarea", this.focus), $(this.el).addClass("auth-panel")
        }
        return b(d, a), d.prototype.invalidClass = "error", d.prototype.events = {
            "click [data-action=login]": "visitLogin",
            "click [data-action=sign-up]": "visitSignup",
            "click [data-action=forgot-password]": "visitPassword",
            "click [data-provider]": "loginClicked",
            "click [data-action=create-account]": "createAccount",
            "click [data-action=email-sign-up]": "emailSignUp",
            "click [data-action=resend-confirmation-email]": "resendConfirmationEmail",
            "click [data-action=reset-password]": "resetPassword",
            "click [data-action=cancel]": "cancel",
            "click a.external": "externalLink",
            "click [data-action=resend-email]": "resendEmail",
            "click [data-action=signup-as-expert]": "signupAsExpert",
            "click [data-action=signup-as-member]": "signupAsMember",
            "click [data-action=sign-in-with-email]": "signInWithEmail"
        }, d.prototype.externalLink = function (a) {
            if (typeof NATIVE_APP != "undefined" && NATIVE_APP !== null) return window.plugins.childBrowser.showWebPage($(a.currentTarget).attr("href"))
        }, d.prototype._opt = function (a, b, c) {
            return b == null && (b = null), c == null && (c = {}), $.isFunction(a) ? a.call(this, c) || b : a || b
        }, d.prototype.cancel = function (a) {
            return this.stack.close(!1)
        }, d.prototype.fill = function () {
            var a, b;
            b = $(this), a = b.closest("span").children("label"), this.value !== "" && a.addClass("filled");
            if (this.value === "") return a.removeClass()
        }, d.prototype.focus = function () {
            var a;
            a = $(this);
            if (a.value !== "") return a.closest("span").children("label").addClass("focused")
        }, d.prototype.active = function (a) {
            var b;
            return d.__super__.active.apply(this, arguments), b = [a.expert, a.member], this.expert = b[0], this.member = b[1], this.render(a)
        }, d.prototype.activate = function () {
            var a, b, c = this;
            return $(this.el).show(), a = (new Image).style, "webkitTransition" in a || "mozTransition" in a || "transition" in a ? (this.delay(function () {
                var a;
                return $(c.el).addClass("active"), typeof (a = c.stack).onActive == "function" ? a.onActive() : void 0
            }), this.el.one("webkitTransitionEnd mozTransitionEnd transitionEnd", function () {
                return $(c.el).parent().find(".auth-panel:not(.active)").hide()
            })) : ($(this.el).addClass("active"), typeof (b = this.stack).onActive == "function" && b.onActive(), $(this.el).parent().find(".auth-panel:not(.active)").hide())
        }, d.prototype.visitLogin = function () {
            return this.stack.login.active({
                expert: this.expert,
                showEmail: this.showEmail
            })
        }, d.prototype.visitSignup = function () {
            return this.stack.signup.active({
                expert: this.expert,
                showEmail: this.showEmail
            })
        }, d.prototype.visitPassword = function () {
            return this.stack.password.active({
                expert: this.expert,
                showEmail: this.showEmail
            })
        }, d.prototype.visitConfirmEmail = function () {
            return this.stack.confirmEmail.active({
                expert: this.expert,
                showEmail: this.showEmail
            })
        }, d.prototype.signInWithEmail = function () {
            return this.$(".loginwemail").addClass("active")
        }, d.prototype.loginClicked = function (a) {
            var b, c;
            return a.preventDefault(), c = "default", b = $(a.currentTarget).data("provider"), $(a.currentTarget).hasClass("apply") && (window.origin = "/expert/step1"), b === "password" ? this.passwordLogin() : this.stack.authenticate(b, c, {
                origin: window.origin
            })
        }, d.prototype.jst = function (a, b) {
            return b == null && (b = {}), b.jst = function (a, b) {
                return this.safe(JST["auth/views/" + a](b))
            }, this.html(JST["auth/views/" + a](b))
        }, d.prototype.showLoader = function () {
            return this.$(".loader").css("opacity", 1)
        }, d.prototype.hideLoader = function () {
            return this.$(".loader").css("opacity", 0)
        }, d.prototype.showSpinner = function () {
            return this.hideNotification(), this.el.append(JST["auth/views/_notification"]), this.$(".notification-dialog p").html("Loading..."), this.$(".notification-dialog .spinner").show()
        }, d.prototype.showPrompt = function (a, b) {
            var c = this;
            return this.hideNotification(), this.el.append(JST["auth/views/_notification"]), this.$(".notification-dialog").addClass("wide"), this.$(".notification-dialog p").html(a), this.$(".notification-dialog button").show().click(function () {
                return typeof b == "function" && b(), c.hideNotification()
            })
        }, d.prototype.hideNotification = function () {
            return this.$(".notification-dialog-wrapper").remove()
        }, d.prototype.render = function (a) {
            var b;
            return b = typeof FRIENDLY_HOST != "undefined" && FRIENDLY_HOST !== null ? FRIENDLY_HOST : null, this.jst(this.template, {
                expert: this.expert,
                showEmail: this.showEmail,
                member: this.member,
                passwordReset: a.passwordReset,
                host: b
            }), this.$("[data-provider]").append("<span class='spinner'></span>")
        }, d.prototype.showError = function (a) {
            return this.$(".errors").html(a)
        }, d.prototype.showErrorMessage = function (a, b) {
            a.addClass("error"), a.parent().find("em").remove();
            if (b) return a.after("<em>" + b + "</em>")
        }, d.prototype.clearErrors = function () {
            return this.$("input~em").remove(), this.$("input").removeClass("error")
        }, d.prototype.isValid = function () {
            var a, b, c, d, e, f, g, h;
            d = !0, this.clearErrors(), this.validate(), g = this.sortedFields();
            for (e = 0, f = g.length; e < f; e++) {
                a = g[e], h = a.data("errors");
                for (b in h) {
                    c = h[b];
                    if (c) {
                        d = !1, this.showErrorMessage(a, c);
                        break
                    }
                }
            }
            return d
        }, d.prototype.railsErrorsAsString = function (a, b) {
            var c, d, e, f, g, h, i;
            b == null && (b = "\n");
            try {
                f = JSON.parse(a), g = [];
                for (e in f) {
                    d = f[e];
                    for (h = 0, i = d.length; h < i; h++) c = d[h], e === "base" ? g.push(c) : g.push("" + e.capitalize() + " " + c)
                }
                return g.join(b)
            } catch (j) {}
        }, d
    }(Clarity.Auth.BasePanel)
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["auth/views/_expert"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="expert">\n  <div class="inner">\n    <img src="'), b.push(d(this.expert.imageUrl())), b.push('" />\n    <h2>'), b.push(d(this.expert.name())), b.push("</h2>\n    <h3>\n      "), b.push(d(this.expert.humanTimeDifference((new Date).getTimezoneOffset() / -60))), b.push("<br/>\n      It's currently "), b.push(d(this.expert.cleanLocalTime())), b.push('\n    </h3>\n    <p class="price">\n      <strong>$'), b.push(d(this.expert.formattedCost())), b.push('</strong> /min\n    </p>\n    <i class="clear"><br/></i>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["auth/views/_notification"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="notification-dialog-wrapper">\n  <div class="notification-dialog">\n    <div class="spinner"></div>\n    <p></p>\n    <button data-action="hide-notification">Ok</button>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["auth/views/confirm_email"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a;
                b.push('<h1><span class="loader"></span>Confirm email</h1>\n<button class="cancel" data-action="cancel">Close</button>\n\n<article class="allow-scroll">\n  <a class="cancel" data-action="cancel">x</a>\n  <div class="top">\n    <h5>\n      A confirmation email has been sent to:\n      <strong class="confirmemail"><i></i> '), b.push(d(((a = this.member) != null ? a.email : void 0) || "dan@clarity.fm")), b.push('</strong>\n    </h5>\n    <p class="confirmemail">\n      Click on the confirmation link in the email to activate your account.\n    </p>\n  </div>\n\n  <div class="under compact clearfix" style="padding-top: 0">\n\n  <!--\n    <section>\n      <p>\n        We do this as a security precaution to verify your credentials.\n      </p>\n    </section>\n  -->\n\n    <section class="details" style="display:none">\n      <form name="auth_member">\n        <fieldset>\n          <span class="email text">\n            <label>Email</label>\n            <input type="text" name="email" />\n          </span>\n        </fieldset>\n\n        <div class="errors"></div>\n\n        <fieldset>\n          <span class="submit">\n            <button data-action="resend-email">Send Confirmation Email</button>\n          </span>\n        </fieldset>\n      </form>\n    </section>\n\n\n    <section class="ifnoemail">\n      <p>\n        If you don\'t see this email you can:\n      </p>\n    </section>\n\n    <section class="whattodo">\n      <p class="checkjunk">\n        <i></i> Check your junk mail folder\n      </p>\n      <p>\n        <span class="resent" style="display:none"><i></i> Your confirmation has been re-sent</span>\n        <span class="resend"><i></i> <a href="#" data-action="resend-confirmation-email">Resend the confirmation email</a></span>\n      </p>\n    </section>\n\n  </div>\n</article>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["auth/views/forgot_password"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<h1><span class="loader"></span>Forgot your password?</h1>\n<button class="cancel" data-action="cancel">Cancel</button>\n\n<article class="allow-scroll">\n  <a class="cancel" data-action="cancel">x</a>\n  <div class="top">\n    <h5>Enter your email address below and we\'ll send you reset instructions.</h5>\n    <form>\n      <fieldset>\n        <span class="email text forgot">\n          <label>Email</label>\n          <input type="text" name="email">\n        </span>\n        <span class="submit forgot">\n          <button data-action="reset-password">Send Reset Link</button>\n        </span>\n      </fieldset>\n      <div class="errors"></div>\n    </form>\n  </div>\n\n  <div class="divider">\n    <strong>or</strong>\n  </div>\n\n  <div class="under">\n\n    <section class="alreadymemberlarge">\n      <p>\n        Already a Clarity member? <a href="#" data-action="login">Log In</a>\n      </p>\n    </section>\n\n  </div>\n</article>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["auth/views/login"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<h1><span class="loader"></span>Log In</h1>\n'), this.expert && b.push(d(this.jst("_expert", {
                    expert: this.expert
                }))), b.push('\n<button class="cancel" data-action="cancel">Cancel</button>\n\n<article class="allow-scroll">\n  <a class="cancel" data-action="cancel">x</a>\n  <div class="top">\n    '), this.passwordReset ? b.push("\n      <h4>Instructions for logging in have been emailed to you.</h4>\n      <h5>Please check your spam folder if you don't receive the email in your inbox shortly.</h5>\n    ") : b.push("\n      <h5>\n        We make it easy for you to find, schedule and pay for expert advice over the phone to grow your business.\n      </h5>\n    "), b.push('\n  </div>\n\n  <div class="inner">\n    <section class="loginwemail">\n      <button class="showform woemail" data-action="sign-in-with-email">\n        <span class="button-icon"></span>\n        Log In with Email\n      </button>\n      <form name="auth_member" class="wemail">\n\n        <fieldset>\n          <span class="email text">\n            <label>Email</label>\n            <input type="email" name="email" />\n          </span>\n          <span class="password text">\n            <label>Password</label>\n            <input type="password" name="password" />\n          </span>\n        </fieldset>\n\n        <div class="errors"></div>\n\n        <fieldset>\n          <span class="submit login">\n            <button data-action="password-login" data-provider="password">\n              Log In\n            </button>\n          </span>\n        </fieldset>\n\n      </form>\n    </section>\n  </div>\n\n  <div class="divider">\n    <strong>or</strong>\n  </div>\n\n  <div class="inner">\n    <section class="buttons">\n      <button class="connect-button connect-button-linkedin" data-provider="linkedin">\n        <span class="button-icon"><i></i></span>\n        <span class="button-label">Log In with LinkedIn</span>\n      </button>\n      <button class="connect-button connect-button-facebook" data-provider="facebook">\n        <span class="button-icon"><i></i></span>\n        <span class="button-label">Log In with Facebook</span>\n      </button>\n    </section>\n  </div>\n\n  <div class="under">\n    <section class="alreadymember">\n      <p>\n        Don\'t have a Clarity account yet? <a href="#" data-action="sign-up">Sign Up</a>\n      </p>\n      <p class="forgotpass">\n        <a href="#" data-action="forgot-password">Forgot password?</a>\n      </p>\n    </section>\n\n    <section class="terms">\n      <p>\n        By signing up, you agree to our <a href="/terms" target="_blank">Terms of Use</a> and <a href="/terms" target="_blank">Privacy Policy</a>, and you confirm that you\'re 18 years old or over.\n      </p>\n    </section>\n  </div>\n</article>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["auth/views/signup"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push("<h1>Sign Up for Clarity</h1>\n"), this.expert && b.push(d(this.jst("_expert", {
                    expert: this.expert
                }))), b.push('\n<button class="cancel" data-action="cancel">Cancel</button>\n\n<article class="allow-scroll signup-form-wrapper member-selected">\n  <a class="cancel" data-action="cancel">x</a>\n\n  <div class="top">\n    '), this.expert ? (b.push('\n      <h4 class="signup">\n        To request call with '), b.push(d(this.expert.name())), b.push(" please Sign Up.\n      </h4>\n    ")) : b.push('\n      <h5>\n        We make it easy for you to find, schedule and pay for expert advice over the phone to grow your business.\n      </h5>\n      <h4 class="alt">\n        Already a Clarity member? <a href="#" data-action="login">Log In</a>\n      </h4>\n    '), b.push('\n  </div>\n\n  <div class="inner">\n    <section class="details loginwemail">\n      <form name="auth_member">\n        <fieldset class="choosetype">\n          <button class="member active" data-action="signup-as-member">\n            <strong>Member</strong>\n            <em>Looking for advice</em>\n          </button>\n          <button class="expert" data-action="signup-as-expert">\n            <strong>Expert</strong>\n            <em>Application process required</em>\n          </button>\n        </fieldset>\n\n        <section class="wemail">\n          <fieldset>\n            <span class="firstname text">\n              <label>First name</label>\n              <input type="text" name="first_name" />\n            </span>\n            <span class="lastname text">\n              <label>Last name</label>\n              <input type="text" name="last_name" />\n            </span>\n          </fieldset>\n\n          <fieldset>\n            <span class="email text">\n              <label>Email</label>\n              <input type="text" name="email" />\n            </span>\n            <span class="password text">\n              <label>Password</label>\n              <input type="password" name="password" />\n            </span>\n          </fieldset>\n\n          <div class="errors"></div>\n\n          <fieldset>\n            <span class="submit">\n              <button data-action="create-account">Create Account</button>\n            </span>\n          </fieldset>\n        </section>\n      </form>\n      <button class="showform woemail" data-action="sign-in-with-email">\n        <span class="button-icon"></span>\n        Sign Up with Email\n      </button>\n\n    </section>\n  </div>\n\n  <div class="divider">\n    <strong>or</strong>\n  </div>\n\n  <div class="inner under">\n    <section class="buttons">\n      <button class="connect-button connect-button-linkedin" data-provider="linkedin">\n        <span class="button-icon"><i></i></span>\n        <span class="button-label">Sign Up with LinkedIn</span>\n      </button>\n      <button class="connect-button connect-button-linkedin apply" data-provider="linkedin">\n        <span class="button-icon"><i></i></span>\n        <span class="button-label">Apply with LinkedIn</span>\n      </button>\n      <button class="connect-button connect-button-facebook" data-provider="facebook">\n        <span class="button-icon"><i></i></span>\n        <span class="button-label">Sign Up with Facebook</span>\n      </button>\n    </section>\n\n    <section class="alreadymember">\n      <p>\n        <a href="#" data-action="login">Already a Clarity member? Log In</a>\n      </p>\n    </section>\n\n    <section class="terms">\n      <p>\n        By signing up, you agree to our <a href="'), b.push(d(this.host)), b.push('/terms" class="external" target="_blank">Terms of Use</a> and <a href="'), b.push(d(this.host)), b.push('/terms" class="external" target="_blank">Privacy Policy</a>, and you confirm that you\'re 18 years old or over.\n      </p>\n    </section>\n  </div>\n\n</article>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments), this.bind("ajaxError", function (a, b, c, d, e) {
                var f;
                e == null && (e = {});
                if (f = e.error || a && a.errorHandler || this.errorHandler) return f(b, c, d)
            })
        }
        return c(b, a), b.configure("AuthMember", "email", "first_name", "last_name", "password"), b.extend(Spine.Model.Ajax), b.url = "/api/members", b
    }(Spine.Model), window.AuthMember = a
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Auth.Panels.Login = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.className = "login", c.prototype.fields = {
            email: {
                required: !0,
                email: !0,
                on: "submit"
            },
            password: {
                required: !0,
                length: {
                    min: 6
                },
                on: "submit"
            }
        }, c.prototype.active = function () {
            return c.__super__.active.apply(this, arguments), Clarity.track("Viewed sign in")
        }, c.prototype.passwordLogin = function () {
            var a;
            if (this.isValid()) return a = AuthMember.fromForm(this.$("form")), this.stack.authenticate("password", "default", {
                email: a.email,
                password: a.password
            })
        }, c
    }(Clarity.Auth.Panel), Clarity.Auth.Panels.Signup = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.className = "signup", c.prototype.fields = {
            first_name: {
                required: !0,
                on: "submit"
            },
            last_name: {
                required: !0,
                on: "submit"
            },
            email: {
                required: !0,
                email: !0,
                on: "submit"
            },
            password: {
                required: !0,
                length: {
                    min: 6
                },
                on: "submit"
            }
        }, c.prototype.active = function () {
            return c.__super__.active.apply(this, arguments), Clarity.track("Viewed sign up", {
                member_type_form: "member"
            })
        }, c.prototype.createAccount = function (a) {
            var b = this;
            a.preventDefault();
            if (this.stack.loading("password")) return;
            if (this.isValid()) return this.member = AuthMember.fromForm(this.$("form")), this.stack.loading("password", !0), this.member.save({
                success: function () {
                    var a, c;
                    return (a = b.stack.signup) != null && (c = a.stack) != null && typeof c.onSuccess == "function" && c.onSuccess(), typeof Member != "undefined" && Member !== null && typeof Member.loadCurrent == "function" && Member.loadCurrent(!0), b.stack.confirmEmail.active({
                        expert: b.expert,
                        showEmail: b.showEmail,
                        member: b.member,
                        send: !0
                    })
                },
                error: function (a) {
                    return b.stack.loading("password", !1), b.showErrorMessage(b.f.email, b.railsErrorsAsString(a.responseText))
                }
            })
        }, c.prototype.emailSignUp = function () {
            return this.showEmail = !0, this.visitSignup()
        }, c.prototype.signupAsMember = function (a) {
            return a.preventDefault(), Clarity.track("Viewed sign up", {
                member_type_form: "member"
            }), $("[data-action=signup-as-member]").addClass("active"), $("[data-action=signup-as-expert]").removeClass("active"), this.$(".signup-form-wrapper").addClass("member-selected").removeClass("expert-selected")
        }, c.prototype.signupAsExpert = function (a) {
            return a.preventDefault(), Clarity.track("Viewed sign up", {
                member_type_form: "expert"
            }), $("[data-action=signup-as-expert]").addClass("active"), $("[data-action=signup-as-member]").removeClass("active"), this.$(".signup-form-wrapper").addClass("expert-selected").removeClass("member-selected")
        }, c
    }(Clarity.Auth.Panel), Clarity.Auth.Panels.Password = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.fields = {
            email: {
                required: !0,
                email: !0,
                on: "submit"
            }
        }, c.prototype.className = "forgot-password", c.prototype.active = function () {
            return c.__super__.active.apply(this, arguments), Clarity.track("Viewed password reset screen")
        }, c.prototype.resetPassword = function (a) {
            var b = this;
            a.preventDefault();
            if (this.isValid()) return $.post("/api/members/send_password_reset", {
                email: this.f.email.val()
            }).success(function () {
                return b.stack.login.active({
                    expert: b.expert,
                    showEmail: b.showEmail,
                    passwordReset: !0
                })
            }).error(function () {
                return b.showErrorMessage(b.f.email, "Sorry, we couldn't find anyone with that email address")
            })
        }, c
    }(Clarity.Auth.Panel), Clarity.Auth.Panels.ConfirmEmail = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.className = "confirm-email", c.prototype.fields = {
            email: {
                required: !0,
                email: !0,
                uniqueEmail: !0,
                on: "submit"
            }
        }, c.prototype.active = function (a) {
            return c.__super__.active.apply(this, arguments), a.send && this.sendConfirmationEmail(), Clarity.track("Viewed confirmation email screen")
        }, c.prototype.sendConfirmationEmail = function (a) {
            return a == null && (a = this.member.email), $.post("/api/members/send_confirmation_email", {
                email: a
            })
        }, c.prototype.resendConfirmationEmail = function (a) {
            var b, c = this;
            return this.$(".ifnoemail").is(":visible") && this.$(".ifnoemail").fadeOut("fast"), this.$(".whattodo").fadeOut("fast", function () {
                return c.$(".details").fadeIn("fast"), c.f.email.focus()
            }), this.f.email.val((b = this.member) != null ? b.email : void 0)
        }, c.prototype.resendEmail = function () {
            var a = this;
            if (this.isValid()) return this.$(".resent").show(), this.$(".details").fadeOut("fast", function () {
                return a.$(".whattodo").fadeIn("fast"), a.$(".checkjunk").hide(), a.sendConfirmationEmail(a.f.email.val())
            })
        }, c
    }(Clarity.Auth.Panel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Authentication = function (b) {
        function d(b) {
            var c, e = this;
            b == null && (b = {}), this.error = a(this.error, this), this.success = a(this.success, this), this.dialog = $("<div />").addClass("active authentication-dialog"), b.overlay ? (c = this.overlay = $("<div />").addClass("authentication-overlay").append(this.dialog), this.overlay.click(function (a) {
                if (a.target === a.currentTarget) return e.close()
            }), c.addClass(b.overlay), delete b.overlay) : c = this.dialog, $(b.el || "body").append(c), b.el = this.dialog, d.__super__.constructor.call(this, b)
        }
        return c(d, b), d.prototype._loading = {}, d.prototype.controllers = {
            login: Clarity.Auth.Panels.Login,
            signup: Clarity.Auth.Panels.Signup,
            password: Clarity.Auth.Panels.Password,
            confirmEmail: Clarity.Auth.Panels.ConfirmEmail
        }, d.prototype.loading = function (a, b) {
            var c, d, e, f;
            if (b != null) {
                this._loading[a] = b, c = this.activeController(), c.hideLoader(), c.$("[data-provider]").removeClass("loading"), e = this._loading, f = [];
                for (a in e) d = e[a], d ? f.push(c.$("[data-provider=" + a + "]").addClass("loading")) : f.push(void 0);
                return f
            }
            return this._loading[a]
        }, d.prototype.activeController = function () {
            var a, b, c, d;
            d = this.manager.controllers;
            for (b = 0, c = d.length; b < c; b++) {
                a = d[b];
                if (a.el.hasClass("active")) return a
            }
            return null
        }, d.prototype.initProvider = function (a, b) {
            var c = this;
            b == null && (b = !1);
            if (a === "linkedin" && this.loading(a) == null) return b || this.loading(a, !0), $.getScript("//platform.linkedin.com/in.js?async=true", function () {
                IN.init({
                    api_key: LINKEDIN_KEY,
                    authorize: !0,
                    credentials_cookie: !0
                });
                if (!b) return c.loading(a, !1)
            });
            if (a === "facebook" && this.loading(a) == null) return b || this.loading(a, !0), $.getScript("//connect.facebook.net/en_US/all.js", function () {
                return FB.init({
                    appId: FACEBOOK_KEY,
                    channelUrl: "//" + location.host + "/channel.html",
                    status: !0,
                    cookie: !0
                }), FB.getLoginStatus(function () {
                    if (!b) return c.loading(a, !1)
                })
            })
        }, d.prototype.show = function (a) {
            var b;
            return a == null && (a = {}), this.showing = !0, Clarity.useDefaultScrolling = !0, b = this[a.screen || "signup"], b.showEmail = !1, b.active({
                expert: a.expert
            }), typeof this.onShow == "function" ? this.onShow() : void 0
        }, d.prototype.close = function (a) {
            var b, c, d = this;
            return a == null && (a = !1), this.showing = !1, this.loading("done", !0), this.authenticated = a, b = function () {
                return d.loading("done", !1), Clarity.useDefaultScrolling = !1, typeof d.onClose == "function" ? d.onClose(a) : void 0
            }, a && ((c = this.onSuccess) != null ? c.length : void 0) === 1 ? this.onSuccess(b) : (a && typeof this.onSuccess == "function" && this.onSuccess(), b())
        }, d.prototype.onClose = function () {
            return this.overlay ? this.overlay.hide() : this.el.hide()
        }, d.prototype.authenticate = function (a, b, c) {
            var d = this;
            if (this.loading(name)) return;
            if (a === "facebook") return this.loading(a, !0), this.classicAuth("facebook", b, this.success, this.error);
            if (a === "linkedin") return this.loading(a, !0), this.classicAuth("linkedin", b, this.success, this.error);
            if (a === "password") return this.loading(a, !0), $.post("/auth/password/callback", {
                email: c.email,
                password: c.password
            }).success(function (a) {
                return d.success(a.message)
            }).error(function (b) {
                var c;
                return b.globalHandlerCancelled = !0, d.loading(a, !1), c = d.activeController(), c.f.email.addClass("error"), c.f.password.addClass("error"), c.showError("We didn't recognize the email or password you entered. Please try again.")
            })
        }, d.prototype.classicAuth = function (a, b, c, d) {
            var e, f, g = this;
            return f = window.open("/authenticate?display=popup&provider=" + a + "&rid=" + b + "&origin=/auth_completed", "" + a + "_auth", "menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=500,height=400"), window.w = f, e = setInterval(function () {
                if (f.closed) return g.loading(a) && g.loading(a, !1), clearInterval(e)
            }, 1e3), window.authSuccess = function (a) {
                return f.close(), typeof c == "function" ? c(a) : void 0
            }, window.authFailure = function (a) {
                return f.close(), typeof d == "function" ? d(a) : void 0
            }
        }, d.prototype.clarityAuth = function (a, b, c, d) {
            var e;
            return e = typeof FRIENDLY_HOST != "undefined" && FRIENDLY_HOST !== null ? FRIENDLY_HOST : null, $.get("" + e + "/auth/" + a + "/callback?rid=" + b, function (a) {
                return a.connected ? typeof c == "function" ? c(a.message) : void 0 : typeof d == "function" ? d(a != null ? a.error : void 0) : void 0
            }).error(d)
        }, d.prototype.success = function (a) {
            var b, c, d, e, f, g = this;
            f = ["facebook", "linkedin", "password"];
            for (d = 0, e = f.length; d < e; d++) c = f[d], this.loading(c, !1);
            return b = function () {
                return g.close(!0)
            }, a ? this.showPrompt(a, b) : b()
        }, d.prototype.error = function (a) {
            var b, c, d, e;
            e = ["facebook", "linkedin", "password"];
            for (c = 0, d = e.length; c < d; c++) b = e[c], this.loading(b, !1);
            return (a != null ? a.message : void 0) ? this.showPrompt(a.message) : this.showPrompt("An error has occurred.  Please contact support@clarity.fm if the problem persists.")
        }, d.prototype.showPrompt = function (a, b) {
            return this.activeController().showPrompt(a, b)
        }, d
    }(Spine.Stack)
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Answer", "created_at", "answer", "formatted_answer"), b.belongsTo("expert", "Member.Basic"), b.belongsTo("question", "Question"), b.extend(Spine.Model.Ajax), b.url = "/api/answers", b.prototype.formattedTimestamp = function () {
            return moment.utc(this.created_at).member().shortTimeOrDate()
        }, b
    }(ClarityModel), window.Answer = a
}.call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        };
    a = function (a) {
        function c() {
            this.updateSuggestedTimes = b(this.updateSuggestedTimes, this), this.updateToCanceled = b(this.updateToCanceled, this), this.updateScheduledAt = b(this.updateScheduledAt, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.configure("Call", "guid", "duration", "hourly_rate", "reason", "state", "archived", "donation", "suggested_times", "suggested_by", "scheduled_at", "approximate_length", "cancelation_reason", "canceled_by_member_id", "payment_amount", "lists", "end_time", "beneficiary", "expert_share", "seeker_connected", "expert_connected", "passcode", "seeker_google_calendar_url", "expert_google_calendar_url", "payment_amount_after_rebate", "promo_code", "promo_rebate_display", "discounted_amount", "testing"), c.belongsTo("expert", "Member.Basic"), c.belongsTo("seeker", "Member.Basic"), c.belongsTo("charity", "Charity"), c.hasMany("ratings", "Rating"), c.extend(Spine.Model.Ajax), c.url = "/api/calls", c.prototype.allRatings = function () {
            return Rating.findAllByAttribute("call_id", this.id)
        }, c.prototype.myRating = function () {
            var a, b;
            return b = function () {
                var b, c, d, e;
                d = this.allRatings(), e = [];
                for (b = 0, c = d.length; b < c; b++) a = d[b], a.from_id === Member.current().id && e.push(a);
                return e
            }.call(this), b[0]
        }, c.prototype.otherRating = function () {
            var a, b;
            return b = function () {
                var b, c, d, e;
                d = this.allRatings(), e = [];
                for (b = 0, c = d.length; b < c; b++) a = d[b], a.to_id === Member.current().id && e.push(a);
                return e
            }.call(this), b[0]
        }, c.magicSort = function (a, b) {
            return a.status() === "in-progress" ? -1 : b.status() === "in-progress" ? 1 : a.status() === "suggested" ? -1 : b.status() === "suggested" ? 1 : a.status() === "pending" ? -1 : b.status() === "pending" ? 1 : a.status() === "scheduled" && b.status() === "scheduled" ? a.scheduled_at < b.scheduled_at ? -1 : 1 : a.updated_at < b.updated_at ? 1 : -1
        }, c.fetchCallList = function (a, b, d) {
            return d == null && (d = 0), c.fetchAndReturn({
                wait: !0,
                url: "/api/calls/" + a + "?offset=" + d
            }, b)
        }, c.fetchLastUnratedCall = function (a) {
            return c.fetch({
                url: "/api/calls/last-unrated",
                success: function (b) {
                    return b != null ? (c.records[b.id] = new c(b), typeof a == "function" ? a(c.find(b.id)) : void 0) : typeof a == "function" ? a(null) : void 0
                }
            })
        }, c.prototype.icsURL = function () {
            return "" + FRIENDLY_HOST + "/calls/" + this.id + "/ics"
        }, c.prototype.googleCalendarURL = function () {
            return this.seeker_google_calendar_url != null ? this.seeker_google_calendar_url : this.expert_google_calendar_url
        }, c.prototype.otherParty = function () {
            return Member.current().id === this.seeker_id ? this.expert() : this.seeker()
        }, c.prototype.formattedDuration = function () {
            return "<span class='red'>" + Math.ceil((this.duration || 0) / 60) + "</span> minutes"
        }, c.prototype.shortFormattedDuration = function () {
            var a;
            return a = moment.duration(parseInt(this.duration), "seconds"), a.asHours() >= 1 ? "" + a.hours() + "h " + a.minutes() + "m" : "" + a.minutes() + "m " + a.seconds() + "s"
        }, c.prototype.formattedCost = function () {
            return (parseFloat(this.hourly_rate) / 60).toCurrency().replace(".00", "")
        }, c.prototype.createdAgo = function () {
            return moment.utc(this.requested_at).fromNow()
        }, c.prototype.isExpert = function (a) {
            return a.id === this.expert().id
        }, c.prototype.thread = function () {
            return Thread.findByAttribute("other_party_id", this.otherParty().id)
        }, c.prototype.canceledBy = function () {
            return this.seeker().id === this.canceled_by_member_id ? this.seeker() : this.expert()
        }, c.prototype.isIncoming = function () {
            return Member.current().id === this.expert().id
        }, c.prototype.createdAtTimestamp = function () {
            return moment.utc(this.created_at).member().shortTimeOrDate(!1, !0)
        }, c.prototype.cancelable = function () {
            var a;
            return (a = this.state) !== "canceled" && a !== "disconnected" && a !== "connected" && a !== "connected_without_billing" && a !== "completed" && a !== "expired"
        }, c.prototype.status = function () {
            var a, b, c;
            if (this.state === "completed") return "completed";
            if (this.state === "canceled") return "canceled";
            if ((a = this.state) === "schedule_confirmed") return "scheduled";
            if ((b = this.state) === "expired" || b === "timed_out") return "expired";
            if ((c = this.state) === "disconnected" || c === "connected" || c === "connected_without_billing") return "in-progress";
            if (this.pendingMyConfirmation()) return "suggested";
            if (!this.pendingMyConfirmation()) return "pending"
        }, c.prototype.displayStatus = function () {
            var a, b, c, d;
            switch (this.status()) {
            case "completed":
                return a = moment.duration(parseInt(this.duration), "seconds"), a.asHours() >= 1 ? b = "" + a.hours() + "h " + a.minutes() + "m" : b = "" + a.minutes() + "m " + a.seconds() + "s", "Call completed (" + b + ")";
            case "canceled":
                return c = this.canceled_by_member_id === Member.current().id ? "You" : this.otherParty().first_name, "" + c + " canceled the call";
            case "scheduled":
                return this.scheduledDisplay();
            case "expired":
                return "Expired on " + moment(this.scheduled_at || this.updated_at).member().format("MMM D");
            case "in-progress":
                if ((d = this.state) !== "disconnected" && d !== "connected_without_billing" || !this.seeker_connected && !this.expert_connected) return "Call in progress";
                if (this.expert_connected && this.expert().id === Member.current().id) return "You are on the call waiting for " + this.seeker().first_name;
                if (this.expert_connected) return "" + this.expert().first_name + " is on the call waiting";
                if (this.seeker_connected && this.seeker().id === Member.current().id) return "You are on the call waiting for " + this.expert().first_name;
                if (this.seeker_connected) return "" + this.seeker().first_name + " is on the call waiting";
                break;
            case "suggested":
                return "Accept a time";
            case "pending":
                return "Waiting for " + this.otherParty().first_name
            }
        }, c.prototype.scheduledDisplay = function (a) {
            var b, c;
            return a == null && (a = {}), a.hideYear ? b = "ddd, MMM D [at] h:mm A" : b = "ddd, MMM D YYYY [at] h:mm A", c = this.scheduledAt().format(b), a.hideTimezone || (c += " (" + Member.current().timezone_label + ")"), c
        }, c.prototype.scheduledTimeDisplay = function () {
            return this.scheduledAt().format("[@] h:mm A") + " (" + Member.current().timezone_label + ")"
        }, c.prototype.pendingMyConfirmation = function () {
            return this.suggested_by !== Member.current().id
        }, c.prototype.scheduledAt = function () {
            return moment(this.scheduled_at).member()
        }, c.prototype.suggestedTimes = function () {
            var a, b;
            return this.suggested_times == null && (this.suggested_times = []), b = function () {
                var b, c, d, e;
                d = this.suggested_times.sort(), e = [];
                for (b = 0, c = d.length; b < c; b++) a = d[b], e.push(moment(a).member());
                return e
            }.call(this), b
        }, c.prototype.expiredSuggestedTimes = function () {
            var a, b, c, d, e;
            a = 0, e = this.suggestedTimes();
            for (c = 0, d = e.length; c < d; c++) b = e[c], b.toDate() < moment().member().toDate() && (a += 1);
            return a === this.suggestedTimes().length
        }, c.prototype.mobileConferenceNumber = function () {
            return this.expert_access_code != null ? "" + CONNECTION_NUMBER + "," + this.expert_access_code : "" + CONNECTION_NUMBER + "," + this.seeker_access_code
        }, c.remoteValidation = function (a) {
            var b = this;
            return Member.current() != null ? $.post("/api/calls/validate/" + a.id).success(a.success).error(function (b) {
                var c;
                c = App.railsErrorsAsString(b.responseText), typeof a.error == "function" && a.error(c), b.globalHandlerCancelled = !0;
                if (!a.preventDefault) return Alert.error(c)
            }) : typeof a.success == "function" ? a.success() : void 0
        }, c.prototype.updateScheduledAt = function (a, b) {
            var d, e = this;
            return d = this.toJSON(), this.state = "schedule_confirmed", this.scheduled_at = a, this.suggested_times = null, this.save({
                success: b.success,
                error: function (a) {
                    return c.refresh(d), typeof b.error == "function" ? b.error(a) : void 0
                }
            })
        }, c.prototype.updateToCanceled = function (a) {
            return this.state = "canceled", this.cancelation_reason = a, this.canceled_by_member_id = Member.current().id, this.scheduled_at = null, this.suggested_times = null, this.save(), Spine.trigger("listUpdated")
        }, c.prototype.updateSuggestedTimes = function (a) {
            var b;
            return this.seeker().id === Member.current().id ? this.state = "verify_schedule_with_expert" : this.state = "verify_schedule_with_seeker", this.scheduled_at = null, this.suggested_times = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = a.length; c < d; c++) b = a[c], e.push(b.format("YYYY-MM-DD[T]HH:mm:ss"));
                return e
            }(), this.suggested_by = Member.current().id, this.save()
        }, c
    }(ClarityModel), window.Call = a
}.call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        }, e = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    a = function (a) {
        function c() {
            this.pluralize_members_count = b(this.pluralize_members_count, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.configure("Charity", "name", "description", "logo_url", "website", "location", "members_count", "display_number", "promoted", "duration"), c.hasMany("members", "Member"), c.extend(Spine.Model.Ajax), c.url = "/api/charities", c.defaultList = function () {
            var a, b, d, f, g, h;
            return a = c.findAllByAttribute("promoted", !0), f = (g = Member.current()) != null ? g.charity() : void 0, d = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = a.length; c < d; c++) b = a[c], e.push(b.id);
                return e
            }(), f && !(h = f.id, e.call(d, h) >= 0) && a.push(f), a.sort()
        }, c.fetchAll = function (a) {
            var b = this;
            return c.fetch({
                url: "/api/charities/all",
                complete: function () {
                    return typeof a == "function" ? a() : void 0
                }
            })
        }, c.prototype.pluralize_members_count = function () {
            var a;
            return a = this.members_count, a === 1 ? "1 member" : "" + a + " members"
        }, c.prototype.logoUrl = function (a) {
            return a == null && (a = "original"), this.logo_url ? this.logo_url.replace("/original/", "/" + a + "/") : "//clarityfm-assets-production.s3.amazonaws.com/assets/app/heart-c1e42bca5244b284726bcb29904fe6ce.png"
        }, c
    }(ClarityModel), window.Charity = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Consumable", "label", "member_id", "payload"), b.extend(Spine.Model.Ajax), b.url = "/api/consumables", b.createdSortASC = function (a, b) {
            return a.created_at > b.created_at ? 1 : -1
        }, b.consumables = function (a) {
            var b;
            return b = this.findAllByAttribute("label", a), b.sort(this.createdSortASC)
        }, b.consume = function (a) {
            var b;
            return b = this.consumables(a).first(), b != null && b.destroy(), b
        }, b.consumeAll = function (a) {
            var b, c;
            return c = this.consumables(a), c = function () {
                var a, d, e;
                e = [];
                for (a = 0, d = c.length; a < d; a++) b = c[a], e.push(b.destroy());
                return e
            }(), c
        }, b.prototype.save = function () {}, b
    }(ClarityModel), window.Consumable = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Expertise", "title", "link", "description", "formatted_description"), b.belongsTo("member", "Member"), b.extend(Spine.Model.Ajax), b.url = "/api/expertise", b.titleSort = function (a, b) {
            return a.title > b.title ? 1 : -1
        }, b
    }(ClarityModel), window.Expertise = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("List", "name"), b.belongsTo("member", "Member"), b.hasMany("contacts", "Contact"), b.extend(Spine.Model.Ajax), b.url = "/api/lists", b.prototype.start = function () {
            return this.resetAlreadyCalled(), $.post("/api/calls/start")
        }, b.prototype.cancel = function () {
            return $.post("/api/calls/cancel")
        }, b.prototype.resetAlreadyCalled = function () {
            var a = this;
            return Spine.Ajax.disable(function () {
                var b, c, d, e, f;
                e = a.contacts().findAllByAttribute("already_called", !0), f = [];
                for (c = 0, d = e.length; c < d; c++) b = e[c], f.push(b.updateAttributes({
                    already_called: !1
                }));
                return f
            })
        }, b
    }(ClarityModel), window.List = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Log", "status", "to", "message", "created_at"), b.extend(Spine.Model.Ajax), b.url = "/api/logs", b.create = function (a, c) {
            return c == null && (c = {}), a.created_at || (a.created_at = new Date), c.error || (c.error = function () {
                var b;
                return b = localStorage["clarity-logs"] ? JSON.parse(localStorage["clarity-logs"]) : [], b.push(a), localStorage["clarity-logs"] = JSON.stringify(b)
            }), b.__super__.constructor.create.call(this, a, c)
        }, b.startFlushingLogs = function () {
            return this.flushLogs(), setInterval(this.flushLogs, 6e4)
        }, b.flushLogs = function () {
            var a, c, d, e, f;
            if (localStorage["clarity-logs"]) {
                c = JSON.parse(localStorage["clarity-logs"]), localStorage["clarity-logs"] && delete localStorage["clarity-logs"], f = [];
                for (d = 0, e = c.length; d < e; d++) a = c[d], f.push(b.create(a));
                return f
            }
        }, b
    }(ClarityModel), window.Log = a
}.call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        }, e = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    a = function (a) {
        function c() {
            this.humanTimeDifference = b(this.humanTimeDifference, this), this.updateTopics = b(this.updateTopics, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.configure("Member", "phone_number", "first_name", "last_name", "email", "stripe_token", "social_connections", "stripe_customer_key", "balance", "hourly_rate", "bio", "location", "image_url", "name", "team_member", "formatted_bio", "failed_payment", "timezone_offset", "posessive", "pronoun_is", "pronoun", "preposition", "screen_name", "last_four_cc_digits", "credit_card_type", "timezone_label", "timezone", "created_at", "receives_daily_digest_email", "receives_clarity_updates_email", "receives_sms_notifications", "receives_call_request_email", "receives_email_reminders", "receives_weekly_recommendations_email", "receives_sms_reminders", "receives_favorite_notification_email", "current", "total_calls", "passcode", "public_social_connections", "last_two_phone_number_digits", "verified_phone_number", "profile_page_views_count", "onboarded", "country_code", "organizations", "facebook_profile_url", "twitter_profile_url", "linkedin_profile_url", "total_earned", "paypal_email", "organizations", "unread_conversation_count", "provider", "deleted", "twitter_screen_name", "cover_image_url", "in_global_search", "video_embed_code", "video_embed_url", "video_embed_thumbnail_url", "unrated_calls_count", "discarded_unrated_calls_prompt_count", "historical_calls_count", "is_on_vacation", "vacation_subscription_ids", "is_expert", "redeemed_coupons", "password", "pending_calls_count", "scheduled_calls_count", "last_active_at", "calls_pending_my_confirmation_count", "topics", "rank", "accepts_paid_questions", "verified_networks", "has_a_video", "average_rating", "review_count"), c.belongsTo("charity", "Charity"), c.hasMany("reviews", "Rating", "to_id"), c.hasMany("all_calls", "Call"), c.hasMany("expertise", "Expertise"), c.extend(Spine.Model.Ajax), c.url = "/api/members", c.nameSort = function (a, b) {
            return a.name() > b.name() ? 1 : -1
        }, c.rankSort = function (a, b) {
            return a.rank > b.rank ? 1 : -1
        }, c.loadCurrent = function (a, b) {
            var d, e, f = this;
            return a == null && (a = !1), b == null && (b = null), a && ((e = c.fromCache("currentMember")) ? (Spine.Ajax.disable(function () {
                return c.refresh(e)
            }), c._current = c.find(e.id)) : c._current = c.findByAttribute("current", !0), MemberFavorite.deleteAll(), MemberFavorite.fetch(), c.unsubscribeAll()), App["native"]() && (d = "nonce=" + (window.nonce || "") + "&mp_id=" + mixpanel.cookie.props.distinct_id), c.fetch({
                id: "current",
                data: d,
                success: function (a) {
                    return c._current_id = a ? a.id : null
                },
                complete: function () {
                    c._current = c._current_id ? c.find(c._current_id) : null, c.cache("currentMember", c._current), c.trigger("memberUpdated"), typeof b == "function" && b();
                    if (a && c.current()) return c.setupPushUpdates()
                }
            })
        }, c.setupPushUpdates = function () {
            var a, b = this;
            return (a = c.current()) ? (this.registerForPushNotifications(a), this.setupMixpanelProperties(a)) : App["native"]() && this.registerForPushNotifications(null), Clarity.Helpers.Inbox.initAndListenForInboxUpdates(), Clarity.Helpers.Calls.initAndListenForCallUpdates(), this.subscribeTo("member." + c.current().id, function (a) {
                if (a !== App.clientId) return c.refreshMember()
            }, !1), this.subscribeTo("consumable", function (a) {
                return Consumable.refresh([], {
                    clear: !0
                }), Consumable.fetch()
            })
        }, c.registerForPushNotifications = function (a) {}, c.setupMixpanelProperties = function (a) {
            return mixpanel.identify(a.id.toString()), mixpanel.name_tag(a.name()), mixpanel.people.set({
                $email: a.email,
                $created: a.created_at,
                $gender: a.gender,
                $location: a.location
            })
        }, c.refreshMember = function (a) {
            return Spine.Ajax.pending ? setTimeout(function () {
                return c.refreshMember(a)
            }, 250) : this.loadCurrent(!1, a)
        }, c.channels = [], c.unsubscribeAll = function () {
            var a, b, c, d;
            d = this.channels;
            for (b = 0, c = d.length; b < c; b++) a = d[b], PUBNUB.unsubscribe(a);
            return this.channels = []
        }, c.subscribeTo = function (a, b, d) {
            var f, g, h;
            d == null && (d = !0);
            if (c.current()) {
                d && (a = "member." + c.current().id + "." + a), g = {
                    channel: a
                };
                if ($.isFunction(b)) g.callback = b;
                else
                    for (f in b) h = b[f], g[f] = h;
                return e.call(this.channels, a) < 0 && this.channels.push(a), PUBNUB.subscribe(g)
            }
        }, c.getNonce = function (a) {
            return $.get("" + FRIENDLY_HOST + "/api/members/nonce", a)
        }, c.prototype.formattedCreatedAt = function () {
            return moment.utc(this.created_at).format("MMMM YYYY")
        }, c.prototype.lastActiveAt = function () {
            var a;
            return moment.lang("en-short-relative-times"), a = moment(this.last_active_at).fromNow(), moment.lang("en"), a
        }, c.prototype.isVacationSubscribedTo = function (a) {
            return this.vacation_subscription_ids.indexOf(a) >= 0
        }, c.prototype.toggleVacationSubscription = function (a) {
            var b;
            return this.isVacationSubscribedTo(a) ? this.vacation_subscription_ids = function () {
                var c, d, e, f;
                e = this.vacation_subscription_ids, f = [];
                for (c = 0, d = e.length; c < d; c++) b = e[c], b !== a && f.push(b);
                return f
            }.call(this) : this.vacation_subscription_ids.push(a), $.ajax({
                type: "POST",
                url: "/api/vacation-subscription/toggle",
                data: {
                    expert_id: a
                }
            })
        }, c.prototype.reviewsWithComment = function () {
            var a;
            return a = this.reviews().select(function (a) {
                return a != null && a.comment != null && a.comment !== "" && a.name != null && a.name !== ""
            }), a.sort(Rating.magicSort)
        }, c.prototype.verifyPasscode = function (a) {
            return $.ajax({
                url: "/api/members/verify-passcode",
                data: {
                    expert_id: this.id,
                    passcode: a.passcode
                },
                success: function (b) {
                    return b.status ? typeof a.success == "function" ? a.success() : void 0 : typeof a.error == "function" ? a.error(b) : void 0
                },
                error: function (b) {
                    return b.globalHandlerCancelled = !0, typeof a.error == "function" ? a.error() : void 0
                }
            })
        }, c.prototype.unsubscribe = function () {
            return PUBNUB.unsubscribe({
                channel: "member." + this.id
            })
        }, c.prototype.topicNames = function () {
            var a, b, c, d, e;
            d = this.topics, e = [];
            for (b = 0, c = d.length; b < c; b++) a = d[b], e.push(a.name);
            return e
        }, c.prototype.updateTopics = function (a) {
            var b = this;
            return $.ajax({
                url: "/api/members/topics",
                type: "POST",
                data: {
                    topics: a
                },
                success: function (a) {
                    return b.topics = a, b.save({
                        ajax: !1
                    }), c.cache("currentMember", c._current)
                }
            })
        }, c.prototype.updateCharity = function (a) {
            return $.isNumeric(parseInt(a)) ? this.charity_id = parseInt(a) : this.charity_id = null
        }, c.prototype.tweetText = function () {
            var a;
            return a = "" + FRIENDLY_HOST + "/" + this.screen_name, c.current() != null && c.current().id === this.id ? "Need advice? Give me a call. " + a + " #clarity #advice" : this.twitter_screen_name != null ? "Talk to " + this.name() + " (@" + this.twitter_screen_name + ") on Clarity " + a + " #advice" : "Talk to " + this.name() + " on Clarity " + a + " #advice"
        }, c.prototype.shareURL = function (a) {
            var b, c;
            c = "" + FRIENDLY_HOST + "/" + this.screen_name, b = encodeURIComponent(c);
            switch (a) {
            case "twitter":
                return "https://twitter.com/share?text=" + encodeURIComponent(this.tweetText()) + "&url=";
            case "linkedin":
                return "https://www.linkedin.com/cws/share?url=" + b;
            case "facebook":
                return "http://facebook.com/share.php?u=" + b;
            case "google":
                return "https://plus.google.com/share?url=" + b
            }
        }, c.fetchForVIP = function (a) {
            return this.fetch({
                url: "/api/members/vip",
                wait: !0
            }, a)
        }, c.fetchForOrganization = function (a, b) {
            return this.fetchAndReturn({
                url: "/api/members/organization/" + a,
                wait: !0
            }, b)
        }, c.fetchRelated = function (a, b) {
            return this.fetchAndReturn({
                url: "/api/members/" + a + "/related",
                wait: !0
            }, b)
        }, c.fetchForTopic = function (a, b, c, d) {
            var e;
            return e = "page=" + b, c && (e += "&filter=" + encodeURIComponent(c)), this.fetchAndReturn({
                url: "/api/members/topic/" + a,
                wait: !0,
                data: e
            }, d)
        }, c.find = function (a) {
            try {
                return c.__super__.constructor.find.call(this, a)
            } catch (b) {
                return this.findByCaseInsensitiveAttribute("screen_name", a)
            }
        }, c.current = function () {
            return c._current
        }, c.prototype.findOrganization = function (a) {
            var b, c, d, e;
            e = this.organizations;
            for (c = 0, d = e.length; c < d; c++) {
                b = e[c];
                if (b.route === a) return b
            }
            return null
        }, c.prototype.isFree = function (a, b) {
            return b == null && (b = null), b != null && b !== "" ? !0 : !(this.hourly_rate && this.hourly_rate > 0)
        }, c.prototype.humanTimeDifference = function (a) {
            var b, c, d;
            return b = a - this.timezone_offset, c = "" + this.first_name + " is ", d = "hours", Math.abs(b) === 1 && (d = "hour"), c += b === 0 ? "in your time zone." : b > 0 ? "" + +b + " " + d + " behind you" : b < 0 ? "" + b + " " + d + " ahead of you" : void 0, c
        }, c.prototype.abbrevBio = function (a) {
            var b;
            return a == null && (a = 100), this.bio.length <= a ? this.bio : (b = this.bio.substr(0, a), "" + b + "...")
        }, c.prototype.formattedCost = function () {
            return (parseFloat(this.hourly_rate) / 60).toCurrency().replace(".00", "")
        }, c.prototype.imageUrl = function (a) {
            var b;
            return a == null && (a = "profile_square"), b = this.image_url.replace("/profile_square/", "/" + a + "/"), navigator.standalone && (b = b.replace("https://s3", "http://s3")), b
        }, c.prototype.name = function (a) {
            var b;
            return a ? (b = a.match(/(.*?) (.*)/).slice(1), this.first_name = b[0], this.last_name = b[1], b) : "" + this.first_name + " " + this.last_name
        }, c.prototype.hasCreditCard = function () {
            return this.stripe_customer_key != null && !this.failed_payment
        }, c.prototype.validateInfo = function () {
            if (!Validator.validEmail(this.email)) return "Invalid email address";
            if (!Validator.validPhone(this.phone_number)) return "Invalid phone number";
            if (this.timezone == null || this.timezone === "") return "Invalid timezone"
        }, c.prototype.toJSON = function (a) {
            var b, d;
            return a == null && (a = !1), d = c.__super__.toJSON.apply(this, arguments), a && d.current && (this.charity() && (d.charity = this.charity().toJSON()), d.all_calls = function () {
                var a, c, d, e;
                d = this.all_calls().all(), e = [];
                for (a = 0, c = d.length; a < c; a++) b = d[a], e.push(b.toJSON());
                return e
            }.call(this)), d
        }, c.prototype.save = function (a) {
            var b;
            return a == null && (a = {}), b = a.success, a.success = function () {
                return this.current && (c.cache("currentMember", this), c.trigger("memberUpdated")), typeof b == "function" ? b() : void 0
            }, c.__super__.save.call(this, a)
        }, c.prototype.localTime = function () {
            return moment.utc().timezoneAdjusted(this.timezone_offset).format("h:mm A") + " (" + this.timezone_label + ")"
        }, c.prototype.cleanLocalTime = function () {
            return this.localTime().replace(/\(|\)/g, "").replace(" AM", "am", " PM", "pm")
        }, c.prototype.log = function (a, b) {
            return Log.create({
                status: a,
                message: b
            })
        }, c
    }(ClarityModel), a.Basic = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return d(b, a), b.configure("Member.Basic"), b.extend(Spine.Model.Ajax), b
    }(a), a.Nano = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return d(b, a), b.configure("Member.Nano"), b.extend(Spine.Model.Ajax), b
    }(a), window.Member = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("MemberFavorite", "created_at"), b.belongsTo("member", "Member"), b.belongsTo("favorite", "Member.Basic"), b.extend(Spine.Model.Ajax), b.url = "/api/favorites", b.fetch = function () {
            var a = this;
            return this.fetching = !0, b.__super__.constructor.fetch.call(this, {
                complete: function () {
                    return a.fetching = !1, b.trigger("refresh")
                }
            })
        }, b.includes = function (a) {
            return !!this.findByAttribute("favorite_id", a.id)
        }, b.toggle = function (a) {
            var b;
            if (b = this.findByAttribute("favorite_id", a.id)) {
                if (!("" + b.id).match(/^\d+$/)) return;
                return Clarity.track("favorites", {
                    favorite_status: "removed",
                    screen_name: a.screen_name,
                    name: a.name(),
                    expert_rate: a.hourly_rate
                }), b.destroy()
            }
            return Clarity.track("favorites", {
                favorite_status: "added",
                screen_name: a.screen_name,
                name: a.name(),
                expert_rate: a.hourly_rate
            }), this.create({
                member_id: Member.current().id,
                favorite_id: a.id
            })
        }, b
    }(ClarityModel), window.MemberFavorite = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Need", "created_at", "question", "vertical", "willing_to_pay", "topic", "topics"), b.belongsTo("member", "Member.Basic"), b.hasMany("recommendations", "Recommendation"), b.extend(Spine.Model.Ajax), b.url = "/api/get_advice_questions", b.prototype.recommendationsSortedByVotes = function () {
            return this.recommendations().all().sort(Recommendation.magicSort)
        }, b.prototype.recommendersCount = function () {
            return this.recommendations().all().length
        }, b.prototype.recommendationsCount = function () {
            var a, b, c, d, e;
            a = 0, e = this.recommendations().all();
            for (c = 0, d = e.length; c < d; c++) b = e[c], a += b.recommended_experts().all().length;
            return a
        }, b.prototype.recommendedExpertsSortedByVote = function () {
            var a, b, c, d, e, f, g, h, i;
            c = [], h = this.recommendations().all();
            for (d = 0, f = h.length; d < f; d++) {
                a = h[d], i = a.recommended_experts().all();
                for (e = 0, g = i.length; e < g; e++) b = i[e], c.push(b)
            }
            return c.sort(RecommendedExpert.magicSort)
        }, b.prototype.recommendationVotesCount = function () {
            var a, b, c, d, e, f, g, h, i;
            a = 0, h = this.recommendations().all();
            for (d = 0, f = h.length; d < f; d++) {
                b = h[d], i = b.recommended_experts().all();
                for (e = 0, g = i.length; e < g; e++) c = i[e], a += c.recommended_expert_votes().all().length
            }
            return a
        }, b.prototype.formattedTimestamp = function () {
            return moment.utc(this.created_at).member().shortTimeOrDate()
        }, b.prototype.submitRecommendations = function (a, c) {
            return $.ajax({
                type: "POST",
                url: "/api/needs/" + this.id + "/recommend",
                data: {
                    experts: a
                },
                success: function (a) {
                    return b.refresh(a), typeof c == "function" ? c() : void 0
                }
            })
        }, b
    }(ClarityModel), window.Need = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Organization", "title", "route", "featured", "logo_url", "free_calls", "visible_tags"), b.hasMany("members", "Member"), b.extend(Spine.Model.Ajax), b.url = "/api/organizations", b.fetchFeatured = function (a) {
            return this.fetch({
                url: "/api/organizations/featured",
                wait: !0,
                complete: a
            })
        }, b.find = function (a) {
            try {
                return b.__super__.constructor.find.call(this, a)
            } catch (c) {
                return this.findByCaseInsensitiveAttribute("route", a)
            }
        }, b.prototype.logoUrl = function (a) {
            return a == null && (a = "original"), this.logo_url ? this.logo_url.replace("/original/", "/" + a + "/") : "//clarityfm-assets-production.s3.amazonaws.com/assets/app/requirements/list-053b7d745cff5f5d796b494424cdc347.png"
        }, b
    }(ClarityModel), window.Organization = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Payment", "amount", "paid_at", "refunded_at", "stripe_charge_id", "created_at"), b.belongsTo("member", "Member"), b.belongsTo("call", "Call"), b.extend(Spine.Model.Ajax), b.url = "/api/payments", b
    }(ClarityModel), window.Payment = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Payout", "member_id", "amount"), b.extend(Spine.Model.Ajax), b.url = "/api/payouts", b
    }(ClarityModel), window.Payout = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Plan", "name", "price", "benefits"), b.extend(Spine.Model.Ajax), b.url = "/api/plans", b
    }(ClarityModel), window.Plan = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Question", "created_at", "question", "formatted_question", "answers_count"), b.belongsTo("member", "Member.Basic"), b.belongsTo("topic", "Topic"), b.hasMany("answers", "Answer"), b.extend(Spine.Model.Ajax), b.url = "/api/questions", b.prototype.formattedTimestamp = function () {
            return moment.utc(this.created_at).member().shortTimeOrDate()
        }, b.prototype.isAnsweredByCurrentMember = function () {
            var a;
            return a = this.answers().select(function (a) {
                var b;
                return a.expert_id === ((b = Member.current()) != null ? b.id : void 0)
            }), a.length > 0
        }, b
    }(ClarityModel), window.Question = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Rating", "name", "source", "tagline", "image_url", "created_at", "comment", "formatted_comment", "source", "linkedin_recommendation_id", "recommender_linkedin_profile_url", "expert_linkedin_profile_url", "stars", "from_id", "to_id", "screen_name"), b.belongsTo("call", "Call"), b.extend(Spine.Model.Ajax), b.url = "/api/ratings", b.createdSortDESC = function (a, b) {
            return a.created_at < b.created_at ? 1 : -1
        }, b.magicSort = function (a, b) {
            return a.linkedin_recommendation_id != null && b.linkedin_recommendation_id != null ? parseInt(a.linkedin_recommendation_id) < parseInt(b.linkedin_recommendation_id) ? 1 : -1 : a.created_at < b.created_at ? 1 : -1
        }, b.prototype.from_clarity = function () {
            return this.source === "clarity"
        }, b.prototype.from_linkedin = function () {
            return this.source === "linkedin"
        }, b.prototype.clarity_profile_url = function () {
            return "/" + this.screen_name
        }, b
    }(ClarityModel), window.Rating = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Recommendation"), b.belongsTo("member", "Member.Basic"), b.belongsTo("need", "Need"), b.hasMany("recommended_experts", "RecommendedExpert"), b.magicSort = function (a, b) {
            var c, d;
            return c = a.recommendedExpertsSortedByVote()[0].recommended_expert_votes().all().length, d = b.recommendedExpertsSortedByVote()[0].recommended_expert_votes().all().length, c > d ? -1 : 1
        }, b.prototype.recommendedExpertsSortedByVote = function () {
            return this.recommended_experts().all().sort(RecommendedExpert.magicSort)
        }, b
    }(ClarityModel), window.Recommendation = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("RecommendedExpert", "comment", "i_voted"), b.belongsTo("expert", "Member.Basic"), b.belongsTo("recommendation", "Recommendation"), b.hasMany("recommended_expert_votes", "RecommendedExpertVote"), b.magicSort = function (a, b) {
            var c, d;
            return c = a.recommended_expert_votes().all().length, d = b.recommended_expert_votes().all().length, c > d ? -1 : 1
        }, b.prototype.voteBy = function (a) {
            var b, c, d, e;
            e = this.recommended_expert_votes().all();
            for (c = 0, d = e.length; c < d; c++) {
                b = e[c];
                if (b.member_id === a.id) return b
            }
        }, b.prototype.toggleVoteFrom = function (a) {
            var b;
            return (b = this.voteBy(a)) ? ("" + b.id).match(/^\d+$/) ? (b.destroy(), !1) : !0 : (this.recommended_expert_votes().create({
                member_id: a.id
            }), !0)
        }, b
    }(ClarityModel), window.RecommendedExpert = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("RecommendedExpertVote", "comment"), b.belongsTo("recommended_expert", "RecommendedExpert"), b.belongsTo("member", "Member.Nano"), b.extend(Spine.Model.Ajax), b.url = "/api/recommended_expert_votes", b
    }(ClarityModel), window.RecommendedExpertVote = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("SearchQuery", "created_at", "updated_at", "search_type", "query", "route"), b.extend(Spine.Model.Ajax), b.url = "/api/search_queries", b.prototype.searchType = function () {
            return this.search_type || "Search"
        }, b
    }(ClarityModel), window.SearchQuery = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Thread", "messages", "updated_at", "unread_message_count", "other_party_name", "other_party_screen_name", "other_party_image_url"), b.belongsTo("active_call", "Call"), b.extend(Spine.Model.Ajax), b.url = "/api/threads", b.sortDesc = function (a, b) {
            return a.updated_at < b.updated_at ? 1 : -1
        }, b.fetchAllOnce = function (a) {
            return this.fetchedOnce ? a != null ? typeof a.complete == "function" ? a.complete() : void 0 : void 0 : (this.fetchedOnce = !0, this.fetch(a))
        }, b.fetchFor = function (a, c, d) {
            var e, f, g, h = this;
            d == null && (d = c), e = {
                member_id: a
            };
            if ($.isPlainObject(c))
                for (f in c) g = c[f], e[f] = g;
            return $.ajax({
                type: "GET",
                url: "/api/threads/for",
                data: e,
                success: function (a) {
                    return Spine.Ajax.disable(function () {
                        return b.records[a.id] = new b(a)
                    }), typeof d == "function" ? d(b.records[a.id]) : void 0
                }
            })
        }, b.prototype.isRead = function () {
            return this.unread_message_count === 0
        }, b.prototype.pushMessage = function (a) {
            return this.messages.push(a), this.save({
                ajax: !1
            })
        }, b.prototype.sendMessage = function (a, b, c) {
            var d = this;
            return b == null && (b = {}), $.ajax({
                type: "PUT",
                url: "/api/threads/" + this.id,
                data: {
                    message: a,
                    from_member_id: b.fromMemberId || null
                },
                success: function (a) {
                    return typeof c == "function" ? c(a) : void 0
                }
            })
        }, b.prototype.markAsRead = function () {
            return this.unread_message_count = 0, this.save({
                ajax: !1
            }), $.ajax({
                type: "PUT",
                url: "/api/threads/mark-as-read",
                data: {
                    id: this.id
                },
                success: function (a) {
                    return Clarity.Helpers.Inbox.unreadCount = a.unread_conversation_count
                }
            })
        }, b.markAllAsRead = function () {
            return $.ajax({
                type: "PUT",
                url: "/api/threads/mark-all-as-read",
                success: function (a) {
                    var c, d, e, f;
                    f = b.all();
                    for (d = 0, e = f.length; d < e; d++) c = f[d], c.unread_message_count = 0, c.save({
                        ajax: !1
                    });
                    return Clarity.Helpers.Inbox.setUnreadCount(a.unread_conversation_count), Alert.show("All messages have been marked as read.")
                }
            })
        }, b.prototype.hasReplied = function (a) {
            var b;
            return ((b = this.lastMessage()) != null ? b.member_id : void 0) === a.id
        }, b.prototype.lastMessage = function () {
            return this.messages[this.messages.length - 1]
        }, b.prototype.firstMessage = function () {
            return this.messages[0]
        }, b.prototype.lastMessageIsReason = function () {
            return this.lastMessage() != null ? this.lastMessage().is_reason : !0
        }, b.prototype.lastMessageTimestamp = function () {
            if (this.lastMessage() != null) return moment.utc(this.lastMessage().created_at).member().shortTimeOrDate()
        }, b.prototype.hasFifteenMinutesDiff = function (a, b) {
            var c, d;
            return c = moment.utc(a.created_at).utc(), d = moment.utc(b.created_at).utc(), c.diff(d, "minutes") > 15
        }, b
    }(ClarityModel), window.Thread = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        }, d = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Topic", "name", "members_count", "searchable_members_count", "logo_url", "slug"), b.extend(Spine.Model.Ajax), b.url = "/api/topics", b.searchableMembersCountSortDESC = function (a, b) {
            return a.searchable_members_count === b.searchable_members_count ? a.id < b.id ? 1 : -1 : a.searchable_members_count < b.searchable_members_count ? 1 : -1
        }, b.magicSort = function (a) {
            var b, c, e, f, g, h, i, j;
            Member.current() != null ? b = function () {
                var a, b, c, d, e;
                d = (c = Member.current()) != null ? c.topics : void 0, e = [];
                for (a = 0, b = d.length; a < b; a++) f = d[a], e.push(f.id);
                return e
            }() : b = [], c = function () {
                var c, e, f, h;
                h = [];
                for (c = 0, e = a.length; c < e; c++) g = a[c], (f = g.id, d.call(b, f) >= 0) && h.push(g);
                return h
            }(), e = function () {
                var c, e, f, h;
                h = [];
                for (c = 0, e = a.length; c < e; c++) g = a[c], (f = g.id, d.call(b, f) < 0) && h.push(g);
                return h
            }(), c = c.sort(this.searchableMembersCountSortDESC), j = e.sort(this.searchableMembersCountSortDESC);
            for (h = 0, i = j.length; h < i; h++) g = j[h], c.push(g);
            return c
        }, b.prototype.slug = function () {
            return ("" + this.name + " " + this.id).parameterize()
        }, b.prototype.logoUrl = function (a) {
            var b;
            return a == null && (a = "profile_square"), b = this.logo_url.replace("/profile_square/", "/" + a + "/"), navigator.standalone && (b = b.replace("https://s3", "http://s3")), b
        }, b.search = function (a, b, c) {
            return this.fetchAndReturn({
                url: "/api/topics/search?q=" + a + "&offset=" + b,
                wait: !0
            }, c)
        }, b
    }(ClarityModel), window.Topic = a
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.configure("Transaction", "name", "charity_name", "amount", "deposited", "type", "created_at", "promo_code", "promo_rebate_display", "discounted_amount"), b.extend(Spine.Model.Ajax), b.url = "/api/transactions", b.prototype.month = function () {
            return moment.utc(this.created_at).format("MMMM")
        }, b
    }(ClarityModel), window.Transaction = a
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Dropdown = function (b) {
        function d(b) {
            this.toggle = a(this.toggle, this), d.__super__.constructor.call(this, b)
        }
        return c(d, b), d.prototype.events = {
            "tap .dropdown-header": "toggle"
        }, d.prototype.elements = {
            ".expanded-content": "expandedContentEl"
        }, d.prototype.toggle = function (a) {
            var b;
            return b = this.el.hasClass("collapsed"), $(a.currentTarget).find(".fa-icon-chevron-down, .fa-icon-chevron-up").toggleClass("fa-icon-chevron-up").toggleClass("fa-icon-chevron-down"), this.el.toggleClass("expanded collapsed"), this.el.hasClass("expanded") ? this.expandedContentEl.css("height", "auto") : this.expandedContentEl.css("height", 0), this.onExpand != null && b && this.onExpand(), typeof this.onToggle == "function" ? this.onToggle(b) : void 0
        }, d
    }(Spine.Controller)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.AccountSocialConnectionsPanel = function (b) {
        function d() {
            this.toggleProvider = a(this.toggleProvider, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.events = {
            "tap .connections a.item": "toggleProvider",
            "tap [data-action=save]": "next"
        }, d.prototype.render = function () {
            var a, b, c, d, e, f;
            this.providers = {
                facebook: {
                    name: "Facebook",
                    value: null
                },
                twitter: {
                    name: "Twitter",
                    value: null
                },
                linkedin: {
                    name: "LinkedIn",
                    value: null
                },
                clarity: {
                    name: "Clarity",
                    value: null
                }
            }, d = this.currentMember.social_connections, f = [];
            for (b = 0, c = d.length; b < c; b++) a = d[b], f.push((e = this.providers[a.provider]) != null ? e.value = a.uid : void 0);
            return f
        }, d.prototype.toggleProvider = function (a) {
            var b, c, d, e, f = this;
            Member.cache("currentMember", null), d = Spine.Route.path, c = encodeURIComponent(App["native"]() ? "/mobile_login?origin=" + d : d), e = $(a.currentTarget).data("provider"), b = $(a.currentTarget).data("action");
            if (b === "connect") return Notification.showSpinner("Connecting..."), App.cookie("externalBackPath", App.querystring().backPath), App["native"]() ? Member.getNonce(function (a) {
                return window.location.href = "" + FRIENDLY_HOST + "/authenticate?nonce=" + a + "&provider=" + e + "&origin=" + c
            }) : window.location.href = "/authenticate?provider=" + e + "&origin=" + c;
            if (b === "disconnect") return Notification.showSpinner("Disconnecting..."), $.ajax({
                url: "/api/members/remove-social-connection/" + e,
                success: function () {
                    var a, b, c, d, g;
                    b = [], g = f.currentMember.social_connections;
                    for (c = 0, d = g.length; c < d; c++) a = g[c], a.provider !== e && b.push(a);
                    return delete f.currentMember.public_social_connections[e], f.currentMember.social_connections = b, f.currentMember.save({
                        ajax: !1
                    }), f.render(), Notification.hide()
                },
                error: function (a) {
                    return a.globalHandlerCancelled = !0, Notification.show("You can't disconnect the social account that you created your account with.")
                }
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.AddToCalendar = function (a) {
        function c(a) {
            this.events || (this.events = {}), this.events["tap [data-action=open-calendar-window]"] = "openCalendarWindow", c.__super__.constructor.call(this, a)
        }
        return b(c, a), c.prototype.openCalendarWindow = function (a) {
            var b;
            return a.preventDefault(), b = $(a.currentTarget), App["native"]() ? window.open("" + FRIENDLY_HOST + "/authorized_redirect?target=" + encodeURIComponent(b.attr("href"))) : window.location.href = b.attr("href")
        }, c
    }(Clarity.Dropdown)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.FilterPanel = function (b) {
        function d() {
            this.done = a(this.done, this), this.updateSort = a(this.updateSort, this), this.render = a(this.render, this), this.start = a(this.start, this), d.__super__.constructor.apply(this, arguments), this.addButton("Done", this.done).addClass("right").addClass("submit")
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.backButton = {
            label: "Cancel",
            defaultPath: "/search",
            trans: "down"
        }, d.prototype.controls = ["near_me", "video", "recommendations"], d.prototype.defaultSort = "Best Match", d.prototype.className = "search-filter account email-notifications", d.prototype.events = {
            "change [name=klout]": "updateKloutScoreLabel",
            "tap .select li": "updateSort"
        }, d.prototype.elements = {
            "[name=klout]": "klout",
            ".klout-score-label": "kloutLabel"
        }, d.prototype.updateKloutScoreLabel = function (a) {
            return this.kloutLabel.text(this.klout.val())
        }, d.prototype.start = function () {
            if (!this.params.route) return this.navigateBack()
        }, d.prototype.render = function () {
            var a, b, c, d, e, f, g, h = this;
            b = {
                defaultSort: this.defaultSort
            }, d = function (a) {
                var b;
                if (h.params.filter) return (b = h.params.filter.match(RegExp("" + a + "=(.*?)(\\&|$)"))) != null ? b[1] : void 0
            }, g = this.controls;
            for (e = 0, f = g.length; e < f; e++) a = g[e], b[a] = d(a) === "true";
            return this.html(JST["app/views/search/filter"](b)), $(":checkbox", this.content).iphoneStyle(), c = d("sort") || "default", this.$(".select li[data-val=" + c + "]").addClass("active")
        }, d.prototype.updateSort = function (a) {
            return this.$(".select li").removeClass("active"), $(a.currentTarget).addClass("active")
        }, d.prototype.done = function () {
            var a, b, c, d, e;
            return a = function () {
                var a, c, d, e;
                d = this.controls, e = [];
                for (a = 0, c = d.length; a < c; a++) b = d[a], this.$("[name=" + b + "]").is(":checked") && e.push("" + b + "=true");
                return e
            }.call(this), c = a.join("&"), d = this.$(".select li.active").data("val"), d !== "default" && (c += "&sort=" + d), c && (c = "/" + c), Clarity.stack.pop(), ((e = Clarity.stack[Clarity.stack.length - 1]) != null ? e.panel_name : void 0) === "ListTopicMembers" && Clarity.stack.pop(), this.navigate("" + this.params.route + c, {
                trans: "down"
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.SearchPanel = function (b) {
        function d() {
            this.clearSearch = a(this.clearSearch, this), this.showOrHideClearSearch = a(this.showOrHideClearSearch, this), this.typeaheadOpened = a(this.typeaheadOpened, this), this.typeaheadClosed = a(this.typeaheadClosed, this), this.submitSearchOnEnter = a(this.submitSearchOnEnter, this), this.performSearch = a(this.performSearch, this), this.suggestionsRendered = a(this.suggestionsRendered, this), this.hideSpinner = a(this.hideSpinner, this), this.showSpinner = a(this.showSpinner, this), this.queryChanged = a(this.queryChanged, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.autoRefresh = !1, d.prototype.parentEvents = {
            "tap .submit-search": "performSearch",
            "keydown [name=search_query]": "submitSearchOnEnter",
            "tap .clear-search": "clearSearch",
            "typeahead:selected [name=search_query]": "typeaheadSelected",
            "typeahead:opened [name=search_query]": "typeaheadOpened",
            "typeahead:closed [name=search_query]": "typeaheadClosed",
            "typeahead:loading [name=search_query]": "showSpinner",
            "typeahead:loaded [name=search_query]": "hideSpinner",
            "keyup .search_query": "queryChanged",
            "typeahead:suggestionsRendered [name=search_query]": "suggestionsRendered"
        }, d.prototype.fields = {
            search_query: {
                required: !0,
                "with": function (a) {
                    if (a.replace(/[\s\,\.\!\?\@\#\$\%\^\&\*\(\)]/g, "").length === 0 && a !== "*") return "Please provide a search query";
                    if (this.f.search_query.data("placeholder") === a) return "Please provide a search query"
                }
            }
        }, d.prototype.queryChanged = function () {
            if (!SearchQuery.all().length) return this.$(".categories").toggle(this.f.search_query.val() === "")
        }, d.prototype.showSpinner = function () {
            var a;
            a = this.$(".twitter-typeahead");
            if (a.find(".tt-spinner").size() === 0) return a.append("<span class='tt-spinner'></span>"), a.find(".tt-spinner").spin(App.smallSpinnerOptions)
        }, d.prototype.hideSpinner = function () {
            var a;
            return a = this.$(".twitter-typeahead"), a.find(".tt-spinner").remove()
        }, d.prototype.suggestionsRendered = function () {
            return this.$(".search-completion.history-result").is(":visible") ? this.$(".history").show() : this.$(".history").hide(), this.$(".truncate").each(function () {
                return $clamp(this, {
                    clamp: 1
                })
            })
        }, d.prototype.performSearch = function (a) {
            var b, c;
            return this.isValid() ? (c = encodeURIComponent(this.f.search_query.val()), b = "/search/" + c, this.params.filter && (b += "/" + this.params.filter), this.navigate(b, {
                trans: "right"
            }), SearchQuery.create({
                search_type: "Search",
                query: this.f.search_query.val()
            }), this.f.search_query.blur()) : this.searching = !1
        }, d.prototype.submitSearchOnEnter = function (a) {
            if (a.which === 13) return this.performSearch()
        }, d.prototype.typeaheadClosed = function () {
            var a = this;
            return this.suggestionsRendered(), this.delay(function () {
                return a.searching || a.$(".categories").show(), a.searching = !1
            })
        }, d.prototype.typeaheadOpened = function () {
            return SearchQuery.all().length && this.$(".categories").hide(), this.suggestionsRendered()
        }, d.prototype.insertSearchFor = function () {
            var a;
            return this.$(".search-for").remove(), a = $("<div class='tt-suggestion search-for' />"), a.html(JST["app/views/search/_completions"]({
                formatted: 'Search for <em>"' + this.f.search_query.val() + '"</em>'
            })), this.content.prepend(a)
        }, d.prototype.showOrHideClearSearch = function () {
            var a;
            return a = this.f.search_query.val() ? "" : "hidden", this.$(".clear-search").css({
                visibility: a
            })
        }, d.prototype.clearSearch = function () {
            return this.navigate("/search")
        }, d.prototype.typeaheadSelected = function (a, b) {
            return this.searching = !0, b.search_type === "Topic" ? (this.navigate(b.route, {
                trans: "right"
            }), this.f.search_query.blur(), SearchQuery.create({
                search_type: "Topic",
                query: b.value,
                route: b.route
            })) : b.search_type === "Expert" ? (this.navigate(b.route, {
                trans: "right"
            }), this.f.search_query.blur(), SearchQuery.create({
                search_type: "Expert",
                query: b.value,
                route: b.route
            })) : (this.f.search_query.val(b.query || b.value), this.performSearch())
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Helpers.StarRating = function (a) {
        function c(a) {
            c.__super__.constructor.apply(this, arguments), this.allowHalfStars == null && (this.allowHalfStars = !0), this.size == null && (this.size = 5), this.min == null && (this.min = 0), this.disabled == null && (this.disabled = !1), this.rating == null && (this.rating = null), isNaN(this.rating) ? this.rating = null : this.rating != null && (this.rating = parseFloat(this.rating))
        }
        return b(c, a), c.prototype.events = {
            "mousemove div": "desktop",
            "mousedown div": "desktop",
            mouseout: "revertRating",
            touchmove: "mobile",
            touchstart: "mobile",
            touchend: "mobile"
        }, c.prototype.elements = {
            div: "items"
        }, c.prototype.render = function () {
            var a, b;
            for (a = 0, b = this.size - 1; 0 <= b ? a <= b : a >= b; 0 <= b ? a++ : a--) this.append(document.createElement("div"));
            return this.star_width = this.items.eq(0).width(), this.revertRating(null)
        }, c.prototype.revertRating = function (a) {
            var b, c;
            if (a != null && this.disabled) return;
            this.items.removeClass("full").removeClass("half");
            if (this.rating != null) {
                for (b = 0, c = this.rating; 0 <= c ? b <= c : b >= c; 0 <= c ? b++ : b--) b < this.rating && parseInt(this.rating) !== b ? this.items.eq(b).addClass("full") : this.rating > b && this.rating - parseInt(this.rating) > 0 && this.items.eq(b).addClass("half");
                return a != null && this.index != null && this.offset != null ? this.update(this.index, this.offset) : typeof this.updateCallback == "function" ? this.updateCallback(this.rating) : void 0
            }
            return typeof this.updateCallback == "function" ? this.updateCallback(null) : void 0
        }, c.prototype.revertPosition = function () {
            if (this.disabled) return;
            return this.rating === null ? (this.items.removeClass("half full"), typeof this.updateCallback == "function" ? this.updateCallback(null) : void 0) : this.update(this.index, this.offset)
        }, c.prototype.mobile = function (a) {
            var b, c, d;
            if (this.disabled) return;
            return a.preventDefault(), a.stopImmediatePropagation(), d = this.pageRelativeIndexAndOffset(a), b = d[0], c = d[1], this.update(b, c, !0)
        }, c.prototype.pageRelativeIndexAndOffset = function (a) {
            var b, c, d, e;
            return ((e = a.originalEvent.changedTouches) != null ? e.length : void 0) > 0 ? d = a.originalEvent.changedTouches[0].pageX - this.el.offset().left : d = a.originalEvent.pageX - this.el.offset().left, b = d < 0 ? 0 : parseInt(d / this.star_width, 10), c = d % this.star_width, [b, c]
        }, c.prototype.desktop = function (a) {
            var b, c, d;
            if (this.disabled) return;
            return a.offsetX != null ? (b = this.items.index(a.currentTarget), c = a.offsetX) : (d = this.pageRelativeIndexAndOffset(a), b = d[0], c = d[1]), this.update(b, c, a.type === "mousedown")
        }, c.prototype.update = function (a, b, c) {
            var d, e;
            return c == null && (c = !0), a < this.min && (a = this.min - 1, b = this.star_width), d = this.items.slice(a, a + 1), this.items.removeClass("half full"), this.items.slice(0, a).addClass("full"), a === 0 && b < this.star_width / 4 && this.min === 0 ? (d.addClass("empty"), e = a) : b < this.star_width / 2 && this.allowHalfStars ? (d.addClass("half"), e = parseFloat("" + a + ".5")) : (d.addClass("full"), e = a + 1), e > this.size && (e = this.size), this.rating !== e && c ? (this.rating = e, this.index = a, this.offset = b, typeof this.updateCallback == "function" ? this.updateCallback(e, !0) : void 0) : typeof this.updateCallback == "function" ? this.updateCallback(e, !1) : void 0
        }, c
    }(Spine.Controller)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Typeahead = function (b) {
        function d(b) {
            var c, e, f, g, h, i, j, k;
            b == null && (b = {}), this.triggerOnSelect = a(this.triggerOnSelect, this), this.activateTypeahead = a(this.activateTypeahead, this), this.hideSpinner = a(this.hideSpinner, this), this.showSpinner = a(this.showSpinner, this), d.__super__.constructor.apply(this, arguments), this.panel || (this.panel = null), (c = this.typeahead).name || (c.name = ""), (e = this.typeahead).placeholder || (e.placeholder = ""), (f = this.typeahead).url || (f.url = ""), (g = this.typeahead).panel_title || (g.panel_title = "Add Topics"), (h = this.callbacks).filter || (h.filter = null), (i = this.callbacks).onSelect || (i.onSelect = null), (j = this.show).fullscreen || (j.fullscreen = !1), (k = this.show).append || (k.append = !0), this.data = [], this.timestamp = new Date
        }
        return c(d, b), d.prototype.elements = {
            "[data-typeahead-input]": "typeaheadInput"
        }, d.prototype.events = {
            "typeahead:autocompleted [data-typeahead-input]": "triggerOnSelect",
            "typeahead:selected [data-typeahead-input]": "triggerOnSelect",
            "typeahead:loading [data-typeahead-input]": "showSpinner",
            "typeahead:loaded [data-typeahead-input]": "hideSpinner",
            "keydown [data-typeahead-input]": "preventFormSubmitOnEnter",
            "click [data-typeahead-input]": "openFullScreen"
        }, d.prototype.showSpinner = function (a, b) {
            b == null && (b = this.wrapper);
            if (b == null) return;
            if (b.find(".tt-spinner").size() === 0) return b.append("<span class='tt-spinner'></span>"), b.find(".tt-spinner").spin(App.smallSpinnerOptions)
        }, d.prototype.hideSpinner = function (a, b) {
            b == null && (b = this.wrapper);
            if (b == null) return;
            return b.find(".tt-spinner").remove()
        }, d.prototype.render = function () {
            return this.show.append && this.html(JST["app/views/shared/typeahead-input"]({
                name: this
                    .typeahead.name,
                placeholder: this.typeahead.placeholder
            })), this.activateTypeahead(this.typeaheadInput), this.wrapper = this.el.find(".twitter-typeahead")
        }, d.prototype.focus = function () {
            return this.typeaheadInput.focus()
        }, d.prototype.hide = function () {
            return this.el.hide()
        }, d.prototype.show = function () {
            this.el.show();
            if (this.show.fullscreen) return this.openFullscreen()
        }, d.prototype.activateTypeahead = function (a) {
            return a.typeahead({
                name: this.typeahead.name,
                closeOnBlur: !this.opensInFullscreen(),
                template: JST["app/views/shared/_simple_typeahead_completion"],
                remote: {
                    url: this.typeahead.url,
                    filter: this.callbacks.filter
                }
            })
        }, d.prototype.preventFormSubmitOnEnter = function (a) {
            if (a.keyCode === 13) return a.preventDefault()
        }, d.prototype.opensInFullscreen = function () {
            return App.mobile || !App.mobile && this.show.fullscreen
        }, d.prototype.openFullScreen = function () {
            var a;
            if (this.showingFullscreen) return;
            if (!this.opensInFullscreen()) return;
            return this.typeaheadInput.blur(), a = {
                shim: !0,
                typeahead: this
            }, App.mobile || (a.trans = "up"), this.navigate("/typeahead", a)
        }, d.prototype.triggerOnSelect = function (a, b, c) {
            var d;
            return c == null && (c = null), this.data.push(b), this.opensInFullscreen() && c != null && c.close(), typeof (d = this.callbacks).onSelect == "function" ? d.onSelect(a, b) : void 0
        }, d
    }(Spine.Controller)
}.call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        };
    a = jQuery, Clarity.Panels.AccountShow = function (a) {
        function c() {
            this.logout = b(this.logout, this), this.render = b(this.render, this), c.__super__.constructor.apply(this, arguments), this.logoutButton = this.addButton("Logout", App.logout).addClass("right")
        }
        return d(c, a), c.prototype.requires_authentication = !0, c.prototype.requires_onboarding = !0, c.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, c.prototype.title = "Account", c.prototype.className = "account showView", c.prototype.events = {
            "tap .logout": "logout",
            "tap [data-action='set-a-passcode']": "navigateToSetAPasscode"
        }, c.prototype.render = function () {
            return this.html(JST["app/views/account/show"]({
                currentMember: this.currentMember
            }))
        }, c.prototype.navigateToSetAPasscode = function () {
            return this.currentMember.passcode != null && this.currentMember.passcode !== "" ? this.navigate("/account/passcode", {
                trans: "right"
            }) : this.navigate("/account/passcode/edit", {
                trans: "right"
            })
        }, c.prototype.logout = function () {
            return App.logout()
        }, c
    }(ClarityPanel), Clarity.Panels.AccountEditProfile = function (a) {
        function c() {
            this.render = b(this.render, this);
            var a = this;
            c.__super__.constructor.apply(this, arguments), this.helpButton = this.addButton("Help", function () {
                return Helper.openExternalLink("http://help.clarity.fm/")
            }), this.helpButton.addClass("right")
        }
        return d(c, a), c.prototype.requires_authentication = !0, c.prototype.requires_onboarding = !0, c.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, c.prototype.title = "Edit Profile", c.prototype.className = "account showView", c.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.currentMember.screen_name
            }
        }, c.prototype.events = {
            "tap .logout": "logout"
        }, c.prototype.render = function () {
            return this.html(JST["app/views/account/edit_profile"]({
                currentMember: this.currentMember
            }))
        }, c
    }(ClarityPanel), Clarity.Panels.AccountSocialConnections = function (a) {
        function c() {
            this.render = b(this.render, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.prototype.requires_onboarding = !0, c.prototype.backButton = {
            defaultPath: "/account/profile"
        }, c.prototype.title = "Social Accounts", c.prototype.className = "account social-verifications", c.prototype.render = function () {
            return c.__super__.render.apply(this, arguments), this.html(JST["app/views/account/social_connections"]({
                providers: this.providers,
                onboard: !1
            }))
        }, c
    }(Clarity.AccountSocialConnectionsPanel), Clarity.Panels.AccountBasicInfo = function (c) {
        function e() {
            this.deleteAccountPrompt = b(this.deleteAccountPrompt, this), this.save = b(this.save, this), this.render = b(this.render, this), e.__super__.constructor.apply(this, arguments), this.addButton("Save", this.save).addClass("add right submit")
        }
        return d(e, c), e.prototype.requires_authentication = !0, e.prototype.requires_onboarding = !0, e.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, e.prototype.autoRefresh = !1, e.prototype.backButton = {
            defaultPath: "/account/profile"
        }, e.prototype.title = "Basic Information", e.prototype.className = "account edit", e.prototype.scroll = function () {
            return /\/rate$/.test(Spine.Route.path) ? "custom" : "top"
        }, e.prototype.customScroll = function () {
            var a;
            return a = this.$(".expert-settings-header").offset(), a != null ? a.top - 55 : null
        }, e.prototype.elements = {
            ".screen_name label": "screen_nameLabel"
        }, e.prototype.fields = {
            email: {
                required: !0,
                email: !0,
                uniqueEmail: !0
            },
            phone_number: {
                required: !0,
                phoneNumber: !0
            },
            country_code: null,
            timezone: {
                required: !0
            },
            name: {
                required: !0,
                "with": function (a) {
                    var b;
                    b = a.split(" ");
                    if (b.length < 2 || b[b.length - 1] === "") return "Name is required"
                }
            },
            screen_name: {
                required: !0,
                "with": function (b, c) {
                    return b = encodeURIComponent(b), a.get("/api/members/verify_screen_name?screen_name=" + b).success(c).error(function (a) {
                        return a.globalHandlerCancelled = !0, c("Username unavailable")
                    })
                }
            },
            location: null,
            bio: null
        }, e.prototype.events = {
            "tap .save-account": "save",
            "tap .delete-account": "deleteAccountPrompt",
            "tap [data-action=show-examples]": "showExamples"
        }, e.prototype.render = function () {
            if (this.params._navigatingBack && this.preventNextRender) return;
            return this.html(JST["app/views/account/basic_info"]({
                member: this.currentMember,
                hourly_rate: this.selectedHourlyRate(),
                hourly_rates: this.hourlyRateValues()
            }), {
                scroll: !1
            }), this.appendTimezones(this.f.timezone), this.f.screen_name.css({
                "padding-left": this.screen_nameLabel.width() + 4
            }), this.f.screen_name.hide(), this.delay(function () {
                return this.f.screen_name.show()
            })
        }, e.prototype.showExamples = function (b) {
            return this.preventNextRender = this.formHasChanged(), this.navigate(a(b.currentTarget).attr("href"), {
                trans: "right"
            })
        }, e.prototype.save = function () {
            var a;
            if (this.isValid()) return this.preventNextRender = !1, this.currentMember.email = this.f.email.val(), this.currentMember.country_code = this.f.country_code.val(), this.currentMember.phone_number = this.f.country_code.val() + this.f.phone_number.val(), this.currentMember.timezone = this.f.timezone.val(), a = this.f.name.val().split(" "), this.currentMember.first_name = a.shift(), this.currentMember.last_name = a.join(" "), this.currentMember.screen_name = this.f.screen_name.val(), this.currentMember.location = this.f.location.val(), this.currentMember.bio = this.f.bio.val(), this.currentMember.save(), this.navigateBack()
        }, e.prototype.deleteAccountPrompt = function () {
            var b = this;
            return Notification.show("", {
                template: "app/views/account/delete_account_confirmation",
                closeOnElse: !1,
                onClose: function (c) {
                    c.preventDefault();
                    if (a(c.currentTarget).hasClass("ok-delete-account")) return b.currentMember.destroy(), App.logout()
                }
            })
        }, e
    }(ClarityPanel), Clarity.Panels.AccountExpertInfo = function (c) {
        function e() {
            this.save = b(this.save, this), this.render = b(this.render, this), e.__super__.constructor.apply(this, arguments), Member.bind("charityUpdated", this.updateCharitiesList), Charity.bind("refresh", this.updateCharitiesList), this.addButton("Save", this.save).addClass("add right submit")
        }
        return d(e, c), e.prototype.requires_authentication = !0, e.prototype.requires_onboarding = !0, e.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, e.prototype.autoRefresh = !1, e.prototype.backButton = {
            defaultPath: "/account/profile"
        }, e.prototype.title = "Expert Information", e.prototype.className = "account edit", e.prototype.scroll = function () {
            return /\/rate$/.test(Spine.Route.path) ? "custom" : "top"
        }, e.prototype.customScroll = function () {
            var a;
            return a = this.$(".expert-settings-header").offset(), a != null ? a.top - 55 : null
        }, e.prototype.elements = {
            ".screen_name label": "screen_nameLabel"
        }, e.prototype.fields = {
            hourly_rate: {
                currency: {
                    onlyInteger: !0,
                    max: 999999
                }
            },
            charity: null,
            in_global_search: null
        }, e.prototype.events = {
            "change .charities": "charityChanged",
            "change [name='hourly_rate']": "hourlyRateChanged",
            "tap .save-account": "save",
            "tap [data-action='set-a-passcode']": "navigateToSetAPasscode",
            "tap [data-action=show-examples]": "showExamples"
        }, e.prototype.render = function () {
            var b;
            if (this.params._navigatingBack && this.preventNextRender) return;
            return b = Charity.defaultList(), this.html(JST["app/views/account/expert_info"]({
                member: this.currentMember,
                charities: b,
                hourly_rate: this.selectedHourlyRate(),
                hourly_rates: this.hourlyRateValues()
            }), {
                scroll: !1
            }), a(":checkbox", this.content).iphoneStyle()
        }, e.prototype.showExamples = function (b) {
            return this.preventNextRender = this.formHasChanged(), this.navigate(a(b.currentTarget).attr("href"), {
                trans: "right"
            })
        }, e.prototype.navigateToSetAPasscode = function () {
            return this.currentMember.passcode != null && this.currentMember.passcode !== "" ? this.navigate("/account/passcode", {
                trans: "right"
            }) : this.navigate("/account/passcode/edit", {
                trans: "right"
            })
        }, e.prototype.save = function () {
            if (this.isValid()) return this.preventNextRender = !1, this.currentMember.hourly_rate = this.f.hourly_rate.val().replace(/\$|,/g, ""), this.currentMember.updateCharity(this.f.charity.val()), this.currentMember.is_expert && (this.currentMember.in_global_search = this.f.in_global_search.prop("checked")), this.currentMember.save(), this.navigateBack()
        }, e
    }(ClarityPanel), Clarity.Panels.AccountMiniResume = function (a) {
        function c() {
            this.render = b(this.render, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.prototype.requires_authentication = !0, c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.backButton = !0, c.prototype.title = "Examples", c.prototype.className = "account resume", c.prototype.render = function () {
            return this.html(JST["app/views/account/mini_resume"]())
        }, c
    }(ClarityPanel), Clarity.Panels.AccountVerified = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return d(b, a), b.prototype.requires_authentication = !0, b.prototype.defaultFooter = {
            show: !1
        }, b.prototype.history = !1, b.prototype.title = "Verifying...", b.prototype.className = "account verified preCall", b.prototype.start = function () {
            var a = this;
            return this.startFetch({
                wait: !0
            }), Clarity.TempRequest.loadRemote(function (b) {
                return a.tmp_request = b, a.endFetch(null, !0)
            })
        }, b.prototype.render = function () {
            var a = this;
            return this.tmp_request && this.tmp_request.restorePath != null ? this.navigate(this.tmp_request.restorePath, {
                trans: "right"
            }) : this.navigate("/", {
                trans: "right"
            }), this.delay(function () {
                return Alert.notify("Your email address has been verified."), a.trackEvent("Verified email address")
            })
        }, b
    }(ClarityPanel), Clarity.Panels.AccountResetPassword = function (a) {
        function c() {
            this.render = b(this.render, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.prototype.requires_authentication = !0, c.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, c.prototype.backButton = {
            label: "Cancel",
            defaultPath: "/"
        }, c.prototype.title = "Change your password", c.prototype.className = "account reset_password", c.prototype.fields = {
            password: {
                required: !0,
                length: {
                    min: 6
                }
            },
            "verify-password": {
                "with": function (a) {
                    if (this.f.password.val() !== a) return "Passwords must match"
                }
            }
        }, c.prototype.events = {
            "tap [data-action=reset]": "reset"
        }, c.prototype.start = function () {
            var a, b = this;
            a = Clarity.TempRequest.load(!1);
            if (a != null ? a.expert_screen_name : void 0) return Member.findOrFetch(a != null ? a.expert_screen_name : void 0, {
                wait: !0
            }, function (a) {
                b.expert = a
            })
        }, c.prototype.reset = function (a) {
            a.preventDefault();
            if (this.isValid()) return this.currentMember.password = this.f.password.val(), this.currentMember.save(), this.navigateBack(), Alert.notify("Your password has been updated")
        }, c.prototype.render = function () {
            return this.html(JST["app/views/account/reset_password"]())
        }, c
    }(ClarityPanel), Clarity.Panels.AccountWidget = function (c) {
        function e() {
            this.render = b(this.render, this), e.__super__.constructor.apply(this, arguments)
        }
        return d(e, c), e.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, e.prototype.backButton = {
            defaultPath: function () {
                return this.params.screen_name != null ? "/" + this.params.screen_name : "/account"
            }
        }, e.prototype.autoRefresh = !1, e.prototype.title = "Blog Widget", e.prototype.className = "account widget email-notifications", e.prototype.events = {
            "tap .select li": "updateRateDisplay"
        }, e.prototype.elements = {
            ".copy-widget-code": "copyButton",
            ".widget-code": "widgetCode"
        }, e.prototype.start = function () {
            var a = this;
            return this.params.screen_name ? Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                return a.member = b
            }) : this.member = Member.current()
        }, e.prototype.render = function (b) {
            var c = this;
            return b == null && (b = "minute"), this.html(JST["app/views/account/widget"]({
                currentMember: this.currentMember,
                member: this.member,
                rate_type: b
            })), this.$(".select li[data-val='" + b + "']").addClass("active"), this.$(".loading-spinner").spin(App.defaultSpinnerOptions), Clarity.WidgetLoader != null ? Clarity.WidgetLoader.setup() : a.getScript("/assets/widget_loader.js"), this.copyButton.zclip({
                path: "/js/ZeroClipboard.swf",
                copy: this.widgetCode.val(),
                afterCopy: function () {
                    return c.copyButton.addClass("copied"), setTimeout(function () {
                        return c.copyButton.removeClass("copied")
                    }, 2e3)
                }
            })
        }, e.prototype.updateRateDisplay = function (b) {
            return this.render(a(b.currentTarget).addClass("active").data("val"))
        }, e
    }(ClarityPanel), Clarity.Panels.AccountTransactions = function (a) {
        function c() {
            this.render = b(this.render, this), c.__super__.constructor.apply(this, arguments)
        }
        return d(c, a), c.prototype.requires_authentication = !0, c.prototype.requires_onboarding = !0, c.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, c.prototype.backButton = {
            defaultPath: "/account"
        }, c.prototype.title = "Money", c.prototype.className = "transactions", c.prototype.elements = {
            "input.payout": "payout"
        }, c.prototype.events = {
            "tap .tab.paid": "showPaid",
            "tap .tab.earned": "showEarned",
            "tap button.export": "export"
        }, c.prototype.start = function () {
            return Transaction.fetch()
        }, c.prototype["export"] = function () {
            return this.payout.val().match(/^(\$|\d|,|\.)+$/) && (this.amount = parseFloat(this.payout.val().replace(/\$|,/g, ""))), !this.amount || this.amount > parseFloat(this.currentMember.balance) || this.amount < 0 ? Alert.error("Invalid payout amount") : this.navigate("/account/transactions/export", {
                trans: "right",
                payout: new Payout({
                    member_id: this.currentMember.id,
                    amount: this.amount
                })
            })
        }, c.prototype.showPaid = function () {
            return Clarity.stack.pop(), this.navigate("/account/transactions/paid")
        }, c.prototype.showEarned = function () {
            return Clarity.stack.pop(), this.navigate("/account/transactions/earned")
        }, c.prototype.render = function () {
            var a, b, c, d, e, f, g;
            App.showFailedPayment(), a = 0, c = Transaction.findAllByAttribute("type", this.params.type);
            if (this.params.type === "earned")
                for (d = 0, f = c.length; d < f; d++) b = c[d], b.deposited === !1 && (a += parseFloat(b.expert_share));
            if (this.params.type === "paid")
                for (e = 0, g = c.length; e < g; e++) b = c[e], a += parseFloat(b.amount);
            return c.sort(Transaction.createdSort), this.html(JST["app/views/account/transactions"]({
                transactions: c,
                amount: a,
                type: this.params.type
            })), this.header.find(".tabs").size() === 0 ? this.header.addClass("with-tabs").append(this.content.find("header").remove().html()) : this.content.find("header").remove(), this.$(".tab").removeClass("active"), this.$(".tab." + this.params.type).addClass("active"), this.refreshElements(), App.header.setHeight(this, 89)
        }, c
    }(ClarityPanel), Clarity.Panels.AccountTransactionsExport = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return d(b, a), b.prototype.requires_authentication = !0, b.prototype.requires_onboarding = !0, b.prototype.defaultFooter = {
            show: !1
        }, b.prototype.backButton = {
            label: "Cancel"
        }, b.prototype.title = "Export Payment", b.prototype.className = "export", b.prototype.events = {
            "tap button.pay": "pay"
        }, b.prototype.fields = {
            paypal_email: {
                email: !0
            }
        }, b.prototype.start = function () {
            return (this.payout = this.params.payout) ? this.render() : this.navigate("/account/transactions/earned")
        }, b.prototype.render = function () {
            return this.html(JST["app/views/account/export_payment"]({
                payout: this.payout,
                member: this.currentMember
            }))
        }, b.prototype.pay = function () {
            var a = this;
            if (this.isValid()) return this.payout.email = this.currentMember.paypal_email = this.f.paypal_email.val(), this.currentMember.save(), Notification.showSpinner("Processing..."), this.payout.save({
                error: function () {
                    return Notification.hide(), Alert.error("There was a problem sending your payment.  Please contact <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a>.")
                },
                success: function () {
                    return Notification.hide(), Member.loadCurrent(), a.navigate("/account/transactions/earned", {
                        trans: "left"
                    }), Alert.notify("Your payout request for <strong>$" + a.payout.amount.toCurrency() + "</strong> has been received and will be processed shortly.")
                }
            })
        }, b
    }(ClarityPanel), Clarity.Panels.AccountEmailNotifications = function (c) {
        function e() {
            this.save = b(this.save, this), this.render = b(this.render, this), e.__super__.constructor.apply(this, arguments)
        }
        return d(e, c), e.prototype.requires_onboarding = !0, e.prototype.requires_authentication = !0, e.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, e.prototype.backButton = {
            defaultPath: "/account"
        }, e.prototype.title = "Notifications", e.prototype.className = "account email-notifications", e.prototype.elements = {
            ".receives_daily_digest_email": "receives_daily_digest_email",
            ".receives_clarity_updates_email": "receives_clarity_updates_email",
            ".receives_call_request_email": "receives_call_request_email",
            ".receives_sms_notifications": "receives_sms_notifications",
            ".receives_sms_reminders": "receives_sms_reminders",
            ".receives_email_reminders": "receives_email_reminders",
            ".receives_weekly_recommendations_email": "receives_weekly_recommendations_email",
            ".receives_favorite_notification_email": "receives_favorite_notification_email"
        }, e.prototype.render = function () {
            var b;
            return this.html(JST["app/views/account/notifications"](this.currentMember)), b = this.save, a(":checkbox", this.content).iphoneStyle({
                onChange: function (a, c) {
                    return b()
                }
            })
        }, e.prototype.save = function () {
            return this.currentMember.receives_daily_digest_email = this.receives_daily_digest_email.is(":checked"), this.currentMember.receives_clarity_updates_email = this.receives_clarity_updates_email.is(":checked"), this.currentMember.receives_call_request_email = this.receives_call_request_email.is(":checked"), this.currentMember.receives_sms_notifications = this.receives_sms_notifications.is(":checked"), this.currentMember.receives_sms_reminders = this.receives_sms_reminders.is(":checked"), this.currentMember.receives_email_reminders = this.receives_email_reminders.is(":checked"), this.currentMember.receives_weekly_recommendations_email = this.receives_weekly_recommendations_email.is(":checked"), this.currentMember.receives_favorite_notification_email = this.receives_favorite_notification_email.is(":checked"), this.currentMember.save()
        }, e
    }(ClarityPanel), Clarity.Panels.AccountVideo = function (b) {
        function c() {
            c.__super__.constructor.apply(this, arguments), this.saveButton = this.addButton("Save", this.saveVideo).addClass("right submit")
        }
        return d(c, b), c.prototype.requires_authentication = !0, c.prototype.requires_onboarding = !0, c.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, c.prototype.backButton = {
            defaultPath: "/account/profile"
        }, c.prototype.title = "Video", c.prototype.className = "account video", c.prototype.events = {
            "tap .save-video": "saveVideo",
            "tap .remove-video": "removeVideo"
        }, c.prototype.fields = {
            video_url: {
                link: {
                    required: !1
                }
            }
        }, c.prototype.render = function () {
            return this.html(JST["app/views/account/video"]({
                currentMember: this.currentMember
            }))
        }, c.prototype.saveVideo = function () {
            if (this.isValid()) return this.currentMember.video_embed_url = this.f.video_url.val(), this.navigateBack(), this.currentMember.save()
        }, c.prototype.removeVideo = function () {
            var b = this;
            return Notification.show("Are you sure you want to remove this video from your profile?", {
                confirmation: !0,
                buttonText: "Yes",
                onClose: function (c) {
                    if (a(c.currentTarget).hasClass("ok")) return b.currentMember.video_embed_url = "", b.currentMember.video_embed_code = "", b.currentMember.save({
                        ajax: !1
                    }), a.ajax({
                        type: "POST",
                        url: "/api/members/remove-video",
                        success: function () {
                            return b.navigateBack()
                        }
                    })
                }
            })
        }, c
    }(ClarityPanel), Clarity.Panels.AccountImage = function (c) {
        function e() {
            this.render = b(this.render, this), e.__super__.constructor.apply(this, arguments)
        }
        return d(e, c), e.prototype.requires_authentication = !0, e.prototype.requires_onboarding = !0, e.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, e.prototype.backButton = {
            defaultPath: "/account"
        }, e.prototype.title = "Picture", e.prototype.className = "account profile-image", e.prototype.events = {
            "change input": "change",
            "click input": "click",
            "tap [data-action=upload]": "upload"
        }, e.prototype.upload = function () {
            var a;
            return a = function (a) {
                var b, c;
                return Notification.showSpinner("Uploading..."), c = function () {
                    return Member.refreshMember(function () {
                        return Notification.hide()
                    })
                }, b = function () {
                    return Alert.error("There was an issue uploading your image.  Please try again, or contact                     <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a>."), Notification.hide()
                }, (new FileTransfer).upload(a, encodeURI("" + FRIENDLY_HOST + "/api/members/image"), c, b, {
                    fileKey: "image",
                    fileName: a.substr(a.lastIndexOf("/") + 1)
                })
            }, navigator.camera.getPicture(a, null, {
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: Camera.DestinationType.FILE_URI
            })
        }, e.prototype.change = function (b) {
            return Notification.showSpinner("Uploading..."), a.ajax("/api/members/image", {
                timeout: 0,
                type: "POST",
                files: this.$("input"),
                iframe: !0,
                complete: function (a) {
                    return Member.refreshMember(function () {
                        return Notification.hide()
                    })
                }
            })
        }, e.prototype.click = function (a) {
            return a.stopImmediatePropagation()
        }, e.prototype.render = function () {
            return this.html(JST["app/views/account/profile_image"]({
                member: this.currentMember
            }))
        }, e
    }(ClarityPanel), window.verifySeal = function () {
        var a, b, c;
        return a = "433", b = "592", c = "https://seal.starfieldtech.com:443/verifySeal?sealID=CXCiSoWkyKAJtKaiUTjBK7NOGCLsrxaSJCH3tVEFT2DrBTevUC93fcutia", window.open(c, "SealVerfication", "location=yes,status=yes,resizable=yes,scrollbars=no,width=" + b + ",height=" + a)
    }
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.AppAuth = function (a) {
        function c(a) {
            var b = this;
            a == null && (a = {}), a.el = $("article.viewport"), c.__super__.constructor.call(this, a), this.dialog.hide(), Member.bind("memberUpdated", function () {
                if (b.showing && Member.current() && Member.current().verified_email && b.confirmEmail.isActive()) return b.close()
            })
        }
        return b(c, a), c.prototype.show = function (a) {
            return a == null && (a = {}), this.panel = a.panel, this.animate = a.animate, this.origin = a.origin, this.hideOnlyOnClose = a.hideOnlyOnClose, c.__super__.show.call(this, a)
        }, c.prototype.onClose = function () {
            var a, b, c, d = this;
            Alert.hide(null, 0);
            if (this.panel) this.authenticated ? this.panel.restart() : this.hideOnlyOnClose || Clarity.stack.back({
                trans: !1
            }) || (((b = ClarityPanel.deactivating) != null ? (c = b.params) != null ? c.match : void 0 : void 0) ? this.panel.navigate(ClarityPanel.deactivating.params.match[0], {
                _navigatingBack: !0,
                trans: !1
            }) : this.panel.navigate("/", {
                trans: !1
            }));
            else {
                if (App.querystring().b === "h" && !this.authenticated) {
                    window.location.href = "/home";
                    return
                }(a = App.querystring().origin) && this.authenticated && !App.originProcessed && (App.originProcessed = !0, Spine.Route.navigate(a), App.showServerAlerts())
            }
            return this.dialog.animate({
                top: this.dialog.height()
            }, 300, function () {
                return d.dialog.hide()
            })
        }, c.prototype.onShow = function () {
            var a;
            this.dialog.show(), this.dialog.css("top", 0), $(".panel.active").size() > 0 && this.animate !== !1 && (this.dialog.css("top", this.dialog.height()), this.dialog.animate({
                top: 0
            }, 300));
            if (a = App.flash("auth_error")) return this.showPrompt(a)
        }, c.prototype.authenticate = function (a, b, d) {
            var e, f, g = this;
            return this.loading(a, !0), a === "facebook" || a === "linkedin" ? (this.loading(a, !0), App["native"]() && a === "facebook" ? (e = d.origin || this.origin || Spine.Route.path, FB.init({
                appId: FACEBOOK_KEY,
                nativeInterface: CDV.FB,
                useCachedDialogs: !1,
                status: !0,
                cookie: !0
            }), FB.login(function (a) {
                return a.status === "connected" ? (Notification.showSpinner(), $.get("" + FRIENDLY_HOST + "/auth/facebook/callback?access_token=" + a.authResponse.accessToken + "&xhr=true", function (a) {
                    return a.connected ? Member.loadCurrent(!0, function () {
                        var a;
                        e === "/search" && ((a = Member.current()) != null ? !a.onboarded : !void 0) ? Spine.Route.navigate("/") : Spine.Route.navigate(e), Clarity.auth.showing && Clarity.auth.close(!0), Notification.hideSpinner();
                        if (auth_message) return Notification.show(decodeURIComponent(auth_message))
                    }) : g.error(a.error)
                }).error(g.error)) : g.error()
            }, {
                scope: "email,user_location"
            })) : App["native"]() ? (e = encodeURIComponent("/mobile_login?origin=" + (d.origin || this.origin || Spine.Route.path)), window.open("" + FRIENDLY_HOST + "/authenticate?provider=" + a + "&logout=true&origin=" + e)) : (f = "/authenticate" + window.location.search, /\?/.test(f) || (f += "?"), f += "&provider=" + a, b && !/rid=/i.test(f) && (f += "&rid=" + b), f += "&origin=" + (d.origin || this.origin || Spine.Route.path)), Clarity.stack.pop(), Clarity.stack.serialize(), window.location = f) : c.__super__.authenticate.apply(this, arguments)
        }, c.prototype.onSuccess = function (a) {
            var b;
            return (b = this.panel) != null && b.activate({
                trans: !1,
                verify: !1
            }), Member.loadCurrent(!0, function () {
                var b;
                return b = Clarity.TempRequest.load(!1), b.isSet() && (Clarity.stack.pop(), Clarity.stack.serialize(), b.restorePath = Spine.Route.path, b.email || (b.email = Member.current().email), b.save(), Clarity.TempRequest.saveRemote()), typeof a == "function" ? a() : void 0
            })
        }, c
    }(Clarity.Authentication)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.TempRequest = function () {
        function a(a) {
            var b, c;
            a != null ? this.isSet = function () {
                return !0
            } : this.isSet = function () {
                return !1
            };
            for (b in a) c = a[b], this[b] = c
        }
        return a.prototype.save = function () {
            return sessionStorage["temp-request"] = JSON.stringify(this)
        }, a.saveRemote = function () {
            return $.post("/api/blobs/temp-request", {
                data: sessionStorage["temp-request"]
            })
        }, a.clear = function () {
            return sessionStorage["temp-request"] && delete sessionStorage["temp-request"], this.saveRemote()
        }, a.load = function (a) {
            var b, c;
            try {
                b = JSON.parse(sessionStorage["temp-request"])
            } catch (d) {}
            return c = new Clarity.TempRequest(b), a !== !1 && Clarity.TempRequest.clear(), c
        }, a.loadRemote = function (a) {
            var b = this;
            return $.get("/api/blobs/temp-request", function (c) {
                return sessionStorage["temp-request"] = c, typeof a == "function" ? a(b.load(!1)) : void 0
            })
        }, a.prototype.suggestedTimes = function (a) {
            var b, c, d, e, f;
            if (a != null) return this.suggested_times = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = a.length; c < d; c++) b = a[c], e.push(b.format());
                return e
            }();
            if (this.suggested_times != null) {
                e = this.suggested_times, f = [];
                for (c = 0, d = e.length; c < d; c++) b = e[c], f.push(moment(b));
                return f
            }
        }, a
    }(), Clarity.Panels.ExpertPreCall = function (b) {
        function d() {
            this["continue"] = a(this["continue"], this), this.updateRequestAndContinue = a(this.updateRequestAndContinue, this), this.updateReasonCharCounter = a(this.updateReasonCharCounter, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.continueButton = this.addButton("Continue", this["continue"]).addClass("right submit"), Need.bind("refresh", this.render)
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.autoRefresh = !1, d.prototype.title = "Call Details", d.prototype.backButton = {
            defaultPath: function () {
                return this.request != null && this.request.passcode != null && this.request.passcode !== "" ? "/" + this.params.screen_name + "/" + this.request.passcode : this.params.passcode != null && this.params.passcode !== "" ? "/" + this.params.screen_name + "/" + this.params.passcode : "/" + this.params.screen_name
            },
            label: function () {
                return App.querystring().c ? "Close" : "Cancel"
            }
        }, d.prototype.className = "experts preCall showView", d.prototype.elements = {
            "#phone_number": "phoneNumber",
            ".reason-char-counter .chars": "reasonCharCounter"
        }, d.prototype.events = {
            "tap .continue": "continue",
            "keyup [name=reason]": "updateReasonCharCounter",
            "tap [data-action=show-examples]": "showExamples"
        }, d.prototype.fields = {
            phone_number: {
                phoneNumber: !0,
                required: !0
            },
            reason: {
                required: !0,
                pattern: /[a-z]+/i,
                trigger: "updateReasonCharCounter",
                message: "Please enter a reason for the call"
            },
            email: {
                required: !0,
                email: !0,
                uniqueEmail: !0
            },
            country_code: null,
            approximate_length: null
        }, d.prototype.start = function (a) {
            var b = this;
            return Member.findOrFetch(a.screen_name, {
                wait: !0
            }, function (c) {
                b.expert = c, a.model = b.expert;
                if (b.expert.is_on_vacation && (b.params.passcode == null || b.params.passcode === "")) return b.navigateBack(), Alert.error("" + b.expert.name() + " is not currently available to take a call request.")
            })
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed precall", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate
            })
        }, d.prototype.render = function () {
            var a, b;
            if (this.params._navigatingBack && this.preventNextRender) return;
            return this.request = Clarity.TempRequest.load(!1), b = this.request.isSet() && this.currentMember, this.request.isSet() ? (this.currentMember == null && (this.currentMember = new Member), this.currentMember.country_code = this.request.country_code, this.currentMember.phone_number = this.request.phone_number, this.currentMember.email = this.request.email) : this.currentMember != null && (this.currentMember = this.currentMember.reload()), this.html(JST["app/views/call_request/precall"]({
                expert: this.expert,
                member: this.currentMember,
                showEmail: b
            })), a = this.request.isSet() ? this.request.reason : App.flash("resubmit_reason"), a && (this.f.reason.val(a), this.updateReasonCharCounter(), this.f.approximate_length.find("option[value=" + this.request.approximate_length + "]").attr("selected", !0)), this.f.reason.autosize()
        }, d.prototype.showExamples = function (a) {
            return this.preventNextRender = this.formHasChanged(), this.navigate($(a.currentTarget).attr("href"), {
                trans: "right"
            })
        }, d.prototype.updateReasonCharCounter = function (a) {
            var b;
            return b = parseInt(this.f.reason.attr("maxlength"), 10), this.reasonCharCounter.text(b - this.f.reason.val().length)
        }, d.prototype.updateRequestAndContinue = function () {
            var a, b, c, d;
            d = ["reason", "country_code", "email", "phone_number"];
            for (b = 0, c = d.length; b < c; b++) a = d[b], this.f[a].length > 0 ? this.request[a] = this.f[a].val() : this.request[a] = function () {
                try {
                    return this.currentMember[a]
                } catch (b) {}
            }.call(this);
            return this.request.passcode == null && this.params.passcode != null && this.params.passcode !== "" && (this.request.passcode = this.params.passcode), this.request.approximate_length = this.f.approximate_length.val(), this.request.save(), this.trackEvent("Submitted precall", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate,
                reason: this.request.reason,
                approximate_length_of_cal: this.request.approximate_length,
                phone_number: "" + this.request.country_code + this.request.phone_number,
                email: this.request.email
            }), this.navigate("/" + this.expert.screen_name + "/availability", {
                trans: "right"
            })
        }, d.prototype["continue"] = function () {
            if (this.isValid()) return this.preventNextRender = !1, this.currentMember != null ? Call.remoteValidation({
                id: this.expert.id,
                success: this.updateRequestAndContinue
            }) : this.updateRequestAndContinue()
        }, d
    }(ClarityPanel), Clarity.Panels.ExpertCallAvailability = function (b) {
        function d() {
            this["continue"] = a(this["continue"], this), this.saveAndContinue = a(this.saveAndContinue, this), this.saveRequest = a(this.saveRequest, this), this.render = a(this.render, this), this.stop = a(this.stop, this), this.start = a(this.start, this), d.__super__.constructor.apply(this, arguments), this.addButton("Continue", this["continue"]).addClass("submit right")
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.autoRefresh = !1, d.prototype.title = "Availability", d.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.params.screen_name + "/precall"
            },
            onClick: function () {
                return this.saveRequest(), !1
            }
        }, d.prototype.className = "call-availability experts preCall showView", d.prototype.events = {
            "tap .continue": "continue"
        }, d.prototype.fields = {
            timezone: {
                timezone: !0
            }
        }, d.prototype.start = function () {
            var a = this;
            return Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                a.expert = b
            })
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed availability", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                hourly_rate: this.expert.hourly_rate
            })
        }, d.prototype.stop = function () {
            if (this.request != null) return this.request.save()
        }, d.prototype.render = function () {
            var a, b, c = this;
            this.request = Clarity.TempRequest.load(!1);
            if (!this.request.isSet()) {
                this.navigate("/" + this.params.screen_name + "/precall", {
                    trans: "left"
                });
                return
            }
            return this.currentMember != null && this.request.timezone != null && (this.currentMember.timezone = this.request.timezone), this.html(JST["app/views/call_request/availability"]({
                expert: this.expert
            })), b = this.request.timezone, this.appendTimezones(this.f.timezone, function () {
                return c.f.timezone.find("option").each(function () {
                    return $(this).text($(this).text().replace(/^GMT/, ""))
                }), c.f.timezone.find("option[value='" + b + "']").attr("selected", !0)
            }), a = (this.request.suggestedTimes() || []).length > 0, this.pickers = new Clarity.TimePickers({
                el: this.$(".timepickers"),
                suggested_times: this.request.suggestedTimes(),
                approximate_length: this.request.approximate_length,
                dirty: a,
                auto_cascade: !0
            })
        }, d.prototype.saveRequest = function () {
            if (this.request != null) return this.request.timezone = this.f.timezone.val(), this.request.timezone_display = this.f.timezone.find("option:selected").text(), this.request.suggestedTimes(this.pickers.selectedTimes()), this.request.expert_screen_name = this.expert.screen_name, this.request.save()
        }, d.prototype.saveAndContinue = function () {
            if (this.isValid()) return this.saveRequest(), this.trackEvent("Submitted availability", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate
            }), this.navigate("/" + this.expert.screen_name + "/confirm", {
                trans: "right"
            })
        }, d.prototype["continue"] = function () {
            return this.currentMember != null ? Call.remoteValidation({
                id: this.expert.id,
                success: this.saveAndContinue
            }) : this.saveAndContinue()
        }, d
    }(ClarityPanel), Clarity.Panels.ExpertCallConfirm = function (b) {
        function d() {
            this.createCall = a(this.createCall, this), this.requires_payment = a(this.requires_payment, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.autoRefresh = !1, d.prototype.requires_payment = function () {
            var a;
            return a = Clarity.TempRequest.load(!1), this.expert == null || a.testing ? !1 : this.expert && !this.expert.isFree(this.currentMember, a.passcode)
        }, d.prototype.title = "Confirm", d.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.params.screen_name + "/availability"
            },
            onClick: function () {
                return this.request != null && this.request.save(), !1
            }
        }, d.prototype.className = "call-confirmation", d.prototype.events = {
            "tap .edit-call": "navigateToPrecall",
            "tap .edit-cc": "navigateToCC",
            "tap .edit-availability": "navigateToAvailability",
            "tap .request-call": "continue"
        }, d.prototype.start = function (a) {
            var b = this;
            return Member.findOrFetch(a.screen_name, {
                wait: !0
            }, function (c) {
                return b.expert = c, a.model = b.expert, Call.remoteValidation({
                    id: b.expert.id,
                    error: function () {
                        return b.navigate("/" + a.screen_name, {
                            trans: "left"
                        })
                    }
                })
            })
        }, d.prototype.analytics = function () {
            var a;
            return a = Clarity.TempRequest.load(!1), this.trackEvent("Viewed confirmation", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate,
                approximate_length_of_call: a.approximate_length,
                reason: a.reason,
                phone_number: "" + a.country_code + a.phone_number,
                email: a.email
            })
        }, d.prototype.render = function () {
            var a;
            return this.request = Clarity.TempRequest.load(!1), this.request.isSet() ? ((a = this.request).email == null && (a.email = this.currentMember.email), this.html(JST["app/views/call_request/confirm"]({
                currentMember: this.currentMember,
                expert: this.expert,
                request: this.request
            }))) : (this.navigate("/" + this.params.screen_name + "/precall", {
                trans: "left",
                pop: !0
            }), !1)
        }, d.prototype.navigateToAvailability = function () {
            return this.request.save(), this.navigate("/" + this.expert.screen_name + "/availability", {
                trans: "left"
            })
        }, d.prototype.navigateToPrecall = function () {
            return this.request.save(), this.navigate("/" + this.expert.screen_name + "/precall", {
                trans: "left"
            })
        }, d.prototype.navigateToCC = function () {
            return this.request.save(), this.navigate("/credit-card/" + this.expert.screen_name, {
                trans: "left"
            })
        }, d.prototype["continue"] = function () {
            var a, b = this;
            return a = function () {
                return Notification.show("Your request has been sent to " + b.expert.first_name, {
                    copy: "Once your pending request is confirmed - you will receive a calendar invite with all the call details (time, number, etc) via email.",
                    link: "<a href='/calls' class='internal close'>View your call request</a>",
                    successConfirmation: !0,
                    closeOnElse: !1
                })
            }, this.trackEvent("Submitted call request", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate,
                approximate_length_of_call: this.request.approximate_length,
                reason: this.request.reason,
                testing: this.request.testing
            }), this.currentMember.country_code = this.request.country_code, this.currentMember.phone_number = this.request.phone_number, this.currentMember.timezone = this.request.timezone, this.currentMember.stripe_token = null, this.currentMember.save(), this.createCall(), Clarity.TempRequest.clear(), this.navigateBackToLastCheckpoint({
                default_path: "/" + this.expert.screen_name,
                call: this.call
            }), a()
        }, d.prototype.createCall = function () {
            var a, b = this;
            return this.call = new Call({
                reason: this.request.reason,
                expert_id: this.expert.id,
                source: this.params.source,
                passcode: this.request.passcode,
                suggested_times: function () {
                    var b, c, d, e;
                    d = this.request.suggestedTimes(), e = [];
                    for (b = 0, c = d.length; b < c; b++) a = d[b], e.push(a.format("YYYY-MM-DD[T]HH:mm:ss"));
                    return e
                }.call(this),
                approximate_length: this.request.approximate_length,
                testing: this.request.testing
            }), this.call.save({
                error: function (a, b, c) {
                    return Alert.error(App.railsErrorsAsString(a.responseText))
                }
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Helpers.Calls = function () {
        function a() {}
        return a.initAndListenForCallUpdates = function () {
            return Member.subscribeTo("lists", function (a) {
                var b;
                return Spine.Ajax.disable(function () {
                    return Member.current().updateAttributes(a), Call.each(function (a) {
                        return a.updateAttribute("lists", null)
                    })
                }), Spine.trigger("listUpdated"), (b = ClarityPanel.activating) != null ? b.setCallsBadge() : void 0
            })
        }, a
    }(), Clarity.CallListItem = function (b) {
        function d(b) {
            this.render = a(this.render, this), d.__super__.constructor.call(this, b), this.call = b.call
        }
        return c(d, b), d.prototype.render = function () {
            return this.html(JST["app/views/calls/_item"]({
                call: this.call
            }))
        }, d
    }(Spine.Controller), Clarity.CallListPanel = function (b) {
        function d() {
            this.fetchMoreHistoryCalls = a(this.fetchMoreHistoryCalls, this), this.render = a(this.render, this), this.start = a(this.start, this);
            var b = this;
            d.__super__.constructor.apply(this, arguments), this.header.addClass("with-tabs").append(JST["app/views/calls/header-tabs"]()), this.className === "calls-pending" ? this.$(".header-tabs > .pending").addClass("active") : this.className === "calls-history" && this.$(".header-tabs > .new-history").addClass("active"), App.header.setHeight(this, 91), Spine.bind("listUpdated", function () {
                return b.isActive() ? b.restart() : b.touch({
                    dirty: !0
                })
            })
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.defaultFooter = {
            show: !0,
            activeItem: "callList"
        }, d.prototype.parentEvents = {
            "tap .dial-conf": "stopPropagation",
            "tap [data-action=show-more]": "fetchMoreHistoryCalls"
        }, d.prototype.stopPropagation = function (a) {
            return a.stopImmediatePropagation()
        }, d.prototype.updateBadge = function (a, b) {
            var c;
            return c = $.roundToK(b, 1e3), b > 0 ? this.$(a).text(c).show() : this.$(a).hide()
        }, d.prototype.updateSocialShareLinks = function () {
            var a, b, c;
            return a = encodeURIComponent("Need advice? Give me a call. #clarity"), c = encodeURIComponent("" + FRIENDLY_HOST + "/" + this.currentMember.screen_name), $(".twitter").attr("href", "https://twitter.com/share?text=" + a + "&url=" + c), c = encodeURIComponent("" + FRIENDLY_HOST + "/" + this.currentMember.screen_name), b = encodeURIComponent("Need advice? Give me a call. #clarity"), $(".linkedin").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + c + "&title=" + b)
        }, d.prototype.updateCounts = function () {
            if (this.currentMember) return this.updateBadge(".header-tabs > .pending .badge", this.currentMember.pending_calls_count + this.currentMember.scheduled_calls_count), this.updateBadge(".header-tabs > .new-history .badge", this.currentMember.historical_calls_count)
        }, d.prototype.start = function (a) {
            var b = this;
            if (this.currentMember == null) return;
            return this.updateCounts(), this.calls = [], Call.fetchCallList(this.list, function (a) {
                return b.calls = a
            })
        }, d.prototype.render = function () {
            return this.className === "calls-pending" ? this.calls = this.calls.sort(Call.magicSort) : this.calls = this.calls.sort(Call.updatedSort), this.html(JST["app/views/calls/index"]({
                calls: this.calls,
                list: this.list
            })), this.updateCallItems(), this.updateCounts(), this.updateSocialShareLinks()
        }, d.prototype.updateCallItems = function () {
            var a, b, c, d, e;
            this.call_items || (this.call_items = {}), e = this.calls;
            for (c = 0, d = e.length; c < d; c++) a = e[c], b = this.call_items[a.id] != null ? this.call_items[a.id] : new Clarity.CallListItem({
                call: a
            }), this.call_items[a.id] = b, b.call = a, b.render(), this.$(".call-items [data-id=" + a.id + "]").size() === 0 && (this.$(".call-items").find("li.category").last().text() !== b.el.find("li:first-child").text() && this.$(".call-items").append(b.el.find("li:first-child")), this.$(".call-items").append(b.el.find("li:last-child")));
            if (this.className === "calls-history") {
                this.$(".show-more").parent().remove();
                if (this.calls.length < this.currentMember.historical_calls_count) return this.$(".call-items").append(JST["app/views/calls/_show_more"]())
            }
        }, d.prototype.fetchMoreHistoryCalls = function () {
            var a = this;
            return Notification.showSpinner(), Call.fetchCallList("history", function (b) {
                var c, d, e;
                for (d = 0, e = b.length; d < e; d++) c = b[d], a.calls.push(c);
                return a.updateCallItems(), Notification.hide()
            }, this.calls.length)
        }, d
    }(ClarityPanel), Clarity.Panels.CallsPending = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.prototype.title = "Pending", b.prototype.className = "calls-pending", b.prototype.list = "pending", b.prototype.prompt_for_old_call_rating = !0, b
    }(Clarity.CallListPanel), Clarity.Panels.CallsHistory = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments), this.rateButton = this.addButton("Rate All", this.navigateToLatestRatingsFlow).addClass("right").hide()
        }
        return c(b, a), b.prototype.title = "History", b.prototype.className = "calls-history", b.prototype.list = "history", b.prototype.render = function () {
            return b.__super__.render.apply(this, arguments), this.rateButton.toggle(Member.current().unrated_calls_count > 0)
        }, b.prototype.navigateToLatestRatingsFlow = function () {
            return this.navigate("/calls/history/rate", {
                trans: "right"
            })
        }, b
    }(Clarity.CallListPanel), Clarity.Panels.CallDetails = function (b) {
        function d() {
            this.render = a(this.render, this), this.start = a(this.start, this);
            var b = this;
            d.__super__.constructor.apply(this, arguments), Call.bind("change", function (a) {
                if (b.call != null && a.id === b.call.id) return b.touch()
            }), Spine.bind("listUpdated", function () {
                if (b.call) return Call.get(b.call.id, function (a) {
                    return b.call = a, b.touch()
                })
            })
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.requires_call_rating = !1, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.className = "call-details", d.prototype.title = "Call Details", d.prototype.backButton = {
            defaultPath: function () {
                var a;
                return this.call == null ? "/calls" : (a = this.call.status()) === "canceled" || a === "completed" || a === "expired" ? "/calls/history" : "/calls"
            },
            force: function () {
                return Clarity.stack.includeAnyOf("ThreadView")
            }
        }, d.prototype.elements = {
            ".star-rating": "starRating"
        }, d.prototype.events = {
            "tap .cancel-call-toggle > .cancel": "cancelCall",
            "tap [data-time-index]": "acceptSuggested"
        }, d.prototype.start = function () {
            var a, b = this;
            return a = function (a) {
                if (Member.current() != null) return a.globalHandlerCancelled = !0, b.navigate("/search"), setTimeout(function () {
                    return Alert.error("You do not have access to this <strong>call</strong>. Please contact <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a> if you feel this was in error.")
                }, 300)
            }, Call.findOrFetch(this.params.call_id, {
                wait: !0,
                error: a
            }, function (a) {
                b.call = a, b.seeker = a.seeker(), b.expert = a.expert(), b.other_party = a.otherParty();
                if (b.params.unix_timestamp) return b.accept(moment.unix(b.params.unix_timestamp)), Spine.Route.navigate("/calls/" + b.params.call_id, !1)
            })
        }, d.prototype.render = function () {
            var a;
            return this.call = this.call.reload(), a = this.add_to_calendar != null && this.add_to_calendar.el.hasClass("highlighted"), this.html(JST["app/views/calls/details"]({
                currentMember: this.currentMember,
                call: this.call,
                other_party: this.other_party,
                is_expert: this.expert.id === this.currentMember.id
            })), this.initializeCancelDropdown(), this.add_to_calendar_dropdown_header = this.initializeCalendarDropdown(), a && this.add_to_calendar_dropdown_header.el.addClass("highlighted"), this.starRating.each(function () {
                return (new Clarity.Helpers.StarRating({
                    el: $(this),
                    disabled: !0,
                    rating: $(this).data("stars")
                })).render()
            })
        }, d.prototype.initializeCancelDropdown = function () {
            var a, b, c, d = this;
            return a = this.$(".cancel-call-toggle"), b = new Clarity.Dropdown({
                el: a,
                onExpand: function () {
                    return d.content.scrollTo(a, {
                        duration: 0
                    })
                }
            }), c = a.find(".dropdown-header").detach(), a.before(c), c.on("tap", function (d) {
                return b.toggle(d), c.toggleClass("expanded", a.hasClass("expanded"))
            })
        }, d.prototype.initializeCalendarDropdown = function () {
            var a, b, c, d = this;
            return a = this.$(".add-to-calendar-toggle"), b = new Clarity.AddToCalendar({
                el: a
            }), c = a.find(".dropdown-header").detach(), a.parents(".call-item").before(c), c.on("tap", function (d) {
                return b.toggle(d), c.toggleClass("expanded", a.hasClass("expanded"))
            }), c
        }, d.prototype.cancelCall = function (a) {
            var b, c = this;
            return b = $(a.currentTarget).text(), Notification.show("<p>Are you sure you want to cancel this call for the following reason?</p><p>&quot;" + b + "&quot;</p>", {
                confirmation: !0,
                buttonText: "Yes",
                closeOnElse: !1,
                wide: !0,
                onClose: function (a) {
                    if ($(a.currentTarget).hasClass("ok")) return c.call.updateToCanceled(b)
                }
            })
        }, d.prototype.acceptSuggested = function (a) {
            var b;
            return b = $(a.currentTarget).data("time-index"), this.accept(moment(this.call.suggested_times[b]))
        }, d.prototype.accept = function (a) {
            var b = this;
            return a < new Date ? Alert.error("Scheduled calls must occur in the future") : (Notification.showSpinner("Accepting..."), this.call.updateScheduledAt(a.format(), {
                success: function () {
                    var a;
                    return Member.current().calls_pending_my_confirmation_count -= 1, Notification.hideSpinner(), b.add_to_calendar.el.addClass("highlighted"), setTimeout(function () {
                        return b.add_to_calendar.el.removeClass("highlighted")
                    }, 1e4), a = b.call.expert_access_code != null ? b.call.expert_access_code : b.call.seeker_access_code, Alert.notify("Scheduled: " + b.call.scheduledDisplay({
                        hideTimezone: !0
                    }) + "<br/>" + CONNECTION_NUMBER + ", Access code: " + a)
                },
                error: function (a) {
                    return Alert.error(App.railsErrorsAsString(a.responseText)), Notification.hideSpinner()
                }
            }))
        }, d
    }(ClarityPanel), Clarity.Panels.CallSuggestTimes = function (b) {
        function d() {
            this.submitNewTimes = a(this.submitNewTimes, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.addButton("Submit", this.submitNewTimes).addClass("submit right")
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.backButton = {
            label: "Cancel",
            defaultPath: function () {
                return "/calls/" + this.params.call_id
            }
        }, d.prototype.events = {
            "tap .btn": "submitNewTimes"
        }, d.prototype.className = "suggest-times", d.prototype.title = "Alternative Times", d.prototype.fields = {
            timezone: {
                timezone: !0
            }
        }, d.prototype.start = function () {
            var a = this;
            return Call.findOrFetch(this.params.call_id, {
                wait: !0
            }, function (b) {
                return a.call = b, a.other_party = b.otherParty()
            })
        }, d.prototype.render = function () {
            var a = this;
            return this.html(JST["app/views/calls/suggest-times"]({
                call: this.call,
                other_party: this.other_party
            })), this.appendTimezones(this.f.timezone, function () {
                return a.f.timezone.find("option").each(function () {
                    return $(this).text($(this).text().replace(/^GMT/, ""))
                })
            }), this.pickers = new Clarity.TimePickers({
                el: this.$(".timepickers"),
                suggested_times: this.call.suggestedTimes(),
                dirty: !1
            })
        }, d.prototype.submitNewTimes = function () {
            var a = this;
            return Notification.show("Are you sure you want to submit new times for review?", {
                confirmation: !0,
                buttonText: "Yes",
                onClose: function (b) {
                    if (!$(b.currentTarget).hasClass("ok")) return;
                    return a.currentMember.timezone = a.f.timezone.val(), a.currentMember.save(), a.call.updateSuggestedTimes(a.pickers.selectedTimes()), a.navigateBack(), Alert.notify("Your suggested times have been sent to " + a.other_party.first_name + " for review.")
                }
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.CharityAdd = function (b) {
        function d() {
            this.add = a(this.add, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.addButton("Add", this.add).addClass("right")
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.backButton = !0, d.prototype.defaultBackPath = "/account/edit", d.prototype.title = "Add Charity", d.prototype.className = "getting-started add-charity", d.prototype.elements = {
            ".website": "charityWebsite"
        }, d.prototype.events = {
            "submit form": "add"
        }, d.prototype.render = function () {
            return this.html(JST["app/views/charities/add"](this.currentMember))
        }, d.prototype.add = function (a) {
            var b, c;
            a && a.preventDefault(), c = this.charityWebsite.val();
            if (c === "" || this.charityWebsite[0].checkValidity() === !1) {
                Alert.error("Please enter a valid charity website");
                return
            }
            return b = this.currentMember, this.charity = Charity.create({
                website: c,
                name: "Loading Charity..",
                "default": !0
            }, {
                success: function () {
                    return b.charity_id = this.id, b.save(), Member.trigger("charityUpdated")
                }
            }), this.navigateBack()
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.ExpertiseList = function (b) {
        function d() {
            this.navigateToAddExpertise = a(this.navigateToAddExpertise, this), this.navigateToEditExpertise = a(this.navigateToEditExpertise, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.nextButton = this.addButton("Next", this.navigateToNextStep).addClass("right").hide(), Expertise.bind("created change refresh destroy", this.touch)
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.autoRefresh = !1, d.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, d.prototype.backButton = {
            defaultPath: "/account/profile"
        }, d.prototype.title = "Areas of Expertise", d.prototype.className = "account expertise-list", d.prototype.events = {
            "tap .add-expertise": "navigateToAddExpertise",
            "tap [data-expertise-id]": "navigateToEditExpertise"
        }, d.prototype.analytics = function () {
            if (this.isOnboardingExpert()) return this.trackEvent("Viewed onboarding step 4", {
                expert: this.isOnboardingExpert()
            })
        }, d.prototype.render = function () {
            return this.setOnboardingTitle(4, "Areas of Expertise"), this.nextButton.toggle(this.isOnboardingExpert()), this.expertise = this.currentMember.expertise().all(), this.expertise = this.expertise.sort(Expertise.titleSort), this.html(JST["app/views/expertise/expertise"]({
                currentMember: this.currentMember,
                expertise: this.expertise,
                is_onboarding_expert: this.isOnboardingExpert()
            }))
        }, d.prototype.navigateToEditExpertise = function (a) {
            var b;
            return b = $(a.currentTarget).data("expertise-id"), this.navigate("/account/expertise/" + b, {
                trans: "right"
            })
        }, d.prototype.navigateToAddExpertise = function () {
            return this.navigate("/account/expertise/add", {
                trans: "right"
            })
        }, d.prototype.navigateToNextStep = function () {
            return this.navigateToNextOnboardingStep(4)
        }, d
    }(ClarityPanel), Clarity.Panels.ExpertiseEdit = function (b) {
        function d() {
            this.removeExpertise = a(this.removeExpertise, this), this.saveExpertise = a(this.saveExpertise, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.addButton("Save", this.saveExpertise).addClass("right submit")
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.autoRefresh = !1, d.prototype.backButton = {
            defaultPath: "/account/expertise"
        }, d.prototype.title = "Edit Expertise", d.prototype.className = "account edit-expertise", d.prototype.events = {
            "tap .save-expertise": "saveExpertise",
            "tap .remove-expertise": "removeExpertise"
        }, d.prototype.fields = {
            title: {
                required: !0,
                name: "Expertise",
                length: {
                    max: 50
                }
            },
            description: {
                required: !0
            },
            link: {
                link: {
                    required: !1
                }
            }
        }, d.prototype.render = function () {
            return this.params.expertise_id ? (this.expertise = this.currentMember.expertise().findByAttribute("id", parseInt(this.params.expertise_id)), this.setTitle("Edit Expertise")) : (this.expertise = new Expertise, this.setTitle("Add Expertise")), this.html(JST["app/views/expertise/edit"]({
                expertise: this.expertise
            }))
        }, d.prototype.saveExpertise = function () {
            if (this.isValid()) return this.expertise.title = this.f.title.val(), this.expertise.link = this.f.link.val(), this.expertise.description = this.f.description.val(), this.expertise.member_id = this.currentMember.id, this.expertise.save(), this.navigateBack()
        }, d.prototype.removeExpertise = function () {
            var a = this;
            return Notification.show("Are you sure you want to remove this expertise?", {
                confirmation: !0,
                buttonText: "Yes",
                onClose: function (b) {
                    if ($(b.currentTarget).hasClass("ok")) return a.expertise.destroy(), a.navigateBack()
                }
            })
        }, d
    }(ClarityPanel), Clarity.Panels.ExpertiseExample = function (b) {
        function d() {
            this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.backButton = {
            defaultPath: "/account/expertise"
        }, d.prototype.title = "Example Expertise", d.prototype.className = "account example-expertise", d.prototype.render = function () {
            return this.html(JST["app/views/expertise/example"]())
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.ExpertDonate = function (b) {
        function d() {
            this["continue"] = a(this["continue"], this), this.render = a(this.render, this), this.start = a(this.start, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.backButton = {
            label: "Cancel",
            defaultPath: "/search"
        }, d.prototype.title = "Make a Donation", d.prototype.className = "experts donate preCall showView contact-card", d.prototype.elements = {
            ".amount": "amount"
        }, d.prototype.events = {
            "tap .continue": "continue"
        }, d.prototype.start = function (a) {
            var b = this;
            return Call.fetch({
                id: a.guid,
                wait: !0,
                complete: function () {
                    return b.call = Call.findByAttribute("guid", a.guid), Member.findOrFetch(b.call.expert_id, {
                        wait: !0
                    }, function (a) {
                        return b.expert = a, b.defaultBackPath = "/" + b.expert.screen_name
                    }), Charity.findOrFetch(b.call.charity_id, {
                        wait: !0
                    }, function (a) {
                        return b.charity = a
                    })
                }
            })
        }, d.prototype.render = function () {
            var a;
            return this.html(JST["app/views/calls/donate"]({
                call: this.call,
                expert: this.expert,
                charity: this.charity,
                member: this.currentMember
            })), a = Math.ceil(parseInt(200 / 60 / 60 * this.call.duration) / 5) * 5, a < 10 && (a = 10), this.amount.val("$" + a + ".00")
        }, d.prototype["continue"] = function () {
            var a = this;
            return this.call.donation = this.amount.val().replace(/\$|,/g, ""), this.call.donation >= 10 ? this.currentMember.hasCreditCard() ? (Notification.showSpinner("Submitting..."), this.call.save({
                success: function () {
                    return Notification.hide(), Notification.show("Thanks! " + a.expert.first_name + " will be notified of your donation.", {
                        onClose: function () {
                            return a.navigate("/")
                        }
                    })
                },
                error: function () {
                    return Notification.hide(), Alert.error("We can't process this donation. Please try again, or contact                       <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a>.")
                }
            })) : (Clarity.panels.CreditCardRequirement.afterSubmit = function (b) {
                return Notification.show("Thanks! " + a.expert.first_name + " will be notified of your donation.", {
                    onClose: function () {
                        return a.navigate("/")
                    }
                }), a.call.save()
            }, this.navigate("/credit-card", {
                trans: "left"
            })) : Alert.error("The minimum donation is $10")
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.ExpertRelated = function (b) {
        function d() {
            this.click = a(this.click, this), this.render = a(this.render, this), this.start = a(this.start, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.params.screen_name
            }
        }, d.prototype.className = "experts list listView recommendations", d.prototype.events = {
            "click .member-item": "click"
        }, d.prototype.start = function () {
            var a = this;
            return Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                return a.expert = b, Member.Basic.fetchRelated(a.expert.id, function (b) {
                    a.members = b
                })
            })
        }, d.prototype.render = function () {
            return this.setTitle("Related to " + this.expert.name()), this.html(JST["app/views/experts/items"]({
                experts: this.members,
                callout: !1
            }))
        }, d.prototype.click = function (a) {
            var b;
            if (!(b = $(a.currentTarget).data("screen_name"))) return;
            return this.navigate("/" + b, {
                trans: "right"
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.ExpertShare = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.className = "experts showView contact-card expert-share", c.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.params.screen_name
            }
        }, c.prototype.title = "Share Profile", c.prototype.events = {
            "tap [data-action=native-twitter-share]": "nativeTwitterShare",
            "tap [data-action=set-a-passcode]": "navigateToSetAPasscode"
        }, c.prototype.elements = {
            ".copy-expert-info": "copyButton",
            ".member-info": "memberInfo"
        }, c.prototype.start = function () {
            var a = this;
            return Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                return a.expert = b
            })
        }, c.prototype.render = function () {
            var a, b = this;
            return a = "" + FRIENDLY_HOST + "/" + this.expert.screen_name, this.html(JST["app/views/experts/share"]({
                currentMember: this.currentMember,
                expert: this.expert,
                url: a
            })), this.dataBehaviorTruncate(), this.copyButton.zclip({
                path: "/js/ZeroClipboard.swf",
                copy: this.memberInfo.text(),
                afterCopy: function () {
                    return b.copyButton.addClass("copied"), setTimeout(function () {
                        return b.copyButton.removeClass("copied")
                    }, 2e3)
                }
            })
        }, c.prototype.nativeTwitterShare = function () {
            return window.plugins.twitter.composeTweet(null, null, this.expert.tweetText())
        }, c.prototype.navigateToSetAPasscode = function (a) {
            return a.preventDefault(), a.stopImmediatePropagation(), this.currentMember.passcode != null && this.currentMember.passcode !== "" ? this.navigate("/account/passcode", {
                trans: "right"
            }) : this.navigate("/account/passcode/edit", {
                trans: "right"
            })
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.ExpertShow = function (b) {
        function d() {
            this.updateFooterStatus = a(this.updateFooterStatus, this), this.toggleBio = a(this.toggleBio, this), this.renderFavorite = a(this.renderFavorite, this), this.render = a(this.render, this), this.call = a(this.call, this), this.start = a(this.start, this);
            var b = this;
            d.__super__.constructor.apply(this, arguments), this.settingsButton = this.addButton("", function () {
                return b.navigate("/account", {
                    trans: "right"
                })
            }).addClass("right"), this.settingsButton.prepend("<i class='icon-small-gear'></i>").addClass("settings-gear"), this.shareButton = this.addButton("", function () {
                return b.navigate("/" + b.params.screen_name + "/share", {
                    trans: "right"
                })
            }).addClass("right"), this.shareButton.prepend("<i class='icon-small-share'></i>").addClass("share-icon"), MemberFavorite.bind("change refresh", this.renderFavorite)
        }
        return c(d, b), d.prototype.className = "experts showView contact-card", d.prototype.scroll = function () {
            return /\/reviews/.test(Spine.Route.path) ? "custom" : "top"
        }, d.prototype.customScroll = function () {
            var a;
            return a = this.$(".reviews-header").offset(), a != null ? a.top - 55 : null
        }, d.prototype.prompt_for_old_call_rating = function () {
            var a, b;
            return ((a = this.currentMember) != null ? a.screen_name : void 0) === ((b = this.params) != null ? b.screen_name : void 0)
        }, d.prototype.stack = {
            checkpoint: !0
        }, d.prototype.backButton = {
            show: !0
        }, d.prototype.defaultFooter = {
            activeItem: function () {
                var a, b;
                return ((a = this.currentMember) != null ? a.screen_name : void 0) === ((b = this.params) != null ? b.screen_name : void 0) ? "my-page" : Clarity.stack.includeAnyOf("SearchLanding", "SearchResults", "ListTopicMembers") ? "search" : Clarity.stack.includeAnyOf("Favorites") ? "favorites" : !1
            },
            show: function () {
                var a, b, c;
                return ((a = this.currentMember) != null ? a.screen_name : void 0) === ((b = this.params) != null ? b.screen_name : void 0) && (c = this.settingsButton) != null && c.show(), Clarity.stack.includeAnyOf("CallsPending", "CallsScheduled", "CallsHistory", "CallDetails", "RateAndReview") ? !1 : !0
            }
        }, d.prototype.events = {
            "tap [data-action=call-now]": "call",
            "tap [data-action=ask-question]": "askQuestion",
            "tap [data-action=edit-profile]": "editProfile",
            "tap .bio": "toggleBio",
            "tap [data-action=toggle-vacation-subscription]": "toggleVacationSubscription",
            "tap [data-action=toggle-favorite]": "toggleFavorite"
        }, d.prototype.elements = {
            "#member-introduction": "memberIntroduction",
            "#member-summary": "memberSummary",
            "#member-introduction .bio": "memberBio",
            "#member-introduction .more": "seeMoreBioLink",
            "#member-introduction .icon-more": "seeMoreIcon",
            "#member-introduction .more-wrapper": "seeMoreBioWrapper",
            ".bio": "bioEl"
        }, d.prototype.toggleVacationSubscription = function () {
            var a, b;
            return this.currentMember != null ? (this.currentMember.toggleVacationSubscription(this.expert.id), this.currentMember.isVacationSubscribedTo(this.expert.id) ? a = "You will receive a notification via Clarity Inbox when " + this.expert.first_name + "'s status is changed from &quot;Unavailable&quot; to &quot;Available&quot;" : a = "You are no longer subscribed to " + this.expert.first_name + "'s availability updates.", Notification.show(a, {
                wide: !0,
                closeOnElse: !1
            }), this.render()) : (this.toggleVacationSubscriptionAfterAuth = !0, Clarity.auth.show({
                expert: (b = this.params) != null ? b.model : void 0,
                screen: "login",
                panel: this,
                origin: "/" + this.expert.screen_name + "/tvs",
                hideOnlyOnClose: !0
            }))
        }, d.prototype.toggleFavorite = function () {
            return this.currentMember != null ? MemberFavorite.toggle(this.expert) : (this.toggleFavoriteAfterAuth = !0, Clarity.auth.show({
                screen: "login",
                panel: this,
                origin: "/" + this.expert.screen_name + "/tfv",
                hideOnlyOnClose: !0
            }))
        }, d.prototype.editProfile = function () {
            return this.navigate("/account/profile", {
                trans: "right"
            })
        }, d.prototype.askQuestion = function () {
            return this.navigate("/" + this.params.screen_name + "/ask", {
                trans: "right"
            })
        }, d.prototype.start = function () {
            var a = this;
            return this.currentMember != null && this.currentMember.screen_name === this.params.screen_name && /\/reviews/.test(Spine.Route.path) && delete Member.records[this.currentMember.id], Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                a.expert = b, a.params.call_prompt && Alert.notify("Direct call links are no longer active. Please                    <a href='/inbox/start/" + a.expert.id + "' class='internal'>message</a>                    " + a.expert.first_name + " and ask " + a.expert.preposition + " to schedule a call."), a.expert.charity_id && Charity.findOrFetch(a.expert.charity_id, {
                    wait: !0
                }), !a.currentMember && !App.cookie("referral_id") && App.cookie("referral_id", "" + a.expert.id + ".cpc"), a.params.passcode != null && a.params.passcode !== "" && a.expert.verifyPasscode({
                    passcode: a.params.passcode,
                    success: function () {
                        return Alert.notify("The discount code '" + a.params.passcode + "' has set the rate to free."), a.expert.hourly_rate = 0, a.expert.save({
                            ajax: !1
                        }), a.passcode = a.params.passcode, a.render()
                    },
                    error: function (b) {
                        if (b != null && b.status === null) return;
                        return Alert.error("'" + a.params.passcode + "' is not a valid discount code"), a.passcode = null
                    }
                });
                if (a.currentMember != null) return a.callValidationError = null, Call.remoteValidation({
                    id: a.expert.id,
                    preventDefault: !0,
                    error: function (b) {
                        return a.callValidationError = b
                    }
                })
            }), $.ajax({
                url: "/api/register_profile_page_view",
                type: "GET",
                data: {
                    screen_name: this.params.screen_name
                }
            })
        }, d.prototype.stop = function () {
            return this.$(".video-embed").html(this.$(".video-embed").html())
        }, d.prototype.call = function () {
            return this.callValidationError != null ? Alert.error(this.callValidationError) : this.navigate("/" + this.expert.screen_name + "/precall", {
                trans: "right",
                passcode: this.params.passcode,
                source: this.params.source,
                force: !0
            })
        }, d.prototype.render = function () {
            var a;
            return Clarity.TempRequest.clear(), this.expert = this.expert.reload(), this.shareButton.show(), $("h2", this.header).toggleClass("logo", !0), a = new Clarity.Views.Profile({
                expert: this.expert,
                currentMember: this.currentMember,
                passcode: this.passcode
            }), this.html(a.compile()), new Clarity.Dropdown({
                el: this.$(".verified-networks")
            }), this.$(".video-embed").ratioKeeper(.6), this.toggleBio(), this.updateFooterStatus(), Member.current() != null && (this.toggleVacationSubscriptionAfterAuth || /tvs$/.test(Spine.Route.path)) && (this.toggleVacationSubscriptionAfterAuth = !1, this.navigate("/" + this.expert.screen_name, !1), this.toggleVacationSubscription()), Member.current() != null && (this.toggleFavoriteAfterAuth || /tfv$/.test(Spine.Route.path)) && (this.toggleFavoriteAfterAuth = !1, this.navigate("/" + this.expert.screen_name, !1), this.toggleFavorite()), this.renderFavorite()
        }, d.prototype.renderFavorite = function () {
            var a;
            a = this.$(".makefavorite");
            if (this.expert && MemberFavorite.includes(this.expert)) return a.attr("title", "Remove from favorites").addClass("active");
            if (this.expert) return a.attr("title", "Save to favorites").removeClass("active")
        }, d.prototype.analytics = function (a) {
            var b, c, d, e, f;
            b = {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate,
                passcode: this.params.passcode
            }, b.has_charity = this.expert.charity() != null, b.has_video = this.expert.video_embed_code != null, b.areas_of_expertise_count = this.expert.expertise().all().length, b.reviews_count = this.expert.reviewsWithComment().length, b.profile_views = this.expert.profile_page_views_count, this.expert.average_response_time && (b.average_response_time_hrs = moment.duration(this.expert.average_response_time, "seconds").asHours()), this.expert.average_call_duration && (b.average_call_duration_mins = moment.duration(this.expert.average_call_duration, "seconds").asMinutes()), b.verified_count = 0, f = ["twitter", "facebook", "linkedin"];
            for (d = 0, e = f.length; d < e; d++) c = f[d], b["verified_" + c] = this.expert.public_social_connections[c] != null, this.expert.public_social_connections[c] != null && (b.verified_count += 1);
            return this.trackEvent("Viewed profile", b)
        }, d.prototype.toggleBio = function () {
            var a, b;
            a = this.$(".bio-content");
            if (this.bioEl.hasClass("truncated")) return a.html(this.expert.formatted_bio), this.bioEl.toggleClass("truncated untruncated");
            b = [];
            while (a.outerHeight() > 50) a.text(function (a, b) {
                return b.replace(/\W*\s(\S)*\W*\s(\S)*$/, "…")
            }), this.bioEl.addClass("truncated"), b.push(this.bioEl.removeClass("untruncated"));
            return b
        }, d.prototype.updateFooterStatus = function () {
            return this.params.from_call ? (this.settingsButton.hide(), this.shareButton.css("right", 0), this.$(".hourly_rate").hide()) : this.currentMember && this.currentMember.screen_name === this.params.screen_name ? (this.settingsButton.hide(), this.shareButton.css("right", 0), this.$(".hourly_rate").show()) : (this.settingsButton.hide(), this.shareButton.css("right", 0), this.$(".hourly_rate").show())
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.Favorites = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.title = "Favorites", c.prototype.defaultFooter = {
            activeItem: "favorites",
            show: !0
        }, c.prototype.watch = MemberFavorite, c.prototype.render = function () {
            var a, b, c;
            return MemberFavorite.fetching ? Notification.showSpinner() : (Notification.hideSpinner(), a = MemberFavorite.all(), a.sort(MemberFavorite.createdSort), b = function () {
                var b, d, e;
                e = [];
                for (b = 0, d = a.length; b < d; b++) c = a[b], e.push(c.favorite());
                return e
            }(), b.length ? this.html(JST["app/views/experts/items"]({
                experts: b,
                callout: !1
            })) : this.html(JST["app/views/favorites/blank_slate"]()))
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.Step1 = function (b) {
        function d() {
            this.next = a(this.next, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.addButton("Next", this.next).addClass("right")
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.backButton = {
            show: function () {
                return this.isOnboardingExpert()
            },
            defaultPath: function () {
                return this.isOnboardingExpert() ? "/expert" : null
            },
            external: !0
        }, d.prototype.className = "getting-started step1", d.prototype.elements = {
            ".screen_name label": "screen_nameLabel",
            "div.country_code": "countryCodeContainer"
        }, d.prototype.events = {
            "tap [data-action=save]": "next"
        }, d.prototype.fields = {
            screen_name: {
                required: !0,
                "with": function (a, b) {
                    return a = encodeURIComponent(a), $.get("/api/members/verify_screen_name?screen_name=" + a).success(b).error(function (a) {
                        return a.globalHandlerCancelled = !0, b("Username unavailable")
                    })
                }
            },
            phone_number: {
                required: !0,
                phoneNumber: !0
            },
            country_code: null,
            email: {
                required: !0,
                email: !0,
                uniqueEmail: !0
            },
            timezone: {
                timezone: !0
            }
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed onboarding step 1", {
                expert: this.isOnboardingExpert()
            })
        }, d.prototype.render = function () {
            return this.setOnboardingTitle(1), this.html(JST["app/views/getting_started/step1"]({
                currentMember: this.currentMember,
                is_onboarding_expert: this.isOnboardingExpert()
            })), this.f.screen_name.css({
                "padding-left": this.screen_nameLabel.width() + 4
            }), this.f.screen_name.hide(), this.delay(function () {
                return this.f.screen_name.show()
            }), this.appendTimezones(this.f.timezone)
        }, d.prototype.cancelOnboarding = function (a) {
            var b, c, d;
            return c = App.cookie("referral_id"), this.isOnboardingExpert() ? b = "/expert/step1" : b = App.cookie("origin"), d = "/authenticate" + window.location.search, /\?/.test(d) || (d += "?"), d += "&provider=" + a, c && !/rid=/i.test(d) && (d += "&rid=" + c), b != null && b !== "" && (d += "&origin=" + b), d += "&abort_onboarding=true", App.expireManifest(d)
        }, d.prototype.next = function () {
            if (this.isValid()) return this.currentMember.email = this.f.email.val(), this.currentMember.screen_name = this.f.screen_name.val(), this.currentMember.country_code = this.f.country_code.val(), this.currentMember.phone_number = this.f.country_code.val() + this.f.phone_number.val(), this.currentMember.timezone = this.f.timezone.val(), this.navigateToNextOnboardingStep(1), this.currentMember.save()
        }, d
    }(ClarityPanel), Clarity.Panels.Step2 = function (b) {
        function d() {
            this.next = a(this.next, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), Member.bind("charityUpdated", this.updateCharitiesList), Charity.bind("refresh", this.updateCharitiesList), this.addButton("Next", this.next).addClass("right")
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.autoRefresh = !1, d.prototype.backButton = {
            show: !0,
            defaultPath: function () {
                return this.isOnboardingExpert() ? "/expert/step1" : "/getting_started/step1"
            }
        }, d.prototype.className = "getting-started step2", d.prototype.events = {
            "change .charities": "charityChanged",
            "change [name='hourly_rate']": "hourlyRateChanged",
            "tap [data-action=save]": "next",
            "tap [data-action=show-examples]": "showExamples"
        }, d.prototype.fields = {
            bio: {
                required: function () {
                    return this.isOnboardingExpert()
                },
                length: {
                    min: 80
                },
                message: function (a) {
                    return a.key.match(/length/) ? "Mini-Resume is too short (80 characters minimum)." : a.key.match(/required/) ? "Mini-Resume is required." : null
                }
            },
            hourly_rate: {
                currency: {
                    onlyInteger: !0,
                    max: 999999
                }
            },
            charity: null
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed onboarding step 2", {
                expert: this.isOnboardingExpert()
            })
        }, d.prototype.render = function () {
            var a;
            if (this.params._navigatingBack && this.preventNextRender) return;
            if (!this.currentMember) return;
            return this.setOnboardingTitle(2), a = Charity.defaultList(), this.html(JST["app/views/getting_started/step2"]({
                currentMember: this.currentMember,
                charities: a,
                hourly_rate: this.selectedHourlyRate({
                    "default": 100
                }),
                hourly_rates: this.hourlyRateValues({
                    free: !1
                }),
                is_onboarding_expert: this.isOnboardingExpert()
            }))
        }, d.prototype.showExamples = function (a) {
            return this.preventNextRender = this.formHasChanged(), this.navigate($(a.currentTarget).attr("href"), {
                trans: "right"
            })
        }, d.prototype.next = function () {
            if (this.isValid()) return this.preventNextRender = !1, this.currentMember.bio = this.f.bio.val(), this.isOnboardingExpert() && (this.currentMember.hourly_rate = this.f.hourly_rate.val().replace(/\$|,/g, ""), this.currentMember.updateCharity(this.f.charity.val())), this.currentMember.save(), this.navigateToNextOnboardingStep(2)
        }, d
    }(ClarityPanel), Clarity.Panels.Step3 = function (b) {
        function d() {
            this.next = a(this.next, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.nextButton = this.addButton("Finish", this.next).addClass("right")
        }
        return c(d, b), d.prototype.backButton = {
            show: !0,
            defaultPath: function () {
                return this.isOnboardingExpert() ? "/expert/step3" : "/getting_started/step3"
            }
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed onboarding step 4", {
                expert: this.isOnboardingExpert()
            })
        }, d.prototype.className = "getting-started account social-verifications", d.prototype.render = function () {
            if (!this.currentMember) return;
            return d.__super__.render.apply(this, arguments), this.setOnboardingTitle(4), this.nextButton.text("Next"), this.html(JST["app/views/account/social_connections"]($.extend(this.currentMember, {
                providers: this.providers,
                onboard: !0
            })))
        }, d.prototype.next = function () {
            return this.isOnboardingExpert() ? this.navigateToNextOnboardingStep(4) : this.stepOutOfOnboarding()
        }, d
    }(Clarity.AccountSocialConnectionsPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.HelpPanel = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.title = "", c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.className = "help-panel", c.prototype.backButton = {
            defaultPath: function () {
                return this.params.screen_name != null ? "/" + this.params.screen_name + "/precall" : "/"
            }
        }, c
    }(ClarityPanel), Clarity.Panels.HelpPanel = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.render = function () {
            return this.html(JST["app/views/help/" + this.params.page]()), this.params.page === "reason-examples" ? this.setTitle("Examples") : this.setTitle("")
        }, c
    }(Clarity.HelpPanel), Clarity.Panels.HowItWorks = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.title = "How it Works", c.prototype.render = function () {
            return this.html(JST["app/views/help/howitworks"]())
        }, c
    }(Clarity.HelpPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Helpers.Inbox = function () {
        function a() {}
        return a.setUnreadCount = function (a) {
            return this.unreadCount = a, this.updateActivePanel()
        }, a.initAndListenForInboxUpdates = function () {
            var a = this;
            return this.setUnreadCount(Member.current().unread_conversation_count), this.memberUpdated = !1, Member.bind("memberUpdated", function () {
                if (!a.memberUpdated) {
                    a.memberUpdated = !0;
                    if (Member.current() != null) return a.setUnreadCount(Member.current().unread_conversation_count)
                }
            }), Member.subscribeTo("inbox." + Member.current().id, function (a) {
                return Thread.fetch({
                    id: a.thread_id,
                    complete: function () {
                        return Clarity.Helpers.Inbox.setUnreadCount(a.unread_conversation_count)
                    }
                })
            }, !1)
        }, a.updateActivePanel = function () {
            var a, b, c, d, e, f;
            if (ClarityPanel.activating) {
                $.isFunction(ClarityPanel.activating.setUnreadBadges) && ClarityPanel.activating.setUnreadBadges(), $.isFunction(ClarityPanel.activating.updateUnreadBadge) && ClarityPanel.activating.updateUnreadBadge(), d = Clarity.stack, f = [];
                for (b = 0, c = d.length; b < c; b++) a = d[b], ((e = a.panel_name) === "Inbox" || e === "InboxAll" || e === "ThreadView") && f.push(a.instance.touch({
                    dirty: !0
                }));
                return f
            }
        }, a
    }(), Clarity.Panels.Inbox = function (b) {
        function d() {
            this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments), this.header.addClass("with-tabs").append(JST["app/views/inbox/header-tabs"]()), App.header.setHeight(this, 91), this.$(".header-tabs > .unread").addClass("active"), this.markAllAsReadButton = this.addButton("Mark All As Read", this.markAllAsRead).addClass("right").hide()
        }
        return c(d, b), d.prototype.title = "Inbox", d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.prompt_for_old_call_rating = !0, d.prototype.defaultFooter = {
            show: !0,
            activeItem: "inbox"
        }, d.prototype.className = "inbox", d.prototype.start = function () {
            if (this.currentMember != null) return Thread.fetchAllOnce({
                wait: !0
            })
        }, d.prototype.render = function () {
            var a, b, c, d;
            b = Thread.all(), b = b.sort(Thread.sortDesc), this.threads = [];
            for (c = 0, d = b.length; c < d; c++) a = b[c], a.messages.length > 0 && this.threads.push(a);
            return this.showUnreadOnly = !/\/all/i.test(Spine.Route.path), this.showUnreadOnly && (this.threads = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = b.length; c < d; c++) a = b[c], a.unread_message_count > 0 && e.push(a);
                return e
            }(), this.markAllAsReadButton.toggle(this.threads.length !== 0)), this.html(JST["app/views/inbox/inbox"]({
                threads: this.threads,
                currentMember: this.currentMember,
                showUnreadOnly: this.showUnreadOnly
            })), this.updateSocialShareLinks(), this.updateUnreadBadge()
        }, d.prototype.updateUnreadBadge = function () {
            var a;
            return a = $.roundToK(Clarity.Helpers.Inbox.unreadCount, 1e3), Clarity.Helpers.Inbox.unreadCount > 0 ? this.$(".header-tabs > .unread .badge").text(a).show() : this.$(".header-tabs > .unread .badge").hide()
        }, d.prototype.updateSocialShareLinks = function () {
            var a, b, c;
            return a = encodeURIComponent("Need advice? Give me a call. #clarity"), c = encodeURIComponent("" + FRIENDLY_HOST + "/" + this.currentMember.screen_name), $(".twitter").attr("href", "https://twitter.com/share?text=" + a + "&url=" + c), c = encodeURIComponent("" + FRIENDLY_HOST + "/" + this.currentMember.screen_name), b = encodeURIComponent("Need advice? Give me a call. #clarity"), $(".linkedin").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + c + "&title=" + b)
        }, d.prototype.markAllAsRead = function () {
            return Notification.show("Are you sure you want to mark all of your messages as read?", {
                confirmation: !0,
                buttonText: "Yes",
                closeOnElse: !1,
                onClose: function (a) {
                    if ($(a.currentTarget).hasClass("ok")) return Thread.markAllAsRead()
                }
            })
        }, d
    }(ClarityPanel), Clarity.Panels.InboxAll = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments), this.$(".header-tabs > li").removeClass("active"), this.$(".header-tabs > .all").addClass("active"), this.markAllAsReadButton.hide()
        }
        return c(b, a), b
    }(Clarity.Panels.Inbox), Clarity.Panels.ThreadView = function (b) {
        function d() {
            this.sendMessage = a(this.sendMessage, this), this.sendMessageOnCtrlEnter = a(this.sendMessageOnCtrlEnter, this), this.showActiveCall = a(this.showActiveCall, this), this.truncateBio = a(this.truncateBio, this), this.render = a(this.render, this), this.stop = a(this.stop, this), this.setPanelTitle = a(this.setPanelTitle, this), d.__super__.constructor.apply(this, arguments), this.footer.find(".navigation").remove(), this.footer.append(JST["app/views/inbox/inbox-thread-form"]())
        }
        return c(d, b), d.prototype.title = "Loading...", d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.defaultFooter = {
            show: !0,
            custom: function () {
                var a;
                return ((a = this.thread) != null ? a.other_party_deleted : void 0) ? App.footer.hide(this) : App.footer.setHeight(this, 55)
            }
        }, d.prototype.defaultHeader = {
            custom: function () {
                return this.updateHeader()
            }
        }, d.prototype.updateHeader = function () {
            var a, b;
            this.header.find("[data-in-page-header]").remove();
            if (this.thread != null && this.thread.active_call() != null) return a = Call.find(this.thread.active_call().id), this.header.addClass("no-border").append(JST["app/views/inbox/active-call"]({
                call: a
            })), (b = a.status()) === "suggested" || b === "pending" ? this.$(".active-call").addClass("orange") : this.$(".active-call").addClass("green"), App.header.setHeight(this, 91);
            if (this.thread != null && !this.thread.other_party_deleted && this.other_party != null) return this.header.addClass("no-border").append(JST["app/views/inbox/inbox-thread-profile"]({
                other_party: this.other_party
            })), App.header.setHeight(this, 91)
        }, d.prototype.className = "inbox-thread", d.prototype.scroll = "bottom", d.prototype.fields = {
            message: {
                required: !0
            }
        }, d.prototype.events = {
            "tap [name=send-message]": "sendMessage",
            "keydown [name=message]": "sendMessageOnCtrlEnter",
            "tap [data-action=show-call]": "showActiveCall"
        }, d.prototype.elements = {
            ".bio": "bioEl"
        }, d.prototype.backButton = {
            label: "Back",
            defaultPath: "/inbox"
        }, d.prototype.start = function (a) {
            var b = this;
            return this.setPanelTitle(!0), a.member_id != null ? (Notification.showSpinner(), Thread.fetchFor(a.member_id, function (a) {
                b.thread = a, b.setPanelTitle(), b.params.thread_id = b.thread.id, Spine.Route.navigate("/inbox/" + a.id, !1);
                if (b.thread.other_party_screen_name && !b.thread.other_party_deleted) return Member.findOrFetch(b.thread.other_party_screen_name, {
                    wait: !0
                }, function (a) {
                    return b.other_party = a, b.touch(), Notification.hide()
                })
            })) : Thread.get(a.thread_id, {
                wait: !0
            }, function (a) {
                b.thread = a, b.setPanelTitle();
                if (b.thread.other_party_screen_name && !b.thread.other_party_deleted) return Member.findOrFetch(b.thread.other_party_screen_name, {
                    wait: !0
                }, function (a) {
                    b.other_party = a
                })
            })
        }, d.prototype.setPanelTitle = function (a) {
            return a == null && (a = !1), a ? this.setTitle("Loading...") : this.thread.other_party_deleted ? this.setTitle("<span style='text-decoration: line-through;'>" + this.thread.other_party_name + "</span>") : this.setTitle(this.thread.other_party_name)
        }, d.prototype.stop = function () {
            return this.f.message.val("")
        }, d.prototype.afterTransition = function () {
            return App.mobile || this.f.message.focus(), this.restoreScroll()
        }, d.prototype.render = function () {
            if (this.thread == null) return;
            return this.thread = this.thread.reload(), this.thread.markAsRead(this.currentMember), this.updateHeader(), this.html(JST["app/views/inbox/thread"]({
                thread: this.thread,
                currentMember: this.currentMember,
                other_party: this.other_party
            })), this.truncateBio(), this.$(".loading-spinner").spin({
                lines: 11,
                length: 4,
                width: 2,
                radius: 4,
                corners: 1,
                trail: 60,
                speed: 1
            })
        }, d.prototype.validateField = function (a, b) {
            d.__super__.validateField.apply(this, arguments);
            if (a === "message") return this.$(".send-message").attr("disabled", this.f.message.hasClass("invalid"))
        }, d.prototype.truncateBio = function () {
            var a, b, c, d;
            a = this.$(".bio-content"), d = [];
            while (a.outerHeight() > 40) b = a.text(), c = b.replace(/\W*\s(\S)*\W*\s(\S)*$/, "…"), b === c && (c = "" + b.slice(0, -2) + "…"), a.text(c), this.bioEl.addClass("truncated"), d.push(this.bioEl.removeClass("untruncated"));
            return d
        }, d.prototype.showActiveCall = function (a) {
            return this.navigate("/calls/" + this.thread.active_call().id, {
                trans: "left"
            })
        }, d.prototype.sendMessageOnCtrlEnter = function (a) {
            if (a.which === 13 && (a.ctrlKey || a.metaKey)) return a.preventDefault(), this.sendMessage(a)
        }, d.prototype.sendMessage = function (a) {
            var b, c, d = this;
            if (this.isValid(!1)) return c = this.f.message.val(), b = Helper.fakeUuid(), this.thread.pushMessage({
                guid: b,
                member_id: this.currentMember.id,
                from_image_url: this.currentMember.image_url,
                message: c,
                formatted_message: ("" + c).replace(/\n/g, "<br>"),
                created_at: moment()
            }), this.thread.updated_at = moment().utc().format("YYYY-MM-DD[T]HH:mm:ss[Z]"), this.thread.save({
                ajax: !1
            }), this.f.message.val(""), this.touch({
                resetScroll: !0
            }), this.thread.sendMessage(c, {}, function (a) {
                var c, e, f;
                f = d.thread.messages;
                for (c = 0, e = f.length; c < e; c++) a = f[c], a.guid === b && (a.guid = null);
                return d.touch({
                    resetScroll: !0
                }), d.validate()
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.ListRecommendations = function (b) {
        function d() {
            this.limitTextSize = a(this.limitTextSize, this), this.click = a(this.click, this), this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.defaultFooter = {
            activeItem: "search",
            show: function () {
                return this.currentMember != null
            }
        }, d.prototype.backButton = !0, d.prototype.title = "Suggested", d.prototype.className = "experts list listView recommendations", d.prototype.events = {
            "click .member-item": "click",
            "keydown .question": "limitTextSize"
        }, d.prototype.elements = {
            ".question": "question"
        }, d.prototype.backButton = {
            defaultPath: "/featured"
        }, d.prototype.start = function (a) {
            var b = this;
            return this.setTitle("Loading..."), this.route = Spine.Route.path.slice(1), this.route === "sul" ? Member.fetchForVIP(function (a) {
                return b.items = a
            }) : (Organization.findOrFetch(this.route, {
                wait: !0
            }, function (a) {
                return b.vertical = a
            }), Member.Basic.fetchForOrganization(this.route, function (a) {
                return b.items = a
            }))
        }, d.prototype.render = function () {
            var a, b, c, d, e, f, g, h, i;
            this.route === "sul" ? (this.title = "Suggested", this.route = "sul") : (this.title = this.vertical.title, this.route = this.vertical.route), a = {}, h = this.items;
            for (d = 0, f = h.length; d < f; d++) b = h[d], a[b.id] = b;
            this.items = [], i = this.vertical.member_ids;
            for (e = 0, g = i.length; e < g; e++) c = i[e], a[c] != null && this.items.push(a[c]);
            return this.items.reverse(), this.setTitle(this.title), this.html(JST["app/views/experts/items"]({
                experts: this.items
            }))
        }, d.prototype.analytics = function (a) {
            return this.trackEvent("Viewed group", {
                group: this.vertical.title,
                route: this.vertical.route
            })
        }, d.prototype.click = function (a) {
            var b;
            if ($(a.currentTarget).data("screen_name") == null) return;
            return App.vip = !0, b = $(a.currentTarget).data("screen_name"), this.navigate("/" + b, {
                trans: "right",
                source: "/featured/" + this.vertical.route
            })
        }, d.prototype.limitTextSize = function (a) {
            return this.question.val(this.question.val().substr(0, 500))
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.RedirectMe = function (b) {
        function d() {
            this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.history = !1, d.prototype.render = function () {
            var a;
            return a = this.params.match.input.replace("/me", "/" + this.currentMember.screen_name), this.navigate(a)
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.NeedConfirm = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments), this.addButton("Submit", this.submit).addClass("right submit")
        }
        return b(c, a), c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.title = "Review and Submit", c.prototype.requires_authentication = !0, c.prototype.className = "call-confirmation post-request-confirmation", c.prototype.backButton = {
            label: "Back",
            defaultPath: "/requests/new",
            onClick: function () {
                var a;
                return (a = this.request) != null && a.save(), !1
            }
        }, c.prototype.events = {
            "tap .post-your-need": "submit",
            "tap .edit": "navigateBack"
        }, c.prototype.render = function () {
            var a;
            return this.request = Clarity.TempRequest.load(!1), (a = this.request).email == null && (a.email = this.currentMember.email), this.request.save(), this.request.isSet() || this.navigate("/need", {
                trans: "left"
            }), this.html(JST["app/views/needs/confirm"]({
                request: this.request
            }))
        }, c.prototype.submit = function () {
            var a;
            return Need.create({
                question: this.request.description,
                vertical: this.request.vertical,
                topics: this.request.topics
            }), Clarity.TempRequest.clear(), a = {
                msg: "Your need has been submitted",
                copy: "You will receive an email with expert suggestions matching your need within the next few hours.",
                link: "<a href='#' class='close'>Close</a>",
                successConfirmation: !0,
                closeOnElse: !1
            }, Clarity.stack.reset(), this.navigate("/search", {
                trans: "right"
            }), Notification.show(a.msg, a)
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.NeedDetails = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.title = "Request", c.prototype.requires_authentication = !0, c.prototype.className = "", c.prototype.backButton = {
            defaultPath: "/requests"
        }, c.prototype.events = {
            "tap [data-action=vote-for-expert]": "voteForExpert"
        }, c.prototype.start = function () {
            var a = this;
            return Need.findOrFetch(this.params.need_id, {
                wait: !0
            }, function (b) {
                return a.need = b
            })
        }, c.prototype.render = function () {
            return this.html(JST["app/views/needs/details"]({
                need: this.need
            })), this.$(".truncate").each(function () {
                return $clamp(this, {
                    clamp: 1
                })
            })
        }, c.prototype.voteForExpert = function (a) {
            var b;
            return b = RecommendedExpert.find($(a.currentTarget).data("recommended-expert-id")), $(a.currentTarget).attr("data-voted", b.toggleVoteFrom(Member.current())), this.render()
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.Needs = function (a) {
        function c() {
            var a = this;
            c.__super__.constructor.apply(this, arguments), this.addButton("Post", function () {
                return a.navigate("/requests/new", {
                    trans: "right"
                })
            }).addClass("right")
        }
        return b(c, a), c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.title = "Requests", c.prototype.requires_authentication = !0, c.prototype.className = "", c.prototype.events = {
            "tap [data-href]": "preventDefaultLinks",
            "tap [data-action=navigate-to-need-details]": "navigateToNeedDetails"
        }, c.prototype.start = function () {
            var a = this;
            return Need.fetchAndReturn({
                wait: !0
            }, function (b) {
                return a.needs = b
            })
        }, c.prototype.render = function () {
            return this.html(JST["app/views/needs/list"]({
                needs: this.needs
            }))
        }, c.prototype.preventDefaultLinks = function (a) {
            return a.preventDefault()
        }, c.prototype.navigateToNeedDetails = function (a) {
            var b;
            return b = $(a.currentTarget).data("need-id"), this.navigate("/requests/" + b, {
                trans: "right"
            })
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        }, d = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    Clarity.Panels.NewNeed = function (b) {
        function e() {
            this.submitRequest = a(this.submitRequest, this), this.deleteTopic = a(this.deleteTopic, this), this.addTopic = a(this.addTopic, this), this.topicFilter = a(this.topicFilter, this), this.render = a(this.render, this), e.__super__.constructor.apply(this, arguments)
        }
        return c(e, b), e.prototype.defaultFooter = {
            show: !1
        }, e.prototype.title = "Request", e.prototype.className = "post-request preCall", e.prototype.stack = {
            checkpoint: !0
        }, e.prototype.autoRefresh = !1, e.prototype.backButton = {
            defaultPath: "/search",
            onClick: function () {
                return Clarity.TempRequest.clear(), !1
            }
        }, e.prototype.fields = {
            description: {
                required: !0,
                message: "Please provide a description of what you would like to discuss."
            },
            email: {
                required: !0,
                email: !0,
                uniqueEmail: !0
            },
            topic: {
                required: !1
            }
        }, e.prototype.events = {
            "tap .submit-request": "submitRequest",
            "tap [data-action=delete-topic]": "deleteTopic"
        }, e.prototype.start = function () {
            var a, b = this;
            this.topics = [];
            if (this.params.call_id) return a = function (a) {
                return a.globalHandlerCancelled = !0, b.endFetch(null, !0)
            }, Call.findOrFetch(this.params.call_id, {
                wait: !0,
                error: a
            }, function (a) {
                b.call = a
            })
        }, e.prototype.render = function (a) {
            var b, c;
            return a == null && (a = {}), b = Clarity.TempRequest.load(!1), c = this.currentMember && b.isSet(), this.html(JST["app/views/needs/new"]({
                currentMember: this.currentMember,
                showEmail: c,
                topics: this.topics
            })), b.isSet() ? (this.f.description.val(b.description), this.f.email.val(b.email), this.topics = b.topics) : this.savedDescription ? this.f.description.val(this.savedDescription) : this.call && this.f.description.val(this.call.reason), this.typeahead = new Clarity.Typeahead({
                el: this.$("[data-field=topics-typeahead-placeholder]"),
                panel: this,
                callbacks: {
                    onSelect: this.addTopic,
                    filter: this.topicFilter
                },
                typeahead: {
                    name: "needs-new-topics",
                    placeholder: "Specify topics you need advice for",
                    url: "/api/topics/autocomplete.json?q=%QUERY",
                    panel_title: "Add Topics"
                }
            }), this.typeahead.render(), a.refocus && this.typeahead.focus(), this.toggleFormState(), this.toggleBlueHighlight()
        }, e.prototype.topicFilter = function (a) {
            var b, c, e, f, g, h;
            b = function () {
                var a, b, d, e;
                d = this.topics, e = [];
                for (a = 0, b = d.length; a < b; a++) c = d[a], e.push(c.name);
                return e
            }.call(this), h = [];
            for (e = 0, f = a.length; e < f; e++) c = a[e], (g = c.value, d.call(b, g) >= 0) || h.push(c);
            return h
        }, e.prototype.addTopic = function (a, b) {
            var c;
            this.topics.push({
                name: b.value
            }), this.highlightName = b.value, this.savedDescription = this.f.description.val(), c = Clarity.TempRequest.load(!1), c.isSet() && (c.topics = this.topics, c.save());
            if (!this.typeahead.opensInFullscreen()) return this.render({
                refocus: !0
            })
        }, e.prototype.deleteTopic = function (a) {
            var b, c, d, e, f;
            c = $(a.currentTarget), f = this.topics;
            for (b = 0, e = f.length; b < e; b++) d = f[b], d != null && d.name === c.data("topic-name") && this.topics.splice(b, 1);
            return c.parents(".tag").remove(), this.toggleFormState()
        }, e.prototype.toggleBlueHighlight = function () {
            var a, b = this;
            if (this.highlightName == null) return;
            return a = this.$(".tag").filter(function (a, c) {
                return $(c).find(".tag-name").text() === b.highlightName
            }), a.addClass("blue-highlight-pulse"), this.content.scrollTo(a, {
                duration: 0
            }), this.highlightName = null, clearTimeout(this.blueHighlightTimeout), this.blueHighlightTimeout = setTimeout(function () {
                return this.$(".tag").removeClass("blue-highlight-pulse")
            }, 4e3)
        }, e.prototype.fade = function (a, b, c, d) {
            if (a.is(":visible") && !b.is(":visible")) return;
            return a.hide(), b.show().fadeOut(c, function () {
                return a.fadeIn(c, d)
            })
        }, e.prototype.toggleFormState = function () {
            var a, b, c, d;
            return a = $(".topic-note"), d = $(".topic-input"), b = this.topics.length < 3, c = this.previousShowing != null && b !== this.previousShowing ? "fast" : 0, this.previousShowing = b, this.topics.length < 3 ? (c && this.f.topic.val(""), this.fade(d, a, c)) : (this.f.topic.val(" "), this.fade(a, d, c))
        }, e.prototype.submitRequest = function () {
            var a, b;
            if (this.topics.length < 1 || this.topics.length > 3) {
                Alert.error("You need to provide between 1 and 3 topics.");
                return
            }
            if (this.isValid()) return a = Clarity.TempRequest.load(), a.email = this.f.email.size() > 0 ? this.f.email.val() : (b = this.currentMember) != null ? b.email : void 0, a.description = this.f.description.val().substr(0, 500), a.topics = this.topics, a.vertical = this.params.request_from ? this.params.request_from : "/request", a.save(), this.topics = [], this.savedDescription = null, this.navigate("/requests/new/confirm", {
                trans: "right",
                need: !0
            })
        }, e
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.NeedRecommendation = function (b) {
        function d() {
            this.addExpert = a(this.addExpert, this), d.__super__.constructor.apply(this, arguments), this.selected_experts = {}
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.title = "Recommend", d.prototype.requires_authentication = !0, d.prototype.className = "need-recommendation", d.prototype.backButton = {
            defaultPath: function () {
                var a;
                return "/requests/" + ((a = this.params) != null ? a.need_id : void 0)
            }
        }, d.prototype.fields = {
            search: null
        }, d.prototype.elements = {
            "[data-field=comment]": "comments"
        }, d.prototype.events = {
            "keydown [name=search]": "preventFormSubmitOnEnter",
            "tap [data-action=submit-recommendations]": "submitRecommendations"
        }, d.prototype.start = function () {
            var a = this;
            return Need.findOrFetch(this.params.need_id, {
                wait: !0
            }, function (b) {
                return a.need = b
            })
        }, d.prototype.render = function () {
            return this.html(JST["app/views/needs/recommendation"]({
                need: this.need,
                selected_experts: this.selected_experts
            })), this.typeahead = new Clarity.Typeahead({
                el: this.$("[data-field=search-experts-placeholder]"),
                panel: this,
                callbacks: {
                    onSelect: this.addExpert
                },
                typeahead: {
                    name: "needs-recommendation-experts",
                    placeholder: "Search for an expert",
                    url: "/api/search/autocomplete?q=%QUERY&size=6&offset=0&filter=near_me%3Dfalse%26video%3Dfalse%26recommendations%3Dfalse&organization_route=null",
                    panel_title: "Search Experts"
                }
            }), this.typeahead.render(), this.toggleHighlightOfLastAdded()
        }, d.prototype.toggleHighlightOfLastAdded = function () {
            var a = this;
            if (this.last_added) return clearTimeout(this.highlightTimeout), this.highlightTimeout = setTimeout(function () {
                return a.$(".blue-highlight-pulse").removeClass("blue-highlight-pulse")
            }, 5e3), this.comments.filter("[data-expert-id=" + this.last_added.id + "]").addClass("blue-highlight-pulse").focus(), this.last_added = null
        }, d.prototype.updateComments = function () {
            var a = this;
            return this.comments.each(function (b, c) {
                return a.selected_experts[$(c).data("expert-id")].comment = $(c).val()
            })
        }, d.prototype.addExpert = function (a, b) {
            return this.selected_experts[b.id] = b, this.last_added = b, this.updateComments(), this.render()
        }, d.prototype.preventFormSubmitOnEnter = function (a) {
            if (a.keyCode === 13) return a.preventDefault()
        }, d.prototype.submitRecommendations = function () {
            var a = this;
            return this.updateComments(), Notification.showSpinner("Submitting..."), this.need.submitRecommendations(this.selected_experts, function (b) {
                return a.selected_experts = {}, Notification.hide(), a.navigateBack(), Alert.notify("Successfully recommended experts to this request.")
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        }, c = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
    Clarity.Panels.ListPaidQuestionMembers = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.backButton = {
            defaultPath: "/search"
        }, c.prototype.title = "Ask a Question", c.prototype.events = {
            "tap [data-action=show-more]": "showMore"
        }, c.prototype.start = function () {
            return this.page = 1, this.experts = [], this.fetch()
        }, c.prototype.fetch = function () {
            var a = this;
            return Member.Basic.fetchAndReturn({
                url: "/api/paid_questions/members?page=" + this.page,
                wait: !0
            }, function (b, c) {
                return a.experts = a.experts.concat(b), a.resultCount = c.getResponseHeader("X-RESULT-COUNT")
            })
        }, c.prototype.showMore = function () {
            var a = this;
            return this.page += 1, this.fetchInContext(function () {
                return a.fetch()
            })
        }, c.prototype.render = function () {
            var a;
            return a = this.experts.length < this.resultCount, this.html(JST["app/views/experts/items"]({
                experts: this.experts,
                callout: !1,
                showMore: a,
                hideRate: !0
            }))
        }, c
    }(ClarityPanel), Clarity.Panels.PaidQuestionAsk = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments), this.continueButton = this.addButton("Continue", this.submit).addClass("right submit")
        }
        return b(c, a), c.prototype.title = "Ask a Question", c.prototype.className = "paid-questions", c.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.params.screen_name
            },
            label: "Cancel"
        }, c.prototype.fields = {
            question: {
                required: !0,
                length: {
                    max: 250
                }
            }
        }, c.prototype.events = {
            "tap .submit-question": "submit"
        }, c.prototype.start = function () {
            var a = this;
            return Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                a.expert = b
            })
        }, c.prototype.analytics = function () {
            return this.trackEvent("Viewed Ask", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate
            })
        }, c.prototype.render = function () {
            var a;
            return this.html(JST["app/views/paid_questions/index"]({
                expert: this.expert
            })), a = Clarity.TempRequest.load(!1), a.isSet() && this.f.question.val(a.question), this.f.question.charCount({
                allowed: 250,
                up: !0
            })
        }, c.prototype.submit = function (a) {
            var b;
            a.preventDefault();
            if (this.isValid()) return b = Clarity.TempRequest.load(!1), b.question = this.f.question.val(), b.save(), this.navigate("/" + this.params.screen_name + "/ask_confirm", {
                trans: "right",
                requirementBackPath: Spine.Route.path
            })
        }, c
    }(ClarityPanel), Clarity.Panels.PaidQuestionAnswered = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.start = function () {
            var a = this;
            return this.startFetch(!0), $.post("/api/paid_questions/answered", {
                uuid: this.params.uuid,
                answered: this.params.answered
            }).success(function () {
                return a.navigate("/" + a.params.screen_name), a.params.answered === "true" ? (a.trackEvent("Submitted Positive Ask Feedback", {
                    expert: a.params.screen_name
                }), Notification.show("Your feedback has been submitted.")) : (a.trackEvent("Submitted Negative Ask Feedback", {
                    expert: a.params.screen_name
                }), Notification.show("Your feedback has been sent to our team.  We’ll be following up with you shortly."))
            }).error(function (b) {
                if (b.status === 422) return a.trackEvent("Submitted Duplicate Ask Feedback", {
                    expert: a.params.screen_name
                }), a.navigate("/" + a.params.screen_name), Notification.show("We've already received feedback about this question."), b.globalHandlerCancelled = !0
            })
        }, c
    }(ClarityPanel), Clarity.Panels.PaidQuestionConfirm = function (a) {
        function d() {
            this.requires_payment = c(this.requires_payment, this), d.__super__.constructor.apply(this, arguments), this.continueButton = this.addButton("Send", this.submit).addClass("right submit")
        }
        return b(d, a), d.prototype.title = "Ask a Question", d.prototype.className = "paid-questions", d.prototype.requires_authentication = !0, d.prototype.requires_payment = function () {
            return !!this.expert
        }, d.prototype.backButton = {
            defaultPath: function () {
                return "/" + this.params.screen_name + "/ask"
            }
        }, d.prototype.fields = {
            question: {
                required: !0,
                length: {
                    max: 250
                }
            }
        }, d.prototype.events = {
            "tap .submit-request": "submit",
            "tap [data-action=change-payment]": "changePayment"
        }, d.prototype.start = function () {
            var a = this;
            return this.request = Clarity.TempRequest.load(!1), this.request.question ? Member.findOrFetch(this.params.screen_name, {
                wait: !0
            }, function (b) {
                a.expert = b
            }) : this.navigate("/" + this.params.screen_name + "/ask")
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed Ask Confirm", {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate
            })
        }, d.prototype.changePayment = function () {
            return this.navigate("/credit-card", {
                trans: "right"
            })
        }, d.prototype.render = function () {
            if (this.request == null) return;
            return this.html(JST["app/views/paid_questions/confirm"]({
                expert: this.expert,
                question: this.request.question
            }))
        }, d.prototype.submit = function () {
            var a = this;
            return Notification.showSpinner("Sending..."), $.post("/api/paid_questions", {
                expert_id: this.expert.id,
                question: this.request.question
            }).success(function () {
                return Notification.hideSpinner(), a.navigateBackToLastCheckpoint({
                    default_path: "/" + a.params.screen_name
                }), a.trackEvent("Ask Submitted", {
                    expert: a.expert.screen_name,
                    expert_name: a.expert.name(),
                    expert_rate: a.expert.hourly_rate
                }), Notification.show("Your message has been sent", {
                    copy: "We've sent your private question to " + a.expert.name() + ".  You'll receive an email when there’s a response.",
                    successConfirmation: !0,
                    closeOnElse: !1,
                    hideCancel: !0,
                    link: "<a href='#' class='close wide'>OK</a>"
                })
            }).error(function (b) {
                return Notification.hideSpinner(), b.globalHandlerCancelled = !0, a.trackEvent("Ask Charge Failed", {
                    expert: a.expert.screen_name,
                    expert_name: a.expert.name(),
                    expert_rate: a.expert.hourly_rate
                }), Alert.error("We were unable to charge your credit card.  Please                   <a href='#' data-action='change-payment'>update your credit card</a>                   to re-try, or contact <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a>")
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.AccountPasscode = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.requires_onboarding = !0, c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.autoRefresh = !1, c.prototype.backButton = {
            defaultPath: "/account"
        }, c.prototype.title = "Free Link", c.prototype.className = "account passcode-share", c.prototype.events = {
            "tap .save": "save",
            "tap [data-action='edit-passcode']": "editPasscode",
            "tap [data-action='disable-passcode']": "disablePasscode"
        }, c.prototype.elements = {
            ".copy-expert-info": "copyButton",
            ".copy-expert-url input": "passcodeURL"
        }, c.prototype.render = function () {
            var a, b = this;
            return a = "" + FRIENDLY_HOST + "/" + this.currentMember.screen_name + "/" + this.currentMember.passcode, this.html(JST["app/views/passcodes/share"]({
                member: this.currentMember,
                url: a
            })), this.copyButton.zclip({
                path: "/js/ZeroClipboard.swf",
                copy: this.passcodeURL.val(),
                afterCopy: function () {
                    return b.copyButton.addClass("copied"), setTimeout(function () {
                        return b.copyButton.removeClass("copied")
                    }, 2e3)
                }
            })
        }, c.prototype.editPasscode = function () {
            return this.navigate("/account/passcode/edit", {
                trans: "right"
            })
        }, c.prototype.disablePasscode = function () {
            return this.currentMember.passcode = "", this.currentMember.save(), Clarity.stack.pop(), this.navigate("/account/passcode/edit"), Alert.notify("Your free link was disabled.")
        }, c
    }(ClarityPanel), Clarity.Panels.AccountPasscodeEdit = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments), this.saveButton = this.addButton("Save", this.save).addClass("add right submit")
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.requires_onboarding = !0, c.prototype.defaultFooter = {
            show: !1
        }, c.prototype.autoRefresh = !1, c.prototype.backButton = {
            defaultPath: "/account"
        }, c.prototype.title = "Free Link", c.prototype.className = "account passcode-edit", c.prototype.fields = {
            passcode: {
                required: !0,
                pattern: /^[a-z0-9\+\-]+$/i,
                message: "Secret word can only contain letters, digits, + or -"
            }
        }, c.prototype.elements = {
            ".passcode-example": "passcodeExample"
        }, c.prototype.events = {
            "tap .save": "save",
            "keyup [name='passcode']": "updatePasscodeExample"
        }, c.prototype.render = function () {
            return this.html(JST["app/views/passcodes/edit"]({
                member: this.currentMember
            })), this.updatePasscodeExample()
        }, c.prototype.updatePasscodeExample = function () {
            return this.passcodeExample.text(this.f.passcode.val())
        }, c.prototype.save = function () {
            var a;
            if (this.isValid()) return this.currentMember.passcode = this.f.passcode.val(), this.currentMember.save(), ((a = Clarity.stack.at(-2)) != null ? a.panel_name : void 0) !== "AccountPasscode" ? (Clarity.stack.pop(), this.navigate("/account/passcode", {
                trans: "left"
            })) : this.navigateBack(), Alert.notify("Your free link was updated. You can share the new URL below.")
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.Plans = function (b) {
        function d() {
            this.render = a(this.render, this), this.start = a(this.start, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.title = "Plans", d.prototype.className = "account", d.prototype.backButton = {
            defaultPath: "/account"
        }, d.prototype.start = function () {
            return Plan.fetch()
        }, d.prototype.render = function () {
            return this.html(JST["app/views/plans/index"]({
                plans: Plan.all()
            }))
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    Clarity.Views.Profile = function () {
        function a(a) {
            this.data = {}, this.expert = a.expert, this.currentMember = a.currentMember, this.passcode = a.passcode, this.data.expert = this.expert, this.data.expert_name = this.expert.name(), this.data.formatted_bio = this.expert.formatted_bio, this.data.image_url = this.expert.imageUrl("normal_square"), this.data.is_free = this.expert.isFree(this.currentMember), this.data.verified = this.expert.verified_networks, this.data.facebook_share_url = this.expert.shareURL("facebook"), this.data.twitter_share_url = this.expert.shareURL("twitter"), this.data.linkedin_share_url = this.expert.shareURL("linkedin"), this.data.created_at = this.expert.formattedCreatedAt(), this.data.charity = this.expert.charity(), this.data.expertise = this.expert.expertise().all(), this.data.reviews = this.expert.reviewsWithComment(), this.data.topics = this.expert.topics, this.data.total_calls = this.expert.total_calls > 0 ? this.expert.total_calls.toCurrency(0) : 0, this.data.formatted_cost = "$" + this.expert.formattedCost(), this.data.amount_generated_for_charity = this.expert.amount_generated_for_charity != null ? "($" + this.expert.amount_generated_for_charity.toCurrency() + ")" : "", this.data.profile_page_views_count = $.roundToK(this.expert.profile_page_views_count), this.data.showing_current_member_profile = this.currentMember != null && this.currentMember.id === this.expert.id, this.data.average_call_duration = Helper.relativeTime(this.expert.average_call_duration), this.data.reviews_count = this.data.reviews.length, this.expert.is_on_vacation && !this.passcode ? !this.currentMember || !this.currentMember.isVacationSubscribedTo(this.expert.id) ? this.data.show_vacation_subscription = !0 : this.data.show_vacation_unsubscribe = !0 : this.expert.accepts_paid_questions ? this.data.accepts_paid_questions = !0 : this.data.showing_current_member_profile || (this.data.request_a_call = !0), this.data.link_to_video = App.iOSVersion < 6, this.data.native_app = App["native"]
        }
        return a.prototype.template = "experts/profile", a.prototype.compile = function () {
            return SHT[this.template](this.data)
        }, a
    }()
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.Promos = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, c.prototype.backButton = {
            defaultPath: "/account"
        }, c.prototype.title = "Promotions", c.prototype.className = "account promo-codes", c.prototype.fields = {
            coupon_code: {
                required: !0,
                message: "Promotion code is required"
            }
        }, c.prototype.events = {
            "tap [data-action=apply-coupon-code]": "applyCouponCode"
        }, c.prototype.render = function () {
            return this.html(JST["app/views/promos/promos"]({
                redeemed_coupons: this.orderedCouponsDesc()
            }))
        }, c.prototype.orderedCouponsDesc = function () {
            return this.currentMember.redeemed_coupons.sort(function (a, b) {
                return a.created_at > b.created_at ? 1 : a.created_at < b.created_at ? -1 : 0
            })
        }, c.prototype.applyCouponCode = function (a) {
            var b = this;
            if (this.isValid()) return $.ajax({
                type: "POST",
                dataType: "json",
                url: "/api/promos/redeem",
                data: {
                    coupon_code: this.f.coupon_code.val()
                },
                success: function (a) {
                    if (a.notice) return b.f.coupon_code.val(""), Alert.notify(a.notice), Member.refreshMember();
                    if (a.error) return Alert.error(a.error)
                }
            })
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.AnswerQuestion = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.backButton = {
            label: "Cancel",
            defaultPath: function () {
                return "/questions/" + this.params.question_id
            }
        }, c.prototype.autoRefresh = !1, c.prototype.className = "post-request preCall answer-question", c.prototype.title = "Answer", c.prototype.events = {
            "tap [data-action=submit-answer]": "submitAnswer"
        }, c.prototype.fields = {
            answer: {
                required: !0,
                length: {
                    min: 10
                }
            }
        }, c.prototype.afterTransition = function () {
            return this.f.answer.focus()
        }, c.prototype.start = function () {
            var a = this;
            return Question.findOrFetch(this.params.question_id, {
                wait: !0
            }, function (b) {
                return a.question = b
            })
        }, c.prototype.render = function () {
            return this.html(JST["app/views/questions/answer"]({
                question: this.question
            }))
        }, c.prototype.submitAnswer = function () {
            if (this.isValid()) return this.question.answers().create({
                answer: this.f.answer.val()
            }), this.navigateBack({
                trans: !1
            }), Alert.show("Your answer has been submitted.")
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.QuestionDetails = function (a) {
        function c() {
            var a = this;
            c.__super__.constructor.apply(this, arguments), this.addButton("Follow", function () {
                return Alert.warn("Not implemented yet.")
            }).addClass("right")
        }
        return b(c, a), c.prototype.defaultFooter = {
            show: !0
        }, c.prototype.title = "Questions (beta)", c.prototype.className = "question-details", c.prototype.backButton = {
            defaultPath: "/questions"
        }, c.prototype.watch = [Answer], c.prototype.events = {
            "tap [data-action=flag]": "flagAnswer",
            "tap [data-action=share]": "shareAnswer"
        }, c.prototype.start = function () {
            var a, b = this;
            Question.findOrFetch(this.params.id, {
                wait: !0
            }, function (a) {
                return b.question = a, b.question.bind("change", function (a) {
                    if ((b.params.id + "").match(/c\-/) && a.id != null) return Clarity.stack.last().params.match[0] = "/questions/" + a.id, Clarity.stack.last().params.id = a.id, b.navigate("/questions/" + a.id, !1)
                })
            });
            if (!(this.params.id + "").match(/c\-/)) return a = Helper.buildQuerystring({
                question_id: this.params.id
            }), Answer.fetchAndReturn({
                data: a,
                wait: !0
            })
        }, c.prototype.render = function () {
            return this.show_answer_button = Member.current() != null && Member.current().is_expert && !this.question.isAnsweredByCurrentMember() && this.question.member_id !== Member.current().id, this.html(JST["app/views/questions/details"]({
                question: this.question,
                show_answer_button: this.show_answer_button
            }))
        }, c.prototype.flagAnswer = function () {
            return Alert.warn("Can't flag answers yet.")
        }, c.prototype.shareAnswer = function () {
            return Alert.warn("Can't share answers yet.")
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.QuestionsList = function (b) {
        function d() {
            this.showMoreOnScroll = a(this.showMoreOnScroll, this);
            var b = this;
            d.__super__.constructor.apply(this, arguments), this.page = 1, this.questions = [], this.header.find("h2").html(JST["app/views/questions/_question_tabs"]), this.addButton("", function () {
                return b.navigate("/questions/new", {
                    trans: "right"
                })
            }).addClass("right").append("<i class='edit-this white'></i>"), Question.bind("create", function () {
                return b.page = 1, b.questions = [], b.touch({
                    dirty: !0
                })
            })
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !0
        }, d.prototype.className = "questions", d.prototype.start = function (a) {
            var b, c, d, e, f, g, h, i, j, k = this;
            b = this.data_filter || {}, b.page = this.page, i = ((h = this.params.filter) != null ? h.split("&") : void 0) || [];
            for (f = 0, g = i.length; f < g; f++) d = i[f], j = d.split("="), c = j[0], e = j[1], b[c] = e;
            return b.status || (b.status = "answered"), this.header.find("[data-tab]").removeClass("active"), this.header.find("[data-tab=" + b.status + "]").addClass("active"), Question.fetchAndReturn({
                wait: !0,
                data: Helper.buildQuerystring(b)
            }, function (b, c) {
                var d, e, f;
                for (e = 0, f = b.length; e < f; e++) d = b[e], k.questions.push(d);
                return typeof a == "function" && a(b), k.matches = c.getResponseHeader("matches")
            })
        }, d.prototype.render = function () {
            return this.questions = this.questions.sort(Question.createdAtSort).reverse(), this.html(JST["app/views/questions/list"]({
                questions: this.questions
            })), this.content.off("scroll", this.showMoreOnScroll), this.content.on("scroll", this.showMoreOnScroll)
        }, d.prototype.showMoreOnScroll = function () {
            if (this.content.prop("scrollHeight") - this.content.scrollTop() < this.content.height() + 50 && this.content.scrollTop() !== 0) return this.showMore()
        }, d.prototype.showMore = function () {
            var a = this;
            if (this.loadingMore) return;
            if (this.matches != null && this.page * 25 > this.matches) return;
            return this.page += 1, this.showInlineSpinner(), this.loadingMore = !0, this.start(function () {
                return a.render(), a.loadingMore = !1
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        };
    Clarity.Panels.NewQuestion = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.requires_authentication = !0, c.prototype.backButton = {
            defaultPath: "/questions"
        }, c.prototype.autoRefresh = !1, c.prototype.className = "post-request preCall", c.prototype.title = "Ask the Experts", c.prototype.elements = {
            ".textarea-tips": "textareaTips"
        }, c.prototype.events = {
            "tap [data-action=submit-question]": "submitQuestion"
        }, c.prototype.fields = {
            question: {
                required: !0,
                length: {
                    min: 10,
                    max: 150
                }
            },
            topic: {
                required: !0,
                "with": function (a) {
                    if ($("[name=topic]:checked").val() == null || $("[name=topic]:checked").val() === "") return "Please select a topic"
                }
            }
        }, c.prototype.render = function () {
            var a = this;
            return this.html(JST["app/views/questions/new"]()), this.f.question.charCount({
                allowed: 150
            }), new Clarity.Dropdown({
                el: this.textareaTips,
                onToggle: function (b) {
                    var c;
                    return c = a.textareaTips.find(".chevron"), c.removeClass("fa-icon-chevron-right fa-icon-chevron-left fa-icon-chevron-up fa-icon-chevron-down"), b ? c.addClass("fa-icon-chevron-right") : c.addClass("fa-icon-chevron-down")
                }
            })
        }, c.prototype.submitQuestion = function () {
            var a;
            if (this.isValid()) return a = new Question({
                topic_id: $("[name=topic]:checked").val(),
                question: this.f.question.val(),
                formatted_question: this.f.question.val()
            }), a.save(), Clarity.stack.pop(), this.navigate("/questions/" + a.cid), Alert.show("Your question has been submitted.")
        }, c
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.RateAndReview = function (b) {
        function d() {
            this.saveRating = a(this.saveRating, this), this.starRatingChanged = a(this.starRatingChanged, this), d.__super__.constructor.apply(this, arguments), this.headerCancelButton = this.addButton("Cancel", this.navigateBack).hide(), this.headerSubmitButton = this.addButton("Submit", this.submit).addClass("right submit")
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_call_rating = !1, d.prototype.prompt_for_old_call_rating = !1, d.prototype.defaultFooter = {
            show: !1
        }, d.prototype.autoRefresh = !1, d.prototype.history = !0, d.prototype.backButton = {
            show: !1,
            defaultPath: "/calls/history",
            trans: function () {
                var a;
                return ((a = this.params) != null ? a.trans : void 0) === "up" ? "down" : "left"
            },
            onClick: function () {
                return Consumable.consume("call_rating_prompt"), !1
            }
        }, d.prototype.title = "Rate", d.prototype.className = "rate-and-review", d.prototype.fields = {
            comment: {
                length: {
                    max: 500
                }
            }
        }, d.prototype.events = {
            "tap [data-action='submit']": "submit"
        }, d.prototype.elements = {
            ".current-rating": "current_rating",
            "[data-action='submit']": "bottomSubmitButton"
        }, d.prototype.start = function () {
            var a = this;
            return Notification.showSpinner("Loading..."), this.params.call_id ? Call.findOrFetch(this.params.call_id, {
                wait: !0
            }, function (b) {
                a.call = b;
                if (a.call.myRating() != null) return Clarity.stack.pop(), a.navigate("/calls/" + a.params.call_id, {
                    trans: "left"
                }), Alert.notify("You already rated this call.")
            }) : (this.html(""), Call.fetchLastUnratedCall(function (b) {
                return b != null ? (a.call = b, a.render()) : (Clarity.stack.pop(), a.navigate("/history"), Alert.notify("You're all caught up on your rating and reviews!"))
            }))
        }, d.prototype.render = function () {
            var a = this;
            if (this.call == null) return;
            return Notification.hideSpinner(), this.html(JST["app/views/ratings/rate-and-review"]({
                other_party: this.call.otherParty(),
                call: this.call
            })), this.params.show_few_seconds_alert && Notification.show("Please rate your last call with " + this.call.otherParty().name(), {
                copy: "Rating calls helps us improve your search results and recommendations.",
                successConfirmation: !0,
                link: "<a href='#' class='close'>Okay</a>",
                closeOnElse: !1,
                starIcon: !0,
                wide: !0,
                wideText: !0,
                hideCloseX: !0
            }), this.headerCancelButton.show(), this.bottomSubmitButton.text("Submit"), this.headerSubmitButton.text("Submit"), /test/.test(Spine.Route.path) ? this.headerCancelButton.hide() : /history/.test(Spine.Route.path) && (this.bottomSubmitButton.text("Submit & rate next call"), this.headerSubmitButton.text("Next")), this.f.comment.charCount({
                allowed: 500
            }), this.star_rating = new Clarity.Helpers.StarRating({
                el: this.$(".star-rating"),
                updateCallback: this.starRatingChanged,
                min: 1,
                rating: this.params.preselected_rating
            }), this.star_rating.render(), this.starRatingChanged(this.star_rating.rating), setTimeout(function () {
                if (a.params.preselected_rating != null) return a.f.comment.focus()
            }, 500)
        }, d.prototype.starRatingChanged = function (a) {
            return a === null ? this.current_rating.text("Not yet rated") : a <= 1 ? this.current_rating.text("" + a + " star") : this.current_rating.text("" + a + " stars")
        }, d.prototype.submit = function () {
            if (this.star_rating.rating == null) {
                Alert.error("Rating is required");
                return
            }
            if (this.isValid()) return this.saveRating()
        }, d.prototype.saveRating = function () {
            var a, b = this;
            return Consumable.consume("call_rating_prompt"), this.currentMember.unrated_calls_count -= 1, this.currentMember.save({
                ajax: !1
            }), Member.cache("currentMember", Member._current), a = new Rating, a.call_id = this.call.id, a.stars = this.star_rating.rating, a.comment = this.f.comment.val(), a.source = "clarity", a.image_url = this.currentMember.image_url, a.name = this.currentMember.name(), a.from_id = {
                id: this.currentMember.id
            }, a.to_id = {
                id: this.call.otherParty().id
            }, Notification.showSpinner("Submitting..."), a.save({
                success: function () {
                    var a;
                    return Notification.hide(), a = b.call, /history/.test(Spine.Route.path) && b.currentMember.unrated_calls_count > 0 ? b.restart() : b.navigateBack(), Alert.notify("Your feedback for " + a.otherParty().first_name + "'s call has been submitted.")
                }
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.Recommendations = function (b) {
        function d() {
            this.removeReview = a(this.removeReview, this), this.sendThroughAuth = a(this.sendThroughAuth, this), this.importFromLinkedin = a(this.importFromLinkedin, this), this.updateImportingStatus = a(this.updateImportingStatus, this), this.render = a(this.render, this), this.start = a(this.start, this), d.__super__.constructor.apply(this, arguments), this.nextButton = this.addButton("Finish", this.navigateToNextStep).addClass("right").hide()
        }
        return c(d, b), d.prototype.requires_authentication = !0, d.prototype.requires_onboarding = !0, d.prototype.defaultFooter = {
            show: !0,
            activeItem: "my-page"
        }, d.prototype.autoRefresh = !1, d.prototype.backButton = {
            defaultPath: function () {
                return this.isOnboardingExpert() ? "/expert/step4" : "/account/profile"
            }
        }, d.prototype.title = "Reviews", d.prototype.className = "account recommendations", d.prototype.watch = [Rating], d.prototype.importingRecommendations = !1, d.prototype.start = function () {
            var a = this;
            return App.flash("client_flash") === "trigger-linkedin-recommendations-import" && (this.importingRecommendations = !0, this.triggerImportAfterConnect = !0), Member.subscribeTo("linkedin-recommendation-import", {
                connect: function () {
                    if (a.triggerImportAfterConnect) return a.importFromLinkedin()
                },
                callback: function (b) {
                    return a.importingRecommendations = !1, a.lastStatus = b
                }
            })
        }, d.prototype.events = {
            "tap .remove-recommendation": "removeReview",
            "tap .linkedin-connect-button": "importFromLinkedin",
            "tap [data-action=save]": "navigateToNextStep"
        }, d.prototype.elements = {
            ".import-ellipsis": "importEllipsis",
            ".linkedin-connect-button": "importButton"
        }, d.prototype.analytics = function () {
            if (this.isOnboardingExpert()) return this.trackEvent("Viewed onboarding step 5", {
                expert: this.isOnboardingExpert()
            })
        }, d.prototype.render = function () {
            this.setOnboardingTitle(5, "Reviews"), this.nextButton.toggle(this.isOnboardingExpert()), this.html(JST["app/views/recommendations/recommendations"]({
                reviews: this.currentMember.reviewsWithComment(),
                is_onboarding_expert: this.isOnboardingExpert()
            })), this.importingRecommendations && this.updateImportingStatus();
            if (this.lastStatus != null) return this.lastStatus.status === "done" ? this.showSuccessStatus(this.lastStatus.imported) : this.lastStatus.status === "failed" && this.showErrorStatus(), this.lastStatus = null
        }, d.prototype.navigateToNextStep = function () {
            return this.isOnboardingExpert() && this.trackEvent("Completed onboarding", {
                expert: this.isOnboardingExpert()
            }), this.stepOutOfOnboarding()
        }, d.prototype.resetStatus = function () {
            return this.$(".import-status").hide(), this.$(".error-status").hide(), this.$(".success-status").hide(), this.importButton.removeClass("disabled")
        }, d.prototype.showErrorStatus = function () {
            return this.resetStatus(), this.$(".error-status").show()
        }, d.prototype.showSuccessStatus = function (a) {
            return this.resetStatus(), this.$(".success-status").show(), this.imported > 1 ? this.$(".imported-count").text("" + a + " recommendations") : this.$(".imported-count").text("" + a + " recommendation")
        }, d.prototype.updateImportingStatus = function () {
            return this.resetStatus(), this.$(".import-status").show(), this.$(".loading-spinner").spin(App.defaultSpinnerOptions), this.importButton.hide()
        }, d.prototype.importFromLinkedin = function (a) {
            var b = this;
            if (a != null && $(a.currentTarget).hasClass("disabled")) return;
            return this.importingRecommendations = !0, this.updateImportingStatus(), this.currentMember.public_social_connections.linkedin ? $.ajax({
                type: "POST",
                url: "/api/ratings/import-from-linkedin",
                error: function (a) {
                    return a.globalHandlerCancelled = !0, a.status === 401 ? b.sendThroughAuth() : b.showErrorStatus()
                }
            }) : this.sendThroughAuth()
        }, d.prototype.sendThroughAuth = function () {
            var a;
            return App.cookie("externalBackPath", App.querystring().backPath), a = encodeURIComponent(Spine.Route.path), window.location.href = "/authenticate?provider=linkedin&origin=" + a + "&trigger_linkedin_recommendations_import=true"
        }, d.prototype.removeReview = function (a) {
            var b, c = this;
            return b = parseInt($(a.currentTarget).data("recommendation-id")), Notification.show("Are your sure you want to remove this review from your profile?", {
                confirmation: !0,
                buttonText: "Yes",
                onClose: function (a) {
                    var d;
                    if ($(a.currentTarget).hasClass("ok")) return d = c.currentMember.reviews().findByAttribute("id", b), d.destroy()
                }
            })
        }, d
    }(ClarityPanel)
}.call(this),
function () {}.call(this),
function () {
    var a = Object.prototype.hasOwnProperty,
        b = function (b, c) {
            function e() {
                this.constructor = b
            }
            for (var d in c) a.call(c, d) && (b[d] = c[d]);
            return e.prototype = c.prototype, b.prototype = new e, b.__super__ = c.prototype, b
        }, c = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
    Clarity.ModalController = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.className = "requirements", c.prototype.defaultFooter = {
            show: !0
        }, c.prototype.backButton = {
            label: "Cancel"
        }, c.prototype.start = function () {
            var a, b = this;
            return (a = this.params.screen_name) ? Member.findOrFetch(a, {
                wait: !0
            }, function (a) {
                return b.expert = a
            }) : this.expert = null
        }, c
    }(ClarityPanel), Clarity.Panels.CreditCardRequirement = function (a) {
        function d() {
            this.submitPayment = c(this.submitPayment, this), this.refreshCardType = c(this.refreshCardType, this), this.start = c(this.start, this);
            var a, b = this;
            d.__super__.constructor.apply(this, arguments), this.nextButton = this.addButton("Submit", this.submitPayment).addClass("right submit"), a = !1, Member.bind("memberUpdated", function () {
                if (Member.current()) {
                    if (Member.current().failed_payment && !a) return a = !0, App.showFailedPayment();
                    if (!Member.current().failed_payment && a) return a = !1, Alert.notify("Your payment issue has been resolved.  Thanks!")
                }
            })
        }
        return b(d, a), d.prototype.requires_authentication = !0, d.prototype.backButton = {
            defaultPath: "/account",
            label: function () {
                return this.params.screen_name != null ? "Cancel" : "Back"
            },
            onClick: function (a) {
                var b;
                return this.request != null && this.request.save(), a.success && this.params.screen_name != null ? (this.navigate("/" + this.params.screen_name + "/confirm"), !0) : a.success && ((b = this.params) != null ? b.requirementForwardPath : void 0) ? (Clarity.stack.pop(), this.navigate(this.params.requirementForwardPath), !0) : !1
            }
        }, d.prototype.elements = {
            ".cc-icon-inactive": "ccIconInactive",
            ".cc-icon-active": "ccIconActive",
            ".card_expiry_month": "cardExpiryMonth",
            ".card_expiry_year": "cardExpiryYear",
            ".card_number": "cardNumber",
            ".card_cvc": "cardCvc",
            ".cc_icons": "ccIcons",
            ".submit": "submitButton"
        }, d.prototype.events = {
            "keyup .card_number": "refreshCardType",
            "tap .submit": "submitPayment"
        }, d.prototype.active = function () {
            return d.__super__.active.apply(this, arguments), this.request = Clarity.TempRequest.load(!1)
        }, d.prototype.start = function (a) {
            var b;
            return d.__super__.start.apply(this, arguments), (b = this.stripe) != null ? b : this.stripe = function () {
                return $("head").append('<script type="text/javascript" src="https://js.stripe.com/v1/"></script>')
            }()
        }, d.prototype.analytics = function () {
            var a;
            return this.expert && (a = {
                expert: this.expert.screen_name,
                expert_name: this.expert.name(),
                expert_rate: this.expert.hourly_rate
            }), this.trackEvent("Viewed credit card", a)
        }, d.prototype.render = function () {
            var a;
            return App.showFailedPayment(), this.setTitle(this.expert ? "Paid call request" : this.currentMember.credit_card_type != null ? "Credit Card" : "Payment required"),
            this.html(JST["app/views/requirements/credit_card"]({
                expert: this.expert
            })), a = moment().format("M"), this.cardExpiryMonth.find("option[value='" + a + "']").attr("selected", !0), this.params.screen_name ? (this.nextButton.text("Continue"), this.submitButton.text("Continue")) : (this.nextButton.text("Save"), this.submitButton.text("Save")), this.footer.html(this.content.find("footer").remove().html())
        }, d.prototype.refreshCardType = function () {
            var a, b, c;
            a = $(".card_number").val();
            if (!Stripe.validateCardNumber(a)) {
                this.ccIconInactive.show(), this.ccIconActive.hide();
                return
            }
            b = Stripe.cardType(a);
            switch (b) {
            case "MasterCard":
                c = "mastercard";
                break;
            case "Visa":
                c = "visa";
                break;
            case "American Express":
                c = "amex";
                break;
            case "Discover":
                c = "discover"
            }
            return this.ccIconInactive.show(), this.ccIconActive.hide(), $("." + c, this.ccIcons).show(), $("." + c + "_inactive", this.ccIcons).hide()
        }, d.prototype.submitPayment = function () {
            var a, b, c, d, e, f = this;
            e = this.cardNumber.val(), b = this.cardCvc.val(), c = this.cardExpiryMonth.val(), d = this.cardExpiryYear.val();
            if (this.request && e === "1111222233334444") {
                this.request.testing = !0, this.request.save(), this.navigateBack({
                    success: !0,
                    trans: "right"
                });
                return
            }
            if (!Stripe.validateCardNumber(e)) {
                Alert.error("Oops! Looks like your card number is invalid"), $(".card_number").focus();
                return
            }
            if (!Stripe.validateCVC(b)) {
                Alert.error("Oops! Looks like your CVC number is invalid"), $(".card_cvc").focus();
                return
            }
            if (!Stripe.validateExpiry(c, d)) {
                Alert.error("Oops! Looks like your expiry date is invalid"), $(".card_expiry_month").focus();
                return
            }
            return a = {
                number: this.cardNumber.val(),
                cvc: this.cardCvc.val(),
                expMonth: this.cardExpiryMonth.val(),
                expYear: this.cardExpiryYear.val()
            }, Notification.showSpinner("Submitting..."), Stripe.setPublishableKey(STRIPE_PUBLIC_KEY), Stripe.createToken(a, function (a, b) {
                var c;
                return a === 200 ? (c = f.currentMember, c.stripe_token = b.id, c.stripe_customer_key = "1", c.last_four_cc_digits = b.card.last4, c.credit_card_type = b.card.type, c.save({
                    success: function () {
                        var a;
                        return Notification.hide(), f.expert && (a = {
                            expert: f.expert.screen_name,
                            expert_name: f.expert.name(),
                            expert_rate: f.expert.hourly_rate
                        }), f.trackEvent("Submitted credit card", a), f.afterSubmit ? (f.afterSubmit(f), f.afterSubmit = null) : f.navigateBack({
                            success: !0,
                            trans: "right"
                        })
                    },
                    error: function () {
                        return Notification.hide(), c.stripe_customer_key = null, Alert.error("We can't process this credit card. Please try again, or contact                       <a href='mailto:support@clarity.fm' class='allow-default' target='_blank'>support@clarity.fm</a>.")
                    }
                }), c.stripe_token = null) : Alert.error("Oops! Something went wrong: \n" + b.error.message)
            }), !1
        }, d
    }(Clarity.ModalController)
}.call(this),
function () {
    var a, b = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }, c = Object.prototype.hasOwnProperty,
        d = function (a, b) {
            function e() {
                this.constructor = a
            }
            for (var d in b) c.call(b, d) && (a[d] = b[d]);
            return e.prototype = b.prototype, a.prototype = new e, a.__super__ = b.prototype, a
        }, e = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    Clarity.Panels.SearchLanding = function (a) {
        function c() {
            this.topicFilter = b(this.topicFilter, this), this.emptyCompletionList = b(this.emptyCompletionList, this), this.insertSearchFor = b(this.insertSearchFor, this), this.active = b(this.active, this), c.__super__.constructor.apply(this, arguments), this.header.addClass("no-border"), this.postRequestButton = this.addButton("Request", function () {
                return this.navigate("/requests/new", {
                    trans: "right",
                    request_from: "/search"
                })
            }).addClass("right"), this.header.append(JST["app/views/search/header"]()), App.header.setHeight(this, 91), this.f.search_query = this.header.find("[name=search_query]")
        }
        return d(c, a), c.prototype.homeButton = !App["native"](), c.prototype.requires_onboarding_if_member = !0, c.prototype.requires_authentication = App["native"], c.prototype.prompt_for_old_call_rating = !0, c.prototype.title = "Search", c.prototype.className = "featured list", c.prototype.defaultFooter = {
            activeItem: "search",
            show: !0
        }, c.prototype.events = {
            "tap [data-action=show-more]": "showMore"
        }, c.prototype.active = function () {
            return c.__super__.active.apply(this, arguments), this.searching = !1
        }, c.prototype.start = function () {
            var a;
            return Clarity.TempRequest.clear(), a = Organization.findAllByAttribute("featured", !0), a.length < 2 && Organization.fetchFeatured(), this.page = 1, SearchQuery.fetch({
                wait: !1
            }), Topic.fetch({
                wait: !0,
                data: "page=" + this.page
            })
        }, c.prototype.insertSearchFor = function (a) {
            var b;
            return b = this.f.search_query.val(), [{
                value: "Search for " + b,
                query: b,
                formatted: 'Search for <em>"' + b + '"</em>'
            }].concat(a)
        }, c.prototype.emptyCompletionList = function (a) {
            var b, c, d, e;
            if (a === "" && SearchQuery.all().length) {
                d = SearchQuery.all().sort(SearchQuery.updatedSort).slice(0, 5), e = [];
                for (b = 0, c = d.length; b < c; b++) a = d[b], a.value = a.query, a.listType = "history-result", e.push(a);
                return e
            }
        }, c.prototype.render = function () {
            var a, b;
            return Clarity.TempRequest.clear(), a = Organization.findAllByAttribute("featured", !0), a = a.sort(Organization.updatedSort), this.queries = SearchQuery.all().sort(SearchQuery.updatedSort), b = Topic.magicSort(Topic.all()), this.html(JST["app/views/search/landing"]({
                orgs: a,
                topics: b,
                queries: this.queries.slice(0, 6)
            })), this.f.search_query.typeahead("destroy"), this.f.search_query.typeahead({
                name: "search_query",
                template: JST["app/views/search/_completions"],
                custom: this.emptyCompletionList,
                remote: {
                    url: "/api/search/topic_and_expert_autocomplete?q=%QUERY&size=10&offset=0&highlight=true&filter=near_me%3Dfalse%26video%3Dfalse%26recommendations%3Dfalse&organization_route=null",
                    filter: this.insertSearchFor
                }
            }), this.menu = this.header.find(".tt-dropdown-menu"), this.f.search_query.typeahead("setQuery", ""), this.f.search_query.removeAttr("readonly"), this.showOrHideClearSearch(), this.content.find(".dropdown-results").prepend(this.menu.detach())
        }, c.prototype.topicFilter = function (a) {
            var b, c, d, f, g;
            b = function () {
                var a, b, d, e;
                d = this.topics, e = [];
                for (a = 0, b = d.length; a < b; a++) c = d[a], e.push(c.name);
                return e
            }.call(this), g = [];
            for (d = 0, f = a.length; d < f; d++) c = a[d], e.call(b, c) >= 0 || g.push(c);
            return g
        }, c.prototype.showMore = function () {
            var a = this;
            return this.page += 1, Notification.showSpinner(), Topic.fetch({
                wait: !0,
                data: "page=" + this.page,
                complete: function () {
                    return a.render(), Notification.hide()
                }
            })
        }, c.prototype.analytics = function (a) {
            return this.trackEvent("Viewed expert groups")
        }, c
    }(Clarity.SearchPanel), a = function (a) {
        function c() {
            this.navigateToRequest = b(this.navigateToRequest, this), this.navigateToProfile = b(this.navigateToProfile, this), this.render = b(this.render, this), this.fetchMoreResults = b(this.fetchMoreResults, this), this.start = b(this.start, this), c.__super__.constructor.apply(this, arguments), this.header.append("<div class='result-description'/>"), this.header.find("h2").html(JST["app/views/search/_tabs"]), this.shareButton = this.addButton("", this.shareSearch).html("<i class='icon-small-share'/>").addClass("share-icon right")
        }
        return d(c, a), c.prototype.defaultFooter = {
            show: !0,
            activeItem: "search"
        }, c.prototype.requires_onboarding_if_member = !0, c.prototype.backButton = {
            show: !0,
            defaultPath: "/search",
            force: !0
        }, c.prototype.title = "Search", c.prototype.className = "search-results", c.prototype.spinner = {
            label: "Searching..."
        }, c.prototype.scroll = function () {
            if (this.clearResults !== !1) return "top"
        }, c.prototype.events = {
            "tap [data-href]": "navigateToProfile",
            "tap .post-request": "navigateToRequest",
            "tap .show-more": "fetchMoreResults",
            "tap .filter-results": "filterResults",
            "tap .share-search": "shareSearch",
            "tap [data-prefix]": "switchTab"
        }, c.prototype.start = function () {
            var a;
            this.search_query = "", this.decoded_search_query = "", this.params.search_query != null && this.params.search_query !== "" && (this.search_query = this.params.search_query, this.decoded_search_query = decodeURIComponent(this.search_query)), this.header.find("[name=search_query]").val(this.decoded_search_query), a = Spine.Route.path.split("/");
            if (a[2] === "search") this.organization_route = a[1];
            else {
                if (this.search_query === "") return Clarity.stack.pop(), this.navigate(Spine.Route.path.replace(/\/$/, ""));
                this.organization_route = null
            }
            return this.search()
        }, c.prototype.switchTab = function (a) {
            var b, c;
            return b = $(a.currentTarget).data("prefix"), c = "" + b + "/" + this.params.search_query, this.params.filter && (c += "/" + this.params.filter), this.navigate(c)
        }, c.prototype.filtered = function () {
            return this.params.filter
        }, c.prototype.analytics = function () {
            var a;
            this.members || (this.members = []), this.matches < 25 ? a = Math.ceil(this.members.length / this.matches) : a = Math.ceil(this.members.length / 25);
            if (this.search_query !== "") return this.trackEvent("Searched", {
                query: this.search_query,
                matches: this.matches,
                index: a,
                filter: this.params.filter
            })
        }, c.prototype.fetchMoreResults = function () {
            return this.search(!1)
        }, c.prototype.findOrFetchOrganizations = function () {
            var a = this;
            return Member.Basic.fetchForOrganization(22, function (b) {
                return a.featured = b.randomize().slice(0, 4), a.endFetch(null, !0)
            })
        }, c.prototype.render = function () {
            var a;
            return this.members || (this.members = []), a = this.collection.length ? this.template : "app/views/search/blank_slate", this.html(JST[a]({
                verticals: this.verticals,
                currentMember: this.currentMember,
                members: this.members,
                matches: this.matches,
                max: this.max,
                search_query: this.decoded_search_query,
                featured: this.featured,
                from_404: this.params.from_404,
                filtered: this.filtered(),
                topics: this.topics,
                topic_matches: this.topic_matches
            })), App.header.setHeight(this, 86), this.header.addClass("no-border"), $("input", this.header).attr("readonly", !1), this.decoded_search_query != null && this.f.search_query.val(this.decoded_search_query), $(".truncate").each(function () {
                return $clamp(this, {
                    clamp: 2
                })
            }), this.showOrHideClearSearch()
        }, c.prototype.navigateToProfile = function (a) {
            return $(document.activeElement).attr("name") === "search_query" && document.activeElement.blur(), this.navigate($(a.currentTarget).data("href"), {
                trans: "right",
                source: Spine.Route.path
            })
        }, c.prototype.navigateToRequest = function (a) {
            var b;
            return this.navigate("/request", {
                trans: "right",
                subject: this.decoded_search_query,
                request_from: "/search/" + this.decoded_search_query + ", " + (((b = this.members) != null ? b.length : void 0) || 0) + " results"
            })
        }, c
    }(Clarity.SearchPanel), Clarity.Panels.SearchResults = function (a) {
        function c() {
            this.search = b(this.search, this), this.filterResults = b(this.filterResults, this), c.__super__.constructor.apply(this, arguments), this.header.find(".tab.members").addClass("active")
        }
        return d(c, a), c.prototype.template = "app/views/search/results", c.prototype.shareSearch = function () {
            var a;
            return a = "/search/share/" + this.params.search_query, this.params.filter && (a += "/" + this.params.filter), this.navigate(a, {
                trans: "up"
            })
        }, c.prototype.filterResults = function () {
            return this.navigate("/search/filter", {
                trans: "up",
                route: "/search/" + this.search_query,
                filter: this.params.filter
            })
        }, c.prototype.search = function (a) {
            var b = this;
            return this.clearResults = a != null ? a : !0, this.clearResults && (this.members = [], this.matches = 0), this.startFetch({
                wait: !0
            }), this.search_query !== "" ? $.ajax({
                type: "GET",
                dataType: "json",
                url: "/api/search",
                data: {
                    q: this.search_query,
                    offset: this.members.length,
                    filter: this.params.filter
                },
                success: function (a) {
                    var c, d, e, f;
                    b.matches = a.matches, b.max = a.max, b.topics = a.topics, b.topic_matches = a.topic_matches, f = a.members;
                    for (d = 0, e = f.length; d < e; d++) c = f[d], b.members.push(new Member(c));
                    return b.collection = b.members, b.members.length === 0 ? b.findOrFetchOrganizations() : b.endFetch(null, !0)
                }
            }) : this.findOrFetchOrganizations()
        }, c.prototype.render = function () {
            var a, b, d, e, f;
            return c.__super__.render.apply(this, arguments), this.shareButton.toggle( !! this.collection.length), e = [], this.params.filter && (f = this.params.filter.match(/&sort=(.*)/), b = this.params.filter.replace(/&sort=(.*)/, ""), b && e.push("with filter"), f && (f = f[1], d = {
                klout_score: "Klout Score",
                calls: "Number of Calls",
                hourly_rate: "Hourly Rate"
            }, e.push("sorted by " + d[f]))), a = JST["app/views/search/_result_description"]({
                line1: "" + this.matches + ' results for "' + decodeURIComponent(this.search_query) + '"',
                line2: e.join(", ")
            }), this.header.find(".result-description").html(a)
        }, c
    }(a), Clarity.Panels.SearchTopics = function (a) {
        function c() {
            this.search = b(this.search, this), c.__super__.constructor.apply(this, arguments), this.header.find(".tab.topics").addClass("active")
        }
        return d(c, a), c.prototype.template = "app/views/search/topics", c.prototype.search = function (a) {
            var b = this;
            return this.clearResults = a != null ? a : !0, this.clearResults && (this.topics = [], this.matches = 0), this.startFetch({
                wait: !0
            }), Topic.search(this.search_query, this.topics.length, function (a, c) {
                return b.topics = b.topics.concat(a), b.matches = c.getResponseHeader("matches"), b.collection = b.topics, b.topics.length === 0 ? b.findOrFetchOrganizations() : b.endFetch(null, !0)
            })
        }, c.prototype.render = function () {
            var a;
            return c.__super__.render.apply(this, arguments), a = "" + (this.matches || 0) + " related topics", this.header.find(".result-description").html(JST["app/views/search/_result_description"]({
                line1: a,
                filter: !1
            })), this.shareButton.toggle( !! this.collection.length)
        }, c.prototype.shareSearch = function () {
            var a;
            return a = "/search/share/" + this.params.search_query, this.params.filter && (a += "/" + this.params.filter), this.navigate(a, {
                trans: "up",
                topics: !0
            })
        }, c
    }(a), Clarity.Panels.SearchFilter = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return d(b, a), b.prototype.title = "Filter Search", b
    }(Clarity.FilterPanel), Clarity.Panels.SearchShare = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return d(b, a), b.prototype.className = "experts showView contact-card expert-share", b.prototype.backButton = {
            label: "Cancel",
            defaultPath: "/search",
            trans: "down"
        }, b.prototype.title = "Share Search", b.prototype.events = {
            "tap [data-action=native-twitter-share]": "nativeTwitterShare",
            "tap [data-action=set-a-passcode]": "navigateToSetAPasscode"
        }, b.prototype.elements = {
            ".copy-expert-info": "copyButton",
            ".member-info": "memberInfo"
        }, b.prototype.render = function () {
            var a, b, c, d, e, f, g, h, i, j = this;
            return i = "" + FRIENDLY_HOST + "/search", this.params.topics && (i += "/topics"), i += "/" + this.params.search_query, this.params.filter && (i += "/" + this.params.filter), b = decodeURIComponent(this.params.search_query), f = encodeURIComponent("Find '" + b + "' on Clarity"), a = encodeURIComponent('"' + b + '" on Clarity - ' + i), h = encodeURIComponent('"' + b + '" on @getmoreclarity - ' + i + " #advice #clarity"), g = "https://twitter.com/share?text=" + h + "&url=", e = "https://www.linkedin.com/cws/share?url=" + i, c = "http://facebook.com/share.php?u=" + i, d = "https://plus.google.com/share?url=" + i, this.html(JST["app/views/search/share"]({
                url: i,
                subject: f,
                body: a,
                twitter: g,
                linkedin: e,
                facebook: c,
                google: d
            })), this.dataBehaviorTruncate(), this.copyButton.zclip({
                path: "/js/ZeroClipboard.swf",
                copy: this.memberInfo.text(),
                afterCopy: function () {
                    return j.copyButton.addClass("copied"), setTimeout(function () {
                        return j.copyButton.removeClass("copied")
                    }, 2e3)
                }
            })
        }, b.prototype.nativeTwitterShare = function () {
            return window.plugins.twitter.composeTweet(null, null, this.expert.tweetText())
        }, b
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        }, d = Array.prototype.indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    Clarity.Panels.ListTopics = function (b) {
        function d() {
            this.showMoreOnScroll = a(this.showMoreOnScroll, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !0
        }, d.prototype.backButton = {
            defaultPath: "/search"
        }, d.prototype.title = "Topics", d.prototype.start = function () {
            return this.page = 1, Topic.fetch({
                wait: !0,
                data: "page=" + this.page
            })
        }, d.prototype.render = function () {
            return this.topics = Topic.magicSort(Topic.all()), this.html(JST["app/views/topics/list"]({
                topics: this.topics
            })), this.content.off("scroll", this.showMoreOnScroll), this.content.on("scroll", this.showMoreOnScroll)
        }, d.prototype.showMoreOnScroll = function () {
            if (this.content.prop("scrollHeight") - this.content.scrollTop() < this.content.height() + 50 && !this.loadingMore) return this.showMore()
        }, d.prototype.showMore = function () {
            var a = this;
            return this.page += 1, Notification.showSpinner(), this.loadingMore = !0, Topic.fetch({
                wait: !0,
                data: "page=" + this.page,
                complete: function () {
                    return a.render(), Notification.hide(), a.loadingMore = !1
                }
            })
        }, d
    }(ClarityPanel), Clarity.Panels.ListTopicMembers = function (b) {
        function d() {
            this.filterResults = a(this.filterResults, this), d.__super__.constructor.apply(this, arguments), this.header.append("<div class='result-description'/>")
        }
        return c(d, b), d.prototype.defaultFooter = {
            show: !0,
            activeItem: "search"
        }, d.prototype.backButton = {
            defaultPath: "/search"
        }, d.prototype.title = "Loading...", d.prototype.events = {
            "tap [data-action=show-more]": "showMore",
            "tap .filter-results": "filterResults"
        }, d.prototype.start = function () {
            var a, b = this;
            return this.page = 1, a = this.params.topic.split("-"), this.topic_id = a.pop(), this.topic_name = a.join(" ").topicize(), this.experts = [], Member.Basic.fetchForTopic(this.params.topic, this.page, this.params.filter, function (a, c) {
                return b.experts = a, b.matches = c.getResponseHeader("matches")
            }), Topic.findOrFetch(this.topic_id, {
                wait: !0
            }, function (a) {
                return b.topic = a, b.setTitle(a.name)
            })
        }, d.prototype.analytics = function () {
            return this.trackEvent("Viewed topic members", {
                topic_name: this.topic_name
            })
        }, d.prototype.render = function () {
            var a, b, c, d, e;
            return this.html(JST["app/views/topics/members"]({
                experts: this.experts,
                matches: this.matches
            })), d = [], this.params.filter && (e = this.params.filter.match(/&sort=(.*)/), b = this.params.filter.replace(/&sort=(.*)/, ""), b && d.push("with filter"), e && (e = e[1], c = {
                klout_score: "Klout Score",
                calls: "Number of Calls",
                hourly_rate: "Hourly Rate"
            }, d.push("sorted by " + c[e]))), a = JST["app/views/search/_result_description"]({
                line1: "" + this.matches + " experts in " + this.topic.name,
                line2: d.join(", ")
            }), this.header.find(".result-description").html(a), App.header.setHeight(this, 86), this.header.addClass("no-border"), this.$(".truncate").each(function () {
                return $clamp(this, {
                    clamp: 1
                })
            })
        }, d.prototype.filterResults = function () {
            return this.navigate("/topics/filter", {
                route: "/topics/" + this.topic.slug(),
                filter: this.params.filter,
                trans: "up"
            })
        }, d.prototype.showMore = function () {
            var a = this;
            return this.page += 1, Notification.showSpinner(), Member.Basic.fetchForTopic(this.params.topic, this.page, this.params.filter, function (b) {
                var c, d, e;
                for (d = 0, e = b.length; d < e; d++) c = b[d], a.experts.push(c);
                return a.render(), Notification.hide()
            })
        }, d
    }(ClarityPanel), Clarity.Panels.FilterTopic = function (a) {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return c(b, a), b.prototype.title = "Filter Topic", b
    }(Clarity.FilterPanel), Clarity.Panels.EditTopics = function (b) {
        function e() {
            this.addTopic = a(this.addTopic, this), this.topicFilter = a(this.topicFilter, this), e.__super__.constructor.apply(this, arguments), this.saveButton = this.addButton("Save", this.save).addClass("right")
        }
        return c(e, b), e.prototype.requires_authentication = !0, e.prototype.defaultFooter = {
            activeItem: "my-page",
            show: function () {
                return !this.isOnboardingExpert() && !this.isOnboardingSeeker()
            }
        }, e.prototype.backButton = {
            defaultPath: function () {
                return this.isOnboardingExpert() ? "/expert/step2" : this.isOnboardingSeeker() ? "/getting_started/step2" : "/account/profile"
            }
        }, e.prototype.title = "Topics", e.prototype.className = "account topics", e.prototype.fields = {
            topic: {
                required: !0
            }
        }, e.prototype.events = {
            "tap [data-action=delete-topic]": "deleteTopic",
            "tap [data-action=save]": "save",
            click: "removeTypeaheadInfo",
            "typeahead:autocompleted [name=topic]": "addTopic",
            "typeahead:selected [name=topic]": "addTopic",
            "keydown [name=topic]": "preventFormSubmitOnEnter"
        }, e.prototype.elements = {
            "[data-action=add-topic]": "addTopicButton",
            ".note": "errorNote"
        }, e.prototype.start = function () {
            return this.topics = this.currentMember.topics
        }, e.prototype.analytics = function () {
            if (this.isOnboardingExpert() || this.isOnboardingSeeker()) return this.trackEvent("Viewed onboarding step 3", {
                expert: this.isOnboardingExpert()
            })
        }, e.prototype.afterTransition = function () {
            return this.f.topic.focus()
        }, e.prototype.render = function (a) {
            var b;
            return a == null && (a = !1), this.setOnboardingTitle(3, "Topics"), this.isOnboardingSeeker() ? (this.saveButton.text("Finish"), this.saveButton.removeClass("submit")) : this.isOnboardingExpert() ? (this.saveButton.text("Next"), this.saveButton.removeClass("submit")) : (this.saveButton.text("Save"), this.saveButton.addClass("submit")), this.html(JST["app/views/topics/edit"]({
                topics: this.topics,
                suggested_topics: this.suggested_topics,
                is_onboarding_expert: this.isOnboardingExpert(),
                is_onboarding_seeker: this.isOnboardingSeeker()
            })), Member.current().is_expert || this.isOnboardingExpert() ? b = "What are you known for?" : b = "What are you interested in?", this.typeahead = new Clarity.Typeahead({
                el: this.$("[data-field=topics-typeahead-placeholder]"),
                panel: this,
                callbacks: {
                    onSelect: this.addTopic,
                    filter: this.topicFilter
                },
                typeahead: {
                    name: "topics",
                    placeholder: b,
                    url: "/api/topics/autocomplete.json?q=%QUERY",
                    panel_title: "Add Topics"
                }
            }), this.typeahead.render(), a && this.typeahead.focus(), this.toggleFormState(), this.toggleBlueHighlight(), this.topicLength = this.topics.length
        }, e.prototype.topicFilter = function (a) {
            var b, c, e, f, g, h;
            b = function () {
                var a, b, d, e;
                d = this.topics, e = [];
                for (a = 0, b = d.length; a < b; a++) c = d[a], e.push(c.name);
                return e
            }.call(this), h = [];
            for (e = 0, f = a.length; e < f; e++) c = a[e], (g = c.value, d.call(b, g) >= 0) || h.push(c);
            return h
        }, e.prototype.removeTypeaheadInfo = function (a) {
            return this.$(".tt-dropdown-menu .tt-dataset-info").remove(), this.$(".tt-dropdown-menu").addClass("tt-is-empty")
        }, e.prototype.deleteTopic = function (a) {
            var b, c, d, e, f;
            c = $(a.currentTarget), f = this.topics;
            for (b = 0, e = f.length; b < e; b++) d = f[b], d != null && d.name === c.data("topic-name") && this.topics.splice(b, 1);
            return c.parents(".tag").remove(), this.toggleFormState()
        }, e.prototype.fade = function (a, b, c, d) {
            if (a.is(":visible") && !b.is(":visible")) return;
            return a.hide(), b.show().fadeOut(c, function () {
                return a.fadeIn(c, d)
            })
        }, e.prototype.toggleFormState = function () {
            var a, b, c, d;
            return a = $(".note"), d = $(".topic-input"), b = this.topics.length < 10, c = this.previousShowing != null && b !== this.previousShowing ? "fast" : 0, this.previousShowing = b, this.topics.length < 10 ? (c && this.f.topic.val(""), this.fade(d, a, c)) : (this.f.topic.val(" "), this.fade(a, d, c))
        }, e.prototype.toggleBlueHighlight = function () {
            var a = this;
            if (this.highlightName == null) return;
            return this.$(".tag").filter(function (b, c) {
                return $(c).find(".tag-name").text() === a.highlightName
            }).addClass("blue-highlight-pulse"), this.highlightName = null, clearTimeout(this.blueHighlightTimeout), this.blueHighlightTimeout = setTimeout(function () {
                return this.$(".tag").removeClass("blue-highlight-pulse")
            }, 2e3)
        }, e.prototype.preventFormSubmitOnEnter = function (a) {
            if (a.keyCode === 13) return a.preventDefault()
        }, e.prototype.addTopic = function (a, b) {
            this.topics.push({
                name: b.value
            }), this.highlightName = b.value;
            if (!this.typeahead.opensInFullscreen()) return this.render(!0)
        }, e.prototype.save = function () {
            return this.currentMember.updateTopics(this.topics), this.isOnboardingExpert() ? this.navigateToNextOnboardingStep(3) : this.isOnboardingSeeker() ? (this.trackEvent("Completed onboarding", {
                expert: !1
            }), this.stepOutOfOnboarding()) : this.navigateBack()
        }, e
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.TypeaheadScreen = function (b) {
        function d() {
            this.close = a(this.close, this), d.__super__.constructor.apply(this, arguments), this.header.addClass("no-border"), this.addButton("Cancel", this.close)
        }
        return c(d, b), d.prototype.className = "typeahead-screen", d.prototype.close = function () {
            return this.typeaheadInput.blur(), this.navigateBack({
                trans: "down"
            })
        }, d.prototype.render = function () {
            var a, b = this;
            return this.typeahead = this.params.typeahead, this.typeahead == null && this.navigate("/"), this.header.find(".table-valign-top").remove(), this.html(""), this.setTitle(this.typeahead.typeahead.panel_title), this.header.append(JST["app/views/shared/typeahead-input"]({
                name: this.typeahead.typeahead.name,
                placeholder: this.typeahead.typeahead.placeholder
            })), App.header.setHeight(this, 85), this.typeaheadInput = this.header.find("[data-typeahead-input]"), this.typeaheadInput.on("typeahead:selected", function (a, c) {
                var d;
                return typeof (d = b.typeahead).triggerOnSelect == "function" ? d.triggerOnSelect(a, c, b) : void 0
            }), this.typeaheadInput.on("typeahead:autocompleted", function (a, c) {
                var d;
                return typeof (d = b.typeahead).triggerOnSelect == "function" ? d.triggerOnSelect(a, c, b) : void 0
            }), this.typeaheadInput.on("typeahead:loading", function () {
                return b.typeahead.showSpinner(null, b.$(".twitter-typeahead"))
            }), this.typeaheadInput.on("typeahead:loaded", function () {
                return b.typeahead.hideSpinner(null, b.$(".twitter-typeahead"))
            }), this.typeahead.activateTypeahead(this.typeaheadInput), this.content.prepend(this.header.find(".tt-dropdown-menu").detach()), (a = this.typeaheadInput) != null ? a.focus() : void 0
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    Clarity.Panels.Unsubscribed = function (b) {
        function d() {
            this.render = a(this.render, this), d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.title = "Unsubscribed!", d.prototype.defaultFooter = {
            show: !0
        }, d.prototype.render = function () {
            return this.status || (this.status = App.flash("client_flash")), this.status === "error" ? this.setTitle("Unsubscribe error") : this.setTitle("Unsubscribed!"), this.html(JST["app/views/unsubscribed/call_request"]({
                status: this.status
            }))
        }, d
    }(ClarityPanel)
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/basic_info"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<form class="settings new-form" name="edit profile">\n  <h4>Name</h4>\n  <div class="input"><input type="text" name="name" placeholder="Your Name" value="'), b.push(d(this.member.name())), b.push('" class="validate" /></div>\n\n  <h4>Username</h4>\n  <div class="field screen_name">\n    <input placeholder="Enter your username" type="text" name="screen_name" value="'), b.push(d(this.member.screen_name)), b.push('" class="validate" />\n    <label>'), b.push(d(FRIENDLY_HOST)), b.push('/</label>\n  </div>\n\n  <h4>Mini-Resume</h4>\n  <div class="input">\n    <textarea style="height:200px" name="bio">'), b.push(d(this.member.bio)), b.push('</textarea>\n    <a href="/account/edit/mini-resume" data-action="show-examples">See Example Mini-Resumes &gt;</a>\n    <div class="clearfix" />\n  </div>\n\n  <h4>Email <span class="note secure">Will not be displayed publicly</span></h4>\n  <div class="input"><input type="email" name="email" placeholder="Your Email Address" value="'), b.push(d(this.member.email)), b.push('"/></div>\n\n  <h4>Cell Number <span class="note secure">Will not be displayed publicly</span></h4>\n  <div class="input">\n    <div class="country_code">\n      <select name="country_code">\n        '), f = Helper.countryCodes;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push("\n          <option "), a === parseInt(this.member.country_code) && b.push(d("selected")), b.push(" value='"), b.push(d(a)), b.push("'>+"), b.push(d(a)), b.push("</option>\n        ");
                b.push('\n      </select>\n    </div>\n    <div class="phone">\n      <input placeholder="XXX-XXX-XXXX" type="tel" name="phone_number" value="'), b.push(d((this.member.phone_number || "").replace(RegExp("^" + this.member.country_code), ""))), b.push('" class="validate">\n    </div>\n    <div class="clearfix"></div>\n  </div>\n\n  <h4>Location</h4>\n  <div class="input"><input type="text" name="location" placeholder="Your location (San Francisco, California, ...)" value="'), b.push(d(this.member.location)), b.push('"/></div>\n\n  <h4>Timezone</h4>\n  <div class="input">\n    <select name="timezone"></select>\n  </div>\n\n  <div class="vspace-15" style="height: 1px;"></div>\n\n  <button class="btn btn-green btn-wide save-account">Save</button>\n\n  <span class="delete-account">or <a href="#">Delete Account</a></span>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/delete_account_confirmation"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="notification-dialog-wrapper">\n  <div id="global-notification-dialog" class="notification-dialog delete-account-dialog">\n    <div class="text">\n      <div>\n        Are you sure you want to delete your account?\n      </div>\n    </div>\n    <div>\n          <button class="close ok-delete-account">Yes</button>\n       <button class="close cancel">No</button>\n    </div>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/edit_profile"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="settings-list center-screen">\n\n  <h4>This Screen is Obsolete!</h4>\n  <ul class="flat">\n    <li><a href="/account/edit" class="internal">Basic Information</a></li>\n    '), App.iOS && App.iOSVersion < 6 || b.push('\n      <li><a href="/account/image" class="internal">Picture</a></li>\n    '), b.push('\n    <li><a href="/account/video" class="internal">Video</a></li>\n    <li><a href="/account/social" class="internal">Social Accounts</a></li>\n  </ul>\n  <ul class="flat">\n    <li><a href="/account/topics" class="internal">Topics</a></li>\n    <li><a href="/account/expertise" class="internal">Areas of Expertise</a></li>\n    <li><a href="/account/reviews" class="internal">Reviews</a></li>\n  </ul>\n  <ul class="flat">\n    <li><a href="/'), b.push(d(this.currentMember.screen_name)), b.push('/share" class="internal">Share Your Profile</a></li>\n  </ul>\n\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/expert_info"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j;
                b.push('<form class="center-screen settings new-form" name="edit profile">\n\n  <h4>Hourly Rate</h4>\n  <div class="input">\n    <select name="hourly_rate">\n      <option disabled="disabled">Select an hourly rate</option>\n      '), i = this.hourly_rates;
                for (e = 0, g = i.length; e < g; e++) c = i[e], b.push("\n        "), c === this.hourly_rate ? (b.push('\n          <option value="'), b.push(d(c)), b.push('" selected="selected">$'), b.push(d(c.toCurrency(0))), b.push("</option>\n        ")) : (b.push('\n          <option value="'), b.push(d(c)), b.push('">$'), b.push(d(c.toCurrency(0))), b.push("</option>\n        ")), b.push("\n      ");
                b.push('\n    </select>\n  </div>\n\n\n  <h4>Charity</h4>\n  <div class="input">\n    <select name="charity" class="charities">\n      <option value="add">Add a new charity</option>\n      <option value="none" '), this.member.charity_id || b.push(d("selected")), b.push(">None</option>\n      "), j = this.charities;
                for (f = 0, h = j.length; f < h; f++) a = j[f], b.push('\n  <option value="'), b.push(d(a.id)), b.push('" '), this.member.charity_id === a
                    .id && b.push(d("selected")), b.push(">"), b.push(d(a.name)), b.push("</option>\n      ");
                b.push('\n    </select>\n  </div>\n\n  <div class="email-notifications">\n    <ul class="flat">\n      <li>\n        <label class="email-label" style="display: block; float: left;">Include in Public Search</label>\n        <input name="in_global_search" type="checkbox" '), this.member.in_global_search && b.push('checked="checked"'), b.push(' />\n      </li>\n      <li style="padding: 0; height: auto">\n        <a href="" class="internal" data-action="set-a-passcode">Create a Free Link</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class="vspace-15" style="height: 1px;"></div>\n\n  <button class="btn btn-green btn-wide save-account">Save</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/export_payment"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="info">\n  <div class="constrain">\n    <form>\n      <h4>We\'re about to export <strong>$'), b.push(d(this.payout.amount.toCurrency())), b.push('</strong> into your PayPal account.</h4>\n\n      <p>Please ensure the address below is the correct address associated with your PayPal account.</p>\n      <input type="email" name="paypal_email" class="validate optional" value="'), b.push(d(this.member.paypal_email)), b.push('" >\n      <button class="pay btn btn-green btn-wide">Export to PayPal Now</button>\n    </form>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/mini_resume"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<!-- micah -->\n<div class="item">\n    <div class="image">\n        <div class="user-profile-image-wrapper"><img class="user-profile-image small" src="https://secure.gravatar.com/avatar/7829ce1f26bb620232658d0e1f93dc58.jpg?s=100" /></div>\n    </div>\n    <div class="details">\n      <span class="name">Micah Baldwin</span>\n      <span class="bio">\n      Founder Graphicly. Multiple Entrepreneur. Mentor at Techstars & 500startups. Startup Doer and Advisor.\n      </span>\n    </div>\n</div>\n\n\n\n<!-- dave -->\n<div class="item">\n    <div class="image">\n        <div class="user-profile-image-wrapper"><img class="user-profile-image small" src="https://graph.facebook.com/5405110/picture?type=normal" /></div>\n    </div>\n    <div class="details">\n      <span class="name">Dave McClure</span>\n      <span class="bio">\n      Founding Partner & TroubleMaker @ 500 Startups. also: geek, entrepreneur, marketer, startup fanboy, internet & social addict, former PayPal & Mint henchman.\n      </span>\n    </div>\n</div>\n\n<!-- dan -->\n<div class="item">\n    <div class="image">\n        <div class="user-profile-image-wrapper"><img class="user-profile-image small" src="https://secure.gravatar.com/avatar/46167b6a928b350aa049dbc6fa6d25f1.jpg?s=100" /></div>\n    </div>\n    <div class="details">\n      <span class="name">Dan Martell</span>\n      <span class="bio">\n      Canadian Entrepreneur. Founder of Clarity – Angel Investor (15 tech startups). Co-Founder of Flowtown (Acquired 11’), Founder of Spheric Technologies (Acquired 08’), Mentor @ 500Startup & GrowLabs. Passionate about giving back.\n      </span>\n    </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/notifications"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="center-screen settings-list">\n  <h4>Emails</h4>\n  <ul class="flat">\n    <li>\n      <label class="email-label">Call Requests</label>\n      <input class="receives_call_request_email" type="checkbox" '), this.receives_call_request_email && b.push('checked="checked"'), b.push(' />\n    </li>\n    <li>\n      <label class="email-label">Call Reminders</label>\n      <input class="receives_email_reminders" type="checkbox" '), this.receives_email_reminders && b.push('checked="checked"'), b.push(' />\n    </li>\n    <li>\n      <label class="email-label">Daily Digest</label>\n      <input class="receives_daily_digest_email" type="checkbox" '), this.receives_daily_digest_email && b.push('checked="checked"'), b.push(' />\n    </li>\n    <li>\n      <label class="email-label">Recommendations</label>\n      <input class="receives_weekly_recommendations_email" type="checkbox" '), this.receives_weekly_recommendations_email && b.push('checked="checked"'), b.push(' />\n    </li>\n    <li>\n      <label class="email-label">Clarity Updates</label>\n      <input class="receives_clarity_updates_email" type="checkbox" '), this.receives_clarity_updates_email && b.push('checked="checked"'), b.push(' />\n    </li>\n    <li>\n      <label class="email-label">Favorites</label>\n      <input class="receives_favorite_notification_email" type="checkbox" '), this.receives_favorite_notification_email && b.push('checked="checked"'), b.push(' />\n    </li>\n  </ul>\n\n  <div class="typo-12 typo-dark-grey white-text-shadow">\n    Your email is <strong class="typo-black">'), b.push(d(this.email)), b.push('</strong>\n    (<a href="/account/edit" class="internal">edit</a>)\n  </div>\n\n  <h4>SMS</h4>\n  <ul class="flat">\n    <li>\n      <label class="email-label">Call Management</label>\n      <input class="receives_sms_notifications" type="checkbox" '), this.receives_sms_notifications && b.push('checked="checked"'), b.push(' />\n    </li>\n    <li>\n      <label class="email-label">Call Reminders</label>\n      <input class="receives_sms_reminders" type="checkbox" '), this.receives_sms_reminders && b.push('checked="checked"'), b.push(' />\n    </li>\n  </ul>\n\n  <div class="typo-12 typo-dark-grey white-text-shadow">\n    Your phone number is <strong class="typo-black">'), b.push(d(this.country_code)), b.push("-"), b.push(d((this.phone_number || "").replace(RegExp("^" + this.country_code), ""))), b.push('</strong>\n    (<a href="/account/edit" class="internal">edit</a>)\n  </div>\n\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/profile_image"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="center-screen">\n  <div class="user-profile-image-wrapper bigger-border" style="margin: 0 auto; display: block; width: 90px">\n    <img class="user-profile-image large" src="'), b.push(d(this.member.imageUrl("normal_square"))), b.push('" />\n  </div>\n  <h4 class="heading" style="margin-bottom: 0">Upload a new profile picture</h4>\n  '), App["native"]() ? b.push("\n    <button data-action=upload>Choose File!</button>\n  ") : b.push('\n    <input class="upload-profile-picture" type="file" name="image">\n  '), b.push("\n</div>\n\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/reset_password"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="constrain account edit">\n  <form class="settings new-form vspace-20" name="edit profile">\n    <h4>New password</h4>\n    <div class="input vspace-20"><input type="password" name="password" placeholder="New Password" class="validate" style="width: 93%" /></div>\n    <h4>Confirm password</h4>\n    <div class="input"><input type="password" name="verify-password" placeholder="Confirm Password" class="validate" style="width: 93%" /></div>\n\n    <button class="btn btn-green btn-wide" data-action="reset">Set new password</button>\n  </form>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/show"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top no-sides">\n  <div class="constrain">\n\n    <div class="profile-card">\n      <div class="profile" data-href="/'), b.push(d(this.currentMember.screen_name)), b.push('">\n        <div class="image">\n          <div class="user-profile-image-wrapper">\n            <img class="user-profile-image small" src="'), b.push(d(this.currentMember.imageUrl())), b.push('">\n          </div>\n        </div>\n        <div class="who">\n          <div class="name"><a href="/'), b.push(d(this.currentMember.screen_name)), b.push('" class="internal">'), b.push(d(this.currentMember.name())), b.push("</a></div>\n          <div>\n            Joined "), b.push(d(this.currentMember.formattedCreatedAt())), b.push('\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class="settings-list center-screen">\n\n\n  <h4>Profile</h4>\n  \n  <ul class="flat">\n    <li><a href="/'), b.push(d(this.currentMember.screen_name)), b.push('" class="internal">View Profile</a></li>\n    <li><a href="/account/edit" class="internal">Basic Information</a></li>\n    '), this.currentMember.is_expert && b.push('\n      <li><a href="/account/edit/expert" class="internal">Expert Information</a></li>\n    '), b.push("\n    "), App.iOS && App.iOSVersion < 6 || b.push('\n      <li><a href="/account/image" class="internal">Picture</a></li>\n    '), b.push('\n    <li><a href="/account/video" class="internal">Video</a></li>\n    <li><a href="/account/topics" class="internal">Topics</a></li>\n    <li><a href="/account/expertise" class="internal">Areas of Expertise</a></li>\n    <li><a href="/account/reviews" class="internal">Reviews</a></li>\n  </ul>\n\n\n  <h4>Share</h4>\n  <ul class="flat">\n    <li><a href="/'), b.push(d(this.currentMember.screen_name)), b.push('/share" class="internal">Your Profile</a></li>\n    <li><a href="/account/widget" class="internal">Add a Blog Widget</a></li>\n    '), this.currentMember.is_expert && b.push('\n      <li><a href="" class="internal" data-action="set-a-passcode">Create a Free Link</a></li>\n    '), b.push('\n  </ul>\n\n\n  <h4>Settings</h4>\n\n  <ul class="flat">\n    <li><a href="/account/notifications" class="internal">Notifications</a></li>\n    <li><a href="/account/reset_password" class="internal">Change Password</a></li>\n  </ul>\n\n\n  <h4>Account</h4>\n\n  <ul class="flat">\n    <!-- <li><a href="/favorites" class="internal">Favorites</a></li> -->\n    <li><a href="/account/promos" class="internal">Promotions</a></li>\n    '), this.currentMember.team_member && b.push('\n      <li><a href="/plans" class="internal">Plans</a></li>\n    '), b.push('\n    <li><a href="/account/transactions/earned" class="internal">Money</a></li>\n    '), this.currentMember.hasCreditCard() && b.push('\n      <li><a href="/credit-card" class="internal">Credit Card</a></li>\n    '), b.push('\n  </ul>\n  \n\n  <h4>Help</h4>\n\n  <ul class="flat">\n    <li><a href="/how-it-works" class="external">How It Works</a></li>\n    <li><a href="http://help.clarity.fm" class="external">Help Center</a></li>\n    <!-- <li><a href="/privacy" class="external">Privacy Policy</a></li> -->\n    <li><a href="/terms" class="external">Terms of Service</a></li>\n  </ul>\n\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/social_connections"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j, k;
                this.onboard && b.push('\n  <div class="dark-top">\n    <div class="constrain">\n      <div class="welcome welcome-centered">\n        <h4>Setup your Social Accounts</h4>\n      </div>\n    </div>\n  </div>\n'), b.push('\n\n<div class="center-screen">\n  '), this.onboard ? b.push('\n      <h4>Connect to add credibility <span class="note">(optional)</span></h4>\n  ') : b.push("\n    <h4>Connect social accounts to add credibility</h4>\n  "), b.push('\n  <ul class="flat connections">\n    <li>\n      <a href="#"\n         data-provider="facebook"\n         data-action="'), b.push(d(((a = this.providers["facebook"]) != null ? a.value : void 0) ? "disconnect" : "connect")), b.push('"\n         class="item '), b.push(d(((c = this.providers["facebook"]) != null ? c.value : void 0) ? "connected" : "")), b.push('">\n        <img class="icon" src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/social/facebook-a5bb7ec5976e19663a13253ddf197bcd.png" />\n        <div class="name">Facebook</div>\n        <div class="status">'), b.push(d(((e = this.providers["facebook"]) != null ? e.value : void 0) ? "Connected" : "Disconnected")), b.push('</div>\n        <div style="clear: both;"></div>\n      </a>\n    </li>\n\n    <li>\n      <a href="#"\n         data-provider="linkedin"\n         data-action="'), b.push(d(((f = this.providers["linkedin"]) != null ? f.value : void 0) ? "disconnect" : "connect")), b.push('"\n         class="item '), b.push(d(((g = this.providers["linkedin"]) != null ? g.value : void 0) ? "connected" : "")), b.push('">\n        <img class="icon" src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/social/linkedin-145575ae38a7780229d733215e3f63a3.png" />\n        <div class="name">Linkedin</div>\n        <div class="status">'), b.push(d(((h = this.providers["linkedin"]) != null ? h.value : void 0) ? "Connected" : "Disconnected")), b.push('</div>\n        <div style="clear: both;"></div>\n      </a>\n    </li>\n\n    <li>\n      <a href="#"\n         data-provider="twitter"\n         data-action="'), b.push(d(((i = this.providers["twitter"]) != null ? i.value : void 0) ? "disconnect" : "connect")), b.push('"\n         class="item '), b.push(d(((j = this.providers["twitter"]) != null ? j.value : void 0) ? "connected" : "")), b.push('">\n        <img class="icon" src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/social/twitter-1ccb534bd121dfa99622aca438198146.png" />\n        <div class="name">Twitter</div>\n        <div class="status">'), b.push(d(((k = this.providers["twitter"]) != null ? k.value : void 0) ? "Connected" : "Disconnected")), b.push('</div>\n        <div style="clear: both;"></div>\n      </a>\n    </li>\n  </ul>\n\n  <span class="instructions">Tap to connect or disconnect</span>\n\n  '), this.onboard && b.push('\n    <div class="panel-padded">\n      <button class="btn btn-green btn-wide" data-action="save">Save &amp; Continue</button>\n      <div class="vspace-10"></div>\n    </div>\n  '), b.push("\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/transactions"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g;
                b.push('<header>\n  <div class="header-tabs-wrapper">\n    <ul class="header-tabs two">\n      <li class="tab paid">Paid</li>\n      <li class="tab earned">Earned</li>\n    </ul>\n  </div>\n</header>\n\n'), this.type === "earned" && (b.push('\n  <div class="info earned centered">\n    <div class="constrain">\n      <div class="balance inset-div">\n        <h4>Account Balance:</h4>\n        <span class="money"><input class="optional payout" type="text" name="payout" placeholder="$0.00" pattern="^\\$?(\\d|,)*\\.?\\d{0,2}$" value="'), b.push(d(Member.current().balance.toCurrency())), b.push('" '), parseFloat(Member.current().balance) === 0 && b.push(d("disabled")), b.push('></span>\n        <button class="export btn btn-green btn-wide" '), parseFloat(Member.current().balance) === 0 && b.push(d("disabled")), b.push(">Export to PayPal</button>\n      </div>\n      "), parseFloat(this.amount) > 0 && this.transactions[0] && (b.push("\n        <h4>Payments in process: <strong>$"), b.push(d(this.amount.toCurrency())), b.push('</strong></h4>\n        <p class="in-process">Will be available in your account by '), b.push(d(moment(this.transactions[0].created_at).add("days", 15).format("MMM DD"))), b.push("</p>\n      ")), b.push("\n      <h4>Total earned on Clarity: <strong>$"), b.push(d(Member.current().total_earned.toCurrency())), b.push("</strong></h4>\n      <p>Since you signed up on "), b.push(d(moment.utc(Member.current().created_at).format("MMMM DD, YYYY"))), b.push("</p>\n    </div>\n  </div>\n")), b.push("\n"), this.type === "paid" && (b.push('\n  <div class="top paid">\n    <div class="constrain">\n      <div class="balance inset-div">\n        <h4>Total Payments Made:</h4>\n        <span class="money"><input disabled class="optional payout" type="text" name="payout" placeholder="$0.00" pattern="^\\$?(\\d|,)*\\.?\\d{0,2}$" value="'), b.push(d(this.amount.toCurrency())), b.push('"></span>\n        <span class="date">As of '), b.push(d(moment(new Date).format("MMMM YYYY"))), b.push("</span>\n      </div>\n    </div>\n  </div>\n\n")), b.push('\n<div class="constrain">\n  <table class="transaction-list">\n    '), a = null, b.push("\n\n    "), g = this.transactions;
                for (e = 0, f = g.length; e < f; e++) c = g[e], b.push("\n      "), c.month() !== a && (b.push("\n        "), a = c.month(), b.push('\n        <tr class="month"><td colspan=2>'), b.push(d(a)), b.push("</td></tr>\n      ")), b.push('\n      <tr class="row">\n        '), this.type === "paid" ? (b.push('\n          <td class="name">'), b.push(d(c.name)), b.push("\n            "), c.charity_name && (b.push("\n              <!-- <span>"), b.push(d(c.charity_name)), b.push("</span> -->\n            ")), b.push("\n            "), c.discounted_amount > 0 && (b.push("\n              <span>(discount"), c.applied_coupons.length > 1 && b.push(d("s")), b.push(": $"), b.push(d(c.discounted_amount.toCurrency())), b.push(")</span>\n            ")), b.push('\n          </td>\n          <td class="amount">$'), b.push(d(c.amount_after_discount.toCurrency())), b.push("</td>\n\n        ")) : (b.push('\n          <td class="name">'), b.push(d(c.name)), b.push("\n            "), c.charity_name && (b.push("\n              <span>"), b.push(d(c.charity_name)), b.push("</span>\n            ")), b.push('\n          </td>\n          <td class="amount">$'), b.push(d(c.expert_share.toCurrency())), b.push("</td>\n        ")), b.push("\n      </tr>\n\n    ");
                b.push("\n  </table>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/video"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<h4 class="heading">Add a video to your profile</h4>\n\n<form class="settings new-form" name="edit profile">\n  <h4>YouTube, Vimeo or Blip link</h4>\n  <div class="input">\n    <input type="text" name="video_url" placeholder="http://" value="'), b.push(d(this.currentMember.video_embed_url)), b.push('" />\n    <div class="note">Other video support coming soon</div>\n  </div>\n\n  <div class="vspace-20" style="height: 1px;"></div>\n\n  <button class="btn btn-green btn-wide save-video">Save</button>\n  '), this.currentMember.video_embed_url != null && this.currentMember.video_embed_url !== "" && b.push('\n    <span class="remove-video">or <a href="#">Remove Video</a></span>\n  '), b.push('\n  <div class="vspace-10" style="height: 1px;"></div>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/account/widget"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                this.member != null && this.currentMember != null && this.member.id === this.currentMember.id ? b.push('\n  <h4 class="heading" style="margin-bottom:12px">Add a Clarity widget to your blog</h4>\n  ') : (b.push('\n  <h4 class="heading" style="margin-bottom:12px">Embed '), b.push(d(this.member.name())), b.push("'s Clarity widget on your website</h4>\n")), b.push('\n\n<form class="settings new-form" style="padding-top:0px">\n  <h4 style="margin-left: 4px; margin-top: 20px;">Display rate per:</h4>\n  <ul class="flat select" style="width:auto;">\n    <li data-val="minute">\n      <label class="email-label">Minute</label>\n    </li>\n    <li data-val="hourly">\n      <label class="email-label">Hour</label>\n    </li>\n  </ul>\n\n\n  <textarea class="widget-code" data-behavior="select-all"><iframe class="clarity-widget" data-c-id="'), b.push(d(this.member.id)), b.push('"'), this.rate_type === "hourly" && b.push(' data-c-display-rate="hourly"'), b.push(' data-c-width="" frameborder="0" style="border: 0; height: 0"></iframe>\n<script src="'), b.push(d(FRIENDLY_HOST)), b.push('/assets/widget_loader.js"></script></textarea>\n\n  <div class="note" style="font-style:normal;font-size:10px;float:left;padding-top:12px;margin-left:4px">Copy and paste the code into the HTML of your site.</div>\n  <button class="btn btn-beige copy-expert-info copy-widget-code"><i class="icon-small-copy"></i></button>\n  <div class="clearfix"></div>\n  \n\n  <div class="vspace-20" />\n  <h4 class="heading">Preview</h4>\n\n  <div style="text-align:center">\n    <div class="loading-spinner"></div>\n    <div class="widget-wrapper">\n      <iframe class="clarity-widget" data-c-id="'), b.push(d(this.member.id)), b.push('"'), this.rate_type === "hourly" && b.push(' data-c-display-rate="hourly"'), b.push(' frameborder="0" style="border: 0; height: 400px"></iframe>\n    </div>\n  </div>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/call_request/availability"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top precall-header with-image">\n  <div class="constrain">\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img style="display: block;" class="user-profile-image small" src="'), b.push(d(this.expert.imageUrl("normal_square"))), b.push('" /></div>\n    </div>\n    <div class="instructions">\n      <h4>Schedule a call with '), b.push(d(this.expert.first_name)), b.push("</h4>\n      "), this.expert.isFree() ? b.push('\n        <div class="hourly-rate-box free" style="float: left; padding: 0 10px;">Free</div>\n      ') : (b.push('\n        <div class="hourly-rate-box" style="float: left; padding: 0 10px;">\n          <span>$'), b.push(d(this.expert.formattedCost())), b.push("</span> per minute\n        </div>\n      ")), b.push('\n      <p class="howdoesthiswork"><a href="http://help.clarity.fm" target="_blank" class="how-it-works external">Questions?</a></p>\n    </div>\n    <div style="clear: both;"></div>\n  </div>\n</div>\n\n\n<form class="settings new-form">\n  <p>Suggest 3 times to '), b.push(d(this.expert.first_name)), b.push(" to schedule the call. "), b.push(d(this.expert.first_name)), b.push(' can accept a time or suggest other times.</p>\n\n  <h4>Your timezone</h4>\n  <div class="field">\n    <select name="timezone" class="timezone"></select>\n  </div>\n\n  <h4>Suggest 3 times</h4>\n\n  <div class="timepickers">\n    <div class="timepicker">\n      <div class="date"></div>\n      <div class="at">at</div>\n      <div><select class="time"></select></div>\n    </div>\n\n    <div class="timepicker">\n      <div class="date"></div>\n      <div class="at">at</div>\n      <div><select class="time"></select></div>\n    </div>\n\n    <div class="timepicker">\n      <div class="date"></div>\n      <div class="at">at</div>\n      <div><select class="time"></select></div>\n    </div>\n  </div>\n\n  <button class="btn btn-green btn-wide continue">Continue</button>\n\n</form>\n\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/call_request/confirm"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="dark-top precall-header with-image">\n  <div class="constrain">\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img style="display: block;" class="user-profile-image small" src="'), b.push(d(this.expert.imageUrl("normal_square"))), b.push('" /></div>\n    </div>\n    <div class="instructions">\n      <h4>Schedule a call with '), b.push(d(this.expert.first_name)), b.push("</h4>\n      "), this.expert.isFree() ? b.push('\n        <div class="hourly-rate-box free" style="float: left; padding: 0 10px;">Free</div>\n      ') : (b.push('\n        <div class="hourly-rate-box" style="float: left; padding: 0 10px;">\n          <span>$'), b.push(d(this.expert.formattedCost())), b.push("</span> per minute\n        </div>\n      ")), b.push('\n      <p class="howdoesthiswork"><a href="http://help.clarity.fm" target="_blank" class="how-it-works external">Questions?</a></p>\n    </div>\n    <div style="clear: both;"></div>\n  </div>\n</div>\n\n<form class="settings new-form">\n  <p>Review and confirm the details before before submitting your call request.</p>\n\n  <div class="call-item vspace-10">\n    <div class="header small">\n      <i class="icon-call-reason"></i>\n      <strong>Reason for call</strong>\n    </div>\n    <div class="secondary shown clearfix">\n      <a href="#" class="edit-call change">Change</a>\n      '), b.push(d(this.request.reason)), b.push('\n    </div>\n\n    <div class="header small">\n      <i class="icon-call-time"></i>\n      <strong>Suggested times</strong>\n    </div>\n    <div class="secondary shown clearfix">\n      <a href="#" class="edit-availability change">Change</a>\n      '), f = this.request.suggestedTimes();
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push("\n        "), b.push(d(a.format("ddd, MMM D YYYY [at] h:mm A"))), b.push("<br/>\n      ");
                b.push('\n      <div style="margin-top: 5px">\n        <small><strong>Timezone:</strong> '), b.push(d(this.request.timezone_display)), b.push('</small>\n      </div>\n    </div>\n\n    <div class="header small">\n      <i class="icon-call-costs"></i>\n      <strong>Estimated Total</strong>\n    </div>\n    <div class="secondary shown">\n      <strong style="display: block; clear: both" class="pull-left">Rate per minute</strong> <span class="pull-right">$'), b.push(d(this.expert.formattedCost())), b.push('</span>\n      <strong style="display: block; clear: both" class="pull-left">Requested call length</strong> <span class="pull-right">'), b.push(d(this.request.approximate_length)), b.push(' minutes</span>\n      <strong style="display: block; clear: both" class="pull-left">Estimated cost</strong> <span class="pull-right">$'), b.push(d((this.request.approximate_length * this.expert.formattedCost()).toCurrency())), b.push('</span>\n      <div class="clearfix"></div>\n    </div>\n  </div>\n\n  <div class="typo-12 typo-dark-grey white-text-shadow vspace-15" style="text-align: center; padding: 0 8px;">\n    A conference line number will be provided once the call is confirmed. The call is charged per minute even if you go over the request length of time.\n  </div>\n\n  '), this.expert.isFree(this.currentMember, this.request.passcode) || (b.push('\n    <div class="call-item vspace-15">\n      <div class="header small">\n        <i class="icon-call-cc"></i>\n        <strong>Credit card</strong>\n      </div>\n      <div class="secondary shown clearfix">\n        <a href="#" class="edit-cc change">Change</a>\n        <strong>'), b.push(d(this.currentMember.credit_card_type)), b.push(":</strong> ************"), b.push(d(this.currentMember.last_four_cc_digits)), b.push("\n      </div>\n    </div>\n  ")), b.push('\n\n  <div>\n    <button class="btn btn-green btn-wide request-call">Submit Request</button>\n  </div>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/call_request/precall"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j;
                b.push('<div class="dark-top precall-header with-image">\n  <div class="constrain">\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img style="display: block;" class="user-profile-image small" src="'), b.push(d(this.expert.imageUrl("normal_square"))), b.push('" /></div>\n    </div>\n    <div class="instructions">\n      <h4>Schedule a call with '), b.push(d(this.expert.first_name)), b.push("</h4>\n      "), this.expert.isFree() ? b.push('\n        <div class="hourly-rate-box free" style="float: left; padding: 0 10px;">Free</div>\n      ') : (b.push('\n        <div class="hourly-rate-box" style="float: left; padding: 0 10px;">\n          <span>$'), b.push(d(this.expert.formattedCost())), b.push("</span> per minute\n        </div>\n      ")), b.push('\n      <p class="howdoesthiswork"><a href="http://help.clarity.fm" target="_blank" class="how-it-works external">Questions?</a></p>\n    </div>\n    <div style="clear: both;"></div>\n  </div>\n</div>\n\n<form class="settings new-form">\n  <h4>Reason for call <span class="note char-counter reason-char-counter">(<span class="chars">140</span> characters left)</span> <a href="/help/reason-examples" class="above" data-action="show-examples">View examples</a></h4>\n  <div class="field">\n    <textarea\n       errormessage="Please enter a reason for the call" maxlength="140"\n       class="validate" name="reason"\n       placeholder="Type your reason..."></textarea>\n  </div>\n\n  '), this.showEmail && (b.push('\n    <h4>Email <span class="note secure">This is never shared and only used for messages</span></h4>\n    <div class="field">\n      <input placeholder="Your email address"  type="email" name="email" value="'), b.push(d((f = this.member) != null ? f.email : void 0)), b.push('" class="validate">\n      <div class="clearfix"></div>\n    </div>\n  ')), b.push('\n\n  <h4>Approximate length of call</h4>\n  <div class="field">\n    <select name="approximate_length">\n      <option value="15">15 minutes</option>\n      <option value="30">30 minutes</option>\n      <option value="45">45 minutes</option>\n      <option value="60">1 hour</option>\n    </select>\n    <div class="clearfix"></div>\n  </div>\n\n  <h4>Cell number <span class="note secure">This is never shared and only used to send you notifications</span></h4>\n  <div class="field phone-number">\n    <div class="country_code">\n      <select name="country_code">\n        '), g = Helper.countryCodes;
                for (c = 0, e = g.length; c < e; c++) a = g[c], b.push("\n          <option "), a === parseInt((h = this.member) != null ? h.country_code : void 0) && b.push(d("selected")), b.push(" value='"), b.push(d(a)), b.push("'>+"), b.push(d(a)), b.push("</option>\n        ");
                b.push('\n      </select>\n    </div>\n    <div class="phone">\n      <input placeholder="XXX-XXX-XXXX" class="validate" type="tel" name="phone_number" value="'), b.push(d((((j = this.member) != null ? j.phone_number : void 0) || "").replace(RegExp("^" + ((i = this.member) != null ? i.country_code : void 0)), ""))), b.push('">\n    </div>\n    <div style="clear:both;"></div>\n  </div>\n\n  <button class="btn btn-green btn-wide continue">Continue</button>\n\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_accept"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="call-item">\n  <div class="secondary shown no-icon">\n    <p>\n      Rate per minute\n      <strong class="pull-right">\n        '), parseFloat(this.call.hourly_rate) === 0 || isNaN(parseFloat(this.call.hourly_rate)) ? (b.push("\n          Free "), this.call.passcode != null && this.call.passcode !== "" && (b.push("("), b.push(d(this.call.passcode.toUpperCase())), b.push(")")), b.push("\n        ")) : (b.push("\n          $"), b.push(this.call.formattedCost()), b.push("</span>/min\n        ")), b.push('\n      </strong>\n    </p>\n    <p>\n      Requested call length: <strong class="pull-right">'), b.push(d(this.call.approximate_length)), b.push(' minutes</strong>\n    </p>\n    <p>\n      Estimated total: <strong class="pull-right">$'), b.push(d((this.call.approximate_length * this.call.formattedCost()).toCurrency())), b.push('</strong>\n    </p>\n  </div>\n</div>\n\n<div class="vspace-15"></div>\n\n<div class="call-item">\n  <div class="header">\n    <i class="icon-blue-circle"></i>\n    '), b.push(d(this.call.displayStatus())), b.push("\n  </div>\n\n  "), f = this.call.suggestedTimes();
                for (a = 0, e = f.length; a < e; a++) c = f[a], b.push('\n    <div class="suggestion '), moment(c.format("YYYY-MM-DD[T]HH:mm:ss")).toDate() < moment(moment().memberTimezoneAdjusted().format("YYYY-MM-DD[T]HH:mm:ss")).toDate() && b.push("expired"), b.push('">\n      <div class="datetime pull-left">\n        <div>'), b.push(d(c.format("ddd, MMM D YYYY"))), b.push("</div>\n        <div>"), b.push(d(c.format("hh:mm A"))), b.push(" ("), b.push(d(Member.current().timezone_label)), b.push(')</div>\n      </div>\n      <button class="btn btn-green btn-small pull-right" data-time-index="'), b.push(d(a)), b.push('">Accept</button>\n      <div class="clearfix"></div>\n    </div>\n  ');
                b.push("\n</div>\n\n"), b.push(JST["app/views/calls/_reschedule_button"]({
                    call: this.call,
                    call_details: !0
                })), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_beneficiary"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                this.call.payment_amount > 0 && (b.push('\n  <div class="light-border" '), this.rightAlign && b.push('style="text-align: right;"'), b.push(">\n    "), Member.current().id === this.call.seeker().id ? (b.push("\n      You paid\n\n      "), this.rightAlign ? (b.push("\n        <strong>$"), b.push(d(this.call.payment_amount_after_rebate.toCurrency())), b.push("</strong>\n        ")) : (b.push("\n        $"), b.push(d(this.call.payment_amount_after_rebate.toCurrency())), b.push("\n      ")), b.push("\n\n      "), this.includeDiscount && this.call.discounted_amount > 0 && (b.push('\n        <span style="color: #999; font-weight: normal;">(discount'), this.call.applied_coupons.length > 1 && b.push(d("s")), b.push(": $"), b.push(d(this.call.discounted_amount.toCurrency())), b.push(")</span>\n      ")), b.push("\n    ")) : (b.push("\n      "), b.push(d(this.call.beneficiary)), b.push(" received $"), b.push(d(this.call.expert_share.toCurrency())), b.push("\n    ")), b.push("\n  </div>\n")), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_cancel"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                this.is_expert ? (b.push('\n  <div class="call-item dropdown collapsed cancel-call-toggle">\n    <div class="dropdown-header header btn btn-red">\n      <strong><i class="icon-cancel"></i> Can\'t Take the Call?</strong>\n      <div class="pull-right"><i class="fa-icon-chevron-down"></i></div>\n    </div>\n    <div class="expanded-content cancel">\n      Heads down, crazy busy, ping me later\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content cancel">\n      Not a good fit for my expertise\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content cancel">\n      Conflicting association\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content cancel">\n      On vacation\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content cancel">\n      Without a reason\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content other-times" data-href="/calls/'), b.push(d(this.call.id)), b.push('/suggest">\n      Or, suggest a new time\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n  </div>\n')) : (b.push('\n  <div class="call-item dropdown collapsed cancel-call-toggle">\n    <div class="dropdown-header header btn btn-red">\n      <strong><i class="icon-cancel"></i> Cancel Call (choose a reason)</strong>\n      <div class="pull-right">\n        <i class="fa-icon-chevron-down"></i>\n      </div>\n    </div>\n    <div class="expanded-content cancel">\n      Need has passed\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content cancel">\n      Without a reason\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n    <div class="expanded-content other-times" data-href="/calls/'), b.push(d(this.call.id)), b.push('/suggest">\n      Or, suggest a new time\n      <div class="pull-right"><i class="fa-icon-chevron-right pull-left"></i></div>\n    </div>\n  </div>\n')), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_canceled"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="call-item">\n  <div class="header small">\n    <i class="icon-call-'), b.push(d(this.call.status())), b.push('"></i>\n    '), b.push(d(this.call.displayStatus())), b.push("\n  </div>\n  "), this.call.cancelation_reason != null && this.call.cancelation_reason !== "" && (b.push('\n    <div class="secondary shown no-icon small">\n      '), b.push(d(this.call.cancelation_reason)), b.push("\n    </div>\n  ")), b.push("\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_completed"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="call-item">\n  <div class="header small">\n    <i class="icon-call-'), b.push(d(this.call.status())), b.push('"></i>\n    '), b.push(this.call.displayStatus()), b.push("\n  </div>\n\n  <div>\n    Completed on "), b.push(d(moment(this.call.scheduled_at || this.call.end_time).member().format("ddd, MMM D YYYY [at] h:mm A"))), b.push(" ("), b.push(d(Member.current().timezone_label)), b.push(")\n  </div>\n\n  ");
                if (this.call.applied_coupons.length > 0) {
                    b.push('\n    <div>\n\n      <table style="width: 100%;">\n        <tr>\n          <td>\n            <strong>Transaction cost:</strong>\n          </td>\n          <td style="text-align: right;">\n            <strong>$'), b.push(d(this.call.payment_amount.toCurrency())), b.push("</strong>\n          </td>\n        </tr>\n\n        "), f = this.call.applied_coupons;
                    for (c = 0, e = f.length; c < e; c++) a = f[c], b.push("\n          <tr>\n            <td>\n              "), b.push(d(a.coupon_code)), b.push(" ("), b.push(d(a.promo_rebate_display)), b.push(')\n            </td>\n            <td style="text-align: right;">-$'), b.push(d(a.amount.toCurrency())), b.push("</td>\n          </tr>\n        ");
                    b.push("\n      </table>\n    </div>\n  ")
                }
                b.push("\n  "), b.push(JST["app/views/calls/_beneficiary"]({
                    call: this.call,
                    rightAlign: this.call.applied_coupons.length > 0
                })), b.push("\n</div>\n\n\n"), this.call.myRating() ? (b.push('\n  <div class="vspace-15" />\n\n  <div class="form-wrapper">\n    <form class="settings">\n      <h4>Internal Clarity rating</h4>\n      <div class="input">\n        <div class="star-rating-wrapper">\n          <div class="star-rating" data-stars="'), b.push(d(this.call.myRating().stars)), b.push('"></div>\n        </div>\n        <div class="current-rating">'), b.push(d(Helper.pluralize(this.call.myRating().stars, "star", "stars"))), b.push("</div>\n      </div>\n\n      "), this.call.myRating().comment != null && this.call.myRating().comment !== "" && (b.push('\n        <h4>Your review</h4>\n        <div class="recommendations-wrapper">\n          <div class="expertise">\n            '), this.call.myRating() && (b.push("\n              "), b.push(JST["app/views/recommendations/item"]({
                    review: this.call.myRating()
                })), b.push("\n            ")), b.push("\n          </div>\n        </div>\n      ")), b.push("\n    </form>\n  </div>\n\n")) : this.call.seeker().id !== this.call.expert().id && parseFloat(this.call.duration, 10) > BILLABLE_CALL_LENGTH && (b.push('\n  <div class="vspace-15"></div>\n  <button class="btn btn-green btn-wide" data-href="/calls/'), b.push(d(this.call.id)), b.push('/rate">Rate & Review</button>\n  <div class="vspace-20"></div>\n\n')), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_expired"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="call-item">\n  <div class="header small">\n    <i class="icon-call-'), b.push(d(this.call.status())), b.push('"></i>\n    '), b.push(d(this.call.displayStatus())), b.push("\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_item"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g;
                (a = this.call.status()) === "suggested" || a === "pending" ? b.push('\n  <li class="category">\n    <span class="category-heading">Pending</span>\n  </li>\n\n') : (b.push('\n  <li class="category">\n    <span class="category-heading">\n      '), (c = this.call.status()) === "scheduled" || c === "in-progress" ? (b.push("\n        "), b.push(d(moment.relativeDayInTheFuture(moment(this.call.scheduled_at)))), b.push("\n      ")) : (b.push("\n        "), b.push(d(moment.relativeDayStringInThePast(moment(this.call.end_time || this.call.updated_at)))), b.push("\n      ")), b.push("\n    </span>\n  </li>\n")), b.push('\n\n<li class="member-item list-item '), this.call.otherParty().deleted && b.push(d("no-arrow")), b.push('" '), this.call.otherParty().deleted || b.push(d("data-href='/calls/" + this.call.id + "'")), b.push(' data-id="'), b.push(d(this.call.id)), b.push('">\n  <div class="image">\n    <div class="user-profile-image-wrapper">\n      <img class="user-profile-image small" src="'), b.push(d(this.call.otherParty().imageUrl())), b.push('">\n    </div>\n    '), b.push(JST["app/views/calls/_profile_image_status_icon"]({
                    call: this.call
                })), b.push('\n  </div><!-- /.image -->\n\n  <div class="content">\n    <div class="rpad-18">\n\n      <div class="typo-title vspace-4 " style="padding-top: 2px; '), this.call.otherParty().deleted && b.push(d("text-decoration: line-through;")), b.push('">\n        '), this.call.status() === "suggested" && b.push('\n          <i class="icon-blue-circle"></i>\n        '), b.push("\n        "), b.push(d(this.call.otherParty().name())), b.push("\n      </div>\n\n      "), (e = this.call.status()) === "scheduled" || e === "in-progress" ? (b.push('\n        <div class="typo-12 typo-black typo-ellipsis vspace-4">\n          <strong>\n            '), b.push(d(this.call.scheduledTimeDisplay())), b.push("\n            "), b.push(JST["app/views/calls/_small_hourly_rate"]({
                    call: this.call
                })), b.push('\n          </strong>\n        </div>\n        <div class="typo-13 typo-dark-grey vspace-4">\n          Last active '), b.push(d(this.call.otherParty().lastActiveAt())), b.push("\n        </div>\n      ")) : (f = this.call.status()) === "pending" || f === "suggested" ? (b.push('\n        <div class="typo-12 typo-black typo-ellipsis vspace-4">\n          <strong>\n            '), b.push(d(this.call.displayStatus())), b.push("\n            "), b.push(JST["app/views/calls/_small_hourly_rate"]({
                    call: this.call
                })), b.push('\n          </strong>\n        </div>\n        <div class="typo-13 typo-dark-grey vspace-4">\n          Last active '), b.push(d(this.call.otherParty().lastActiveAt())), b.push("\n        </div>\n\n      ")) : (g = this.call.status()) === "completed" ? (b.push('\n        <div class="typo-12 typo-black typo-ellipsis vspace-4">\n          '), this.call.passcode != null && this.call.passcode !== "" ? (b.push("\n            <strong>Free ("), b.push(d(this.call.passcode.toUpperCase())), b.push(")</strong>\n          ")) : this.call.payment_amount_after_rebate === 0 ? (b.push("\n            <strong>Free (discount"), this.call.applied_coupons.length > 1 && b.push(d("s")), b.push(": "), b.push(d(this.call.discounted_amount.toCurrency())), b.push(")</strong>\n          ")) : (b.push("\n            <strong>"), b.push(JST["app/views/calls/_beneficiary"]({
                    call: this.call,
                    includeDiscount: !0
                })), b.push("</strong>\n          ")), b.push('\n\n        </div>\n        <div class="typo-13 typo-dark-grey typo-ellipsis vspace-4">\n          '), b.push(d(this.call.displayStatus())), b.push("\n        </div>\n\n      ")) : (b.push('\n        <div class="typo-12 typo-black typo-ellipsis vspace-4">\n          <strong>'), b.push(d(this.call.displayStatus())), b.push("</strong>\n        </div>\n\n      ")), b.push("\n\n    </div>\n  </div><!-- /.content -->\n</li>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_pending"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="call-item">\n  <div class="secondary shown no-icon">\n    <p>\n      Rate per minute\n      <strong class="pull-right">\n        '), parseFloat(this.call.hourly_rate) === 0 || isNaN(parseFloat(this.call.hourly_rate)) ? (b.push("\n          Free "), this.call.passcode != null && this.call.passcode !== "" && (b.push("("), b.push(d(this.call.passcode.toUpperCase())), b.push(")")), b.push("\n        ")) : (b.push("\n          $"), b.push(this.call.formattedCost()), b.push("</span>/min\n        ")), b.push('\n      </strong>\n    </p>\n    <p>\n      Requested call length: <strong class="pull-right">'), b.push(d(this.call.approximate_length)), b.push(' minutes</strong>\n    </p>\n    <p>\n      Estimated total: <strong class="pull-right">$'), b.push(d((this.call.approximate_length * this.call.formattedCost()).toCurrency())), b.push("</strong>\n    </p>\n    "), this.call.charity_name != null && this.call.charity_name !== "" && (b.push('\n      </div><div class="secondary shown no-icon">\n      '), this.call.charity_name != null && this.call.charity_name !== "" && (b.push('\n        <p>\n          Donated to:\n          <strong class="pull-right">'), b.push(d(this.call.charity_name)), b.push("</strong>\n      ")), b.push("\n    ")), b.push('\n  </div>\n</div>\n\n<div class="vspace-15"></div>\n\n<div class="call-item">\n  <div class="header small">\n    <i class="icon-call-'), b.push(d(this.call.status())), b.push('"></i>\n    '), b.push(d(this.call.displayStatus())), b.push("\n  </div>\n\n  "), f = this.call.suggestedTimes();
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n    <div class="suggestion '), moment(a.format("YYYY-MM-DD[T]HH:mm:ss")).toDate() < moment(moment().memberTimezoneAdjusted().format("YYYY-MM-DD[T]HH:mm:ss")).toDate() && b.push("expired"), b.push('">\n      <div class="datetime pull-left">\n        <div>'), b.push(d(a.format("ddd, MMM D YYYY"))), b.push("</div>\n        <div>"), b.push(d(a.format("hh:mm A"))), b.push(" ("), b.push(d(Member.current().timezone_label)), b.push(')</div>\n      </div>\n      <div class="clearfix"></div>\n    </div>\n  ');
                b.push("\n\n</div>\n\n"), b.push(JST["app/views/calls/_reschedule_button"]({
                    call: this.call,
                    call_details: !0
                })), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_profile_image_status_icon"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                this.call.status() === "canceled" ? b.push('\n  <i class="icon-canceled-call"></i>\n') : this.call.isIncoming() ? b.push('\n  <i class="icon-incoming-call"></i>\n') : b.push('\n  <i class="icon-outgoing-call"></i>\n'), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_reschedule_button"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                this.call.cancelable() && (((a = this.call.status()) === "pending" || a === "suggested") && this.call_details || (c = this.call.status()) === "scheduled") && (b.push('\n  <div class="vspace-15"></div>\n  <div class="header btn btn-green suggest-new-times" data-href="/calls/'), b.push(d(this.call.id)), b.push('/suggest">\n    <strong>\n      <i class="icon-reschedule"></i>\n      '), (e = this.call.status()) === "pending" ? b.push("\n        Suggest Other Times\n      ") : (f = this.call.status()) === "suggested" ? b.push("\n        Or, Suggest Other Times\n      ") : b.push("\n        Reschedule\n      "), b.push('\n    </strong>\n    <div class="pull-right"><i class="fa-icon-chevron-right"></i></div>\n  </div>\n')), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_scheduled"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="call-item">\n  <div class="secondary shown no-icon">\n    <p>\n      Rate per minute\n      <strong class="pull-right">\n        '), parseFloat(this.call.hourly_rate) === 0 || isNaN(parseFloat(this.call.hourly_rate)) ? (b.push("\n          Free "), this.call.passcode != null && this.call.passcode !== "" && (b.push("("), b.push(d(this.call.passcode.toUpperCase())), b.push(")")), b.push("\n        ")) : (b.push("\n          $"), b.push(this.call.formattedCost()), b.push("</span>/min\n        ")), b.push('\n      </strong>\n    </p>\n    <p>\n      Requested call length: <strong class="pull-right">'), b.push(d(this.call.approximate_length)), b.push(' minutes</strong>\n    </p>\n    <p>\n      Estimated total: <strong class="pull-right">$'), b.push(d((this.call.approximate_length * this.call.formattedCost()).toCurrency())), b.push('</strong>\n    </p>\n  </div>\n</div>\n\n<div class="vspace-15"></div>\n\n<div class="call-item">\n\n  <div class="header small">\n    <i class="icon-call-'), b.push(d(this.call.status())), b.push('"></i>\n    <strong>'), b.push(d(this.call.displayStatus())), b.push("</strong>\n  </div>\n\n  "), this.call.status() === "in-progress" && (b.push('\n    <div class="secondary shown">\n      '), this.call.status() === "in-progress" && (b.push("<p>"), b.push(d(this.call.scheduledDisplay())), b.push("</p>")), b.push("\n    </div>\n  ")), b.push('\n\n  <div class="dial with-padding">\n    <div>\n      <p>How to call:</p>\n      <p>\n        Dial: <strong>'), b.push(d(CONNECTION_NUMBER)), b.push("</strong>\n        "), this.call.expert_access_code != null ? (b.push("\n          <br/>\n          Expert access code: <strong>"), b.push(d(this.call.expert_access_code)), b.push("</strong>\n          ")) : (b.push("\n          <br/>\n          Access code: <strong>"), b.push(d(this.call.seeker_access_code)), b.push("</strong>\n        ")), b.push("\n      </p>\n    </div>\n\n    "), App.mobile && (b.push('\n      <div class="phone">\n        <a href="tel:'), b.push(d(this.call.mobileConferenceNumber())), b.push('" class="btn btn-green allow-default">Call</a>\n      </div>\n    ')), b.push("\n  </div>\n\n</div>\n\n"), b.push(JST["app/views/calls/_reschedule_button"]({
                    call: this.call,
                    call_details: !0
                })), b.push("\n\n"), this.is_expert || b.push('\n  <div class="team-micro-copy">\n    Share the conference line details with your team (up to 8) to have them join you on your call.\n  </div>\n'), b.push('\n\n<div class="vspace-15"></div>\n\n<div class="call-item no-shadow">\n  <div class="dropdown collapsed add-to-calendar-toggle"> <!-- add \'highlighted\' to add glow -->\n    <div class="dropdown-header header btn btn-beige add-to-calendar-toggle-btn">\n      <i class="icon-addtocalendar"></i>\n      <strong>Add to my calendar</strong>\n      <div class="pull-right">\n        <i class="fa-icon-chevron-down"></i>\n      </div>\n    </div>\n\n    '), App["native"]() ? (b.push('\n      <a href="'), b.push(d(this.call.googleCalendarURL())), b.push('" data-action="open-calendar-window" class="expanded-content first">Google Calendar</a>\n      <a href="'), b.push(d(this.call.icsURL())), b.push('" data-action="open-calendar-window" class="expanded-content">iCal Calendar</a>\n      <a href="'), b.push(d(this.call.icsURL())), b.push('" data-action="open-calendar-window" class="expanded-content">Other</a>\n      ')) : (b.push('\n      <a href="'), b.push(d(this.call.googleCalendarURL())), b.push('" target="_blank" class="expanded-content first allow-default">Google Calendar</a>\n      <a href="'), b.push(d(this.call.icsURL())), b.push('" data-action="open-calendar-window" class="expanded-content">iCal Calendar</a>\n      '), App.iOS || (b.push('\n        <a href="'), b.push(d(this.call.icsURL())), b.push('" data-action="open-calendar-window" class="expanded-content">Outlook Calendar</a>\n      ')), b.push('\n      <a href="'), b.push(d(this.call.icsURL())), b.push('" data-action="open-calendar-window" class="expanded-content">Other</a>\n    ')), b.push("\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_show_more"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="call-list-item">\n  <div class="show-more">\n    <button class="btn btn-grey btn-flat btn-solid-border" data-action="show-more">Show more</button>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/_small_hourly_rate"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                this.no_pipe || b.push(d("|")), b.push("\n"), this.call.hourly_rate > 0 ? (b.push("\n  "), this.call.seeker().id === Member.current().id ? b.push("Paying") : b.push("Earning"), b.push("\n  $"), b.push(d(this.call.formattedCost())), b.push('<span class="typo-10">/min</span>\n')) : (b.push("\n  Free\n  "), this.call.passcode != null && this.call.passcode !== "" && (b.push("\n    ("), b.push(d(this.call.passcode.toUpperCase())), b.push(")\n  ")), b.push("\n")), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/details"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a;
                b.push('<div class="dark-top no-sides">\n  <div class="constrain">\n\n    <div class="profile-card">\n      <div class="profile"  data-href="/'), b.push(d(this.other_party.screen_name)), b.push('">\n        <div class="image">\n          <div class="user-profile-image-wrapper">\n            <img class="user-profile-image small" src="'), b.push(d(this.other_party.imageUrl())), b.push('">\n          </div>\n          '), b.push(JST["app/views/calls/_profile_image_status_icon"]({
                    call: this.call
                })), b.push('\n        </div>\n        <div class="who">\n          <div class="name"><a href="/'), b.push(d(this.other_party.screen_name)), b.push('" class="internal">'), b.push(d(this.other_party.name())), b.push("</a></div>\n          <div>"), b.push(d(this.other_party.location)), b.push("</div>\n          <div>\n            "), this.other_party.total_calls > 0 && (b.push("<strong>"), b.push(d(this.other_party.total_calls)), b.push("</strong> completed calls &bull; ")), b.push("\n            \n            Joined "), b.push(d(this.other_party.formattedCreatedAt())), b.push('\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class="reason">\n    <div class="constrain">\n      <p>"'), b.push(d(this
                    .call.reason)), b.push('"</p>\n    </div>\n  </div>\n</div>\n\n<div class="panel-padded">\n\n  <div class="constrain">\n\n    <div class="view-message-thread ">\n      <div class="header btn btn-clarity" data-href="/inbox/start/'), b.push(d(this.call.otherParty().id)), b.push('">\n        <strong><i class="icon-discussion"></i> Send a Message</strong>\n        <div class="pull-right"><i class="fa-icon-chevron-right"></i></div>\n      </div>\n    </div>\n\n    <div class="vspace-15"></div>\n\n    '), this.call.status() === "canceled" ? (b.push("\n      "), b.push(JST["app/views/calls/_canceled"]({
                    call: this.call
                })), b.push("\n\n    ")) : (a = this.call.status()) === "scheduled" || a === "in-progress" ? (b.push("\n      "), b.push(JST["app/views/calls/_scheduled"]({
                    call: this.call,
                    is_expert: this.is_expert
                })), b.push("\n\n    ")) : this.call.status() === "suggested" ? (b.push("\n      "), b.push(JST["app/views/calls/_accept"]({
                    call: this.call
                })), b.push("\n\n    ")) : this.call.status() === "pending" ? (b.push("\n      "), b.push(JST["app/views/calls/_pending"]({
                    call: this.call
                })), b.push("\n\n    ")) : this.call.status() === "completed" ? (b.push("\n      "), b.push(JST["app/views/calls/_completed"]({
                    call: this.call
                })), b.push("\n\n    ")) : this.call.status() === "expired" && (b.push("\n      "), b.push(JST["app/views/calls/_expired"]({
                    call: this.call
                })), b.push("\n\n    ")), b.push("\n\n    "), this.call.cancelable() && (b.push('\n      <div class="vspace-15"></div>\n      '), b.push(JST["app/views/calls/_cancel"]({
                    call: this.call,
                    is_expert: this.is_expert
                })), b.push("\n    ")), b.push("\n\n\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/donate"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="top">\n  <div class="user-info">\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img class="user-profile-image small" src="'), b.push(d(this.expert.imageUrl("normal_square"))), b.push('" /></div>\n    </div>\n    <div class="welcome">\n      <div class="plus">+</div>\n    </div>\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img class="user-profile-image small" src="'), b.push(d(this.charity.logoUrl())), b.push('" /></div>\n    </div>\n  </div>\n  <h1>You talked with '), b.push(d(this.expert.first_name)), b.push(" for "), b.push(this.call.formattedDuration()), b.push('</h1>\n</div>\n\n<div class="form">\n  <div class="content constrain">\n\n    <div class="inset-div">\n      <h4>Enter a donation amount:</h4>\n\n      <span class="money">\n        <input type="text" class="amount" name="rate" />\n      </span>\n\n      <button class="btn btn-green btn-wide continue">Donate</button>\n    </div>\n\n    <div class="copy">\n      <strong>'), b.push(d(this.expert.first_name)), b.push("</strong> will be notified of your donation<br/>made to <strong>"), b.push(d(this.charity.name)), b.push("</strong></div>\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/header-tabs"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="header-tabs-wrapper">\n  <ul class="header-tabs two">\n    <li class="pending" data-href="/calls" data-transition="null">Calls <span class="badge pending-count">0</span></li>\n    <li class="new-history" data-href="/calls/history" data-transition="null">History <span class="badge history-count">0</span></li>\n  </ul>\n</div>\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/index"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                this.calls.length ? b.push('\n  <ul class="call-items contacts-list"></ul>\n\n') : this.list === "pending" ? (b.push('\n  <div class="blank-slate '), this.firstVisit && b.push(d("first-visit")), b.push('">\n    <div>\n      <h3>No calls pending approval</h3>\n      <p class="copy">\n        Any call request that would be awaiting approval from yourself, or other, would be listed here.\n      </p>\n    </div>\n  </div>\n\n')) : this.list === "history" && b.push('\n\n  <div class="blank-slate">\n    <div>\n      <h3>No completed calls yet</h3>\n      <p class="copy">\n        Visit our <a href="/featured" class="internal">featured</a> section or <a href="/search" class="internal">search</a> for experts.\n      </p>\n    </div>\n  </div>\n\n'), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/calls/suggest-times"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top">\n  <div class="constrain">\n    <h4>Select your availability</h4>\n    <div class="instructions">\n      Suggest 3 other times to '), b.push(d(this.other_party.first_name)), b.push(" to schedule the call. "), b.push(d(this.other_party.first_name)), b.push(' can accept a time or suggest other times.\n    </div>\n  </div>\n</div>\n\n\n<form class="time-form">\n  <h4>Your timezone</h4>\n  <div class="field">\n    <select name="timezone" class="timezone"></select>\n  </div>\n\n  <h4>Requested call length</h4>\n  <div class="field">\n    '), b.push(d(this.call.approximate_length)), b.push(' minutes\n  </div>\n\n  <h4>Suggest 3 other times</h4>\n\n  <div class="timepickers">\n    <div class="timepicker">\n      <div class="date"></div>\n      <div class="at">at</div>\n      <div><select class="time"></select></div>\n    </div>\n\n    <div class="timepicker">\n      <div class="date"></div>\n      <div class="at">at</div>\n      <div><select class="time"></select></div>\n    </div>\n\n    <div class="timepicker">\n      <div class="date"></div>\n      <div class="at">at</div>\n      <div><select class="time"></select></div>\n    </div>\n  </div>\n\n  <button class="btn btn-green btn-wide">Submit &amp; Send</button>\n</div>\n  <!-- </div> -->\n<!-- </div> -->\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/charities/add"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="error">\n  <span class="message"></span>\n</div>\n<div class="top">\n  <div class="user-info centered">\n    <p>\n      Add any Charity of your choice and we\'ll connect with them to complete their profile.\n\n    </p>\n  </div>\n</div>\n\n<form class="settings">\n  <h4>Charity website</h4>\n  <div class="field">\n    <input errormessage="Enter a valid URL" placeholder="Enter a charity website" type="text" class="website validate optional" name="website" pattern="^(https?://)?(\\w|-)+\\.\\w{2,8}(\\S)*$"/>\n  </div>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/elements/confirmation-notification"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="notification-dialog-wrapper">\n  <div id="global-notification-dialog" class="notification-dialog confirmation">\n    <i class="pull-right icon-close close cancel" name="cancel"></i>\n\n    '), this.starIcon ? b.push('\n      <div class="icon-full-rating-star"></div>\n    ') : b.push('\n      <i class="icon-grey-checkmark"></i>\n    '), b.push('\n\n    <div class="text">\n      <h3>'), b.push(this.msg), b.push("</h3>\n      <div>"), b.push(this.copy), b.push('</div>\n    </div>\n    <div class="link">'), b.push(this.link), b.push("</div>\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/elements/footer_navigation"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="navigation footer-navigation">\n  <div class=\'nav-item icon-footer-callList callList '), this.active === "callList" && b.push(d("active")), b.push('\'>\n    <span class="icon"><img src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/footer-icon-calls-4f405667e57a3ce2b6b1ad24be0318e1.png" alt="Calls" /></span>\n    Calls\n    <div class="unread-badge-wrapper">\n      <div class="unread-badge incoming-calls-badge"></div>\n    </div>\n  </div>\n  <div class=\'nav-item icon-footer-inbox inbox '), this.active === "inbox" && b.push(d("active")), b.push('\'>\n    <span class="icon"><img src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/footer-icon-inbox-818d8942b7c690afcb034ce1f2f6d5db.png" alt="Inbox" /></span>\n    Inbox\n    <div class="unread-badge-wrapper">\n      <div class="unread-badge unread-messages-badge"></div>\n    </div>\n  </div>\n  <div class=\'nav-item icon-footer-search search '), this.active === "search" && b.push(d("active")), b.push('\'>\n    <span class="icon"><img src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/footer-icon-find-432272bc26489337568b30ab1f88b3c9.png" alt="Search" /></span>\n    Search\n  </div>\n  <div class=\'nav-item icon-footer-favorites favorites '), this.active === "favorites" && b.push(d("active")), b.push('\'>\n    <span class="icon"><img src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/footer-icon-favs-74e7d7b98e96dc204c4fc62fe098b6e6.png" alt="Favorites" /></span>\n    Favorites\n  </div>\n  <div class=\'nav-item icon-footer-my-page my-page '), this.active === "my-page" && b.push(d("active")), b.push('\'>\n    <span class="icon"><img src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/footer-icon-account-20348cdcc54f1ec09bf7677af917ddff.png" alt="Profile" /></span>\n    Account\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/elements/notification-spinner"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="notification-dialog-wrapper">\n  <div id="global-notification-dialog" class="notification-dialog spinner">\n    <img src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/notification-spinner-27a4893245fd24308b2414d32ec2181f.gif" />\n    <strong>'), b.push(d(this.msg)), b.push("</strong>\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/elements/notification"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="notification-dialog-wrapper">\n  <div id="global-notification-dialog" class="notification-dialog">\n    <div class="text">\n      <div>'), b.push(this.msg), b.push("</div>\n    </div>\n    <div>\n      "), this.confirmation ? b.push('\n        <button class="close ok">Yes</button>\n        <button class="close cancel">No</button>\n      ') : b.push('\n        <button class="close ok">Close</button>\n      '), b.push("\n\n    </div>\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/elements/scrollable"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="wrapper">\n  <div class="scroller">\n    '), b.push(this.content), b.push("\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/expertise/edit"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<form class="settings new-form" name="edit profile">\n  <h4>Expertise</h4>\n\n  <div class="input">\n\n    <input type="text" name="title" placeholder="" maxlength="50" value="'), b.push(d(this.expertise.title)), b.push('" />\n    <div class="note">Define an expertise in fewer than 50 characters.</div>\n  </div>\n\n  <h4>Link <span class="note">(Optional)</span></h4>\n  <div class="input">\n    <input type="text" name="link" placeholder="" value="'), b.push(d(this.expertise.link)), b.push('" />\n    <div class="note">Link to more information like a blog post, slides, or video</div>\n  </div>\n\n  <h4>Description</h4>\n  <div class="input">\n    <textarea name="description" placeholder="">'), b.push(d(this.expertise.description)), b.push('</textarea>\n    <div class="note">\n      Describe why you have expertise in that area.\n      <!-- <a href="/account/expertise/example" class="internal">Example summaries</a> -->\n    </div>\n  </div>\n\n  <div class="vspace-20" style="height: 1px;"></div>\n\n  <button class="btn btn-green btn-wide save-expertise">Save</button>\n  '), this.expertise.isNew() || b.push('\n    <span class="remove-expertise">or <a href="#">Remove Expertise</a></span>\n  '), b.push('\n  <div class="vspace-10" style="height: 1px;"></div>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/expertise/example"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="panel-padded">\n\n  <div class="inset-div">\n    <h4>Email Marketing</h4>\n    <p>I have almost 10 years of experience in email marketing, but after working for several international companies (E.g. Ebay, OgilvyeOne, Cognos) I realized that email marketing is what I\'m passionate about. I then started my own company, Plan to Engage in 2008. My clients include: DHL Express, IBM, Wizards of the Coast, Booking.com</p>\n  </div>\n\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/expertise/expertise"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, d, e;
                this.is_onboarding_expert && b.push('\n  <div class="dark-top">\n    <div class="constrain">\n      <div class="welcome header-welcome-centered">\n        <h4>Add multiple areas of expertise to your profile</h4>\n      </div>\n    </div>\n  </div>\n'), b.push('\n\n<div class="constrain padded">\n  '), this.is_onboarding_expert ? b.push('\n    <div class="vspace-15"></div>\n    ') : b.push('\n    <h4 class="heading">Add multiple areas of expertise to your profile</h4>\n  '), b.push('\n  <div class="typo-center">\n    <button class="btn btn-green btn-wide add-expertise">Add an expertise</button>\n  </div>\n\n  ');
                if (this.expertise.length > 0) {
                    b.push('\n    <div class="expertise">\n      '), e = this.expertise;
                    for (c = 0, d = e.length; c < d; c++) a = e[c], b.push("\n        "), b.push(JST["app/views/expertise/item"]({
                        expertise: a,
                        show_edit: !0,
                        with_border: !0
                    })), b.push("\n      ");
                    b.push("\n    </div>\n  ")
                }
                b.push("\n</div>\n\n\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/expertise/item"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="item '), this.with_border && b.push(d("with-border")), b.push(" "), this.show_edit && b.push(d("show-edit")), b.push('">\n  <div class="click-overlay" data-expertise-id="'), b.push(d(this.expertise.id)), b.push('"></div>\n\n  <div class="title">'), b.push(d(this.expertise.title)), b.push('</div>\n\n  <span class="desc">'), b.push(this.expertise.formatted_description), b.push("</span>\n\n  "), this.expertise.link != null && this.expertise.link !== "" && (b.push('\n    <div class="link typo-ellipsis">\n      <i class="icon-external-link" /> <a href="'), b.push(d(this.expertise.link)), b.push('" class="external">'), b.push(d(this.expertise.link)), b.push("</a>\n    </div>\n  ")), b.push("\n\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/experts/items"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, d, e;
                b.push('<ul class="contacts-list">\n  '), this.callout !== !1 && (b.push("\n    "), b.push(JST["app/views/shared/need_callout"]()), b.push("\n  ")), b.push("\n\n  "), e = this.experts;
                for (c = 0, d = e.length; c < d; c++) a = e[c], b.push("\n    "), b.push(JST["app/views/shared/member"]({
                    member: a
                })), b.push("\n  ");
                b.push("\n\n  "), this.showMore && b.push('\n    <li class="typo-center" style="background: none;">\n      <button class="btn btn-grey btn-flat btn-solid-border" data-action="show-more">Show more</button>\n    </li>\n  '), b.push("\n</ul>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/experts/share"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top precall-header with-image">\n  <div class="constrain">\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img style="display: block;" class="user-profile-image small" src="'), b.push(d(this.expert.imageUrl("normal_square"))), b.push('" /></div>\n    </div>\n    <div class="instructions">\n      '), this.currentMember != null && this.currentMember.id === this.expert.id ? b.push('\n        <h4 class="vspace-3">Share your profile</h4>\n        ') : (b.push('\n        <h4 class="vspace-3">Share '), b.push(d(this.expert.first_name)), b.push("'s profile</h4>\n      ")), b.push('\n      <div class="bio-content" data-behavior="truncate" data-max-lines="2">'), b.push(this.expert.formatted_bio), b.push('</div>\n    </div>\n    <div style="clear: both;"></div>\n  </div>\n</div>\n\n<div class="constrain padded vspace-13">\n  <h3>Profile URL</h3>\n\n  '), App.iOS ? (b.push('\n    <input type="text" value="'), b.push(d(this.url)), b.push('" name="url" class="member-url" data-behavior="select-all" style="font-size: 14px" />\n  ')) : (b.push('\n    <p style="display: none" class="member-info">'), b.push(d(this.expert.name())), b.push("<br/>\n"), b.push(d(this.expert.bio)), b.push("<br/>\n"), b.push(d(this.url)), b.push('</p>\n    <button class="btn btn-beige copy-expert-info full"><i class="icon-small-copy"></i></button>\n    <div class="copy-expert-url">\n      <input type="text" value="'), b.push(d(this.url)), b.push('" name="url" readonly="readonly" class="member-url" data-behavior="select-all" style="font-size: 14px" />\n    </div>\n    <div class="clearfix" />\n  ')), b.push('\n</div>\n\n<div class="dashed-border"></div>\n\n<div class="constrain padded">\n  <div class="social-share">\n    <div class="vspace-15"></div>\n    '), this.currentMember != null && this.currentMember.id === this.expert.id && b.push('\n<!--       <ul class="flat">\n        <li>\n          <a href="" class="internal" data-action="set-a-passcode" style="padding-left: 15px !important">Create a Free Link</a>\n        </li>\n      </ul>\n      <div class="vspace-15"></div> -->\n    '), b.push('\n    <ul class="flat">\n      <li>\n        <a href="mailto:?subject=Talk to '), b.push(d(this.expert.name())), b.push(" ("), b.push(d(this.expert.screen_name)), b.push(") on Clarity&amp;body="), b.push(d(this.expert.name())), b.push("%0A%0A"), b.push(d(encodeURIComponent(this.expert.bio))), b.push("%0A%0A"), b.push(d(this.url)), b.push('" class="mail allow-default" target="_blank">Share by email</a>\n      </li>\n      <li>\n        <a href="'), b.push(d(this.expert.shareURL("facebook"))), b.push('" class="facebook external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on Facebook</a>\n      </li>\n      <li>\n        '), App["native"]() ? (b.push('\n          <a href="'), b.push(d(this.expert.shareURL("twitter"))), b.push('" data-action="native-twitter-share" class="twitter">Share on Twitter</a>\n        ')) : (b.push('\n          <a href="'), b.push(d(this.expert.shareURL("twitter"))), b.push('" class="twitter external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on Twitter</a>\n        ')), b.push('\n      </li>\n      <li>\n        <a href="'), b.push(d(this.expert.shareURL("google"))), b.push('" class="google external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on Google+</a>\n      </li>\n      <li>\n        <a href="'), b.push(d(this.expert.shareURL("linkedin"))), b.push('" class="linkedin external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on LinkedIn</a>\n      </li>\n      <li>\n        <a class="arrow" data-href="/'), b.push(d(this.expert.screen_name)), b.push('/widget">Add a Blog Widget</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/favorites/blank_slate"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="blank-slate">\n  <div>\n    <h3>No favorites</h3>\n    <p class="copy">\n      Experts will be added to your favorite list when you star their profile.  Visit our <a href="/search" class="internal">search</a> to find experts.\n    </p>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/getting_started/onboard_step_header"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="top">\n  <div class="user-info">\n    <div class="image">\n      <div class="user-profile-image-wrapper"><img style="display:block" class="user-profile-image small" src="'), b.push(d(this.member.imageUrl("normal_square"))), b.push('" /></div>\n    </div>\n    <div class="welcome">\n        <h3>'), b.push(d(this.header)), b.push("</h3>\n        <p>"), b.push(d(this.subheader)), b.push("</p>\n    </div>\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/getting_started/step1"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g;
                this.is_onboarding_expert ? (b.push("\n  "), c = "Please take a moment to setup your expert account.", b.push("\n")) : (b.push("\n  "), c = "Please take a moment to setup your account.", b.push("\n")), b.push("\n\n"), b.push(JST["app/views/getting_started/onboard_step_header"]({
                    member: this.currentMember,
                    header: "Welcome " + this.currentMember.first_name + "!",
                    subheader: c
                })), b.push('\n\n<form class="settings new-form" name="step1">\n\n  <h4>Email <span class="note secure">This is never shared and only used for messages</span></h4>\n  <div class="field">\n    <input placeholder="Your email address"  type="email" name="email" class="email validate" value="'), b.push(d(this.currentMember.email)), b.push('">\n  </div>\n\n  <h4>Username</h4>\n  <div class="field screen_name">\n    <input placeholder="Enter your screen name" type="text" name="screen_name" value="'), b.push(d(this.currentMember.screen_name)), b.push('" class="validate">\n    <label>'), b.push(d(FRIENDLY_HOST)), b.push('/</label>\n  </div>\n\n  <h4>Cell number <span class="note secure">This is never shared and only used to send you notifications</span></h4>\n  <div class="field">\n    <div class="country_code">\n      <select name="country_code">\n        '), g = Helper.countryCodes;
                for (e = 0, f = g.length; e < f; e++) a = g[e], b.push("\n          <option "), a === parseInt(this.currentMember.country_code) && b.push(d("selected")), b.push(" value='"), b.push(d(a)), b.push("'>+"), b.push(d(a)), b.push("</option>\n        ");
                b.push('\n      </select>\n    </div>\n    <div class="phone">\n      <input placeholder="XXX-XXX-XXXX" type="tel" name="phone_number" value="'), b.push(d((this.currentMember.phone_number || "").replace(RegExp("^" + this.currentMember.country_code), ""))), b.push('" class="validate">\n    </div>\n  </div>\n\n  <h4>Time Zone</h4>\n  <div class="field">\n    <select name="timezone" class="timezone" />\n  </div>\n\n  <button class="btn btn-green btn-wide save-account" data-action="save">Save &amp; Continue</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/getting_started/step2"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j;
                b.push(JST["app/views/getting_started/onboard_step_header"]({
                    member: this.currentMember,
                    header: "Personalize your Profile Page",
                    subheader: "Your profile page is where others can learn more about you when making calls."
                })), b.push('\n<form class="settings new-form">\n  <h4>\n    Mini-Resume\n    '), this.is_onboarding_expert || b.push('<span class="note">(optional)</span>'), b.push('\n    <a href="/account/edit/mini-resume" data-action="show-examples">See some examples > </a>\n  </h4>\n  <div class="field resume">\n    <textarea placeholder="Enter your mini-resume" name="bio" value="">'), b.push(d(this.currentMember.bio)), b.push("</textarea>\n  </div>\n  ");
                if (this.is_onboarding_expert) {
                    b.push('\n    <h4>Hourly Rate</h4>\n    <div class="input" style="height: 45px;">\n      <select name="hourly_rate">\n        <option disabled="disabled">Select an hourly rate</option>\n        '), i = this.hourly_rates;
                    for (e = 0, g = i.length; e < g; e++) c = i[e], b.push("\n          "), c === this.hourly_rate ? (b.push('\n            <option value="'), b.push(d(c)), b.push('" selected="selected">$'), b.push(d(c.toCurrency(0))), b.push("</option>\n            ")) : (b.push('\n            <option value="'), b.push(d(c)), b.push('">$'), b.push(d(c.toCurrency(0))), b.push("</option>\n          ")), b.push("\n        ");
                    b.push('\n      </select>\n    </div>\n\n    <h4>Charity</h4>\n    <div class="input">\n      <select name="charity" class="charities">\n        <option value="add">Add a new charity</option>\n        <option value="none" '), this.currentMember.charity_id || b.push(d("selected")), b.push(">None</option>\n        "), j = this.charities;
                    for (f = 0, h = j.length; f < h; f++) a = j[f], b.push('\n    <option value="'), b.push(d(a.id)), b.push('" '), this.currentMember.charity_id === a.id && b.push(d("selected")), b.push(">"), b.push(d(a.name)), b.push("</option>\n        ");
                    b.push('\n      </select>\n      <div class="clearfix"></div>\n    </div>\n  ')
                }
                b.push("\n\n  "), this.is_onboarding_expert && b.push('\n    <div class="clearfix vspace-20"></div>\n  '), b.push('\n  <button class="btn btn-green btn-wide save-account" data-action="save">Save &amp; Continue</button>\n\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/help/howitworks"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="panel-plain-text">\n  <div class="typo-title">1. Search for experts</div>\n  <p>We have high standards. Search through our extensive lineup of professionals in just about any given field who are itching to make your problems a thing of the past. We have experts who can help you with anything from design and copywriting all the way up to structuring deals or raising funding. You can search by expertise, industry and job title.\n  </p>\n\n  <div class="typo-title">2. Schedule a call</div>\n  <p>Pick a date and time that works best for you (you’ll have 3 options). You’ll see the per minute rate right up front, so you can determine how long you’d like to talk. Submit your request, and within 48 hours, you’ll be receiving a confirmation. Experts are evaluated by how promptly they respond, so you should hear back soon after you submit your request.\n  </p>\n\n  <div class="typo-title">3. Get your problem solved</div>\n  <p>Ever try emailing someone for advice? You ask five questions and you get a reply which barely answers one. Then the email thread continues for another week only to lead to more confusion. There’s nothing like getting on the phone and getting your questions answered right now.  Sometimes it’s solved before time runs out on the call, and you can bring up other things you might want to talk about. Getting to the bottom of whatever issue you’re dealing with, over the phone, with a helpful professional is a huge relief and is a great experience for both sides of the conversation.\n  </p>\n\n</div>\n\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/help/reason-examples"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="panel-plain-text">\n  <!-- <div class="typo-title">Examples</div> -->\n\n  <p>\n    We want to connect you to the right person to answer your\n    question.  When first making a call request, it is important to\n    write your challenge, problem or issue and include some of your\n    background.  It\'s also important to let the expert know why you\n    chose them.</p>\n\n  <p class="quote">\n    <strong>Ex:</strong>\n    I admire your business and the growth I have seen - I\'d like to discuss the importance you place on community involvement and how my company could benefit from it.\n  </p>\n\n  <p class="quote">\n    <strong>Ex:</strong>\n    We are having a product sourcing issue at my company and seem to have hit a wall.  I know your company had a similar issue and came to a creative resolution - I\'d like to hear your thoughts.\n  </p>\n\n  <p class="quote">\n    <strong>Ex:</strong>\n    I\'m starting my own PR company. You worked in the industry for several years and I want your take on what the risk/reward would be considering my market\'s constraints and opportunities.\n  </p>\n\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/inbox/active-call"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a;
                b.push('<div data-in-page-header\n     class="other_party_profile active-call"\n     data-action="show-call">\n\n  '), (a = this.call.status()) === "suggested" || a === "pending" ? (b.push('\n    <div class="table-valign-middle">\n      <div style="padding-right: 6px;">\n        <i class="fa-icon-calendar-empty status-icon"></i>\n      </div>\n      <div>\n        <div class="typo-ellipsis">You have a pending call request with '), b.push(d(this.call.otherParty().first_name)), b.push(".</div>\n        <div>View call details page to respond.</div>\n      </div>\n    </div>\n\n  ")) : this.call.status() === "scheduled" ? (b.push('\n    <div class="table-valign-middle">\n      <div style="padding-right: 6px;">\n        <i class="fa-icon-calendar status-icon"></i>\n      </div>\n      <div>\n         <div class="typo-ellipsis">You have a call scheduled with '), b.push(d(this.call.otherParty().first_name)), b.push(".</div>\n         <div>"), b.push(d(this.call.scheduledDisplay({
                    hideYear: !0
                }))), b.push("</div>\n      </div>\n    </div>\n\n  ")) : this.call.status() === "in-progress" && (b.push('\n    <div class="table-valign-middle">\n      <div style="padding-right: 6px;">\n        <i class="fa-icon-phone status-icon"></i>\n      </div>\n      <div>\n        <div class="typo-ellipsis">'), b.push(d(this.call.displayStatus())), b.push("</div>\n        <div>View call details for conference number.</div>\n      </div>\n    </div>\n\n  ")), b.push("\n\n\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/inbox/header-tabs"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="header-tabs-wrapper">\n  <ul class="header-tabs two">\n    <li class="unread" data-href="/inbox" data-transition="null">Unread <span class="badge unread-count" style="display: none;">0</span></li>\n    <li class="all" data-href="/inbox/all" data-transition="null">All</li>\n  </ul>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/inbox/inbox-thread-form"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div data-in-page-footer>\n  <div class="table-valign-top pad-8">\n    <div class="fill-width">\n      <textarea name="message" class="message typo-12"></textarea>\n    </div>\n    <div class="lpad-8">\n      <button disabled="disabled" class="btn btn-green pull-right send-message" name="send-message">Send</button>\n    </div>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/inbox/inbox-thread-profile"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div data-in-page-header\n     class="other_party_profile '), (this.other_party.location == null || this.other_party.location === "") && b.push(d("no-location")), b.push('"\n     data-href="/'), b.push(d(this.other_party.screen_name)), b.push('">\n\n  <div class="image">\n    <a class="user-profile-image-wrapper" href="#">\n      <img class="user-profile-image extra-small" src="'), b.push(d(this.other_party.image_url)), b.push('" />\n    </a>\n  </div>\n\n  <div class="who">\n    <div class="bio">\n      '), this.other_party.formatted_bio && (b.push('\n        <span class="bio-content">'), b.push(this.other_party.formatted_bio), b.push("</span>\n      ")), b.push("\n    </div>\n  </div>\n\n  "), this.other_party.location != null && this.other_party.location !== "" && (b.push('\n    <div class="where">\n      <span class="location">'), b.push(d(this.other_party.location)), b.push('</span>\n      <span class="time"><span><em>'), b.push(d(this.other_party.localTime())), b.push("</em></span></span>\n    </div>\n  ")), b.push("\n\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/inbox/inbox"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                if (this.threads.length === 0) b.push('\n\n  <div class="blank-slate">\n    <div>\n      '), this.showUnreadOnly ? b.push("\n        <h3>No unread messages</h3>\n      ") : b.push("\n        <h3>Your inbox is empty</h3>\n      "), b.push('\n      <p class="copy">\n        You can only send messages to people you\'re pending a call with.\n      </p>\n    </div>\n  </div>\n\n');
                else {
                    b.push('\n  <ul class="contacts-list">\n    '), f = this.threads;
                    for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n      <li data-href="/inbox/'), b.push(d(a.id)), b.push('">\n        <div class="image">\n          <div class="user-profile-image-wrapper">\n            <img class="user-profile-image small" src="'), b.push(d(a.other_party_image_url)), b.push('" />\n          </div>\n        </div><!-- /.image -->\n\n        <div class="content">\n          <div class="rpad-25">\n            <div class="vspace-5"></div>\n\n            <div class="typo-title pull-left '), a.other_party_deleted && b.push("account-deleted"), b.push('">\n              '), a.isRead() ? a.hasReplied(this.currentMember) && b.push('\n                <i class="icon-reply-arrow"></i>\n              ') : b.push('\n                <i class="icon-blue-circle"></i>\n              '), b.push('\n\n              <span class="name">'), b.push(d(a.other_party_name)), b.push("</span>\n              "), a.other_party_deleted && b.push('<span class="account-deleted-copy">(Account Deleted)</span>'), b.push('\n            </div>\n            <div class="typo-line typo-blue pull-right">'), b.push(d(a.lastMessageTimestamp())), b.push('</div>\n\n            <div class="clearfix"></div>\n            <div class="vspace-3"></div>\n\n            <div class="typo-line typo-grey typo-ellipsis rpad-15">'), b.push(d(a.lastMessage().message)), b.push("</div>\n\n          </div><!-- /.contact-clickthrough -->\n        </div><!-- /.content-->\n      </li>\n    ");
                    b.push("\n  </ul>\n")
                }
                b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/inbox/thread"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g;
                b.push('<div class="panel-padded">\n  '), g = this.thread.messages;
                for (a = 0, f = g.length; a < f; a++) {
                    c = g[a], b.push("\n\n    ");
                    if (a === 0 || this.thread.hasFifteenMinutesDiff(c, this.thread.messages[a - 1])) b.push('\n      <div class="tpad-10 bpad-10 typo-center typo-dark-grey typo-bold typo-12 white-text-shadow">\n        '), moment.isMoment(c.created_at) ? (b.push("\n          "), b.push(d(moment(c.created_at).utc().timezoneAdjusted(Member.current().timezone_offset).format("MMM DD YYYY h:mm A"))), b.push("\n          ")) : (b.push("\n          "), b.push(d(moment.utc(c.created_at).member().format("MMM DD YYYY h:mm A"))), b.push("\n        ")), b.push("\n      </div>\n    ");
                    b.push('\n\n    <div class="item '), this.currentMember.id === c.member_id ? b.push("self") : b.push("other"), b.push('">\n      '), this.currentMember.id === c.member_id ? (b.push("\n        "), e = "/" + Member.current().screen_name, b.push("\n      ")) : (b.push("\n        "), e = "/" + this.thread.other_party_screen_name, b.push("\n      ")), b.push('\n      <a class="user-profile-image-wrapper internal" href="'), b.push(d(e)), b.push('">\n        <img class="user-profile-image extra-small" src="'), b.push(d(c.from_image_url)), b.push('" />\n      </a>\n\n      <div class="bubble-wrapper pull-left">\n        '), c.guid != null && b.push('<i class="loading-spinner pull-left"></i>'), b.push('\n        <div class="bubble '), this.currentMember.id !== c.member_id && b.push("bubble-left"), b.push('">\n          '), this.currentMember.id !== c.member_id && b.push('<div class="bubble-arrow" />'), b.push('\n          <div class="typo-line">'), b.push(c.formatted_message), b.push("</div>\n        </div>\n        "), this.currentMember.id === c.member_id && b.push('\n          <div class="bubble-right-arrow" />\n        '), b.push('\n      </div>\n    </div><!-- /.item -->\n\n    <div class="clearfix"></div>\n    <div class="vspace-10"></div>\n  ')
                }
                b.push("\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/_item"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="need-item">\n  <div class="table-valign-top vspace-3">\n    <div class="" style="width: 100%;">\n      <div class="typo-14">\n        '), b.push(this.need.formatted_message), b.push('\n      </div>\n    </div>\n    <div class="timestamp typo-line typo-blue">'), b.push(d(this.need.formattedTimestamp())), b.push("</div>\n  </div>\n\n  <div>\n    Posted in:\n    ");
                if (this.need.topic != null) b.push('\n      <div class="tag tag-small">\n        <span class="tag-name">'), b.push(d(this.need.topic)), b.push("</span>\n      </div>\n    ");
                else {
                    b.push("\n      "), f = this.need.topics;
                    for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n        <div class="tag tag-small" data-href="/topics/'), b.push(d(a.slug)), b.push('">\n          <span class="tag-name">'), b.push(d(a.name)), b.push("</span>\n        </div>\n      ");
                    b.push("\n    ")
                }
                b.push('\n\n    <div class="typo-14 vspace-3">\n      '), b.push(d(this.need.recommendationsCount())), b.push(" recommendations\n\n      "), this.need.recommendationVotesCount() > 0 && (b.push("\n        | "), b.push(d(this.need.recommendationVotesCount().toCurrency(0))), b.push(" votes\n      ")), b.push('\n    </div>\n\n    <div class="table-valign-top" data-href="/'), b.push(d(this.need.member().screen_name)), b.push('">\n      <div style="padding-right: 5px;">\n        <div class="user-profile-image-wrapper">\n          <img class="user-profile-image nano" src="'), b.push(d(this.need.member().imageUrl())), b.push('" />\n        </div>\n      </div>\n      <div>\n        <div class="typo-14 typo-bold">'), b.push(d(this.need.member().name())), b.push('</div>\n        <div class="typo-12 typo-grey">\n          '), b.push(d(this.need.member().total_calls.toCurrency(0))), b.push(" calls |\n          Joined "), b.push(d(this.need.member().formattedCreatedAt())), b.push("\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/accepted"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="panel-plain-text">\n  <p>'), b.push(d(this.seeker.first_name)), b.push(" has been notified and will set up a request to talk with you.</p>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/confirm"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="dark-top precall-header">\n  <div class="constrain">\n    <div class="instructions">\n      <h4 class="vspace-3">Confirm need request details</h4>\n      <p>Review and confirm your details below before submitting your need</p>\n    </div>\n    <div style="clear: both;"></div>\n  </div>\n</div>\n\n<form class="settings new-form">\n  <h4>Your information <a href="#" class="edit">Edit</a></h4>\n  <p>\n    <strong>Email:</strong> '), b.push(d(this.request.email)), b.push('\n  </p>\n\n  <h4>Description <a href="#" class="edit">Edit</a></h4>\n  <p>'), b.push(d(this.request.description)), b.push('</p>\n\n  <h4>Topics <a href="#" class="edit">Edit</a></h4>\n\n  <p>\n    '), f = this.request.topics;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n      <div class="tag">\n        <span class="tag-name">'), b.push(d(a.name)), b.push("</span>\n      </div>\n    ");
                b.push('\n  </p>\n\n  <div>\n    <button class="btn btn-green btn-wide post-your-need">Submit your need</button>\n  </div>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/details"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j;
                b.push('<div class="need-details">\n  <div class="dark-top">\n    '), b.push(JST["app/views/needs/_item"]({
                    need: this.need
                })), b.push('\n  </div>\n\n  <div class="panel-padded">\n    <div class="vspace-15">\n      <button class="btn btn-green btn-wide" data-href="/requests/'), b.push(d(this.need.id)), b.push('/recommend">\n        Recommend someone\n      </button>\n    </div>\n\n    '), i = this.need.recommendedExpertsSortedByVote();
                for (e = 0, g = i.length; e < g; e++) {
                    a = i[e], b.push('\n      <div style="margin-left: 20px; margin-top: 15px;">\n        <div class="table-valign-middle" data-href="/'), b.push(d(a.expert().screen_name)), b.push('">\n          <div style="padding-right: 5px;">\n            <div class="user-profile-image-wrapper">\n              <img class="user-profile-image small" src="'), b.push(d(a.expert().imageUrl())), b.push('" />\n            </div>\n          </div>\n\n          <div>\n            <div class="typo-title">'), b.push(d(a.expert().name())), b.push('</div>\n            <div class="typo-12 typo-grey">\n              '), b.push(d(a.expert().total_calls.toCurrency(0))), b.push(" calls |\n              Joined "), b.push(d(a.expert().formattedCreatedAt())), b.push('\n            </div>\n            <div class="typo-line truncate">'), b.push(d(a.expert().bio)), b.push("</div>\n          </div>\n        </div>\n\n        "), a.comment != null && a.comment !== "" && (b.push('\n          <div class="typo-dark-grey" data-href="/'), b.push(d(a.expert().screen_name)), b.push('">\n            <i class="fa-icon-quote-left"></i> '), b.push(d(a.comment)), b.push("\n          </div>\n        ")), b.push('\n\n        <div class="table-valign-middle" style="height: 34px;">\n          <div>\n            <i class="fa-icon-thumbs-up"\n               style="font-size: 24px; line-height: 30px;"\n               data-action="vote-for-expert"\n               data-recommended-expert-id="'), b.push(d(a.id)), b.push('"\n               data-voted="'), b.push(d(a.voteBy(Member.current()) != null)), b.push('"\n               ></i>\n          </div>\n\n          ');
                    if (a.recommended_expert_votes().all().length > 0) {
                        b.push('\n            <div style="padding-left: 5px; padding-right: 5px;">\n              '), b.push(d(a.recommended_expert_votes().all().length)), b.push(" expert agrees\n            </div>\n            <div>\n              "), j = a.recommended_expert_votes().all().slice(0, 4);
                        for (f = 0, h = j.length; f < h; f++) c = j[f], b.push("\n                "), c.member_id === Member.current().id ? (b.push('\n                  <div class="user-profile-image-wrapper">\n                    <img class="user-profile-image nano" src="'), b.push(d(Member.current().imageUrl())), b.push('" title="'), b.push(d(Member.current().name())), b.push('" />\n                  </div>\n                ')) : c.member() && (b.push('\n                  <div class="user-profile-image-wrapper">\n                    <img class="user-profile-image nano" src="'), b.push(d(c.member().imageUrl())), b.push('" title="'), b.push(d(c.member().name())), b.push('" />\n                  </div>\n                ')), b.push("\n\n              ");
                        b.push("\n            </div>\n          ")
                    }
                    b.push('\n        </div>\n        <div class="typo-12">\n          Recommended by\n          <strong data-href="/'), b.push(d(a.recommendation().member().screen_name)), b.push('">\n            '), b.push(d(a.recommendation().member().name())), b.push("\n          </strong>\n        </div>\n      </div>\n\n    ")
                }
                b.push("\n\n  </div><!--/.panel-padded-->\n\n</div><!--/.need-details-->\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/list"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<ul class="contacts-list">\n\n  '), f = this.needs;
                for (c = 0, e = f.length; c < e; c++) {
                    a = f[c], b.push("\n    ");
                    if (a.member() == null) continue;
                    b.push('\n    <li data-action="navigate-to-need-details" data-need-id="'), b.push(d(a.id)), b.push('">\n      '), b.push(JST["app/views/needs/_item"]({
                        need: a
                    })), b.push("\n    </li>\n  ")
                }
                b.push("\n\n</ul>\n\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/new"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="dark-top">\n  <div class="constrain">\n    <p>\n      Need some help finding the right expert? Clarity can help by recommending an expert that matches your need.\n    </p>\n  </div>\n</div>\n\n<form class="settings new-form">\n\n  <h4>I need advice on...</h4>\n  <div class="input vspace-12">\n    <textarea name="description" class="question fill-width" placeholder="What are you looking for advice on?"></textarea>\n  </div>\n\n  '), this.showEmail && b.push('\n    <h4>Email <span class="note secure">This is never shared and only used for messages</span></h4>\n    <div class="input vspace-15">\n      <input placeholder="Your email address"  type="email" name="email" value="" class="validate">\n      <div class="clearfix"></div>\n    </div>\n  '), b.push('\n\n  <div class="vspace-10"></div>\n\n  <h4>What topics would you like to discuss?</h4>\n\n  <div class="input topic-input vspace-10" data-field="topics-typeahead-placeholder"></div>\n  <div class="note topic-note pad-3 vspace-10">You can submit 3 topics with your request, please remove a topic to add another.</div>\n\n  '), f = this.topics;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n    <div class="tag">\n      <span class="tag-name">'), b.push(d(a.name)), b.push('</span>\n      <span class="tag-delete" data-action="delete-topic" data-topic-name="'), b.push(d(a.name)), b.push('">\n        <i class="fa-icon-remove typo-12"></i>\n      </span>\n    </div>\n  ');
                b.push('\n\n  <button class="btn btn-green btn-wide submit-request">Save and review</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/needs/recommendation"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e;
                b.push('<div class="need-recommendation">\n  <div class="dark-top">\n    '), b.push(JST["app/views/needs/_item"]({
                    need: this.need
                })), b.push('\n  </div>\n\n  <div class="panel-padded need-recommendation-form">\n    <form class="new-form" name="edit profile">\n      '), e = this.selected_experts;
                for (c in e) a = e[c], b.push("\n        <h4>"), b.push(d(a.value)), b.push('</h4>\n        <div class="input">\n          <textarea\n             style="height: 50px;"\n             data-field="comment"\n             data-expert-id="'), b.push(d(c)), b.push('"\n             placeholder="Why would you recommend '), b.push(d(a.value)), b.push('?">'), b.push(d(a.comment)), b.push("</textarea>\n        </div>\n      ");
                b.push('\n\n      <h4>Search for experts</h4>\n      <div class="input">\n        <div data-field="search-experts-placeholder"></div>\n      </div>\n\n      <div class="vspace-20"></div>\n\n      <button class="btn btn-green btn-wide" data-action="submit-recommendations">\n        Submit your recommendations\n      </button>\n    </form>\n\n  </div><!--/.panel-padded-->\n</div><!--/.need-recommendation-->\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/paid_questions/confirm"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<form class="settings new-form">\n  <img style="float:left;width:10%;height:auto;display:block;padding-right: 4%" src="//clarityfm-assets-production.s3.amazonaws.com/assets/ebook-page/lock-158a3a58411e4907a2a028594dcd31b5.svg" class="pull-left" />\n  <div style="float:left; width: 60%; padding-right: 2%">\n    <h2>Confirm and Send</h2>\n    <p>Thanks.  Just review below and hit send to start your conversation. If '), b.push(d(this.expert.first_name)), b.push(' doesn\'t respond within 72 hours, we\'ll issue a full refund.</p>\n  </div>\n  <ul class="flat pull-right" style="float: right; width: 23%">\n    <li style="text-align:center;background:white;line-height:15px;padding: 5px 0;font-size:14px"><span>Launch<br/>Special</span></li>\n    <li style="text-align:center" class="hourly-rate-label"><span>$19.49</span></li>\n  </ul>\n\n\n  <div class="clearfix inset-div vspace-10">\n\n    <div class="typo-12 vspace-5" style="margin-top: -4px">\n      Confirm your credit card information:\n    </div>\n    <img class="credit-card" src="//clarityfm-assets-production.s3.amazonaws.com/assets/app/credit_card-9be38f0d8499d166b40e4ea02cdea621.png" width="32" height="32">\n    <div class="payment typo-12">\n      <span class="typo-bold">CARD ending in '), b.push(d(Member.current().last_four_cc_digits)), b.push('</span>\n      ( <a href="#" data-action="change-payment">Change</a> )\n    </div>\n    <div class="clearfix"></div>\n  </div>\n\n  <button class="btn btn-wide btn-green submit-request">Send Question</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/paid_questions/index"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<form class="settings new-form">\n  <img style="float:left;width:10%;height:auto;display:block;padding-right: 4%" src="/assets/ebook-page/lock.svg" class="pull-left" />\n  <div style="float:left; width: 60%; padding-right: 2%">\n    <h2>Private Conversation</h2>\n    <p>Ask a detailed question to an expert of your choice in a private, secure one-on-one setting for a small fee.</p>\n  </div>\n\n  <ul class="flat pull-right" style="float: right; width: 23%">\n    <li style="text-align:center;background:white;line-height:15px;padding: 5px 0;font-size:14px"><span>Launch<br/>Special</span></li>\n    <li style="text-align:center" class="hourly-rate-label"><span>$19.49</span></li>\n  </ul>\n\n  <div class="clearfix inset-div vspace-10">\n    <div class="to vspace-10" style="margin-top: -5px; font-weight: bold">\n      To: <div class="user-profile-image-wrapper"><img class="user-profile-image nano" src="'), b.push(d(this.expert.imageUrl())), b.push('"></div> '), b.push(d(this.expert.name())), b.push('\n    </div>\n    <div class="message-heading typo-12">\n      <div class="pull-left bpad-4 typo-bold">Your Question</div><div class="counter typo-light-grey pull-right">0</div>\n    </div>\n    <textarea name="question" class="question fill-width"></textarea>\n  </div>\n\n  <button class="btn btn-wide btn-green submit-question">Continue</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/passcodes/edit"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="constrain padded">\n  <h4 class="heading typo-center">Setting a discount code will allow anyone with this link to call you for free</h4>\n\n  <form class="settings new-form" name="edit profile">\n    <h4>Discount code for the link</h4>\n    <input type="text" name="passcode" class="validate" placeholder="Enter discount code" value="'), b.push(d(this.member.passcode)), b.push('" style="float: none;"/>\n    <div class="vspace-4"></div>\n    <div class="small-note">'), b.push(d(FRIENDLY_HOST)), b.push("/"), b.push(d(this.member.screen_name)), b.push('/<strong class="passcode-example"></strong></div>\n    <span class="small-note">Examples: VIP, Friends, Techstars, etc</span>\n    <button class="btn btn-green btn-wide save">Save</button>\n  </form>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/passcodes/share"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="constrain padded">\n  <h4 class="heading">Setting a discount code will allow anyone with this link to call you for free</h4>\n\n  '), App.iOS ? (b.push('\n    <input type="text" value="'), b.push(d(this.url)), b.push('" name="url" class="member-url" data-behavior="select-all" style="font-size: 14px" />\n    ')) : (b.push('\n    <button class="btn btn-beige copy-expert-info full"><i class="icon-small-copy"></i></button>\n    <div class="copy-expert-url">\n      <input type="text" value="'), b.push(d(this.url)), b.push('" name="url" readonly="readonly" style="font-size: 14px;" data-behavior="select-all" />\n    </div>\n  ')), b.push('\n\n  <button data-action="edit-passcode" class="btn btn-green btn-wide">Change your discount code</button>\n  <span class="disable-passcode">or <a href="#" data-action="disable-passcode">Disable Link</a></span>\n  <div class="vspace-10" style="height: 1px;"></div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/plans/index"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j;
                b.push('<div class="panel-padded">\n  <div class="vspace-10"></div>\n  <div class="constrain">\n    '), i = this.plans;
                for (e = 0, g = i.length; e < g; e++) {
                    c = i[e], b.push('\n      <div class="inset-div vspace-20">\n        <strong class="typo-16">\n          '), b.push(d(c.name)), b.push('\n          <span class="typo-12 typo-green">$'), b.push(d(c.price.toCurrency())), b.push('/month</span>\n        </strong>\n        <ul class="typo-12">\n          '), j = c.benefits;
                    for (f = 0, h = j.length; f < h; f++) a = j[f], b.push("\n            <li>"), b.push(d(a.name)), b.push("</li>\n          ");
                    b.push('\n        </ul>\n        <!-- <button class="btn btn-green btn-wide">Subscribe</button> -->\n      </div>\n    ')
                }
                b.push("\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/promos/promos"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<form class="settings new-form" name="edit profile">\n  <h4>Enter a promotion code</h4>\n\n  <div class="input">\n    <input type="text" name="coupon_code" placeholder="Promotion code" value="" />\n  </div>\n\n  <div class="clearfix vspace-10" style="height: 1px;"></div>\n  <button class="btn btn-green btn-wide" data-action="apply-coupon-code">Apply</button>\n</div>\n\n<div class="redeemed-list">\n  '), f = this.redeemed_coupons;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n    <div class="claimed-coupon '), a.fully_applied && b.push(d("claimed-coupon-applied")), b.push('">\n      <div class="code">'), b.push(d(a.coupon_code)), b.push('</div>\n      <div class="rebate">'), b.push(d(a.promo_rebate_display)), b.push("</div>\n      "), a.balance != null && a.balance > 0 && a.balance !== a.promo_amount && (b.push('\n        <div class="balance"><strong>Balance:</strong> $'), b.push(d(a.balance.toCurrency(2))), b.push("</div>\n      ")), b.push("\n\n    </div>\n  ");
                b.push("\n\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/_card"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top question-card">\n  '), this.constrain && b.push('<div class="constrain">'), b.push('\n\n  <div class="typo-14 vspace-5" data-href="/questions/f/topic='), b.push(d(this.question.topic().id)), b.push('">'), b.push(d(this.question.topic().name)), b.push(':</div>\n\n  <div class="question">\n    '), b.push(this.question.formatted_question), b.push("\n  </div>\n\n  "), this.constrain && b.push("</div>"), b.push("\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/_item"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="need-item">\n  <div>\n    <div class="typo-14 vspace-2">\n      '), b.push(this.question.formatted_question), b.push('\n    </div>\n  </div>\n  <div class="timestamp typo-line typo-dark-grey">\n    '), b.push(d(this.question.topic().name)), b.push('\n    <span class="typo-dark-grey">&bull;</span>\n    '), b.push(d(Helper.pluralize(this.question.answers_count, "answer", "answers"))), b.push('\n    <span class="typo-dark-grey">&bull;</span>\n    '), b.push(d(Helper.relativeTimeFromNow(this.question.created_at, {
                    mini: !0
                }))), b.push("\n\n  </div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/_question_tabs"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="header-tabs-wrapper top">\n  <ul class="header-tabs two">\n    <li class="tab" data-tab="answered" data-href="/questions" data-transition="null">Answered</li>\n    <li class="tab" data-tab="open" data-href="/questions/f/status=open" data-transition="null">Open</li>\n  </ul>\n</div>\n\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/answer"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push(JST["app/views/questions/_card"]({
                    question: this.question,
                    constrain: !0
                })), b.push('\n\n<form class="settings new-form">\n  <h4>Enter your answer:</h4>\n  <div class="input vspace-12">\n    <textarea name="answer" class="answer fill-width" placeholder="Enter your answer"></textarea>\n  </div>\n\n  <div class="vspace-10"></div>\n\n  <button class="btn btn-green btn-wide" data-action="submit-answer">Submit Your Answer</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/details"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push(JST["app/views/questions/_card"]({
                    question: this.question
                })), b.push("\n\n");
                if (this.question.answers().all().length > 0) {
                    b.push('\n<ul class="contacts-list">\n\n  '), f = this.question.answers().all();
                    for (c = 0, e = f.length; c < e; c++) {
                        a = f[c], b.push("\n    ");
                        if (a.expert() == null) continue;
                        b.push('\n    <li class="no-arrow no-border">\n      <div class="table-valign-top">\n        <div style="padding-right: 5px;">\n          <div class="user-profile-image-wrapper" data-href="/'), b.push(d(a.expert().screen_name)), b.push('">\n            <img class="user-profile-image extra-small" src="'), b.push(d(a.expert().imageUrl())), b.push('" />\n          </div>\n        </div>\n        <div>\n          <div class="typo-12" data-href="/'), b.push(d(a.expert().screen_name)), b.push('">\n            <strong>'), b.push(d(a.expert().name())), b.push('</strong>\n            <span class="typo-dark-grey">answered '), b.push(d(Helper.relativeTimeFromNow(a.created_at))), b.push('</span>\n          </div>\n          <div class="answer">\n            '), b.push(a.formatted_answer), b.push('\n          </div>\n        </div>\n      </div>\n      <div class="timestamp typo-12 typo-blue">\n        <a href="/'), b.push(d(a.expert().screen_name)), b.push('" class="internal">Request a call</a>\n        <span class="typo-dark-grey">&bull;</span>\n        <span data-action="flag">Flag</span>\n        <span class="typo-dark-grey">&bull;</span>\n        <span data-action="share">Share</span>\n      </div>\n    </li>\n  ')
                    }
                    b.push("\n\n</ul>\n")
                }
                b.push('\n\n\n<div class="panel-padded">\n  '), this.show_answer_button && (b.push('\n    <div>\n      <button class="btn btn-green btn-wide" data-href="/questions/'), b.push(d(this.question.id)), b.push('/answer">Add answer</button>\n    </div>\n  ')), b.push("\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/list"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<ul class="contacts-list">\n\n  '), f = this.questions;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n    <li data-href="/questions/'), b.push(d(a.id)), b.push('">\n      '), b.push(JST["app/views/questions/_item"]({
                    question: a
                })), b.push("\n    </li>\n  ");
                b.push("\n\n</ul>\n\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/questions/new"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top question-card">\n  <div class="constrain">\n    <div class="table-valign-middle">\n      <div style="padding-right: 10px;">\n        <i class="fa-icon-lightbulb fa-icon-3x"></i>\n      </div>\n      <div>\n        <div class="typo-title vspace-2">Ask The Experts (beta)</div>\n        <div class="typo-line">10,000+ experts standing by. No waiting.</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<form class="settings new-form">\n\n  <h4>Choose a primary topic</h4>\n  <div class="input vspace-12 lpad-3">\n    <label class="typo-line vspace-3 allow-default"><input type="radio" name="topic" class="allow-default" value="10160"> Entrepreneurship</label>\n    <label class="typo-line vspace-3 allow-default"><input type="radio" name="topic" class="allow-default" value="10190"> Social Media</label>\n    <label class="typo-line vspace-3 allow-default"><input type="radio" name="topic" class="allow-default" value="10180"> Start-ups</label>\n    <label class="typo-line vspace-3 allow-default"><input type="radio" name="topic" class="allow-default" value="10270"> Marketing Strategy</label>\n    <label class="typo-line vspace-3 allow-default"><input type="radio" name="topic" class="allow-default" value="10211"> Product Management</label>\n  </div>\n\n  <h4 class="pull-left">Enter your question:</h4>\n  <div class="pull-right small-note rpad-3" style="line-height: 20px;"><span class="counter"></span> / 150</div>\n  <div class="clearfix"></div>\n  <div class="input vspace-12">\n    <textarea name="question" class="question fill-width with-tips" placeholder="Enter your question"></textarea>\n    <div class="flat dropdown textarea-tips">\n      <div class="dropdown-header"><i class="chevron fa-icon-chevron-right"></i> Tips for asking a good question</div>\n      <div class="expanded-content">\n        <div><i class="fa-icon-circle"></i> Ask a specific question</div>\n        <div><i class="fa-icon-circle"></i> Be brief and to the point.</div>\n        <div><i class="fa-icon-circle"></i> Stay focused on a single topic.</div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="vspace-10"></div>\n\n  <button class="btn btn-green btn-wide" data-action="submit-question">Ask Your Question</button>\n</form>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/ratings/rate-and-review"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="dark-top no-sides call-details">\n  <div class="constrain">\n\n    <div class="profile-card">\n      <div class="profile"  data-href="/'), b.push(d(this.other_party.screen_name)), b.push('">\n        <div class="image">\n          <div class="user-profile-image-wrapper">\n            <img class="user-profile-image small" src="'), b.push(d(this.other_party.imageUrl())), b.push('">\n          </div>\n          '), b.push(JST["app/views/calls/_profile_image_status_icon"]({
                    call: this.call
                })), b.push('\n        </div>\n        <div class="who">\n          <div class="name"><a href="/'), b.push(d(this.other_party.screen_name)), b.push('" class="internal">'), b.push(d(this.other_party.name())), b.push("</a></div>\n          <div>"), b.push(d(this.other_party.location)), b.push("</div>\n          <div>\n            "), this.other_party.total_calls > 0 && (b.push("<strong>"), b.push(d(this.other_party.total_calls)), b.push("</strong> completed calls &bull; ")), b.push("\n            \n            Joined "), b.push(d(this.other_party.formattedCreatedAt())), b.push('\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class="reason">\n    <div class="constrain">\n      <p>\n        "'), b.push(d(this.call.reason)), b.push('"<br/>\n        <small>\n          Talked <strong>'), b.push(d(this.call.shortFormattedDuration())), b.push("</strong>\n          on <strong>"), b.push(d(moment(this.call.scheduled_at || this.call.end_time).member().format("ddd, MMM D YYYY"))), b.push('</strong>\n        </small>\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class="panel-padded">\n  <div class="constrain form-wrapper">\n\n    <form class="settings">\n\n      <h4>Rating is private and for internal use</h4>\n      <div class="input">\n        <div class="star-rating-wrapper">\n          <div class="star-rating"></div>\n        </div>\n        <div class="current-rating"></div>\n      </div>\n\n\n      <h4>(Optional) Write a public review for '), b.push(d(this.other_party.first_name)), b.push('</h4>\n      <div class="input">\n        <textarea name="comment" placeholder="This review will be displayed on '), b.push(d(this.other_party.first_name)), b.push('\'s profile"></textarea>\n        <div class="pull-right small-note"><span class="counter"></span> characters left</div>\n        <div class="clearfix"></div>\n      </div>\n\n      <button class="btn btn-green btn-wide" data-action="submit">Submit your feedback</button>\n\n    </form>\n\n  </div><!--/.constrain-->\n</div><!--/.panel-padded-->\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/recommendations/item"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="item recommendation">\n\n  <div class="quote '), this.show_delete && b.push(d("with-delete")), b.push('">\n    '), this.show_delete && this.review.source !== "clarity" && (b.push('\n      <i class="pull-right icon-grey-x remove-recommendation" data-recommendation-id="'), b.push(d(this.review.id)), b.push('"></i>\n    ')), b.push('\n\n    <span class="desc">\n      '), this.show_stars && this.review.stars != null && (b.push("\n        <strong>"), b.push(d(Helper.pluralize(this.review.stars, "star", "stars"))), b.push("</strong>\n      ")), b.push("\n\n      "), b.push(this.review.formatted_comment), b.push("\n\n\n      "), this.review.screen_name != null && this.review.screen_name !== "" ? (b.push('\n        <a class="recommender clearfix internal" style="cursor: pointer;" href="/'), b.push(d(this.review.screen_name)), b.push('">\n        ')) : this.review.recommender_linkedin_profile_url != null && this.review.recommender_linkedin_profile_url !== "" ? (b.push('\n        <a class="recommender clearfix external" href="'), b.push(d(this.review.recommender_linkedin_profile_url)), b.push('">\n        ')) : b.push('\n        <a class="recommender clearfix" href="#">\n      '), b.push('\n        <span class="avatar">\n          <div class="user-profile-image-wrapper"><img class="user-profile-image extra-small" src="'), b.push(d(this.review.image_url)), b.push('" /></div>\n        </span>\n        <span class="name">'), b.push(d(this.review.name)), b.push("</span>\n      </a>\n    </span>\n\n    "), this.review.source === "linkedin" ? (b.push('\n      <em class="source">\n        Source:\n        '), this.review.recommender_linkedin_profile_url != null && this.review.recommender_linkedin_profile_url !== "" ? (b.push('\n          <a href="'), b.push(d(this.review.recommender_linkedin_profile_url)), b.push('" class="external">LinkedIn</a>\n          ')) : b.push("\n          LinkedIn\n        "), b.push("\n      </em>\n    ")) : this.review.source === "clarity" && (b.push('\n      <em class="source">\n        Source:\n        '), this.review.screen_name != null && this.review.screen_name !== "" ? (b.push('\n          <a href="/'), b.push(d(this.review.screen_name)), b.push('" class="internal" style="cursor: pointer;">Clarity</a>\n          ')) : b.push("\n          Clarity\n        "), b.push("\n      </em>\n    ")), b.push('\n  </div>\n  <div class="clearfix" />\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/recommendations/recommendations"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, d, e;
                this.is_onboarding_expert && b.push('\n  <div class="dark-top">\n    <div class="constrain">\n      <div class="welcome header-welcome-centered">\n        <h4>Add reviews to your profile</h4>\n      </div>\n    </div>\n  </div>\n'), b.push('\n\n<div class="constrain padded">\n  '), this.is_onboarding_expert ? b.push('\n    <div class="vspace-15"></div>\n  ') : b.push('\n    <h4 class="heading center">Add reviews to your profile</h4>\n  '), b.push('\n\n  <div class="typo-center">\n    <button class="connect-button connect-button-linkedin linkedin-connect-button">\n      <span class="button-icon"><i></i></span>\n      <span class="button-label">Import from LinkedIn</span>\n    </button>\n  </div>\n</div>\n\n<div class="constrain padded">\n  <div class="import-status" style="display: none;">\n    <i class="loading-spinner"></i>\n    <h4 class="heading">Importing</h4>\n    <div class="typo-line">This could take <strong>3 seconds</strong> per recommendation. The page will update automatically when we\'re done.</div>\n  </div>\n\n  <div class="success-status" style="display: none;">\n    <h4 class="heading">Success</h4>\n    <div class="typo-line">Imported <strong class="imported-count"></strong> from LinkedIn.</div>\n  </div>\n\n  <div class="error-status" style="display: none;">\n    <h4 class="heading">Error</h4>\n    <div class="typo-line">We\'re sorry, something went wrong. Please try again. Contact <a href="mailto:support@clarity.fm" class="allow-default" target="_blank">support@clarity.fm</a> if the issue persists.</div>\n  </div>\n\n  ');
                if (this.reviews.length > 0) {
                    b.push('\n    <div class="recommendations-list">\n      <div class="expertise">\n        '), e = this.reviews;
                    for (c = 0, d = e.length; c < d; c++) a = e[c], b.push("\n          "), b.push(JST["app/views/recommendations/item"]({
                        review: a,
                        show_delete: !0
                    })), b.push("\n        ");
                    b.push("\n      </div>\n    </div>\n  ")
                }
                b.push("\n\n  "), this.is_onboarding_expert && b.push('\n    <div class="vspace-20"></div>\n    <button class="btn btn-green btn-wide" data-action="save">Finish</button>\n    <div class="vspace-20"></div>\n  '), b.push("\n\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/requirements/credit_card"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e;
                this.expert && (b.push('\n  <div class="dark-top precall-header with-image">\n    <div class="constrain">\n      <div class="image">\n        <div class="user-profile-image-wrapper"><img style="display: block;" class="user-profile-image small" src="'), b.push(d(this.expert.imageUrl("normal_square"))), b.push('" /></div>\n      </div>\n      <div class="instructions">\n        <h4>Schedule a call with '), b.push(d(this.expert.first_name)), b.push("</h4>\n        "), this.expert.isFree() ? b.push('\n          <div class="hourly-rate-box free" style="float: left; padding: 0 10px;">Free</div>\n        ') : (b.push('\n          <div class="hourly-rate-box" style="float: left; padding: 0 10px;">\n            <span>$'), b.push(d(this.expert.formattedCost())), b.push("</span> per minute\n          </div>\n        ")), b.push('\n        <p class="howdoesthiswork"><a href="http://help.clarity.fm" target="_blank" class="how-it-works external">Questions?</a></p>\n      </div>\n      <div style="clear: both;"></div>\n    </div>\n  </div>\n')), b.push('\n<div class="credit-card constrain thin centered">\n  '), this.expert ? b.push("\n    <h3>Please provide your payment info so that we can connect you.</h3>\n  ") : (b.push("\n    "), Member.current().credit_card_type != null && Member.current().last_four_cc_digits != null ? (b.push("\n      <h3>Your "), b.push(d(Member.current().credit_card_type)), b.push(" "), b.push(d(Member.current().last_four_cc_digits)), b.push(" is linked to this account. To update, please supply a new card below.</h3>\n    ")) : b.push("\n      <h3>Please provide your payment info.</h3>\n  "), b.push("\n\n  ")), b.push('\n    <div class="card-details new-form">\n    <input class="card_number" type="text" placeholder="Credit Card #" /> <input class="card_cvc" type="text" placeholder="CVC" />\n    <br/>\n\n    <select class="card_expiry_month">\n      <option value="1">January</option>\n      <option value="2">February</option>\n      <option value="3">March</option>\n      <option value="4">April</option>\n      <option value="5">May</option>\n      <option value="6">June</option>\n      <option value="7">July</option>\n      <option value="8">August</option>\n      <option value="9">September</option>\n      <option value="10">October</option>\n      <option value="11">November</option>\n      <option value="12">December</option>\n    </select>\n    <select class="card_expiry_year">\n      ');
                for (a = c = (new Date).getFullYear(), e = (new Date).getFullYear() + 20; c <= e ? a <= e : a >= e; c <= e ? a++ : a--) b.push("<option>" + a + "</option>");
                b.push('\n    </select>\n\n    <div class="vspace-15">\n      <button class="btn btn-green btn-wide submit">Submit</button>\n    </div>\n\n    '), this.expert && b.push("\n      <h4>When will I be billed?</h4>\n      <p>Your credit card will be charged after your call is complete.</p>\n\n      <h4>How much will I be billed?</h4>\n      <p>You will be billed for the number of minutes you use.</p>\n    "), b.push('\n\n    <div class="siteseal">\n      <img style="cursor:pointer;cursor:hand" width="87" height="20" src="https://seal.starfieldtech.com:443/assets/3/siteseal_sf_3_h_l_m.gif" onclick="verifySeal();">\n    </div>\n  </div>\n\n</div>\n\n<footer>\n  <label>Your information is kept 100% private!</label>\n</footer>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/_completions"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="search-completion '), b.push(d(this.listType)), b.push('">\n  <div class="typo-title result" style="'), this.formatted && b.push(d("font-weight:normal")), b.push('">\n    <div class="truncate">'), b.push(d(this.safe(this.formatted || this.value))), b.push('</div>\n  </div>\n  <div class="result-type">'), b.push(d(this.search_type)), b.push("</div>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/_result_description"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="results-text">\n  <strong class="truncate">'), b.push(d(this.line1)), b.push("</strong>\n  "), this.line2 && (b.push('\n    <em class="truncate">'), b.push(d(this.line2)), b.push("</em>\n  ")), b.push("\n</div>\n"), this.filter !== !1 && b.push("\n  <div class=\"results-button\">\n    <button class='filter-results'>Filter</button>\n  </div>\n"), b.push("\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/_tabs"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="header-tabs-wrapper top">\n  <ul class="header-tabs two">\n    <li class="tab members" data-prefix="/search">Experts</li>\n    <li class="tab topics" data-prefix="/search/topics">Topics</li>\n  </ul>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/blank_slate"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<div class="search-blank-slate">\n  <div class="no-results content-box'), this.from_404 && b.push(" from_404"), b.push('">\n    <div class="title">\n      '), this.from_404 ? b.push('\n        <span class="section-name">\n          <em>WHOA!!!</em>\n        </span>\n        <span class="sub-text"><strong>Sorry that page cannot be found.</strong> Please <a href="mailto:support@clarity.fm" class="allow-default" target="_blank">let us know</a> so we can fix it.</span>\n      ') : b.push('\n        <span class="section-name">\n          <em>Oh darn...</em>\n        </span>\n        <span class="sub-text"><strong>We didn’t find any experts matching your search.</strong> However, we are adding new experts everyday.</span>\n      '), b.push('\n    </div>\n  </div>\n  <div class="featured-experts content-box">\n    <div class="title">\n      '), this.from_404 ? b.push('\n        <span class="section-name">Were you looking for an expert?</span>\n      ') : b.push('\n        <span class="section-name">Maybe a hand picked expert?</span>\n      '), b.push('\n      <span class="sub-text">Entrepreneurs keen to help you out.</span>\n    </div>\n    <div class="content">\n      '), f = this.featured;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n      <a class="expert" href="/'), b.push(d(a.screen_name)), b.push('">\n        <div class="user-profile-image-wrapper"><img src="'), b.push(d(a.imageUrl("normal_square"))), b.push('" alt="" class="user-profile-image small"></div>\n        <span class="name">'), b.push(d(a.first_name)), b.push("<br>"), b.push(d(a.last_name)), b.push("</span>\n      </a>\n      ");
                b.push('\n    </div>\n  </div>\n  <div class="concierge content-box">\n    <div class="title">\n      <span class="section-name">Call us now</span>\n      '), this.from_404 ? b.push('\n        <span class="sub-text">A Clarity Assistant would love to help you.</span>\n      ') : b.push('\n        <span class="sub-text">A Clarity Assistant would love to show you some of the amazing features with our product and recommend some great experts for you to connect with.</span>\n      '), b.push('\n\n    </div>\n    <div class="content">\n      <a href="tel:+1-855-245-5035" class="btn btn-green">Call now</a>\n      <span class="or">or</span>\n      <button class="btn btn-grey post-request">Post a need</button>\n    </div>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/filter"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('\n<form name="filter">\n  <div class="center-screen settings-list">\n    <h4>Filter</h4>\n    <ul class="flat">\n      '), Member.current() != null && (b.push('\n        <li>\n          <label class="email-label">Near Me\n            <span class="typo-12 typo-dark-grey white-text-shadow">\n              (Within 250 miles)\n            </span>\n          </label>\n          <input name="near_me" type="checkbox" '), this.near_me && b.push('checked="checked"'), b.push(" />\n        </li>\n      ")), b.push('\n      <li>\n        <label class="email-label">Videos Only</label>\n        <input name="video" type="checkbox" '), this.video && b.push('checked="checked"'), b.push(' />\n      </li>\n      <li>\n        <label class="email-label">Reviews Only</label>\n        <input name="recommendations" type="checkbox" '), this.recommendations && b.push('checked="checked"'), b.push(' />\n      </li>\n    </ul>\n\n    <h4>Sort</h4>\n    <ul class="flat select">\n      <li data-val="default">\n        <label class="email-label">'), b.push(d(this.defaultSort)), b.push('</label>\n      </li>\n      <li data-val="hourly_rate">\n        <label class="email-label">Hourly Rate</label>\n      </li>\n      <li data-val="klout_score">\n        <label class="email-label">Klout Score</label>\n      </li>\n      <li data-val="calls">\n        <label class="email-label">Number of Calls</label>\n      </li>\n    </ul>\n  </div>\n</form>\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/header"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="search-box" data-in-page-header="true">\n  <form action="#" onsubmit="return false;">\n    <div class="input-wrapper">\n      <input placeholder="Search" type="'), b.push(d(App.mobile ? "search" : "text")), b.push('" name="search_query" class="search_query noglow" value="'), b.push(d(this.search_query)), b.push('">\n    </div>\n\n    <div class="button-wrapper">\n      '), App.mobile || b.push('\n\n        <button class="btn btn-green submit-search">Search</button>\n      '), b.push("\n    </div>\n  </form>\n</div>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/landing"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f, g, h, i, j;
                b.push('<div class="history">\n  <span class="category-heading">Recent Searches</span>\n</div>\n\n<div class="dropdown-results" />\n\n<ul class="contacts-list categories">\n  '), i = this.orgs;
                for (e = 0, g = i.length; e < g; e++) a = i[e], b.push('\n    <li class="member-item list-item" data-href="/'), b.push(d(a.route)), b.push('">\n\n      <div class="image">\n        <div class="user-profile-image-wrapper"><img class="user-profile-image small" src="'), b.push(d(a.logoUrl("profile_square"))), b.push('" /></div>\n      </div><!-- /.image -->\n\n      <div class="content">\n        <div class="rpad-18 valigned">\n          <div class="typo-title vspace-4">'), b.push(d(a.title)), b.push('</div>\n          <div class="typo-12 typo-dark-grey">'), b.push(d(moment.relativeDayStringInThePast(moment(a.updated_at), !1))), b.push("</div>\n        </div>\n      </div><!-- /.content -->\n\n    </li>\n  ");
                b.push("\n\n  "), j = this.topics;
                for (f = 0, h = j.length; f < h; f++) c = j[f], b.push('\n    <li class="member-item list-item" data-href="/topics/'), b.push(d(c.slug())), b.push('">\n      <div class="image">\n        <div class="user-profile-image-wrapper">\n          <img class="user-profile-image small" src="'), b.push(d(c.logoUrl("list_square"))), b.push('" />\n        </div>\n      </div><!-- /.image -->\n\n\n      <div class="content">\n        <div class="rpad-18 valigned">\n          <div class="typo-title vspace-4">'), b.push(d(c.name)), b.push('</div>\n          <div class="typo-12 typo-dark-grey">\n            '), b.push(d($.roundToK(c.searchable_members_count))), b.push(" "), b.push(d(Helper.pluralizeWordOnly(c.searchable_members_count, "Expert", "Experts"))), b.push("\n          </div>\n        </div>\n      </div><!-- /.content -->\n    </li>\n  ");
                b.push('\n\n  <li class="typo-center" style="background: none;">\n    <button class="btn btn-grey btn-flat btn-solid-border" data-action="show-more">Show more</button>\n  </li>\n\n</ul>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/results"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, d, e;
                b.push('<ul class="contacts-list">\n  </li>\n  '), e = this.members;
                for (c = 0, d = e.length; c < d; c++) a = e[c], b.push("\n    "), b.push(JST["app/views/shared/member"]({
                    member: a
                })), b.push("\n  ");
                b.push("\n\n  "), this.matches > this.members.length && b.push('\n    <li class="typo-center" style="background: none;">\n      <button class="btn btn-grey btn-flat btn-solid-border show-more">Show more</button>\n    </li>\n  '), b.push("\n</ul>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/share"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="constrain padded vspace-13">\n  <h3>Search URL</h3>\n\n  '), App.iOS ? (b.push('\n    <input type="text" value="'), b.push(d(this.url)), b.push('" name="url" class="member-url" data-behavior="select-all" style="font-size: 14px" />\n    ')) : (b.push('\n    <p style="display: none" class="member-info">'), b.push(d(null)), b.push("<br/>\n      "), b.push(d(null)), b.push("<br/>\n      "), b.push(d(this.url)), b.push('</p>\n    <button class="btn btn-beige copy-expert-info full"><i class="icon-small-copy"></i></button>\n    <div class="copy-expert-url">\n      <input type="text" value="'), b.push(d(this.url)), b.push('" name="url" readonly="readonly" class="member-url" data-behavior="select-all" style="font-size: 14px" />\n    </div>\n    <div class="clearfix" />\n  ')), b.push('\n</div>\n\n<div class="dashed-border"></div>\n\n<div class="constrain padded">\n  <div class="social-share">\n    <div class="vspace-15"></div>\n\n    <ul class="flat">\n      <li>\n        <a href="mailto:?subject='), b.push(d(this.subject)), b.push("&amp;body="), b.push(d(this.body)), b.push('" class="mail allow-default" target="_blank">Share by email</a>\n      </li>\n      <li>\n        <a href="'), b.push(d(this.facebook)), b.push('" class="facebook external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on Facebook</a>\n      </li>\n      <li>\n        '), App["native"]() ? b.push('\n          <a href="" data-action="native-twitter-share" class="twitter">Share on Twitter</a>\n        ') : (b.push('\n          <a href="'), b.push(d(this.twitter)), b.push('" class="twitter external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on Twitter</a>\n        ')), b.push('\n      </li>\n      <li>\n        <a href="'), b.push(d(this.google)), b.push('" class="google external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on Google+</a>\n      </li>\n      <li>\n        <a href="'), b.push(d(this.linkedin)), b.push('" class="linkedin external" onclick="javascript:window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600\');return false;">Share on LinkedIn</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/search/topics"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<ul class="contacts-list">\n  </li>\n  '), f = this.topics;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n    <li class="member-item list-item" data-href="/topics/'), b.push(d(a.slug())), b.push('">\n      <div class="image">\n        <div class="user-profile-image-wrapper">\n          <img class="user-profile-image small" src="'), b.push(d(a.logoUrl("list_square"))), b.push('" />\n        </div>\n      </div><!-- /.image -->\n\n\n      <div class="content">\n        <div class="rpad-18 valigned">\n          <div class="typo-title vspace-4">'), b.push(d(a.name)), b.push('</div>\n          <div class="typo-12 typo-dark-grey">\n            '), b.push(d($.roundToK(a.searchable_members_count))), b.push(" "), b.push(d(Helper.pluralizeWordOnly(a.searchable_members_count, "Expert", "Experts"))), b.push("\n          </div>\n        </div>\n      </div><!-- /.content -->\n    </li>\n  ");
                b.push("\n\n\n  "), this.matches > this.topics.length && b.push('\n    <li class="typo-center" style="background: none;">\n      <button class="btn btn-grey btn-flat btn-solid-border show-more">Show more</button>\n    </li>\n  '), b.push("\n</ul>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/shared/_simple_typeahead_completion"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<p style="white-space: normal;">'), b.push(d(this.safe(this.formatted || this.value))), b.push("</p>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/shared/member"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a;
                b.push('<li class="member-item list-item member-card" data-href="/'), b.push(d(this.member.screen_name)), b.push('">\n  <div class="image">\n    <div class="user-profile-image-wrapper card">\n      <img class="user-profile-image card" src="'), b.push(d(this.member.imageUrl())), b.push('" />\n    </div>\n  </div><!-- /.image -->\n\n  <div class="content">\n    <div class="rpad-18">\n\n      <div class="typo-title vspace-6 name" style="padding-top:5px;">\n        '), b.push(d(Helper.hl(this.member.name(), this))), b.push("\n\n        "), (this.member.video || this.member.has_a_video) && b.push('\n          <i class="fa-icon-facetime-video typo-17 typo-dark-grey" style="line-height: 10px;" />\n        '), b.push("\n      </div>\n\n      "), this.member.location != null && this.member.location !== "null" && this.member.location !== "" && (b.push('\n        <div class="typo-12 typo-dark-grey vspace-10 truncate location" style="max-height:15px">\n          <i class="icon-map-marker"></i>\n          '), b.push(d(Helper.hl(this.member.location, this))), b.push("\n        </div>\n      ")), b.push('\n\n      <div class="inset-div profile-stats typo-11 typo-bold">\n        <span class="typo-13 left-profile-stat">\n          '), this.member.isFree(Member.current()) ? b.push("\n            FREE\n            ") : (b.push("\n            $"), b.push(this.member.formattedCost()), b.push('<span class="typo-10">/min</span>\n          ')), b.push("\n        </span>\n\n        "), this.member.average_rating ? (b.push('\n          <span class="profile-detail profile-stat">'), b.push(d(this.member.average_rating.toFixed(1))), b.push('<i class="fa-icon-star typo-13" /></span>\n          ')) : b.push('\n          <span class="profile-detail profile-stat"><span class="typo-13">&mdash;</span> <i class="fa-icon-star-empty typo-13" /></span>\n        '), b.push("\n        "), this.member.review_count ? (b.push('\n          <span class="profile-detail profile-stat">'), b.push(d(this.member.review_count)), b.push(' <i class="fa-icon-comment typo-13" /></span>\n        ')) : b.push('\n          <span class="profile-detail profile-stat"><span class="typo-13">&mdash;</span> <i class="fa-icon-comment-alt typo-13" /></span>\n        '), b.push('\n\n        <span class="typo-13 right-profile-stat">\n          '), this.member.isFree(Member.current()) ? b.push("\n            FREE\n            ") : (b.push("\n            $"), b.push(this.member.formattedCost()), b.push('<span class="typo-10">/min</span>\n          ')), b.push('\n        </span>\n      </div>\n\n    </div>\n\n  </div><!-- /.content -->\n  <div class="profile-text">\n    '), this.member.bio && (b.push('\n      <div class="profile-bio typo-12 typo-dark-grey truncate">'), b.push(d(Helper.hl(this.member.bio, this))), b.push("</div>\n    ")), b.push("\n    "), this.member.topic_names ? (b.push('\n      <div class="profile-topics typo-11">'), b.push(d(Helper.topics_hl(this.member.topic_names, this))), b.push("</div>\n    ")) : ((a = this.member.topics) != null ? a.length : void 0) > 0 && (b.push('\n      <div class="profile-topics typo-11">'), b.push(d(Helper.topics_hl(this.member.topicNames(), this))), b.push("</div>\n    ")), b.push('\n  </div>\n\n  <div class="clearfix"></div>\n</li>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/shared/member_card"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a;
                b.push('<li class="member-item list-item member-card" data-href="/'), b.push(d(this.member.screen_name)), b.push('">\n  <div class="image">\n    <div class="user-profile-image-wrapper card">\n      <img class="user-profile-image card" src="'), b.push(d(this.member.imageUrl())), b.push('" />\n    </div>\n  </div><!-- /.image -->\n\n  <div class="content">\n    <div class="rpad-18">\n\n      <div class="typo-title vspace-6 name" style="padding-top:5px;">\n        '), b.push(d(Helper.hl(this.member.name(), this))), b.push("\n      </div>\n\n      "), this.member.location != null && this.member.location !== "null" && this.member.location !== "" && (b.push('\n        <div class="typo-12 typo-dark-grey vspace-10 truncate location" style="max-height:15px">\n          <i class="icon-map-marker"></i>\n          '), b.push(d(Helper.hl(this.member.location, this))), b.push("\n        </div>\n      ")), b.push('\n\n      <div class="inset-div profile-stats typo-11 typo-bold">\n        <span class="typo-13 left-profile-stat">\n          '), this.member.isFree(Member.current()) ? b.push("\n            FREE\n            ") : (b.push("\n            $"), b.push(this.member.formattedCost()), b.push('<span class="typo-10">/min</span>\n          ')), b.push("\n        </span>\n\n        "), this.member.average_rating ? (b.push('\n          <span class="profile-detail profile-stat"><i class="fa-icon-star typo-13" />'), b.push(d(this.member.average_rating.toFixed(1))), b.push("</span>\n          ")) : b.push('\n          <span class="profile-detail profile-stat"><i class="fa-icon-star typo-13" />N/A</span>\n        '), b.push("\n        "), this.member.review_count && (b.push('\n          <span class="profile-detail profile-stat"><i class="fa-icon-comment typo-13" />'), b.push(d(this.member.review_count)), b.push("</span>\n        ")), b.push("\n        "), this.member.video && b.push('\n          <span class="profile-detail profile-stat"><i class="fa-icon-facetime-video typo-13" /></span>\n        '), b.push('\n\n        <span class="typo-13 right-profile-stat">\n          '), this.member.isFree(Member.current()) ? b.push("\n            FREE\n            ") : (b.push("\n            $"), b.push(this.member.formattedCost()), b.push('<span class="typo-10">/min</span>\n          ')), b.push('\n        </span>\n      </div>\n\n    </div>\n\n  </div><!-- /.content -->\n  <div class="profile-text">\n    '), this.member.bio && (b.push('\n      <div class="profile-bio typo-12 typo-dark-grey truncate">'), b.push(d(Helper.hl(this.member.bio, this))), b.push("</div>\n    ")), b.push("\n    "), this.member.topic_names ? (b.push('\n      <div class="profile-topics typo-11">'), b.push(d(Helper.topics_hl(this.member.topic_names, this))), b.push("</div>\n    ")) : ((a = this.member.topics) != null ? a.length : void 0) > 0 && (b.push('\n      <div class="profile-topics typo-11">'), b.push(d(Helper.topics_hl(this.member.topicNames(), this))), b.push("</div>\n    ")), b.push('\n  </div>\n\n  <div class="clearfix"></div>\n</li>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/shared/need_callout"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<li class="member-item list-item need-callout" data-href="/requests/new">\n  <div class="image">\n    <div class="clarity-question-mark">?</div>\n  </div><!-- /.image -->\n\n  <div class="content">\n    <div class="rpad-18 valigned">\n      <div class="typo-title vspace-2">Submit a request</div>\n      <div class="typo-12 typo-dark-grey">Need some help finding the right expert? Clarity can help.</div>\n    </div>\n  </div><!-- /.content -->\n</li>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/shared/typeahead-input"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="table-valign-top">\n  <div style="width: 100%;">\n    <input type="text" name="'), b.push(d(this.name)), b.push('" data-typeahead-input placeholder="'), b.push(d(this.placeholder)), b.push('" autocorrect="off" />\n  </div>\n  <div></div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/shared/typeahead-screen"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="typeahead-screen-wrapper">\n  <div class="table-valign-top" style="position: relative; z-index: 1000">\n    <div style="width: 100%;">\n      <input type="text" name="'), b.push(d(this.name)), b.push('" data-typeahead-input placeholder="'), b.push(d(this.placeholder)), b.push('" autocorrect="off" />\n    </div>\n    <div></div>\n  </div>\n</div>\n')
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/topics/edit"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                this.is_onboarding_expert ? b.push('\n  <div class="dark-top">\n    <div class="constrain">\n      <div class="welcome header-welcome-centered">\n        <h4>Search to select a topic of knowledge</h4>\n      </div>\n    </div>\n  </div>\n') : this.is_onboarding_seeker && b.push('\n  <div class="dark-top">\n    <div class="constrain">\n      <div class="welcome header-welcome-centered">\n        <h4>Search to select a topic of interest</h4>\n      </div>\n    </div>\n  </div>\n'), b.push('\n\n<form name="add-form" class="settings new-form">\n  <div class="vspace-10"></div>\n\n\n  '), !this.is_onboarding_expert && !this.is_onboarding_seeker && (b.push("\n    "), Member.current().is_expert ? b.push("\n      <h4>Search to select a topic of knowledge</h4>\n    ") : b.push("\n      <h4>Search to select a topic of interest</h4>\n    "), b.push('\n    <div class="vspace-10"></div>\n  ')), b.push('\n  <div class="topic-input">\n    <div data-field="topics-typeahead-placeholder"></div>\n  </div>\n  <div class="note pad-3">You can only have 10 topics on your profile, please remove a topic to add another.</div>\n\n  ');
                if (this.topics.length > 0) {
                    b.push('\n    <div class="vspace-10"></div>\n    <div>\n      '), f = this.topics;
                    for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n        <div class="tag">\n          <span class="tag-name">'), b.push(d(a.name)), b.push('</span>\n          <span class="tag-delete" data-action="delete-topic" data-topic-name="'), b.push(d(a.name)), b.push('">\n            <i class="fa-icon-remove typo-12"></i>\n          </span>\n        </div>\n      ');
                    b.push("\n    </div>\n  ")
                } else b.push('\n    <div class="vspace-10"></div>\n  ');
                b.push('\n\n  <div class="vspace-5"></div>\n  <button class="btn btn-green btn-wide" data-action="save">\n    '), this.is_onboarding_seeker ? b.push("\n      Finish\n    ") : this.is_onboarding_expert ? b.push("\n      Save &amp; Continue\n    ") : b.push("\n      Save\n    "), b.push("\n  </button>\n</form>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/topics/list"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, e, f;
                b.push('<ul class="contacts-list">\n  '), f = this.topics;
                for (c = 0, e = f.length; c < e; c++) a = f[c], b.push('\n    <li class="member-item list-item" data-href="/topics/'), b.push(d(a.slug())), b.push('">\n      <div class="image">\n        <div class="user-profile-image-wrapper">\n          <img class="user-profile-image small" src="'), b.push(d(a.logoUrl("list_square"))), b.push('" />\n        </div>\n      </div><!-- /.image -->\n\n\n      <div class="content">\n        <div class="rpad-18 valigned">\n          <div class="typo-title vspace-4">'), b.push(d(a.name)), b.push('</div>\n          <div class="typo-12 typo-dark-grey">\n            '), b.push(d($.roundToK(a.searchable_members_count))), b.push(" "), b.push(d(Helper.pluralizeWordOnly(a.searchable_members_count, "Expert", "Experts"))), b.push("\n          </div>\n        </div>\n      </div><!-- /.content -->\n    </li>\n  ");
                b.push("\n</ul>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/topics/members"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                var a, c, d, e;
                b.push('<ul class="contacts-list">\n  '), b.push(JST["app/views/shared/need_callout"]()), b.push("\n\n  "), e = this.experts;
                for (c = 0, d = e.length; c < d; c++) a = e[c], b.push("\n    "), b.push(JST["app/views/shared/member"]({
                    member: a
                })), b.push("\n  ");
                b.push("\n\n  "), this.matches > this.experts.length && b.push('\n    <li class="typo-center" style="background: none;">\n      <button class="btn btn-grey btn-flat btn-solid-border" data-action="show-more">Show more</button>\n    </li>\n  '), b.push("\n</ul>\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["app/views/unsubscribed/call_request"] = function (a) {
        a || (a = {});
        var b = [],
            c = function (a) {
                var c = b,
                    d;
                return b = [], a.call(this), d = b.join(""), b = c, e(d)
            }, d = function (a) {
                return a && a.ecoSafe ? a : typeof a != "undefined" && a != null ? g(a) : ""
            }, e, f = a.safe,
            g = a.escape;
        return e = a.safe = function (a) {
            if (a && a.ecoSafe) return a;
            if (typeof a == "undefined" || a == null) a = "";
            var b = new String(a);
            return b.ecoSafe = !0, b
        }, g || (g = a.escape = function (a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function () {
            (function () {
                b.push('<div class="panel-plain-text">\n  '), this.status === "error" ?
                    b.push('\n    <p>\n      Unfortunately something went wrong when trying to unsubscribe you from future call request email notifications.\n      Click <a href="/account/notifications" class="internal">here</a> to manage your email preferences.\n    </p>\n\n  ') : b.push('\n\n    <p>You will no longer receive call request email notifications from Clarity.</p>\n    <p>Click <a href="/account/notifications" class="internal">here</a> to manage your email preferences.</p>\n    <p>Thank you for using Clarity, if you have any thoughts on how we can make it a better experience, please email <a href="mailto:support@clarity.fm" class="allow-default" target="_blank">support@clarity.fm</a>.</p>\n    <p>Have a great day!</p>\n\n  '), b.push("\n</div>\n\n")
            }).call(this)
        }.call(a), a.safe = f, a.escape = g, b.join("")
    }
}.call(this),
function () {
    Handlebars.registerHelper("pluralize", function (a, b, c) {
        return a === 1 ? b : c
    }), Handlebars.registerHelper("mdash", function (a) {
        return !a || a === "-" ? "—" : a
    })
}.call(this),
function () {
    var a, b = Object.prototype.hasOwnProperty,
        c = function (a, c) {
            function e() {
                this.constructor = a
            }
            for (var d in c) b.call(c, d) && (a[d] = c[d]);
            return e.prototype = c.prototype, a.prototype = new e, a.__super__ = c.prototype, a
        };
    a = function (a) {
        return Spine.Route.navigate("/"), Clarity.auth.show({
            screen: a,
            animate: !1
        })
    }, Clarity.Routes = function (b) {
        function d() {
            d.__super__.constructor.apply(this, arguments)
        }
        return c(d, b), d.prototype.routes = [
            ["/",
                function (a) {
                    return this.navigate("/search")
                }
            ],
            ["/me", "RedirectMe"],
            ["/me/*parts", "RedirectMe"],
            ["/callback",
                function () {
                    return this.navigate("/calls")
                }
            ],
            ["/list",
                function () {
                    return this.navigate("/calls")
                }
            ],
            ["/requested",
                function () {
                    return this.navigate("/calls")
                }
            ],
            ["/calls/pending",
                function () {
                    return this.navigate("/calls")
                }
            ],
            ["/calls", "CallsPending"],
            ["/scheduled",
                function () {
                    return this.navigate("/calls")
                }
            ],
            ["/calls/scheduled",
                function () {
                    return this.navigate("/calls")
                }
            ],
            ["/history",
                function () {
                    return this.navigate("/calls/history")
                }
            ],
            ["/recent",
                function () {
                    return this.navigate("/calls/history")
                }
            ],
            ["/calls/history", "CallsHistory"],
            ["/calls/history/rate", "RateAndReview"],
            ["/calls/latest/rate", "RateAndReview"],
            ["/calls/:call_id/rate", "RateAndReview"],
            ["/calls/:call_id", "CallDetails"],
            ["/calls/:call_id/accept/:unix_timestamp", "CallDetails"],
            ["/calls/:call_id/suggest", "CallSuggestTimes"],
            ["/getting_started/step1", "Step1"],
            ["/getting_started/step2", "Step2"],
            ["/getting_started/step3", "EditTopics"],
            ["/expert/sign-in",
                function () {
                    return this.navigate("/expert/step1")
                }
            ],
            ["/expert/step1", "Step1"],
            ["/expert/step2", "Step2"],
            ["/expert/step3", "EditTopics"],
            ["/expert/step4", "Step3"],
            ["/expert/step5", "Recommendations"],
            ["/expert/step6", "AccountVideo"],
            ["/signup",
                function () {
                    return a("signup")
                }
            ],
            ["/signup/:screen_name",
                function () {
                    return a("signup")
                }
            ],
            ["/sign-in",
                function () {
                    return a("login")
                }
            ],
            ["/sign-in/:screen_name",
                function () {
                    return a("login")
                }
            ],
            ["/need/sign-in",
                function () {
                    return a("login")
                }
            ],
            ["/search/sign-in",
                function () {
                    return a("login")
                }
            ],
            ["/credit-card", "CreditCardRequirement"],
            ["/credit-card/:screen_name", "CreditCardRequirement"],
            ["/typeahead", "TypeaheadScreen"],
            ["/help/:page", "HelpPanel"],
            ["/howitworks", "HowItWorks"],
            ["/find",
                function () {
                    return this.navigate("/search")
                }
            ],
            ["/search", "SearchLanding"],
            ["/search/filter", "SearchFilter"],
            ["/search/share/:search_query", "SearchShare"],
            ["/search/share/:search_query/:filter", "SearchShare"],
            ["/search/topics/:search_query", "SearchTopics"],
            ["/search/topics/:search_query/:filter", "SearchTopics"],
            ["/search/:search_query", "SearchResults"],
            ["/search/:search_query/:filter", "SearchResults"],
            ["/search/share/:search_query/:filter", "SearchResults"],
            ["/plans", "Plans"],
            ["/inbox", "Inbox"],
            ["/inbox/all", "InboxAll"],
            ["/inbox/:thread_id", "ThreadView"],
            ["/inbox/start/:member_id", "ThreadView"],
            ["/inbox/:thread_id/:thread_size",
                function (a) {
                    return this.navigate("/inbox/" + a.thread_id)
                }
            ],
            ["/:organization/search",
                function () {
                    return this.navigate("/404")
                }
            ],
            ["/:organization/search/:search_query",
                function () {
                    return this.navigate("/404")
                }
            ],
            ["/getadvice",
                function () {
                    return this.navigate("/requests/new")
                }
            ],
            ["/request",
                function () {
                    return this.navigate("/requests/new")
                }
            ],
            ["/needs",
                function () {
                    return this.navigate("/requests/new")
                }
            ],
            ["/need",
                function () {
                    return this.navigate("/requests/new")
                }
            ],
            ["/need/:call_id",
                function (a) {
                    return this.navigate("/requests/new/" + a.call_id)
                }
            ],
            ["/requests/new/confirm", "NeedConfirm"],
            ["/requests/new", "NewNeed"],
            ["/requests/new/:call_id", "NewNeed"],
            ["/requests/:need_id", "NeedDetails"],
            ["/requests/:need_id/recommend", "NeedRecommendation"],
            ["/requests", "Needs"],
            ["/account", "AccountShow"],
            ["/account/profile",
                function () {
                    return this.navigate("/account")
                }
            ],
            ["/account/edit", "AccountBasicInfo"],
            ["/account/edit/rate", "AccountBasicInfo"],
            ["/account/edit/expert", "AccountExpertInfo"],
            ["/account/settings", "AccountBasicInfo"],
            ["/account/passcode", "AccountPasscode"],
            ["/account/passcode/edit", "AccountPasscodeEdit"],
            ["/account/edit/mini-resume", "AccountMiniResume"],
            ["/account/trust",
                function () {
                    return this.navigate("/account/social")
                }
            ],
            ["/account/social", "AccountSocialConnections"],
            ["/account/transactions/export", "AccountTransactionsExport"],
            ["/account/transactions/:type", "AccountTransactions"],
            ["/account/notifications", "AccountEmailNotifications"],
            ["/account/verified", "AccountVerified"],
            ["/account/reset_password", "AccountResetPassword"],
            ["/account/image", "AccountImage"],
            ["/account/video", "AccountVideo"],
            ["/account/widget", "AccountWidget"],
            ["/widget", "AccountWidget"],
            ["/:screen_name/widget", "AccountWidget"],
            ["/account/logout",
                function (a) {
                    return App.logout()
                }
            ],
            ["/account/topics", "EditTopics"],
            ["/account/expertise", "ExpertiseList"],
            ["/account/expertise/add", "ExpertiseEdit"],
            ["/account/expertise/example", "ExpertiseExample"],
            ["/account/expertise/:expertise_id", "ExpertiseEdit"],
            ["/account/reviews", "Recommendations"],
            ["/account/recommendations",
                function () {
                    return this.navigate("/account/reviews")
                }
            ],
            ["/account/promos", "Promos"],
            ["/unsubscribed", "Unsubscribed"],
            ["/charities/add", "CharityAdd"],
            ["/donate/:guid", "ExpertDonate"],
            ["/featured",
                function () {
                    return this.navigate("/search")
                }
            ],
            ["/featured-members",
                function () {
                    return this.navigate("/new-and-noteworthy")
                }
            ],
            ["/sul", "ListRecommendations"],
            ["/404", "ListRecommendations"],
            ["/topics", "ListTopics"],
            ["/topics/filter", "FilterTopic"],
            ["/topics/:topic", "ListTopicMembers"],
            ["/topics/:topic/:filter", "ListTopicMembers"],
            ["/questions", "QuestionsList"],
            ["/questions/f/:filter", "QuestionsList"],
            ["/questions/new", "NewQuestion"],
            ["/questions/:id", "QuestionDetails"],
            ["/questions/:question_id/answer", "AnswerQuestion"],
            ["/favorites", "Favorites"],
            ["/:screen_name/web",
                function (a) {
                    return this.navigate("/" + a.screen_name)
                }
            ],
            ["/:screen_name/call/:id",
                function (a) {
                    return this.navigate("/" + a.screen_name, {
                        call_prompt: !0
                    })
                }
            ],
            ["/:screen_name/precall", "ExpertPreCall"],
            ["/:screen_name/availability", "ExpertCallAvailability"],
            ["/:screen_name/confirm", "ExpertCallConfirm"],
            ["/:screen_name/related", "ExpertRelated"],
            ["/:screen_name/share", "ExpertShare"],
            ["/:screen_name/tvs", "ExpertShow"],
            ["/:screen_name/tfv", "ExpertShow"],
            ["/:screen_name/reviews", "ExpertShow"],
            ["/:screen_name/ask", "PaidQuestionAsk"],
            ["/:screen_name/ask/:uuid/:answered", "PaidQuestionAnswered"],
            ["/:screen_name/ask_confirm", "PaidQuestionConfirm"],
            ["/:screen_name", "ExpertShow"],
            ["/:screen_name/:passcode", "ExpertShow"],
            ["/:404/:404/*404",
                function () {
                    return App.notFound()
                }
            ]
        ], d
    }(Clarity.Router)
}.call(this);
