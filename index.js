let mainp = document.getElementById("main_page");
let _51 = document.getElementById("_51");
let sub_51 = document.getElementById("sub_51");

let _52 = document.getElementById("_52");
let sub_52 = document.getElementById("sub_52");

let _53 = document.getElementById("_53");
let sub_53 = document.getElementById("sub_53");

let _54 = document.getElementById("_54");
let sub_54 = document.getElementById("sub_54");

let _55 = document.getElementById("_55");
let sub_55 = document.getElementById("sub_55");

let _56 = document.getElementById("_56");
let sub_56 = document.getElementById("sub_56");

function changeTo(num) {
    document.getElementById("html").style.overflowX = "hidden";
    if (num === 51) {
        mainp.style.display = "none";
        _51.style.display = "block";
    }
    if (num === 52) {
        mainp.style.display = "none";
        _52.style.display = "block";
    }
    if (num === 53) {
        mainp.style.display = "none";
        _53.style.display = "block";
    }
    if (num === 54) {
        mainp.style.display = "none";
        _54.style.display = "block";
    }
    if (num === 55) {
        mainp.style.display = "none";
        _55.style.display = "block";
    }
    if (num === 56) {
        mainp.style.display = "none";
        _56.style.display = "block";
    }
}

function submit(num) {
    document.getElementById("html").style.overflowX = "hidden";
    if (num === 51) {
        _51.style.display = "none";
        sub_51.style.display = "block";
    }
    if (num === 52) {
        _52.style.display = "none";
        sub_52.style.display = "block";
    }
    if (num === 53) {
        _53.style.display = "none";
        sub_53.style.display = "block";
    }
    if (num === 54) {
        _54.style.display = "none";
        sub_54.style.display = "block";
    }
    if (num === 55) {
        _55.style.display = "none";
        sub_55.style.display = "block";
    }
    if (num === 56) {
        _56.style.display = "none";
        sub_56.style.display = "block";
    }
}

function check(num) {
    var cont_res = document.getElementById("cont_result");
    var res = document.getElementById("result");

    var totalQuestions = 0;
    var right = 0;
    var wrong = 0;

    cont_res.style.display = "block";
    res.style.display = "flex";
    res.style.flexDirection = "column";

    if (num === 51) {
        var _1and1 = document.getElementById("sub_51_1_1").options.selectedIndex;
        var _1and2 = document.getElementById("sub_51_1_2").options.selectedIndex;
        var _1and3 = document.getElementById("sub_51_1_3").options.selectedIndex;
        var _1and4 = document.getElementById("sub_51_1_4").options.selectedIndex;

        var _2and1 = document.getElementById("sub_51_2_1").checked;
        var _2and2 = document.getElementById("sub_51_2_2").checked;
        var _2and3 = document.getElementById("sub_51_2_3").checked;
        var _2and4 = document.getElementById("sub_51_2_4").checked;
        var _2and5 = document.getElementById("sub_51_2_5").checked;

        if (_1and1 === 2) {
            right++;
        } else wrong++;
        if (_1and2 === 0) {
            right++;
        } else wrong++;
        if (_1and3 === 3) {
            right++;
        } else wrong++;
        if (_1and4 === 1) {
            right++;
        } else wrong++;

        if (_2and1) {
            right++;
        } else wrong++;
        if (_2and2) {
            right++;
        } else wrong++;
        if (_2and3) {
            right++;
        } else wrong++;
        if (_2and4 == false) {
            right++;
        } else wrong++;
        if (_2and5) {
            right++;
        } else wrong++;
    }

    if (num === 52) {
        var _1and1 = document.getElementById("sub_52_1_1").options.selectedIndex;
        var _1and2 = document.getElementById("sub_52_1_2").options.selectedIndex;
        var _1and3 = document.getElementById("sub_52_1_3").options.selectedIndex;

        var _2and1 = document.getElementById("sub_52_2_1").checked;
        var _2and2 = document.getElementById("sub_52_2_2").checked;
        var _2and3 = document.getElementById("sub_52_2_3").checked;
        var _2and4 = document.getElementById("sub_52_2_4").checked;

        if (_1and1 === 2) {
            right++;
        } else wrong++;
        if (_1and2 === 1) {
            right++;
        } else wrong++;
        if (_1and3 === 3) {
            right++;
        } else wrong++;

        if (_2and1) {
            right++;
        } else wrong++;
        if (_2and2 == false) {
            right++;
        } else wrong++;
        if (_2and3 == false) {
            right++;
        } else wrong++;
        if (_2and4) {
            right++;
        } else wrong++;
    }

    if (num === 53) {
        var _1and1 = document.getElementById("sub_53_1_1").options.selectedIndex;
        var _1and2 = document.getElementById("sub_53_1_2").options.selectedIndex;
        var _1and3 = document.getElementById("sub_53_1_3").options.selectedIndex;
        var _1and4 = document.getElementById("sub_53_1_4").options.selectedIndex;
        var _1and5 = document.getElementById("sub_53_1_5").options.selectedIndex;

        var _2and1 = document.getElementById("sub_53_2_1").checked;
        var _2and2 = document.getElementById("sub_53_2_2").checked;
        var _2and3 = document.getElementById("sub_53_2_3").checked;
        var _2and4 = document.getElementById("sub_53_2_4").checked;

        if (_1and1 === 1 || _1and1 === 3) {
            right++;
        } else wrong++;
        if (_1and2 === 0) {
            right++;
        } else wrong++;
        if (_1and3 === 1) {
            right++;
        } else wrong++;
        if (_1and4 === 3) {
            right++;
        } else wrong++;
        if (_1and5 === 2) {
            right++;
        } else wrong++;

        if (_2and1) {
            right++;
        } else wrong++;
        if (_2and2 == false) {
            right++;
        } else wrong++;
        if (_2and3) {
            right++;
        } else wrong++;
        if (_2and4 == false) {
            right++;
        } else wrong++;
    }


    if (num === 54) {
        var _1and1 = document.getElementById("sub_54_1_1").options.selectedIndex;
        var _1and2 = document.getElementById("sub_54_1_2").options.selectedIndex;
        var _1and3 = document.getElementById("sub_54_1_3").options.selectedIndex;

        var _2and1 = document.getElementById("sub_54_2_1").checked;
        var _2and2 = document.getElementById("sub_54_2_2").checked;
        var _2and3 = document.getElementById("sub_54_2_3").checked;
        var _2and4 = document.getElementById("sub_54_2_4").checked;

        if (_1and1 === 2) {
            right++;
        } else wrong++;
        if (_1and2 === 0) {
            right++;
        } else wrong++;
        if (_1and3 === 1) {
            right++;
        } else wrong++;

        if (_2and1) {
            right++;
        } else wrong++;
        if (_2and2 == false) {
            right++;
        } else wrong++;
        if (_2and3) {
            right++;
        } else wrong++;
        if (_2and4) {
            right++;
        } else wrong++;
    }

    if (num === 55) {
        var _1and1 = document.getElementById("sub_55_1_1").options.selectedIndex;
        var _1and2 = document.getElementById("sub_55_1_2").options.selectedIndex;
        var _1and3 = document.getElementById("sub_55_1_3").options.selectedIndex;

        var _2and1 = document.getElementById("sub_55_2_1").checked;
        var _2and2 = document.getElementById("sub_55_2_2").checked;
        var _2and3 = document.getElementById("sub_55_2_3").checked;
        var _2and4 = document.getElementById("sub_55_2_4").checked;

        if (_1and1 === 0) {
            right++;
        } else wrong++;
        if (_1and2 === 1) {
            right++;
        } else wrong++;
        if (_1and3 === 2) {
            right++;
        } else wrong++;

        if (_2and1 == false) {
            right++;
        } else wrong++;
        if (_2and2) {
            right++;
        } else wrong++;
        if (_2and3) {
            right++;
        } else wrong++;
        if (_2and4) {
            right++;
        } else wrong++;
    }

    if (num === 56) {
        var _1and1 = document.getElementById("sub_56_1_1").options.selectedIndex;
        var _1and2 = document.getElementById("sub_56_1_2").options.selectedIndex;
        var _1and3 = document.getElementById("sub_56_1_3").options.selectedIndex;

        var _2and1 = document.getElementById("sub_56_2_1").checked;
        var _2and2 = document.getElementById("sub_56_2_2").checked;
        var _2and3 = document.getElementById("sub_56_2_3").checked;
        var _2and4 = document.getElementById("sub_56_2_4").checked;

        if (_1and1 === 2) {
            right++;
        } else wrong++;
        if (_1and2 === 0) {
            right++;
        } else wrong++;
        if (_1and3 === 1) {
            right++;
        } else wrong++;

        if (_2and1 == false) {
            right++;
        } else wrong++;
        if (_2and2) {
            right++;
        } else wrong++;
        if (_2and3) {
            right++;
        } else wrong++;
        if (_2and4) {
            right++;
        } else wrong++;
    }


    totalQuestions = right + wrong;

    var result_all = document.getElementById("result_all");
    var result_complete = document.getElementById("result_complete");
    var result_failed = document.getElementById("result_failed");

    result_all.innerHTML = totalQuestions;
    result_complete.innerHTML = right;
    result_failed.innerHTML = wrong;
}

function tryagain() {
    document.getElementById("cont_result").style.display = "none";
    document.getElementById("result").style.display = "none";

    //result_51
    document.getElementById("sub_51_1_1").options[0].selected = true;
    document.getElementById("sub_51_1_2").options[0].selected = true;
    document.getElementById("sub_51_1_3").options[0].selected = true;
    document.getElementById("sub_51_1_4").options[0].selected = true;

    document.getElementById("sub_51_2_1").checked = false;
    document.getElementById("sub_51_2_2").checked = false;
    document.getElementById("sub_51_2_3").checked = false;
    document.getElementById("sub_51_2_4").checked = false;
    document.getElementById("sub_51_2_5").checked = false;


    //result_52
    document.getElementById("sub_52_1_1").options[0].selected = true;
    document.getElementById("sub_52_1_2").options[0].selected = true;
    document.getElementById("sub_52_1_3").options[0].selected = true;

    document.getElementById("sub_52_2_1").checked = false;
    document.getElementById("sub_52_2_2").checked = false;
    document.getElementById("sub_52_2_3").checked = false;
    document.getElementById("sub_52_2_4").checked = false;

    //result_53
    document.getElementById("sub_53_1_1").options[0].selected = true;
    document.getElementById("sub_53_1_2").options[0].selected = true;
    document.getElementById("sub_53_1_3").options[0].selected = true;
    document.getElementById("sub_53_1_4").options[0].selected = true;
    document.getElementById("sub_53_1_5").options[0].selected = true;

    document.getElementById("sub_53_2_1").checked = false;
    document.getElementById("sub_53_2_2").checked = false;
    document.getElementById("sub_53_2_3").checked = false;
    document.getElementById("sub_53_2_4").checked = false;


    //result_54
    document.getElementById("sub_54_1_1").options[0].selected = true;
    document.getElementById("sub_54_1_2").options[0].selected = true;
    document.getElementById("sub_54_1_3").options[0].selected = true;

    document.getElementById("sub_54_2_1").checked = false;
    document.getElementById("sub_54_2_2").checked = false;
    document.getElementById("sub_54_2_3").checked = false;
    document.getElementById("sub_54_2_4").checked = false;

    //result_55
    document.getElementById("sub_55_1_1").options[0].selected = true;
    document.getElementById("sub_55_1_2").options[0].selected = true;
    document.getElementById("sub_55_1_3").options[0].selected = true;

    document.getElementById("sub_55_2_1").checked = false;
    document.getElementById("sub_55_2_2").checked = false;
    document.getElementById("sub_55_2_3").checked = false;
    document.getElementById("sub_55_2_4").checked = false;

    //result_56
    document.getElementById("sub_56_1_1").options[0].selected = true;
    document.getElementById("sub_56_1_2").options[0].selected = true;
    document.getElementById("sub_56_1_3").options[0].selected = true;

    document.getElementById("sub_56_2_1").checked = false;
    document.getElementById("sub_56_2_2").checked = false;
    document.getElementById("sub_56_2_3").checked = false;
    document.getElementById("sub_56_2_4").checked = false;
}

function restartPage() {
    tryagain();
    location.reload();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function openMenu() {
    scrollTo(0, 0);
    document.getElementById("html").style.overflowX = "hidden";
    document.getElementById("html").style.overflowY = "hidden";
    document.getElementById("side_menu_background").style.display = "block";
    document.getElementById("side_menu").style.display = "block";
    document.getElementById("side_menu").style.transition = "linear .1s transform";
    setTimeout(() => { document.getElementById("side_menu").style.transform = "translate(0px, 0px)"; }, 10);

    document.getElementById("hrs").style.display = "none";
    document.getElementById("header_nav header_nav--close").style.display = "block";
}

function closeMenu() {
    scrollTo(0, 0);
    document.getElementById("html").style.overflowX = "hidden";
    document.getElementById("side_menu").style.transform = "translate(1500px, 0px)";
    setTimeout(() => { 
        document.getElementById("html").style.overflowY = "visible";
        document.getElementById("side_menu_background").style.display = "none";
        document.getElementById("side_menu").style.display = "none";
        document.getElementById("hrs").style.display = "block";
        document.getElementById("header_nav header_nav--close").style.display = "none";
     }, 100);

    
}
window.onload = function() {
    window.scrollTo(0,0);
    document.getElementById("html").style.overflowX = "hidden";
}
