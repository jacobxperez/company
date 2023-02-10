/* @license
 * RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
document.addEventListener("DOMContentLoaded", () => {
    $(function () {
        $(".slider").each(function () {
            var t,
                e = $(this).find(".slide"),
                n = e.length,
                a = 0,
                o = [],
                c = 5e3;
            function i() {
                var t = e.eq(a);
                e.fadeOut(500).css("z-index", 1), t.fadeIn(500).css("z-index", 5);
            }
            function d() {
                clearInterval(t),
                    (t = setInterval(function () {
                        (a += 1) > n - 1 && (a = 0), i();
                    }, c));
            }
            !(function t() {
                a < n
                    ? ((o[a] = new Image()),
                      (o[a].src = e.eq(a).find("img").attr("src")),
                      (o[a].onload = function () {
                          (a += 1), t();
                      }))
                    : ((a = 0), i(), d());
            })(),
                $(".next-slide").on("click", function () {
                    (a += 1) > n - 1 && (a = 0), i(), d((c = 1e4));
                }),
                $(".prev-slide").on("click", function () {
                    (a -= 1) < 0 && (a = n - 1), i(), d((c = 1e4));
                });
        });
    });
    (() => {
        const t = document.querySelectorAll("[data-toggle]"),
            e = document.querySelectorAll("[data-tooltip]");
        function n(t) {
            t.addEventListener("click", (e) => {
                t.hasAttribute("data-state", "active") ? t.removeAttribute("data-state") : t.setAttribute("data-state", "active"), e.stopPropagation();
            });
        }
        function a(t, e, n) {
            n.target !== t && t.matches(e) && t.removeAttribute("data-state");
        }
        t.forEach(n),
            e.forEach(n),
            document.addEventListener("click", (n) => {
                t.forEach((t) => a(t, '[data-toggle="pop"]', n)), e.forEach((t) => a(t, "[data-tooltip]", n));
            });
    })();
});
