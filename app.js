//core event loop

var Db = require('mongodb').Db,
    ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    bodyParser = require('body-parser'),
    nunjucks = require('nunjucks'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert'),
    QuestionDAO = require('./questions').QuestionDAO,
    LOLDAO = require('./lols').LOLDAO,
    UserDAO = require('./users').UserDAO,
    FlanksDAO = require('./flanks').FlanksDAO,

// Set up express
app = express();
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));

var env = nunjucks.configure('views', {
    autoescape: true,


    express: app
});

var nunjucksDate = require('nunjucks-date');
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');
env.addFilter("date", nunjucksDate);

var db = new Db('newsflanks', new Server('192.168.1.5', 27017));


db.open(function (err, db) {

    "use strict";
    console.log("Successfully connected to server");
    assert.equal(null, err);

    function errorHandler(err, req, res, next) {
        console.error(err.message);
        console.error(err.stack);
        res.status(500).render('error_template', { error: err });
    }

    var questions = new QuestionDAO(db);
    var lols = new LOLDAO(db);
    var users = new UserDAO(db);
    var flanks = new FlanksDAO(db);

    // var router = express.Router();

    app.get('/', function (req, res, next) {
        "use strict";
        var visitor_code = 6;
        questions.get_default_question(function (quest) {
            if ((quest.mm !== "") && (quest.text !== "") && (quest.text2 !== "") && (quest.text3 !== "") && (quest.text4 !== "")) {
                res.render('home', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm !== "") && (quest.text !== "") && (quest.text2 !== "") && (quest.text3 !== "") && (quest.text4 === "")) {
                res.render('home7', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm !== "") && (quest.text !== "") && (quest.text2 !== "") && (quest.text3 === "") && (quest.text4 === "")) {
                res.render('home13', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm !== "") && (quest.text !== "") && (quest.text2 === "") && (quest.text3 === "") && (quest.text4 === "")) {
                res.render('home19', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm !== "") && (quest.text === "") && (quest.text2 === "") && (quest.text3 === "") && (quest.text4 === "")) {
                res.render('home25', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm === "") && (quest.text !== "") && (quest.text2 !== "") && (quest.text3 !== "") && (quest.text4 !== "")) {
                res.render('home31', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                res.render('home37', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home43', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home49', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home55', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    head_win_size: quest.head_win_y,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            };
        });
    });

    app.get('/new_question/:frame/:impression/:visitor/:url_text', function (req, res, next) {   
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        var new_question_frame = parseInt(req.params.frame);
        var new_question_impression = parseInt(req.params.impression);
        visitor_code = 3;
        var valid_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            valid_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || valid_visitor) { //valid visitor,user
                    questions.check_valid_question(new_question_frame, new_question_impression, function (quest_valid) { //matched
                        if (quest_valid) {  //valid question
                            if ((visitor_code > -1) && (visitor_code < 10)) { //matched
                                questions.get_user_question2(new_question_frame, new_question_impression, function (quest) {
                                    if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home81', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home82', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home83', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home84', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home85', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home86', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home87', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home88', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home89', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home90', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    };
                                });
                            }
                            else { //handles user
                                questions.get_user_question2(new_question_frame, new_question_impression, function (user_quest) {
                                    users.get_user_answer_to_question(visitor_code, user_quest._id, function (user_answer) { // handle case where user might not have answered
                                        if (user_answer == 0) {
                                            user_answer_text = "Yes"
                                        };
                                        if (user_answer == 1) {
                                            user_answer_text = "No"
                                        };
                                        if (user_answer == 2) {
                                            user_answer_text = "No opinion"
                                        };
                                        if (user_answer == 3) {
                                            user_answer_text = "Saw question but didn't answer"
                                        };
                                        if (user_answer == -1) {
                                            user_answer_text = "You haven't provided an answer to this question in any past visits to the site";
                                        };
                                        if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home61', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home62', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home63', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home64', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home65', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home66', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home67', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home68', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home69', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home70', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        };
                                    });
                                });
                            };
                        }
                        else { //render default
                            visitor_code = 0;
                            var quest;
                            questions.get_default_question(function (quest) {
                                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                    res.render('home', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                    res.render('home7', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home13', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home19', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home25', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                    res.render('home31', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                    res.render('home37', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home43', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home49', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home55', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                };
                            });
                        };
                    })
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                }
            });
         }
         else {//some other garbage
                    var visitor_code = 2;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
               });
         };
    });

    app.get('/next_question/:frame/:impression/:visitor/:url_text', function (req, res, next) {
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        var new_question_frame = parseInt(req.params.frame);
        var new_question_impression = parseInt(req.params.impression);
        var valid_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            valid_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || valid_visitor) { //valid visitor,user
                    questions.check_valid_question(new_question_frame, new_question_impression, function (quest_valid) { //matched
                        if (quest_valid) {  //valid question
                            if ((visitor_code > -1) && (visitor_code < 10)) { //matched
                                questions.get_user_question2(new_question_frame, new_question_impression, function (quest) {
                                    if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home81', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home82', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home83', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home84', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home85', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home86', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home87', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home88', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home89', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home90', {
                                            question: quest._id, //passing in question ID
                                            usercode: visitor_code,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion']
                                        });
                                    };
                                });
                            }
                            else { //handles user
                                questions.get_user_question2(new_question_frame, new_question_impression, function (user_quest) {
                                    users.get_user_answer_to_question(visitor_code, user_quest._id, function (user_answer) { // handle case where user might not have answered
                                        if (user_answer == 0) {
                                            user_answer_text = "Yes"
                                        };
                                        if (user_answer == 1) {
                                            user_answer_text = "No"
                                        };
                                        if (user_answer == 2) {
                                            user_answer_text = "No opinion"
                                        };
                                        if (user_answer == 3) {
                                            user_answer_text = "Saw question but didn't answer"
                                        };
                                        if (user_answer == -1) {
                                            user_answer_text = "You haven't provided an answer to this question in any past visits to the site";
                                        };
                                        if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home61', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home62', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home63', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home64', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home65', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home66', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home67', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home68', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home69', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home70', {
                                                question: user_quest._id, //passing in question ID
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        };
                                    });
                                });
                            };
                        }
                        else { //render default
                            visitor_code = 0;
                            var quest;
                            questions.get_default_question(function (quest) {
                                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                    res.render('home', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                    res.render('home7', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home13', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home19', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home25', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                    res.render('home31', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                    res.render('home37', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home43', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home49', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home55', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                };
                            });
                        };
                    })
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                }
            });
        }
        else {//some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        var user_answer_text = "";
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    var quest;
                    if (visitor_code < 10) {
                        if ((visitor_code == 0) || (visitor_code == 4)) {
                            user_answer_text = "Yes"
                        };
                        if ((visitor_code == 1) || (visitor_code == 5)) {
                            user_answer_text = "No"
                        };
                        if (visitor_code == 2) {
                            user_answer_text = "No opinion"
                        };
                        if (visitor_code == 3) {
                            user_answer_text = "Saw question but didn't answer"
                        };
                        questions.get_default_question(function (quest) {
                            if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home2', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home8', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home14', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home20', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home26', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home32', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home38', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home44', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home50', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home56', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            };
                        });
                    }
                    else if (visitor_code > 9) {
                        users.get_current_user_question(visitor_code, function (current_quest) {
                            users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                if (user_answer == 0) {
                                    user_answer_text = "Yes"
                                };
                                if (user_answer == 1) {
                                    user_answer_text = "No"
                                };
                                if (user_answer == 2) {
                                    user_answer_text = "No opinion"
                                };
                                if (user_answer == 3) {
                                    user_answer_text = "Saw question but didn't answer"
                                };
                                questions.get_user_question(current_quest.current_question, function (user_quest) {
                                    if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                        res.render('home2', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                        res.render('home8', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home14', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home20', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home26', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                        res.render('home32', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                        res.render('home38', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home44', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home50', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home56', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    };
                                });
                            });
                        });
                    }
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                }
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/home/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        var user_answer_text = "";
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        //templates are currently hardcoded to send in 3 but should send in contents of window.name; then give visitor message about current answer
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    var quest;
                    if (visitor_code < 10) {
                         questions.get_default_question(function (quest) {
                            if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home111', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home112', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home113', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home114', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home115', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home116', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home117', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home118', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home119', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home120', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            };
                        });
                    }
                    else if (visitor_code > 9) {
                        //error -- a valid user ID was entered by this API is only for visitors
                    }
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                }
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/:frame/:impression/:visitor/:url_text', function (req, res, next) { //new current-todays?
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        var user_answer_text = "";
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    var quest;
                    if (visitor_code < 10) { //currently this path is not used
                        if ((visitor_code == 0) || (visitor_code == 4)) {
                            user_answer_text = "Yes"
                        };
                        if ((visitor_code == 1) || (visitor_code == 5)) {
                            user_answer_text = "No"
                        };
                        if (visitor_code == 2) {
                            user_answer_text = "No opinion"
                        };
                        if (visitor_code == 3) {
                            user_answer_text = "Saw question but didn't answer"
                        };
                        questions.get_default_question(function (quest) {
                            if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home2', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home8', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home14', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home20', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home26', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home32', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home38', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home44', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home50', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home56', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            };
                        });
                    }
                    else if (visitor_code > 9) {
                        users.get_current_user_question(visitor_code, function (current_quest) {
                            users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                if (user_answer == 0) {
                                    user_answer_text = "Yes"
                                };
                                if (user_answer == 1) {
                                    user_answer_text = "No"
                                };
                                if (user_answer == 2) {
                                    user_answer_text = "No opinion"
                                };
                                if (user_answer == 3) {
                                    user_answer_text = "Saw question but didn't answer"
                                };
                                questions.get_user_question(current_quest.current_question, function (user_quest) {
                                    if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                        res.render('home2', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                        res.render('home8', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home14', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home20', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home26', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                        res.render('home32', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                        res.render('home38', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home44', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home50', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home56', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            frame: user_quest.frame,
                                            impression: user_quest.impression,
                                            url_text: user_quest.url_text,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            head_win_size: user_quest.head_win_y,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    };
                                });
                            });
                        });
                    }
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                }
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/track/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    if (visitor_code < 10) {
                        res.render('login', {
                            usercode: visitor_code
                        });
                    }
                    else {
                        users.get_username_from_usercode(visitor_code, function (visitor_name) {
                            questions.get_question(function (quest) {
                                users.build_userimps_list(visitor_code, quest, function (userimps_list) {
                                    users.build_userresps_list(visitor_code, userimps_list, function (userresps_list) {
                                            res.render('visitor_info', {
                                                usercode: visitor_code,
                                                username: visitor_name,
                                                questions_list: userimps_list,
                                                answers_list: userresps_list
                                            });
                                        });
                                });
                            });
                        });
                    };
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 2;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.post('/logout/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        users.set_logged_in_to_logged_out(visitor_code, function (result) {
            visitor_code = 0;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        });
    });

    app.post('/username/:visitor', function (req, res, next) {
        var visitor_code = parseInt(req.params.visitor);
        var name_res = req.body.name;
        var name_res2 = req.body.name2;
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        var name_res_caps = name_res.toUpperCase();
        var name_res2_caps = name_res2.toUpperCase();
        var default_answer = req.body.code;

        if ((default_answer !== "0") && (default_answer !== "1") && (default_answer !== "2") && (default_answer !== "3") && (default_answer !== "4") && (default_answer !== "5")) {
            default_answer = "3"; //Question of day was not seen so set to seen but not answered since user will see now anyway
        };

        var answer_code = default_answer;

        if (default_answer === "4") { answer_code = "0";}
        if (default_answer === "5") { answer_code = "1";}
        if (visitor_code === 4) {
            visitor_code = 0;
        }
        else if (visitor_code === 5) {
            visitor_code = 1;
        }

        if ((name_res_caps != name_res2_caps) || (name_res.length < 1)) {
            res.render('username_no_match', {
                usercode: visitor_code
            });
        }
        else if (!re.test(name_res)) { //validate email format
            res.render('username_no_match', {
                usercode: visitor_code
            });
        }
        else {
            users.check_unique_username(name_res_caps, function (result) {
                if (name_res === " ") {//check for empty
                    result = true;
                };
                if (result === false) { //good to go
                    questions.get_default_question(function (default_question) {
                        questions.get_front_questions(function (front_quest) {
                            questions.get_user_question2(front_quest[0].frame, front_quest[0].impression, function (front_question) {
                                users.get_usercode_for_update(function (user_code) {
                                        users.write_new_user(name_res_caps, +default_answer, user_code, default_question, front_question, +answer_code, visitor_code, function (userDoc) {
                                    //vote is tallied in write_new_user
                                    users.get_challenge_question(function (quest) {
                                        res.render('good_username', {
                                            good_username: userDoc.username,
                                            usercode: userDoc.usercode,
                                            frame: default_question.frame,
                                            impression: default_question.impression,
                                            url_text: default_question.url_text,
                                            challenge_question_0: quest[0].question + "?",
                                            challenge_question_1: quest[1].question + "?",
                                            challenge_question_2: quest[2].question + "?",
                                            challenge_question_3: quest[3].question + "?",
                                            challenge_question_4: quest[4].question + "?",
                                            challenge_question_5: quest[5].question + "?",
                                            challenge_question_6: quest[6].question + "?",
                                            challenge_question_7: quest[7].question + "?",
                                            challenge_question_8: quest[8].question + "?",
                                            challenge_question_9: quest[9].question + "?",
                                            challenge_question_10: quest[10].question + "?",
                                            challenge_question_11: quest[11].question + "?",
                                            challenge_question_12: quest[12].question + "?",
                                            challenge_question_13: quest[13].question + "?",
                                            challenge_question_14: quest[14].question + "?"
                                        });
                                    });
                            });
                        });
                            });
                        });
                    });
                }
                else {
                    res.render('bad_username', {
                        bad_name: name_res,
                        usercode: visitor_code
                    });
                };
            });
        }
    });

    app.post('/challenge/:visitor', function (req, res, next) {
        "use strict";
        var user_code = parseInt(req.params.visitor);
        var quest;
        var user_answer_text = "";
        var chal_res_0 = req.body.challenge_0;
        var chal_res_1 = req.body.challenge_1;
        var chal_res_2 = req.body.challenge_2;
        var chal_res_3 = req.body.challenge_3;
        var chal_res_4 = req.body.challenge_4;
        var chal_res_5 = req.body.challenge_5;
        var chal_res_6 = req.body.challenge_6;
        var chal_res_7 = req.body.challenge_7;
        var chal_res_8 = req.body.challenge_8;
        var chal_res_9 = req.body.challenge_9;
        var chal_res_10 = req.body.challenge_10;
        var chal_res_11 = req.body.challenge_11;
        var chal_res_12 = req.body.challenge_12;
        var chal_res_13 = req.body.challenge_13;
        var chal_res_14 = req.body.challenge_14;
        if (chal_res_0 == undefined) chal_res_0 = "";
        if (chal_res_1 == undefined) chal_res_1 = "";
        if (chal_res_2 == undefined) chal_res_2 = "";
        if (chal_res_3 == undefined) chal_res_3 = "";
        if (chal_res_4 == undefined) chal_res_4 = "";
        if (chal_res_5 == undefined) chal_res_5 = "";
        if (chal_res_6 == undefined) chal_res_6 = "";
        if (chal_res_7 == undefined) chal_res_7 = "";
        if (chal_res_8 == undefined) chal_res_8 = "";
        if (chal_res_9 == undefined) chal_res_9 = "";
        if (chal_res_10 == undefined) chal_res_10 = "";
        if (chal_res_11 == undefined) chal_res_11 = "";
        if (chal_res_12 == undefined) chal_res_12 = "";
        if (chal_res_13 == undefined) chal_res_13 = "";
        if (chal_res_14 == undefined) chal_res_14 = "";
        users.check_challenge_exists(user_code, function (challenge_exists) {
            if (challenge_exists === false) {
                users.write_user_challenge(user_code, chal_res_0, chal_res_1, chal_res_2, chal_res_3, chal_res_4, chal_res_5, chal_res_6, chal_res_7, chal_res_8, chal_res_9, chal_res_10, chal_res_11, chal_res_12, chal_res_13, chal_res_14, function (visitor_code) {
                    //registered user
                    users.write_challenge_exists(user_code, function (challenge_exists_written) {
                        users.get_current_user_question(user_code, function (current_quest) {
                            users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                if (user_answer == 0) {
                                    user_answer_text = "Yes"
                                };
                                if (user_answer == 1) {
                                    user_answer_text = "No"
                                };
                                if (user_answer == 2) {
                                    user_answer_text = "No opinion"
                                };
                                if (user_answer == 3) {
                                    user_answer_text = "Saw question but didn't answer"
                                };
                                questions.get_user_question(current_quest.current_question, function (quest) {
                                    if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home6', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home12', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home18', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home24', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home30', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home36', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home42', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home48', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home54', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home60', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            frame: quest.frame,
                                            impression: quest.impression,
                                            url_text: quest.url_text,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            head_win_size: quest.head_win_y,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    };
                                });
                            });
                        });
                    });
                });
            }
            else { //this code should never get executed
                users.get_current_user_question(user_code, function (current_quest) {
                    users.get_user_answer_to_question_dont_set_current(user_code, current_quest.current_question, function (user_answer) {
                        if (user_answer == 0) {
                            user_answer_text = "Yes"
                        };
                        if (user_answer == 1) {
                            user_answer_text = "No"
                        };
                        if (user_answer == 2) {
                            user_answer_text = "No opinion"
                        };
                        if (user_answer == 3) {
                            user_answer_text = "Saw question but didn't answer"
                        };
                        questions.get_user_question(current_quest.current_question, function (quest) {
                            if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home6', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home12', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home18', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home24', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home30', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home36', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home42', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home48', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home54', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home60', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    head_win_size: quest.head_win_y,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            };
                        });
                    });
                });
            }
        });
    });

    app.post('/links/:frame/:impression/:visitor/:url_text', function (req, res, next) {
        var links_res = req.body.answer;
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        var prev_answer = req.body.code;
        if (typeof links_res == 'undefined') {
            var answer = "3";
            if (visitor_code < 10) {
                questions.get_default_question(function (quest) {
                    if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home3', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home9', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home15', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home21', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home27', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home33', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home39', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home45', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home51', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home57', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    };
                });
            }
            else {
                users.update_user_lol_state(visitor_code, 3, function (result) {
                    users.get_current_user_question(visitor_code, function (current_quest) {
                        questions.get_user_question(current_quest.current_question, function (user_quest) {
                            if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                res.render('home3', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                res.render('home9', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home15', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home21', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home27', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                res.render('home33', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                res.render('home39', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home45', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home51', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home57', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    frame: user_quest.frame,
                                    impression: user_quest.impression,
                                    url_text: user_quest.url_text,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    head_win_size: user_quest.head_win_y,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            };
                        });
                    });
                });
            };
        }
        else if (links_res == 'yes') {
            if (visitor_code < 10) {
                questions.get_default_question(function (quest) {
                    if ((prev_answer === "0") || (prev_answer === "4")) {
                        lols.get_lol(quest.frame, quest.impression, function (links) {
                            res.render('lol', {
                                usercode: visitor_code,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                top_question: quest,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        });
                    }
                    else if ((prev_answer === "1") || (prev_answer === "5")) {
                        questions.subtract_no_vote2(quest._id, function (quest) {
                            questions.add_yes_vote2(quest._id, function (quest) {
                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                    res.render('lol', {
                                        usercode: visitor_code,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        top_question: quest,
                                        yes_votes: quest.yes_visitor,
                                        no_votes: quest.no_visitor,
                                        link_list: links,
                                        x: quest.mm_yes_x,
                                        y: quest.mm_yes_y,
                                        file: quest.mm_file_yes,
                                        mm_win_size: quest.mm_win_yes_y
                                    });
                                });
                            });
                        });
                    }
                    else if ((prev_answer === "2") || (prev_answer === "3")) {
                        questions.add_yes_vote2(quest._id, function (quest) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol', {
                                    usercode: visitor_code,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    top_question: quest,
                                    yes_votes: quest.yes_visitor,
                                    no_votes: quest.no_visitor,
                                    link_list: links,
                                    x: quest.mm_yes_x,
                                    y: quest.mm_yes_y,
                                    file: quest.mm_file_yes,
                                    mm_win_size: quest.mm_win_yes_y
                                });
                            });
                        });
                    }
                    else { } //error
                });
            }
            else { //registered user
                //write userimps
                users.get_current_user_question(visitor_code, function (question_id) {
                    questions.get_user_question(question_id.current_question, function (quest) {
                            users.add_to_imps_if_not_present(visitor_code, question_id, function (result) {
                                users.get_current_user_question(visitor_code, function (question_id) {
                                    questions.cancel_existing_vote(quest, question_id, function (result) {
                                        questions.get_user_question(question_id.current_question, function (quest) {
                                            users.update_user_lol_state_and_vote_status(visitor_code, 0, question_id.current_question, function (result) {
                                                users.get_current_user_question(visitor_code, function (question_id) {
                                                    questions.add_yes_vote(quest._id, function (result) {
                                                        questions.get_user_question(question_id.current_question, function (quest) {
                                                questions.get_yes_votes(quest._id, function (yes_vote) {
                                                    questions.get_no_votes(quest._id, function (no_vote) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol', {
                                                                    usercode: visitor_code,
                                                                    previous_answer: prev_answer,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: yes_vote,
                                                                    no_votes: no_vote,
                                                                    link_list: links,
                                                                    x: quest.mm_yes_x,
                                                                    y: quest.mm_yes_y,
                                                                    file: quest.mm_file_yes,
                                                                    mm_win_size: quest.mm_win_yes_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                 });
                                               });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        }
        else if (links_res == 'no') {
            if (visitor_code < 10) {
                questions.get_default_question(function (quest) {
                    if ((prev_answer === "1") || (prev_answer === "5")) {
                        lols.get_lol(quest.frame, quest.impression, function (links) {
                            res.render('lol2', {
                                usercode: visitor_code,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                top_question: quest,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_no_x,
                                y: quest.mm_no_y,
                                file: quest.mm_file_no,
                                mm_win_size: quest.mm_win_no_y
                            });
                        });
                    }
                    else if ((prev_answer === "0") || (prev_answer === "4")) {
                        questions.subtract_yes_vote2(quest._id, function (quest) {
                            questions.add_no_vote2(quest._id, function (quest) {
                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                    res.render('lol2', {
                                        usercode: visitor_code,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        top_question: quest,
                                        yes_votes: quest.yes_visitor,
                                        no_votes: quest.no_visitor,
                                        link_list: links,
                                        x: quest.mm_no_x,
                                        y: quest.mm_no_y,
                                        file: quest.mm_file_no,
                                        mm_win_size: quest.mm_win_no_y
                                    });
                                });
                            });
                        });
                    }
                    else if ((prev_answer === "2") || (prev_answer === "3")) {
                        questions.add_no_vote2(quest._id, function (quest) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol2', {
                                    usercode: visitor_code,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    top_question: quest,
                                    yes_votes: quest.yes_visitor,
                                    no_votes: quest.no_visitor,
                                    link_list: links,
                                    x: quest.mm_no_x,
                                    y: quest.mm_no_y,
                                    file: quest.mm_file_no,
                                    mm_win_size: quest.mm_win_no_y
                                });
                            });
                        });
                    }
                    else { } //error
                });
             }
            else { //registered user
                users.get_current_user_question(visitor_code, function (question_id) {
                    questions.get_user_question(question_id.current_question, function (quest) {
                        users.add_to_imps_if_not_present(visitor_code, question_id, function (result) {
                                users.get_current_user_question(visitor_code, function (question_id) {
                                    questions.cancel_existing_vote(quest, question_id, function (result) {
                                        questions.get_user_question(question_id.current_question, function (quest) {
                                            users.update_user_lol_state_and_vote_status(visitor_code, 1, question_id.current_question, function (result) {
                                                users.get_current_user_question(visitor_code, function (question_id) {
                                                    questions.add_no_vote(quest._id, function (result) {
                                                        questions.get_user_question(question_id.current_question, function (quest) {
                                                            questions.get_no_votes(quest._id, function (no_vote) {
                                                                questions.get_yes_votes(quest._id, function (yes_vote) {
                                                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                            res.render('lol2', {
                                                                                usercode: visitor_code,
                                                                                previous_answer: prev_answer,
                                                                                top_question: quest,
                                                                                frame: quest.frame,
                                                                                impression: quest.impression,
                                                                                url_text: quest.url_text,
                                                                                yes_votes: yes_vote,
                                                                                no_votes: no_vote,
                                                                                link_list: links,
                                                                                x: quest.mm_no_x,
                                                                                y: quest.mm_no_y,
                                                                                file: quest.mm_file_no,
                                                                                mm_win_size: quest.mm_win_no_y
                                                                            });
                                                                        });
                                                                });
                                                            });
                                                        });
                                                    });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        }
        else if (links_res == 'no opinion') {
            if (visitor_code < 10) {
                questions.get_default_question(function (quest) {
                    if ((prev_answer === "2") || (prev_answer === "3")) {
                        lols.get_lol(quest.frame, quest.impression, function (links) {
                            res.render('lol3', {
                                usercode: visitor_code,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                top_question: quest,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y
                            });
                        });
                    }
                    else if ((prev_answer === "1") || (prev_answer === "5")) {
                        questions.subtract_no_vote2(quest._id, function (quest) {
                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                    res.render('lol3', {
                                        usercode: visitor_code,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        top_question: quest,
                                        yes_votes: quest.yes_visitor,
                                        no_votes: quest.no_visitor,
                                        link_list: links,
                                        mm_win_size: quest.mm_win_all_y
                                    });
                                });
                        });
                    }
                    else if ((prev_answer === "0") || (prev_answer === "4")) {
                        questions.subtract_yes_vote2(quest._id, function (quest) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol3', {
                                    usercode: visitor_code,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    top_question: quest,
                                    yes_votes: quest.yes_visitor,
                                    no_votes: quest.no_visitor,
                                    link_list: links,
                                    mm_win_size: quest.mm_win_all_y
                                });
                            });
                        });
                    }
                    else { } //error
                });
            }
            else { //registered user
                //write userimps
                users.get_current_user_question(visitor_code, function (question_id) {
                    questions.get_user_question(question_id.current_question, function (quest) {
                            users.add_to_imps_if_not_present(visitor_code, question_id, function (result) {
                                users.get_current_user_question(visitor_code, function (question_id) {
                                    questions.cancel_existing_vote(quest, question_id, function (result) {
                                        questions.get_user_question(question_id.current_question, function (quest) {
                                            users.update_user_lol_state_and_vote_status(visitor_code, 2, question_id.current_question, function (result) {
                                                users.get_current_user_question(visitor_code, function (question_id) {
                                                    questions.get_yes_votes(quest._id, function (yes_vote) {
                                                        questions.get_no_votes(quest._id, function (no_vote) {
                                                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                    res.render('lol3', {
                                                                        usercode: visitor_code,
                                                                        top_question: quest,
                                                                        frame: quest.frame,
                                                                        impression: quest.impression,
                                                                        url_text: quest.url_text,
                                                                        yes_votes: yes_vote,
                                                                        no_votes: no_vote,
                                                                        link_list: links,
                                                                        mm_win_size: quest.mm_win_all_y
                                                                    });
                                                                });
                                                            });
                                                        });
                                                });
                                            });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        }
        else { //"Next Question" selected
            // if usercode < 10, pop message that you have to register to get more questions
            if (visitor_code < 10) {
                if ((prev_answer === "0") || (prev_answer === "4")) {
                    user_answer_text = "Yes";
                };
                if ((prev_answer === "1") || (prev_answer === "5")) {
                    user_answer_text = "No";
                };
                if (prev_answer === "2") {
                    user_answer_text = "No opinion";
                };
                if (prev_answer === "3") {
                    user_answer_text = "Saw question but didn't answer";
                };
                questions.get_default_question(function (quest) {
                    if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home5', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home11', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home17', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home23', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home29', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home35', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home41', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home47', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home53', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home59', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            head_win_size: quest.head_win_y,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    };
                });
            }
            else {//user
                //check sequence field
                users.get_sequence_number(visitor_code, function (metaframe_id) {
                    if (metaframe_id === 0) {
                        users.get_userimps_array(visitor_code, function (userimps_array) {
                            questions.get_question(function (quest) {
                                if (quest.length == userimps_array[0].impressions_array.length) { //user already answered all questions
                                    users.get_current_user_question(visitor_code, function (current_quest) {
                                        users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                            if (user_answer === 0) {
                                                user_answer_text = "Yes"
                                            };
                                            if (user_answer === 1) {
                                                user_answer_text = "No"
                                            };
                                            if (user_answer === 2) {
                                                user_answer_text = "No opinion"
                                            };
                                            if (user_answer === 3) {
                                                user_answer_text = "Saw question but didn't answer"
                                            };
                                            questions.get_user_question(current_quest.current_question, function (user_quest) {
                                                if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                    res.render('home4', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                    res.render('home10', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                    res.render('home16', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                    res.render('home22', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                    res.render('home28', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                    res.render('home34', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                    res.render('home40', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                    res.render('home46', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                    res.render('home52', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                    res.render('home58', {
                                                        usercode: visitor_code,
                                                        response: user_answer_text,
                                                        animated_gif: user_quest.mm,
                                                        frame: user_quest.frame,
                                                        impression: user_quest.impression,
                                                        url_text: user_quest.url_text,
                                                        quote: user_quest.text,
                                                        quote2: user_quest.text2,
                                                        quote3: user_quest.text3,
                                                        quote4: user_quest.text4,
                                                        head_win_size: user_quest.head_win_y,
                                                        top_question: user_quest.question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                };
                                            });
                                        });
                                    });
                                }
                                else { //get next question
                                    var found = 1; //yes
                                    var question_index;
                                    for (var i = 0; i < quest.length; i++) {
                                        if (found == 1) {
                                            found = 0;
                                        }
                                        else {
                                            //found = 0
                                            break;
                                        };
                                        for (var j = 0; j < userimps_array[0].impressions_array.length; j++) {
                                            if (quest[i]._id.equals(userimps_array[0].impressions_array[j].question)) { //== compares with call by reference so you have to use this
                                                found = 1;
                                                break;
                                            }
                                            else {
                                                question_index = i;
                                            };
                                        };
                                    };
                                    users.update_user_lol_state(visitor_code, 3, function (result) {
                                        users.update_current_question(visitor_code, quest[question_index], function (result) {
                                            if (result = true) {
                                                if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 != "")) {
                                                    res.render('home71', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 == "")) {
                                                    res.render('home72', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                                    res.render('home73', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                                    res.render('home74', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm != "") && (quest[question_index].text == "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                                    res.render('home75', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 != "")) {
                                                    res.render('home76', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 == "")) {
                                                    res.render('home77', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                                    res.render('home78', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                                    res.render('home79', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                }
                                                else if ((quest[question_index].mm == "") && (quest[question_index].text == "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                                    res.render('home80', {
                                                        usercode: visitor_code,
                                                        animated_gif: quest[question_index].mm,
                                                        frame: quest[question_index].frame,
                                                        impression: quest[question_index].impression,
                                                        url_text: quest[question_index].url_text,
                                                        quote: quest[question_index].text,
                                                        quote2: quest[question_index].text2,
                                                        quote3: quest[question_index].text3,
                                                        quote4: quest[question_index].text4,
                                                        head_win_size: quest[question_index].head_win_y,
                                                        top_question: quest[question_index].question + "?",
                                                        choices: ['yes', 'no', 'no opinion', 'next question']
                                                    });
                                                };
                                            }
                                        })
                                    });
                                };
                            });
                        });
                    }
                    else {
                        //metaframe_id > 0
                        var user_answer_text = ""
                        var question_index = -1;
                        questions.get_question(function (quest) {
                            questions.get_sequence_questions(quest, metaframe_id, function (seq_quests) {
                                users.build_userimps_list(visitor_code, quest, function (userimps_list) {
                                    for (var i = 0; i < seq_quests.length; i++) {
                                        if (question_index != -1) {
                                            break;
                                        };
                                        question_index = i;
                                        for (var j = 0; j < userimps_list.length; j++) {
                                            if ((seq_quests[i]) === (userimps_list[j]._id)) {
                                                question_index = -1;
                                                break;
                                            }
                                        }
                                    };
                                    if (question_index === -1) { //there is no seq question not already seen
                                        users.update_sequence_number(visitor_code, 0, function (sequence_set_result) {
                                            users.get_current_user_question(visitor_code, function (current_quest) {
                                                users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                                    if (user_answer == 0) {
                                                        user_answer_text = "Yes"
                                                    };
                                                    if (user_answer == 1) {
                                                        user_answer_text = "No"
                                                    };
                                                    if (user_answer == 2) {
                                                        user_answer_text = "No opinion"
                                                    };
                                                    if (user_answer == 3) {
                                                        user_answer_text = "Saw question but didn't answer"
                                                    };
                                                    questions.get_user_question(current_quest.current_question, function (user_quest) {
                                                        if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                            res.render('home91', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                            res.render('home92', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home93', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home94', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home95', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                            res.render('home96', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                            res.render('home97', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home98', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home99', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home100', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        };
                                                    });
                                                });
                                            });
                                        });
                                    }
                                    else { //found the first seq question not seen = question_index into sequence array
                                        users.update_sequence_number(visitor_code, metaframe_id, function (sequence_set_result) {
                                            users.update_user_lol_state(visitor_code, 3, function (result) {
                                                questions.get_user_question(seq_quests[question_index], function (user_seq_quest) {
                                                    users.update_current_question(visitor_code, user_seq_quest, function (result) {
                                                        if (result = true) {
                                                            if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 != "")) {
                                                                res.render('home71', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home72', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home73', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home74', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text == "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home75', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 != "")) {
                                                                res.render('home76', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home77', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home78', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home79', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            }
                                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text == "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                                res.render('home80', {
                                                                    usercode: visitor_code,
                                                                    animated_gif: user_seq_quest.mm,
                                                                    frame: user_seq_quest.frame,
                                                                    impression: user_seq_quest.impression,
                                                                    url_text: user_seq_quest.url_text,
                                                                    quote: user_seq_quest.text,
                                                                    quote2: user_seq_quest.text2,
                                                                    quote3: user_seq_quest.text3,
                                                                    quote4: user_seq_quest.text4,
                                                                    head_win_size: user_seq_quest.head_win_y,
                                                                    top_question: user_seq_quest.question + "?",
                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                });
                                                            };
                                                        }
                                                    });
                                                });
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                });
            }
        }; //main conditional
    }); //post call

    app.post('/links2/:question/:visitor', function (req, res, next) {
        var links_res = req.body.answer;
        var visitor_code = parseInt(req.params.visitor);
        var prev_answer = visitor_code;
        var question_code = ObjectID.createFromHexString(req.params.question);
        if (typeof links_res == 'undefined') {
            var answer = "3";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { //look up question with ID
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home101', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home102', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home103', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home104', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home105', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home106', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home107', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home108', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home109', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home110', {
                        question: quest._id,
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
            });
        }
        else if (links_res == 'yes') {
            var answer = "0";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { // look up with ID
                if (prev_answer === 0) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol10', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                            user_answer: answer
                        });
                    });
                }
                else if (prev_answer === 1) {
                    questions.subtract_no_vote2(quest._id, function (quest) {
                        questions.add_yes_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol10', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                            user_answer: answer
                        });
                            });
                        });
                    });
                }
                else if (prev_answer === 2) {
                    questions.add_yes_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol10', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                            user_answer: answer
                        });
                        });
                    });
                }
                else if (prev_answer === 3) {
                    questions.add_yes_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol10', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                            user_answer: answer
                        });
                        });
                    });
                }
                else if (prev_answer === 6) { //first response
                    questions.add_yes_vote2(quest._id, function (quest) {
                        lols.get_lol(quest.frame, quest.impression, function (links) {
                            res.render('lol10', {
                                question: question_code,
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                mm_win_size: quest.mm_win_yes_y,
                                user_answer: answer
                            });
                        });
                    });
                }
                else {
                    //error
                }
            });
        }
        else if (links_res == 'no') {
            var answer = "1";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { //look up with ID
                if (prev_answer === 0) {
                    questions.subtract_yes_vote2(quest._id, function (quest) {
                        questions.add_no_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol11', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_no_x,
                            y: quest.mm_no_y,
                            file: quest.mm_file_no,
                            mm_win_size: quest.mm_win_no_y,
                            user_answer: answer
                        });
                            });
                        });
                    });
                }
                else if (prev_answer === 1) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol11', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_no_x,
                            y: quest.mm_no_y,
                            file: quest.mm_file_no,
                            mm_win_size: quest.mm_win_no_y,
                            user_answer: answer
                        });
                    });
                }
                else if (prev_answer === 2) {
                    questions.add_no_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol11', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_no_x,
                            y: quest.mm_no_y,
                            file: quest.mm_file_no,
                            mm_win_size: quest.mm_win_no_y,
                            user_answer: answer
                        });
                        });
                    });
                }
                else if (prev_answer === 3) {
                    questions.add_no_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol11', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            x: quest.mm_no_x,
                            y: quest.mm_no_y,
                            file: quest.mm_file_no,
                            mm_win_size: quest.mm_win_no_y,
                            user_answer: answer
                        });
                        });
                    });
                }
                else if (prev_answer === 6) {
                    questions.add_no_vote2(quest._id, function (quest) {
                        lols.get_lol(quest.frame, quest.impression, function (links) {
                            res.render('lol11', {
                                question: question_code,
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_no_x,
                                y: quest.mm_no_y,
                                file: quest.mm_file_no,
                                mm_win_size: quest.mm_win_no_y,
                                user_answer: answer
                            });
                        });
                    });
                }
                else {
                    //error
                }
            });
        }
        else if (links_res == 'no opinion') {
            var answer = "2";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { //look up with ID
                if (prev_answer === 0) {
                    questions.subtract_yes_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            mm_win_size: quest.mm_win_all_y,
                            user_answer: answer
                        });
                        });
                    });
                }
                else if (prev_answer === 1) {
                    questions.subtract_no_vote2(quest._id, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            mm_win_size: quest.mm_win_all_y,
                            user_answer: answer
                        });
                        });
                    });
                }
                else if (prev_answer === 2) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            mm_win_size: quest.mm_win_all_y,
                            user_answer: answer
                        });
                    });
                }
                else if (prev_answer === 3) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            mm_win_size: quest.mm_win_all_y,
                            user_answer: answer
                        });
                    });
                }
                else if (prev_answer === 6) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            link_list: links,
                            mm_win_size: quest.mm_win_all_y,
                            user_answer: answer
                        });
                    });
                }
                else {
                    //error
                }
            });
        };
    }); //post call

    app.get('/flip/:visitor/:flip_state', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var flip_code = parseInt(req.params.flip_state);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    if (new_visitor) {
                        if (flip_code === 0) {
                            questions.get_default_question(function (quest) {
                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                    res.render('lol7', { 
                                        usercode: visitor_code,
                                        top_question: quest,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        yes_votes: quest.yes_visitor,
                                        no_votes: quest.no_visitor,
                                        x: quest.mm_no_x,
                                        y: quest.mm_no_y,
                                        file: quest.mm_file_no,
                                        mm_win_size: quest.mm_win_no_y,
                                        link_list: links
                                    });
                                });
                            });
                        }
                        else if (flip_code === 1) {
                            questions.get_default_question(function (quest) {
                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                    res.render('lol6', { // no template
                                        usercode: visitor_code,
                                        top_question: quest,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        yes_votes: quest.yes_visitor,
                                        no_votes: quest.no_visitor,
                                        x: quest.mm_yes_x,
                                        y: quest.mm_yes_y,
                                        file: quest.mm_file_yes,
                                        mm_win_size: quest.mm_win_yes_y,
                                        link_list: links
                                    });
                                });
                            });
                        }
                        else if (flip_code === 2) {
                            questions.get_default_question(function (quest) {
                                questions.get_yes_visitor_votes(quest._id, function (yes_vote) {
                                    questions.get_no_visitor_votes(quest._id, function (no_vote) {
                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                            res.render('lol5', {
                                                usercode: visitor_code,
                                                top_question: quest,
                                                frame: quest.frame,
                                                impression: quest.impression,
                                                url_text: quest.url_text,
                                                yes_votes: yes_vote,
                                                no_votes: no_vote,
                                                mm_win_size: quest.mm_win_all_y,
                                                link_list: links
                                            });
                                        });
                                    });
                                });
                            });
                        }
                        else if (flip_code === 3) {
                            questions.get_default_question(function (quest) {
                                questions.get_yes_visitor_votes(quest._id, function (yes_vote) {
                                    questions.get_no_visitor_votes(quest._id, function (no_vote) {
                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                            res.render('lol4', {
                                                usercode: visitor_code,
                                                top_question: quest,
                                                frame: quest.frame,
                                                impression: quest.impression,
                                                url_text: quest.url_text,
                                                yes_votes: yes_vote,
                                                no_votes: no_vote,
                                                mm_win_size: quest.mm_win_all_y,
                                                link_list: links
                                            });
                                        });
                                    });
                                });
                            });
                        }
                        else if (flip_code === 4) {
                            questions.get_default_question(function (quest) {
                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                            res.render('lol', {
                                                usercode: visitor_code,
                                                top_question: quest,
                                                frame: quest.frame,
                                                impression: quest.impression,
                                                url_text: quest.url_text,
                                                yes_votes: quest.yes_visitor,
                                                no_votes: quest.no_visitor,
                                                x: quest.mm_yes_x,
                                                y: quest.mm_yes_y,
                                                file: quest.mm_file_yes,
                                                mm_win_size: quest.mm_win_yes_y,
                                                link_list: links
                                            });
                                        });
                            });
                        }
                        else if (flip_code === 5) {
                            questions.get_default_question(function (quest) {
                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                            res.render('lol2', {
                                                usercode: visitor_code,
                                                top_question: quest,
                                                frame: quest.frame,
                                                impression: quest.impression,
                                                url_text: quest.url_text,
                                                yes_votes: quest.yes_visitor,
                                                no_votes: quest.no_visitor,
                                                x: quest.mm_no_x,
                                                y: quest.mm_no_y,
                                                file: quest.mm_file_no,
                                                mm_win_size: quest.mm_win_no_y,
                                                link_list: links
                                            });
                                });
                            });
                        }
                        else {
                            //error - bad flip code
                        }

                    }
                    else {
                        users.get_user_lol_state(visitor_code, function (state) {
                            if (state.lol_state == 0) {
                                users.update_user_lol_state(visitor_code, 1, function (result) {
                                    users.get_current_user_question(visitor_code, function (question_id) {
                                        questions.get_user_question(question_id.current_question, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol7', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    x: quest.mm_no_x,
                                                    y: quest.mm_no_y,
                                                    mm_win_size: quest.mm_win_no_y,
                                                    file: quest.mm_file_no
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else if (state.lol_state == 1) {
                                users.update_user_lol_state(visitor_code, 0, function (result) {
                                    users.get_current_user_question(visitor_code, function (question_id) {
                                        questions.get_user_question(question_id.current_question, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol6', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    x: quest.mm_yes_x,
                                                    y: quest.mm_yes_y,
                                                    mm_win_size: quest.mm_win_yes_y,
                                                    file: quest.mm_file_yes
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else if (state.lol_state == 2) {
                                users.get_current_user_question(visitor_code, function (question_id) {
                                    questions.get_user_question(question_id.current_question, function (quest) {
                                        questions.get_yes_votes(quest._id, function (yes_vote) {
                                            questions.get_no_votes(quest._id, function (no_vote) {
                                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                                    res.render('lol5', {
                                                        usercode: visitor_code,
                                                        top_question: quest,
                                                        frame: quest.frame,
                                                        impression: quest.impression,
                                                        url_text: quest.url_text,
                                                        yes_votes: yes_vote,
                                                        no_votes: no_vote,
                                                        mm_win_size: quest.mm_win_all_y,
                                                        link_list: links
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else { //state.lol_state == 3
                                users.get_current_user_question(visitor_code, function (question_id) {
                                    questions.get_user_question(question_id.current_question, function (quest) {
                                        questions.get_yes_votes(quest._id, function (yes_vote) {
                                            questions.get_no_votes(quest._id, function (no_vote) {
                                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                                    res.render('lol4', {
                                                        usercode: visitor_code,
                                                        top_question: quest,
                                                        frame: quest.frame,
                                                        impression: quest.impression,
                                                        url_text: quest.url_text,
                                                        yes_votes: yes_vote,
                                                        no_votes: no_vote,
                                                        mm_win_size: quest.mm_win_all_y,
                                                        link_list: links
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                        });
                    };
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/flip2/:question/:visitor', function (req, res, next) { 
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var question_code = ObjectID.createFromHexString(req.params.question);
        questions.check_valid_question2(question_code, function (found) { //check for valid _id
            if (found) {
                questions.get_user_question(question_code, function (quest) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol9', {
                                    question: question_code,
                                    usercode: visitor_code,
                                    top_question: quest,
                                    frame: quest.frame,
                                    impression: quest.impression,
                                    url_text: quest.url_text,
                                    yes_votes: quest.yes_visitor,
                                    no_votes: quest.no_visitor,
                                    mm_win_size: quest.mm_win_all_y,
                                    link_list: links
                                });
                            });
                });
            };
        });
    });

    app.get('/flip3/:question/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var question_code = ObjectID.createFromHexString(req.params.question);
        questions.get_user_question(question_code, function (quest) {
            lols.get_lol(quest.frame, quest.impression, function (links) {
                res.render('lol11', {
                    question: question_code,
                    usercode: visitor_code,
                    top_question: quest,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    yes_votes: quest.yes_visitor,
                    no_votes: quest.no_visitor,
                    link_list: links,
                    x: quest.mm_no_x,
                    y: quest.mm_no_y,
                    mm_win_size: quest.mm_win_no_y,
                    file: quest.mm_file_no
                });
            });
        });
    });

    app.get('/flip4/:question/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var question_code = ObjectID.createFromHexString(req.params.question);
        questions.get_user_question(question_code, function (quest) {
            lols.get_lol(quest.frame, quest.impression, function (links) {
                res.render('lol10', {
                    question: question_code,
                    usercode: visitor_code,
                    top_question: quest,
                    frame: quest.frame,
                    impression: quest.impression,
                    url_text: quest.url_text,
                    yes_votes: quest.yes_visitor,
                    no_votes: quest.no_visitor,
                    link_list: links,
                    x: quest.mm_yes_x,
                    y: quest.mm_yes_y,
                    mm_win_size: quest.mm_win_yes_y,
                    file: quest.mm_file_yes
                });
            });
        });
    });

    app.get('/flip5/:question/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var question_code = ObjectID.createFromHexString(req.params.question);
        questions.get_user_question(question_code, function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            question: question_code,
                            usercode: visitor_code,
                            top_question: quest,
                            frame: quest.frame,
                            impression: quest.impression,
                            url_text: quest.url_text,
                            yes_votes: quest.yes_visitor,
                            no_votes: quest.no_visitor,
                            mm_win_size: quest.mm_win_all_y,
                            link_list: links
                        });
                    });
        });
    });

    app.get('/links/:frame/:impression/:visitor/:url_text', function (req, res, next) {
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        var new_question_frame = parseInt(req.params.frame);
        var new_question_impression = parseInt(req.params.impression);
        var valid_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {//Right now this is unnecessary
            valid_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || valid_visitor) { //valid visitor,user
                    var answer = "2";
                    visitor_code = +answer;
                    questions.check_valid_question(new_question_frame, new_question_impression, function (quest_valid) { //matched
                        if (quest_valid) {  //valid question
                            if ((visitor_code > -1) && (visitor_code < 100000000)) { //matched
                                questions.get_user_question2(new_question_frame, new_question_impression, function (quest) {
                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                            res.render('lol16', {
                                                question: quest._id,
                                                usercode: visitor_code,
                                                top_question: quest,
                                                frame: quest.frame,
                                                impression: quest.impression,
                                                url_text: quest.url_text,
                                                yes_votes: quest.yes,
                                                no_votes: quest.no,
                                                link_list: links,
                                                mm_win_size: quest.mm_win_all_y,
                                                user_answer: answer
                                            });
                                        });
                                    });
                            }
                        }
                        else { //render default
                            visitor_code = 0;
                            var quest;
                            questions.get_default_question(function (quest) {
                                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                    res.render('home', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                    res.render('home7', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home13', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home19', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home25', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                    res.render('home31', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                    res.render('home37', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home43', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home49', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                }
                                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                    res.render('home55', {
                                        usercode: visitor_code,
                                        animated_gif: quest.mm,
                                        frame: quest.frame,
                                        impression: quest.impression,
                                        url_text: quest.url_text,
                                        quote: quest.text,
                                        quote2: quest.text2,
                                        quote3: quest.text3,
                                        quote4: quest.text4,
                                        head_win_size: quest.head_win_y,
                                        top_question: quest.question + "?",
                                        choices: ['yes', 'no', 'no opinion']
                                    });
                                };
                            });
                        };
                    })
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                }
            });
        }
        else {//some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/trending/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if (visitor_code === 6) { visitor_code = 3; } //visitor has seen question
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (new_visitor) {
                    questions.get_front_questions(function (quest) {
                        questions.get_user_question2(quest[0].frame, quest[0].impression, function (front_quest) {
                            if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 != "")) {
                                res.render('home81', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 == "")) {
                                res.render('home82', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home83', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home84', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text == "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home85', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 != "")) {
                                res.render('home86', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 == "")) {
                                res.render('home87', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home88', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home89', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text == "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home90', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            };
                        });
                    });
                }
                else if (valid) {
                    //get categories
                    questions.get_categories(function (quest) {
                        res.render('visitor_info3', {
                            usercode: visitor_code,
                            categories_list: quest
                        });
                    });
                }
                else { // valid integer but not a visitor or user
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/trending/:question/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (new_visitor) {
                    questions.get_front_questions(function (quest) {
                        questions.get_user_question2(quest[0].frame, quest[0].impression, function (front_quest) {
                            if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 != "")) {
                                res.render('home81', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 == "")) {
                                res.render('home82', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home83', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text != "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home84', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm != "") && (front_quest.text == "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home85', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 != "")) {
                                res.render('home86', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 != "") && (front_quest.text4 == "")) {
                                res.render('home87', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 != "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home88', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text != "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home89', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            }
                            else if ((front_quest.mm == "") && (front_quest.text == "") && (front_quest.text2 == "") && (front_quest.text3 == "") && (front_quest.text4 == "")) {
                                res.render('home90', {
                                    question: front_quest._id, //passing in question ID
                                    usercode: visitor_code,
                                    animated_gif: front_quest.mm,
                                    frame: front_quest.frame,
                                    impression: front_quest.impression,
                                    url_text: front_quest.url_text,
                                    quote: front_quest.text,
                                    quote2: front_quest.text2,
                                    quote3: front_quest.text3,
                                    quote4: front_quest.text4,
                                    head_win_size: front_quest.head_win_y,
                                    top_question: front_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion']
                                });
                            };
                        });
                    });
                }
                else if (valid) {
                    //get categories
                    questions.get_categories(function (quest) {
                        res.render('visitor_info3', {
                            usercode: visitor_code,
                            categories_list: quest
                        });
                    });
                }
                else { // valid integer but not a visitor or user
                    visitor_code = 2;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });


    app.get('/trending2/:frame/:impression/:visitor/:url_text', function (req, res, next) {
        "use strict";
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        var new_question_frame = parseInt(req.params.frame);
        var new_question_impression = parseInt(req.params.impression);
        var valid = true;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            questions.check_valid_question(new_question_frame, new_question_impression, function (quest_valid) { //matched
                if (quest_valid) {  //valid question
                    questions.get_user_question2(new_question_frame, new_question_impression, function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home81', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home82', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home83', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home84', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home85', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home86', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home87', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home88', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home89', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home90', {
                                question: quest._id, //passing in question ID
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                } // end valid user
                else { //render default
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            })
        }
        else {//some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/search/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {

                    res.render('search', {
                        usercode: visitor_code
                    });

                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/search_query/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var query_res = req.query.query ? req.query.query : "";
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    lols.search_links(query_res, function (lols_found) {
                        if (lols_found.length == 0) {
                            res.render('search3', {
                                usercode: visitor_code,
                            });
                        }
                        else {
                            res.render('search2', {
                                usercode: visitor_code,
                                link_list: lols_found
                            });
                        };
                    });

                }
                else { // valid integer but not a visitor or user
                    visitor_code = 0;
                    var quest;
                    questions.get_default_question(function (quest) {
                        if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                head_win_size: quest.head_win_y,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        };
                    });
                };
            });
        }
        else { // some other garbage
            var visitor_code = 2;
            var quest;
            questions.get_default_question(function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        frame: quest.frame,
                        impression: quest.impression,
                        url_text: quest.url_text,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        head_win_size: quest.head_win_y,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.post('/login/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var current_response = req.body.code;

        if (current_response === "4") {
            current_response = "0";
        }
        else if (current_response === "5") {
            current_response = "1";
        }

        var name = req.body.username_input;
        var code = req.body.usercode_input;
        var user_answer_text = "";
        if ((name == '') && (code == '')) {
            res.render('track', {
                usercode: visitor_code
            })
        }
        else if (code == '') {
            var name_caps = name.toUpperCase();
            users.check_valid_username(name_caps, function (valid) {
                if (valid) {
                    users.get_usercode(name_caps, function (visitor_code) {
                        users.set_challenge_questions_since_last_login(visitor_code, 0, function (result) {
                            questions.get_default_question(function (quest) {
                                users.set_next_challenge(visitor_code, 0, function (result) {
                                    users.check_challenge(visitor_code, function (challenge_array) {
                                        if (challenge_array == undefined) { //in case user never set up challenge questions
                                            challenge_array = [{ question: 0, answer: "" }, { question: 1, answer: "" }, { question: 2, answer: "" }, { question: 3, answer: "" }, { question: 4, answer: "" }, { question: 5, answer: "" }, { question: 6, answer: "" }, { question: 7, answer: "" }, { question: 8, answer: "" }, { question: 9, answer: "" }, { question: 10, answer: "" }, { question: 11, answer: "" }, { question: 12, answer: "" }, { question: 13, answer: "" }, { question: 14, answer: "" }];
                                        };
                                        var iterator = 0;
                                        while (iterator <= 14) {
                                            if (challenge_array[iterator].answer == "") {
                                                iterator++;
                                            }
                                            else {
                                                break;
                                            }
                                        };
                                        if (iterator == 15) { //user has no challenge questions
                                            users.update_logged_in_state(visitor_code, 1, function (result) {
                                                users.set_challenge_questions_since_last_login(visitor_code, 0, function (result) {
                                                    users.get_userimps_array(visitor_code, function (userimps_array) {
                                                        users.check_if_question_of_day_already_in_impressions_array(visitor_code, quest, userimps_array, function (response) {
                                                            users.update_current_question_with_actual_response(visitor_code, quest, response, +current_response, userimps_array, function (result) {
                                                                //update_current_question_with_actual_response also sets current question and updates tally if needed
                                                                users.get_current_user_question(visitor_code, function (current_quest) {
                                                                    users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                                                        if (user_answer == 0) {
                                                                            user_answer_text = "Yes"
                                                                        };
                                                                        if (user_answer == 1) {
                                                                            user_answer_text = "No"
                                                                        };
                                                                        if (user_answer == 2) {
                                                                            user_answer_text = "No opinion"
                                                                        };
                                                                        if (user_answer == 3) {
                                                                            user_answer_text = "Saw question but didn't answer"
                                                                        };
                                                                        questions.get_user_question(current_quest.current_question, function (user_quest) {
                                                                            if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                                                res.render('home6', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                                res.render('home12', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home18', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home24', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home30', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                                                res.render('home36', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                                res.render('home42', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home48', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home54', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home60', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    frame: user_quest.frame,
                                                                                    impression: user_quest.impression,
                                                                                    url_text: user_quest.url_text,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    head_win_size: user_quest.head_win_y,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            };
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        }
                                        else {
                                            users.set_next_challenge(visitor_code, challenge_array[iterator].question, function (result) {
                                                users.set_challenge_questions_since_last_login(visitor_code, 1, function (result) {
                                                    users.get_challenge(challenge_array[iterator].question, function (question) {
                                                        res.render('challenge', {
                                                            usercode: visitor_code,
                                                            challenge_question: question + "?"
                                                        });
                                                    });
                                                });
                                            });
                                        }
                                    });
                                });
                            });
                        });
                    });
                }
                else {
                    res.render('bad_login_username', {
                        usercode: visitor_code
                    })
                };
            });
        }
        else { // validate code - bug: if code is bad but correct username was used, will still resolve bad
            var code_int = parseInt(code);
            users.check_valid_usercode(code_int, function (valid) {
                if (valid) {
                    visitor_code = code_int;
                    users.set_challenge_questions_since_last_login(visitor_code, 0, function (result) {
                        questions.get_default_question(function (quest) {
                            users.set_next_challenge(visitor_code, 0, function (result) {
                                users.check_challenge(visitor_code, function (challenge_array) {
                                    var iterator = 0;
                                    while (iterator <= 14) {
                                        if (challenge_array[iterator].answer == "") {
                                            iterator++;
                                        }
                                        else {
                                            break;
                                        }
                                    };
                                    if (iterator == 15) {
                                        users.update_logged_in_state(visitor_code, 1, function (result) {
                                            users.set_challenge_questions_since_last_login(visitor_code, 0, function (result) {
                                                users.get_userimps_array(visitor_code, function (userimps_array) {
                                                    users.check_if_question_of_day_already_in_impressions_array(visitor_code, quest, userimps_array, function (response) {
                                                        users.update_current_question_with_actual_response(visitor_code, quest, response, +current_response, userimps_array, function (result) {
                                                            //update_current_question_with_actual_response also sets current question and updates tally if needed
                                                            users.get_current_user_question(visitor_code, function (current_quest) {
                                                                users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                                                    if (user_answer == 0) {
                                                                        user_answer_text = "Yes"
                                                                    };
                                                                    if (user_answer == 1) {
                                                                        user_answer_text = "No"
                                                                    };
                                                                    if (user_answer == 2) {
                                                                        user_answer_text = "No opinion"
                                                                    };
                                                                    if (user_answer == 3) {
                                                                        user_answer_text = "Saw question but didn't answer"
                                                                    };
                                                                    questions.get_user_question(current_quest.current_question, function (user_quest) {
                                                                        if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                                            res.render('home6', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                            res.render('home12', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home18', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home24', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home30', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                                            res.render('home36', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                            res.render('home42', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home48', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home54', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home60', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                frame: user_quest.frame,
                                                                                impression: user_quest.impression,
                                                                                url_text: user_quest.url_text,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                head_win_size: user_quest.head_win_y,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        };
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }
                                    else {
                                        users.set_next_challenge(visitor_code, challenge_array[iterator].question, function (result) {
                                            users.set_challenge_questions_since_last_login(visitor_code, 1, function (result) {
                                                users.get_challenge(challenge_array[iterator].question, function (question) {
                                                    res.render('challenge', {
                                                        usercode: visitor_code,
                                                        challenge_question: question + "?"
                                                    });
                                                });
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    });
                }
                else { //not valid usercode
                    res.render('bad_login_usercode', {
                        usercode: visitor_code
                    });
                }
            });
        }
    });

    app.post('/challenge_response/:visitor', function (req, res, next) {
        var visitor_code = parseInt(req.params.visitor);
        var answer = req.body.challenge_answer;
        var answer_res_caps = answer.toUpperCase();
        var current_response = req.body.code;

        if (current_response === "4") {
            current_response = "0";
        }
        else if (current_response === "5") {
            current_response = "1";
        }

        var user_answer_text = "";
        users.get_next_challenge(visitor_code, function (question_number) {
            questions.get_default_question(function (quest) {
                users.check_challenge(visitor_code, function (challenge_array) {
                    var iterator = 0;
                    while (iterator <= 14) {
                        if (challenge_array[iterator].question == question_number) {
                            break;
                        }
                        else {
                            ++iterator;
                        };
                    };
                    if ((answer_res_caps) == challenge_array[iterator].answer) { //success
                        users.update_logged_in_state(visitor_code, 1, function (result) {
                            users.set_challenge_questions_since_last_login(visitor_code, 0, function (result) {
                                users.get_userimps_array(visitor_code, function (userimps_array) {
                                    users.check_if_question_of_day_already_in_impressions_array(visitor_code, quest, userimps_array, function (response) {
                                        users.update_current_question_with_actual_response(visitor_code, quest, response, +current_response, userimps_array, function (result) {
                                            //update_current_question_with_actual_response also sets current question and updates tally if needed
                                            users.get_current_user_question(visitor_code, function (current_quest) {
                                                users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                                    if (user_answer == 0) {
                                                        user_answer_text = "Yes"
                                                    };
                                                    if (user_answer == 1) {
                                                        user_answer_text = "No"
                                                    };
                                                    if (user_answer == 2) {
                                                        user_answer_text = "No opinion"
                                                    };
                                                    if (user_answer == 3) {
                                                        user_answer_text = "Saw question but didn't answer"
                                                    };
                                                    questions.get_user_question(current_quest.current_question, function (user_quest) {
                                                        if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                            res.render('home6', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                            res.render('home12', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home18', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home24', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home30', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                            res.render('home36', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                            res.render('home42', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home48', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home54', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home60', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                frame: user_quest.frame,
                                                                impression: user_quest.impression,
                                                                url_text: user_quest.url_text,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                head_win_size: user_quest.head_win_y,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        };
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    }
                    else { //fail, get next challenge question
                        users.get_challenge_questions_since_last_login(visitor_code, function (number) {
                            users.set_challenge_questions_since_last_login(visitor_code, ++number, function (result) { //track how many tries, though this info isn't used for anything at the moment
                                users.check_challenge(visitor_code, function (challenge_array) {
                                    users.get_next_challenge(visitor_code, function (question_number) {
                                        var iterator = 0;
                                        while (iterator <= 14) {
                                            if (challenge_array[iterator].question == question_number) {
                                                break;
                                            }
                                            else {
                                                ++iterator;
                                            };
                                        };
                                        var iterator_stop = iterator;
                                        var found = false;
                                        ++iterator;
                                        while (iterator <= 14) {
                                            if (challenge_array[iterator].answer == "") {
                                                iterator++;
                                            }
                                            else {
                                                found = true;
                                                break;
                                            };
                                        };
                                        if (found) {
                                            users.set_next_challenge(visitor_code, challenge_array[iterator].question, function (result) {
                                                users.get_challenge(challenge_array[iterator].question, function (question) {
                                                    res.render('challenge_failed', {
                                                        usercode: visitor_code,
                                                        challenge_question: question + "?"
                                                    });
                                                });
                                            });
                                        }
                                        else { //not found
                                            var iterator = 0;
                                            while (iterator < iterator_stop) {
                                                if (challenge_array[iterator].answer == "") {
                                                    ++iterator;
                                                }
                                                else {
                                                    break;
                                                };
                                            };
                                            users.set_next_challenge(visitor_code, challenge_array[iterator].question, function (result) {
                                                users.get_challenge(challenge_array[iterator].question, function (question) {
                                                    res.render('challenge_failed', {
                                                        usercode: visitor_code,
                                                        challenge_question: question + "?"
                                                    });
                                                });
                                            });
                                        };
                                    });
                                });
                            });
                        });
                    };
                });
            });
        });
    });

    app.get('/like/:link/:question/:visitor/:state', function (req, res, next) {
        var visitor_code = parseInt(req.params.visitor);
        var state_code = parseInt(req.params.state);
        var links_res = ObjectID.createFromHexString(req.params.link);
        var question_res = ObjectID.createFromHexString(req.params.question);
        if ((visitor_code > -1) && (visitor_code < 10)) {
            questions.get_user_question(question_res, function (quest) {
                if (quest != undefined) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        if (state_code === 0) {
                            res.render('lol13', {
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        }
                        else if (state_code === 1) {
                            res.render('lol14', {
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_no_x,
                                y: quest.mm_no_y,
                                file: quest.mm_file_no,
                                mm_win_size: quest.mm_win_no_y
                            });
                        }
                        else if ((state_code === 2) || (state_code === 3)) {
                            res.render('lol15', {
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y
                            });
                        }
                        else if (state_code === 4) {
                            res.render('lol17', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y
                            });
                        }
                        else if (state_code === 5) {
                            res.render('lol18', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                link_list: links,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        }
                        else if (state_code === 6) {
                            res.render('lol19', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                x: quest.mm_no_x,
                                y: quest.mm_no_y,
                                file: quest.mm_file_no,
                                link_list: links,
                                mm_win_size: quest.mm_win_no_y
                            });
                        }
                        else if (state_code === 7) {
                            res.render('lol20', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y
                            });
                        }
                    });
                };
            });
        }
        else {
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid) {
                    if (state_code == 0) {
                        lols.check_like_already_in_content_likes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_like_already_in_content_likes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_content_likes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    x: quest.mm_yes_x,
                                                    y: quest.mm_yes_y,
                                                    file: quest.mm_file_yes,
                                                    mm_win_size: quest.mm_win_yes_y,
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_like_to_content_likes_array(visitor_code, links_res, function (result) {
                                    lols.increment_content_likes(links_res, function (result) {
                                        lols.check_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_content_dislikes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    x: quest.mm_yes_x,
                                                                    y: quest.mm_yes_y,
                                                                    file: quest.mm_file_yes,
                                                                    mm_win_size: quest.mm_win_yes_y,
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            x: quest.mm_yes_x,
                                                            y: quest.mm_yes_y,
                                                            file: quest.mm_file_yes,
                                                            mm_win_size: quest.mm_win_yes_y,
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                      });
                    }
                    else if (state_code == 1) {
                        lols.check_like_already_in_flip_likes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_like_already_in_flip_likes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_flip_likes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol2', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    x: quest.mm_no_x,
                                                    y: quest.mm_no_y,
                                                    file: quest.mm_file_no,
                                                    mm_win_size: quest.mm_win_no_y
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_like_to_flip_likes_array(visitor_code, links_res, function (result) {
                                    lols.increment_flip_likes(links_res, function (result) {
                                        lols.check_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_flip_dislikes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol2', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    x: quest.mm_no_x,
                                                                    y: quest.mm_no_y,
                                                                    file: quest.mm_file_no,
                                                                    mm_win_size: quest.mm_win_no_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol2', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            x: quest.mm_no_x,
                                                            y: quest.mm_no_y,
                                                            file: quest.mm_file_no,
                                                            mm_win_size: quest.mm_win_no_y
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else if (state_code == 2) {
                        lols.check_like_already_in_content_likes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_like_already_in_content_likes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_content_likes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol3', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    mm_win_size: quest.mm_win_all_y
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_like_to_content_likes_array(visitor_code, links_res, function (result) {
                                    lols.increment_content_likes(links_res, function (result) {
                                        lols.check_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_content_dislikes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol3', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    mm_win_size: quest.mm_win_all_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol3', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            mm_win_size: quest.mm_win_all_y
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else if (state_code == 3) {
                        lols.check_like_already_in_flip_likes_array(visitor_code, links_res, function (found) {
                        if (found) {
                            lols.delete_like_already_in_flip_likes_array(visitor_code, links_res, function (result) {
                                lols.decrement_flip_likes(links_res, function (result) {
                                    questions.get_user_question(question_res, function (quest) {
                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                            res.render('lol3', {
                                                usercode: visitor_code,
                                                top_question: quest,
                                                frame: quest.frame,
                                                impression: quest.impression,
                                                url_text: quest.url_text,
                                                yes_votes: quest.yes,
                                                no_votes: quest.no,
                                                link_list: links,
                                                mm_win_size: quest.mm_win_all_y
                                            });
                                        });
                                    });
                                });
                            });
                        }
                        else {
                            lols.add_like_to_flip_likes_array(visitor_code, links_res, function (result) {
                                lols.increment_flip_likes(links_res, function (result) {
                                    lols.check_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (found) {
                                        if (found) {
                                            lols.delete_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (result) {
                                                lols.decrement_flip_dislikes(links_res, function (result) {
                                                    questions.get_user_question(question_res, function (quest) {
                                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                                            res.render('lol3', {
                                                                usercode: visitor_code,
                                                                top_question: quest,
                                                                frame: quest.frame,
                                                                impression: quest.impression,
                                                                url_text: quest.url_text,
                                                                yes_votes: quest.yes,
                                                                no_votes: quest.no,
                                                                link_list: links,
                                                                mm_win_size: quest.mm_win_all_y
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        }
                                        else {
                                            questions.get_user_question(question_res, function (quest) {
                                                lols.get_lol(quest.frame, quest.impression, function (links) {
                                                    res.render('lol3', {
                                                        usercode: visitor_code,
                                                        top_question: quest,
                                                        frame: quest.frame,
                                                        impression: quest.impression,
                                                        url_text: quest.url_text,
                                                        yes_votes: quest.yes,
                                                        no_votes: quest.no,
                                                        link_list: links,
                                                        mm_win_size: quest.mm_win_all_y
                                                    });
                                                });
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    });
                  };
                } //end if valid
                else {
                    //no op
                }; //end not valid
            });
    };//end else
});

    app.get('/hate/:link/:question/:visitor/:state', function (req, res, next) {
        var visitor_code = parseInt(req.params.visitor);
        var state_code = parseInt(req.params.state);
        var links_res = ObjectID.createFromHexString(req.params.link);
        var question_res = ObjectID.createFromHexString(req.params.question);
        if ((visitor_code > -1) && (visitor_code < 10)) {
            questions.get_user_question(question_res, function (quest) {
                if (quest != undefined) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        if (state_code === 0) {
                            res.render('lol13', {
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        }
                        else if (state_code === 1) {
                            res.render('lol14', {
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        }
                        else if ((state_code === 2) || (state_code === 3)) {
                            res.render('lol15', {
                                usercode: visitor_code,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        }
                        else if (state_code === 4) {
                            res.render('lol17', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y
                            });
                        }
                        else if (state_code === 5) {
                            res.render('lol18', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                x: quest.mm_yes_x,
                                y: quest.mm_yes_y,
                                file: quest.mm_file_yes,
                                link_list: links,
                                mm_win_size: quest.mm_win_yes_y
                            });
                        }
                        else if (state_code === 6) {
                            res.render('lol19', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                x: quest.mm_no_x,
                                y: quest.mm_no_y,
                                file: quest.mm_file_no,
                                link_list: links,
                                mm_win_size: quest.mm_win_no_y
                            });
                        }
                        else if (state_code === 7) {
                            res.render('lol20', {
                                usercode: visitor_code,
                                question: question_res,
                                top_question: quest,
                                frame: quest.frame,
                                impression: quest.impression,
                                url_text: quest.url_text,
                                yes_votes: quest.yes_visitor,
                                no_votes: quest.no_visitor,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y
                            });
                        }
                    });
                };
            });
        }
        else {
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid) {
                    if (state_code == 0) {
                        lols.check_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_content_dislikes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    x: quest.mm_yes_x,
                                                    y: quest.mm_yes_y,
                                                    file: quest.mm_file_yes,
                                                    mm_win_size: quest.mm_win_yes_y
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_dislike_to_content_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.increment_content_dislikes(links_res, function (result) {
                                        lols.check_like_already_in_content_likes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_like_already_in_content_likes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_content_likes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    x: quest.mm_yes_x,
                                                                    y: quest.mm_yes_y,
                                                                    file: quest.mm_file_yes,
                                                                    mm_win_size: quest.mm_win_yes_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            x: quest.mm_yes_x,
                                                            y: quest.mm_yes_y,
                                                            file: quest.mm_file_yes,
                                                            mm_win_size: quest.mm_win_yes_y
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else if (state_code == 1) {
                        lols.check_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_flip_dislikes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol2', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    x: quest.mm_no_x,
                                                    y: quest.mm_no_y,
                                                    file: quest.mm_file_no,
                                                    mm_win_size: quest.mm_win_no_y
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_dislike_to_flip_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.increment_flip_dislikes(links_res, function (result) {
                                        lols.check_like_already_in_flip_likes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_like_already_in_flip_likes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_flip_likes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol2', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    x: quest.mm_no_x,
                                                                    y: quest.mm_no_y,
                                                                    file: quest.mm_file_no,
                                                                    mm_win_size: quest.mm_win_no_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol2', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            x: quest.mm_no_x,
                                                            y: quest.mm_no_y,
                                                            file: quest.mm_file_no,
                                                            mm_win_size: quest.mm_win_no_y
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else if (state_code == 2) {
                        lols.check_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_dislike_already_in_content_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_content_dislikes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol3', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    mm_win_size: quest.mm_win_all_y
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_dislike_to_content_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.increment_content_dislikes(links_res, function (result) {
                                        lols.check_like_already_in_content_likes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_like_already_in_content_likes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_content_likes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol3', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    mm_win_size: quest.mm_win_all_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol3', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            mm_win_size: quest.mm_win_all_y
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                        });                    }
                    else if (state_code == 3) {
                        lols.check_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_flip_dislikes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol3', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
                                                    frame: quest.frame,
                                                    impression: quest.impression,
                                                    url_text: quest.url_text,
                                                    yes_votes: quest.yes,
                                                    no_votes: quest.no,
                                                    link_list: links,
                                                    mm_win_size: quest.mm_win_all_y
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                            else {
                                lols.add_dislike_to_flip_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.increment_flip_dislikes(links_res, function (result) {
                                        lols.check_like_already_in_flip_likes_array(visitor_code, links_res, function (found) {
                                            if (found) {
                                                lols.delete_like_already_in_flip_likes_array(visitor_code, links_res, function (result) {
                                                    lols.decrement_flip_likes(links_res, function (result) {
                                                        questions.get_user_question(question_res, function (quest) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol3', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    frame: quest.frame,
                                                                    impression: quest.impression,
                                                                    url_text: quest.url_text,
                                                                    yes_votes: quest.yes,
                                                                    no_votes: quest.no,
                                                                    link_list: links,
                                                                    mm_win_size: quest.mm_win_all_y
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                questions.get_user_question(question_res, function (quest) {
                                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                                        res.render('lol3', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
                                                            frame: quest.frame,
                                                            impression: quest.impression,
                                                            url_text: quest.url_text,
                                                            yes_votes: quest.yes,
                                                            no_votes: quest.no,
                                                            link_list: links,
                                                            mm_win_size: quest.mm_win_all_y
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    };
                } //end if valid
                else {
                  //no op
                }; //end not valid
            });
        };//end else
    });

    app.get('/flanks/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
            users.get_user_responses(function (user_responses, user_responses_codes) {
                flanks.get_categories(function (metaframes) {
                    flanks.get_completed_user_categories(visitor_code, user_responses, metaframes, function (completed_user_cats) {
                        flanks.get_users_with_categories(user_responses, user_responses_codes, metaframes, function (users_with_cats) {
                            flanks.get_users_with_same_categories(completed_user_cats, users_with_cats, user_responses_codes, function (users_with_same_cats) {
                                flanks.get_users_with_overlapping_categories(completed_user_cats, users_with_cats, function (users_with_overlapping_categories) {
                                    flanks.get_flanks(visitor_code, metaframes, completed_user_cats, users_with_overlapping_categories, user_responses, function (cats_in_flank, percent_users_same_answers) {
                                        res.render('flanks', {
                                            usercode: visitor_code,
                                            number_users: user_responses_codes.length + 2,
                                            sequences: cats_in_flank,
                                            percent: percent_users_same_answers
                                        });
                                    });
                                });
                            });
                    });
                });
            });
        });
    });

    app.get('/sequence/:metaframe/:impression/:visitor/:url_text', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var metaframe_id = parseInt(req.params.metaframe);
        var user_answer_text = ""
        var question_index = -1;
        questions.get_question(function (quest) {
            questions.get_sequence_questions(quest, metaframe_id, function (seq_quests) {
                users.build_userimps_list(visitor_code, quest, function (userimps_list) {
                    for (var i = 0; i < seq_quests.length; i++) {
                        if (question_index != -1) {
                            break;
                        };
                        question_index = i;
                        for (var j = 0; j < userimps_list.length; j++) {
                            if ((seq_quests[i]) === (userimps_list[j]._id)) {
                                question_index = -1;
                                break;
                            }
                        }
                    };
                    if (question_index === -1) { //there is no seq question not already seen
                        users.update_sequence_number(visitor_code, 0, function (sequence_set_result) {
                            users.get_current_user_question(visitor_code, function (current_quest) {
                                users.get_user_answer_to_question_dont_set_current(visitor_code, current_quest.current_question, function (user_answer) {
                                    if (user_answer == 0) {
                                        user_answer_text = "Yes"
                                    };
                                    if (user_answer == 1) {
                                        user_answer_text = "No"
                                    };
                                    if (user_answer == 2) {
                                        user_answer_text = "No opinion"
                                    };
                                    if (user_answer == 3) {
                                        user_answer_text = "Saw question but didn't answer"
                                    };
                                    questions.get_user_question(current_quest.current_question, function (user_quest) {
                                        if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home91', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home92', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home93', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home94', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home95', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home96', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home97', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home98', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home99', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home100', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                frame: user_quest.frame,
                                                impression: user_quest.impression,
                                                url_text: user_quest.url_text,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                head_win_size: user_quest.head_win_y,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        };
                                    });
                                });
                            });
                        });
                    }
                    else { //found the first seq question not seen = question_index into sequence array
                        users.update_sequence_number(visitor_code, metaframe_id, function (sequence_set_result) {
                            users.update_user_lol_state(visitor_code, 3, function (result) {
                                questions.get_user_question(seq_quests[question_index], function (user_seq_quest) {
                                 users.update_current_question(visitor_code, user_seq_quest, function (result) {
                                        if (result = true) {
                                            if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 != "")) {
                                                res.render('home71', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 == "")) {
                                                res.render('home72', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                res.render('home73', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text != "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                res.render('home74', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm != "") && (user_seq_quest.text == "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                res.render('home75', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 != "")) {
                                                res.render('home76', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 != "") && (user_seq_quest.text4 == "")) {
                                                res.render('home77', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 != "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                res.render('home78', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text != "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                res.render('home79', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            }
                                            else if ((user_seq_quest.mm == "") && (user_seq_quest.text == "") && (user_seq_quest.text2 == "") && (user_seq_quest.text3 == "") && (user_seq_quest.text4 == "")) {
                                                res.render('home80', {
                                                    usercode: visitor_code,
                                                    animated_gif: user_seq_quest.mm,
                                                    frame: user_seq_quest.frame,
                                                    impression: user_seq_quest.impression,
                                                    url_text: user_seq_quest.url_text,
                                                    quote: user_seq_quest.text,
                                                    quote2: user_seq_quest.text2,
                                                    quote3: user_seq_quest.text3,
                                                    quote4: user_seq_quest.text4,
                                                    head_win_size: user_seq_quest.head_win_y,
                                                    top_question: user_seq_quest.question + "?",
                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                });
                                            };
                                        }
                                    });
                                });
                            });
                        });  
                    }
                });
            });
        });
    });

    app.use(errorHandler);

    var server = app.listen(3000, function () {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });

});

