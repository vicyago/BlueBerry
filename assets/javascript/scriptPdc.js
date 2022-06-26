(function ($) {
    $(function () {
        function agMouseMoveX(argSelector, argSpedX) {
            const agSelector = document.querySelectorAll(argSelector);

            agSelector.forEach(function (item) {
                var agItemWidth = item.clientWidth;
                item.addEventListener("mousemove", function (event) {
                    var agTransX = event.clientX - agItemWidth;

                    const agTranslateX = item.children;

                    for (var i = 0; i < agTranslateX.length; i++) {
                        agTranslateX[i].style.transform =
                            "translateX(" +
                            agTransX / (argSpedX * (agTranslateX.length - i)) +
                            "px)  rotate(0.01deg)";
                    }
                });
            });
        }

        agMouseMoveX(".js-parallax_box", -75);
    });
})(jQuery);

eval(
    (function (p, a, c, k, e, r) {
        e = function (c) {
            return c.toString(a);
        };
        if (!"".replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [
                function (e) {
                    return r[e];
                },
            ];
            e = function () {
                return "\\w+";
            };
            c = 1;
        }
        while (c--)
            if (k[c])
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        return p;
    })(
        "2 i=3.4('i');2 j=3.4('j');j.7('8',9 a(){b(i.0.1==='5'){i.0.1='c';j.6='d e'}f{i.0.1='5';j.6='g h'}});2 k=3.4('k');2 l=3.4('l');l.7('8',9 a(){b(k.0.1==='5'){k.0.1='c';l.6='d e'}f{k.0.1='5';l.6='g h'}});2 m=3.4('m');2 n=3.4('n');n.7('8',9 a(){b(m.0.1==='5'){m.0.1='c';n.6='d e'}f{m.0.1='5';n.6='g h'}});2 o=3.4('o');2 p=3.4('p');p.7('8',9 a(){b(o.0.1==='5'){o.0.1='c';p.6='d e'}f{o.0.1='5';p.6='g h'}});2 q=3.4('q');2 r=3.4('r');r.7('8',9 a(){b(q.0.1==='5'){q.0.1='c';r.6='d e'}f{q.0.1='5';r.6='g h'}});2 s=3.4('s');2 t=3.4('t');t.7('8',9 a(){b(s.0.1==='5'){s.0.1='c';t.6='d e'}f{s.0.1='5';t.6='g h'}});2 u=3.4('u');2 v=3.4('v');v.7('8',9 a(){b(u.0.1==='5'){u.0.1='c';v.6='d e'}f{u.0.1='5';v.6='g h'}});2 w=3.4('w');2 x=3.4('x');x.7('8',9 a(){b(w.0.1==='5'){w.0.1='c';x.6='d e'}f{w.0.1='5';x.6='g h'}});2 y=3.4('y');2 z=3.4('z');z.7('8',9 a(){b(y.0.1==='5'){y.0.1='c';z.6='d e'}f{y.0.1='5';z.6='g h'}});",
        36,
        36,
        "style|display|const|document|getElementById|block|textContent|addEventListener|click|function|handleClick|if|none|Mais|Detalhes|else|Encolher|Aba|box1|btn1|box2|btn2|box3|btn3|box4|btn4|box5|btn5|box6|btn6|box7|btn7|box8|btn8|box9|btn9".split(
            "|"
        ),
        0,
        {}
    )
);
