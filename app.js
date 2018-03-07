//core event loop

var Db = require('mongodb').Db,
    ObjectID = require('mongodb').ObjectID
    express = require('express'),
    bodyParser = require('body-parser'),
    nunjucks = require('nunjucks'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert'),
    QuestionDAO = require('./questions').QuestionDAO;
    LOLDAO = require('./lols').LOLDAO;
    UserDAO = require('./users').UserDAO;

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

var db = new Db('newsflanks', new Server('192.168.0.96', 27017));


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

    // var router = express.Router();

    app.get('/', function (req, res, next) {
        "use strict";
        var visitor_code = 2;
        var quest;
        questions.get_default_question(function (quest) {
            if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                res.render('home', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,


                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                res.render('home7', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home13', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home19', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home25', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                res.render('home31', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                res.render('home37', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home43', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home49', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            }
            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                res.render('home55', {
                    usercode: visitor_code,
                    animated_gif: quest.mm,
                    quote: quest.text,
                    quote2: quest.text2,
                    quote3: quest.text3,
                    quote4: quest.text4,
                    top_question: quest.question + "?",
                    choices: ['yes', 'no', 'no opinion']
                });
            };
        });
    });

    app.post('/revisit/:visitor', function (req, res, next) {
        "use strict";
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        var links_res = ObjectID.createFromHexString(req.body.answer);
        questions.get_user_question(links_res, function (user_quest) {
            users.get_user_answer_to_question(visitor_code, links_res, function (user_answer) {
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
                if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                    res.render('home61', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                    res.render('home62', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                    res.render('home63', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                    res.render('home64', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                    res.render('home65', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                    res.render('home66', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                    res.render('home67', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                    res.render('home68', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                    res.render('home69', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                }
                else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                    res.render('home70', {
                        usercode: visitor_code,
                        response: user_answer_text,
                        animated_gif: user_quest.mm,
                        quote: user_quest.text,
                        quote2: user_quest.text2,
                        quote3: user_quest.text3,
                        quote4: user_quest.text4,
                        top_question: user_quest.question + "?",
                        choices: ['yes', 'no', 'no opinion', 'next question']
                    });
                };
            });
        });
    });

    app.get('/new_quest/:question/:visitor', function (req, res, next) {
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor); // pass in as usercode2
        var links_res = ObjectID.createFromHexString(req.params.question);
        if ((visitor_code > -1) && (visitor_code < 10)) {
            questions.get_user_question(links_res, function (quest) {
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home81', {
                        usercode: links_res, //passing in question ID
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home82', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home83', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home84', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home85', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home86', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home87', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home88', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home89', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home90', {
                        usercode: links_res,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        }
        else { //handles user
            questions.get_user_question(links_res, function (user_quest) {
                users.get_user_answer_to_question(visitor_code, links_res, function (user_answer) { // handle case where user might not have answered
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
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                        res.render('home62', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                        res.render('home63', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                        res.render('home64', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                        res.render('home65', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                        res.render('home66', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                        res.render('home67', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                        res.render('home68', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                        res.render('home69', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                        res.render('home70', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: user_quest.mm,
                            quote: user_quest.text,
                            quote2: user_quest.text2,
                            quote3: user_quest.text3,
                            quote4: user_quest.text4,
                            top_question: user_quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    };
                });
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
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home8', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home14', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home20', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home26', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home32', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home38', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home44', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home50', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home56', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
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
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                        res.render('home8', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home14', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home20', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home26', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                        res.render('home32', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                        res.render('home38', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home44', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home50', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
                                            top_question: user_quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                        res.render('home56', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: user_quest.mm,
                                            quote: user_quest.text,
                                            quote2: user_quest.text2,
                                            quote3: user_quest.text3,
                                            quote4: user_quest.text4,
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
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
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
                                    res.render('visitor_info', {
                                        usercode: visitor_code,
                                        username: visitor_name,
                                        questions_list: userimps_list
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
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/track2/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = 3;
        res.render('login', {
            usercode: visitor_code
        });
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
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
                if (name_res == " ") {
                    result = true;
                };
                if (result == false) {
                    questions.get_default_question(function (default_question) {
                        users.get_usercode_for_update(function (user_code) {
                            users.write_new_userdata(user_code, default_question, +default_answer, function (result) {
                                users.write_new_user(name_res_caps, visitor_code, user_code, default_question, +default_answer, function (userDoc) {
                                    users.get_challenge_question(function (quest) {
                                        res.render('good_username', {
                                            good_username: userDoc.username,
                                            usercode: userDoc.usercode,
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
            if (challenge_exists == false) {
                users.write_user_challenge(user_code, chal_res_0, chal_res_1, chal_res_2, chal_res_3, chal_res_4, chal_res_5, chal_res_6, chal_res_7, chal_res_8, chal_res_9, chal_res_10, chal_res_11, chal_res_12, chal_res_13, chal_res_14, function (visitor_code) {
                    //registered user
                    users.write_challenge_exists(user_code, function (challenge_exists) {
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
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home12', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home18', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home24', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home30', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                        res.render('home36', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                        res.render('home42', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home48', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home54', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
                                            top_question: quest.question + "?",
                                            choices: ['yes', 'no', 'no opinion', 'next question']
                                        });
                                    }
                                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                        res.render('home60', {
                                            usercode: visitor_code,
                                            response: user_answer_text,
                                            animated_gif: quest.mm,
                                            quote: quest.text,
                                            quote2: quest.text2,
                                            quote3: quest.text3,
                                            quote4: quest.text4,
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
            else {
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
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home12', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home18', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home24', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home30', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                                res.render('home36', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                                res.render('home42', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home48', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home54', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
                                    top_question: quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                                res.render('home60', {
                                    usercode: visitor_code,
                                    response: user_answer_text,
                                    animated_gif: quest.mm,
                                    quote: quest.text,
                                    quote2: quest.text2,
                                    quote3: quest.text3,
                                    quote4: quest.text4,
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

    app.post('/links/:visitor', function (req, res, next) {
        var links_res = req.body.answer;
        var user_answer_text = "";
        var visitor_code = parseInt(req.params.visitor);
        if (typeof links_res == 'undefined') {
            var answer = "3";
            if (visitor_code < 10) {
                visitor_code = +answer;
                questions.get_default_question(function (quest) {
                    if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home3', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home9', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home15', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home21', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home27', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home33', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home39', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home45', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home51', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home57', {
                            usercode: visitor_code,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
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
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                res.render('home9', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home15', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home21', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home27', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                res.render('home33', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                res.render('home39', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home45', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home51', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
                                    top_question: user_quest.question + "?",
                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                });
                            }
                            else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                res.render('home57', {
                                    usercode: visitor_code,
                                    animated_gif: user_quest.mm,
                                    quote: user_quest.text,
                                    quote2: user_quest.text2,
                                    quote3: user_quest.text3,
                                    quote4: user_quest.text4,
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
            var answer = "0";
            if (visitor_code < 10) {
                visitor_code = +answer;
                questions.get_default_question(function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
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
            else { //registered user
                //write userimps
                users.get_current_user_question(visitor_code, function (question_id) {
                    questions.get_user_question(question_id.current_question, function (quest) {
                        users.get_userimps_array(visitor_code, function (userimps_array) {
                            users.add_to_imps_if_not_present(visitor_code, userimps_array, question_id.current_question, function (result) {
                                users.get_userimps_array(visitor_code, function (userimps_array2) {
                                    questions.cancel_existing_vote(quest, userimps_array2, function (result) {
                                        users.update_user_lol_state_and_vote_status(visitor_code, 0, question_id.current_question, function (result) {
                                            questions.get_yes_votes(quest._id, function (number) {
                                                questions.add_yes_vote(quest._id, ++number, function (result) {
                                                    questions.get_no_votes(quest._id, function (no_vote) {
                                                        users.write_new_userdata(visitor_code, quest, 0, function (result) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    yes_votes: number,
                                                                    no_votes: no_vote,
                                                                    link_list: links,
                                                                    x: quest.mm_yes_x,
                                                                    y: quest.mm_yes_y,
                                                                    file: quest.mm_file_yes,
                                                                    mm_win_size: quest.mm_win_yes_y,
                                                                    user_answer: answer //setting answer in template, but not used later in the program
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
            var answer = "1";
            if (visitor_code < 10) {
                visitor_code = +answer;
                questions.get_default_question(function (quest) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol2', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
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
            else { //registered user
                users.get_current_user_question(visitor_code, function (question_id) {
                    questions.get_user_question(question_id.current_question, function (quest) {
                        users.get_userimps_array(visitor_code, function (userimps_array) {
                            users.add_to_imps_if_not_present(visitor_code, userimps_array, question_id.current_question, function (result) {
                                users.get_userimps_array(visitor_code, function (userimps_array2) {
                                    questions.cancel_existing_vote(quest, userimps_array2, function (result) {
                                        users.update_user_lol_state_and_vote_status(visitor_code, 1, question_id.current_question, function (result) {
                                            questions.get_no_votes(quest._id, function (number) {
                                                questions.add_no_vote(quest._id, ++number, function (result) {
                                                    questions.get_yes_votes(quest._id, function (yes_vote) {
                                                        users.write_new_userdata(visitor_code, quest, 1, function (result) {
                                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                                res.render('lol2', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
                                                                    yes_votes: yes_vote,
                                                                    no_votes: number,
                                                                    link_list: links,
                                                                    x: quest.mm_no_x,
                                                                    y: quest.mm_no_y,
                                                                    file: quest.mm_file_no,
                                                                    mm_win_size: quest.mm_win_no_y,
                                                                    user_answer: 1
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
            var answer = "2";
            if (visitor_code < 10) {
                visitor_code = +answer;
                questions.get_default_question(function (quest) {
                    questions.get_yes_votes(quest._id, function (yes_vote) {
                        questions.get_no_votes(quest._id, function (no_vote) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol3', {
                                    usercode: visitor_code,
                                    top_question: quest,
                                    yes_votes: yes_vote,
                                    no_votes: no_vote,
                                    link_list: links,
                                    mm_win_size: quest.mm_win_all_y,
                                    user_answer: answer
                                });
                            });
                        });
                    });
                });
            }
            else { //registered user
                //write userimps
                users.get_current_user_question(visitor_code, function (question_id) {
                    questions.get_user_question(question_id.current_question, function (quest) {
                        users.get_userimps_array(visitor_code, function (userimps_array) {
                            users.add_to_imps_if_not_present(visitor_code, userimps_array, question_id.current_question, function (result) {
                                users.get_userimps_array(visitor_code, function (userimps_array2) {
                                    questions.cancel_existing_vote(quest, userimps_array2, function (result) {
                                        users.update_user_lol_state_and_vote_status(visitor_code, 2, question_id.current_question, function (result) {
                                            questions.get_yes_votes(quest._id, function (yes_vote) {
                                                questions.get_no_votes(quest._id, function (no_vote) {
                                                    users.write_new_userdata(visitor_code, quest, 2, function (result) {
                                                        lols.get_lol(quest.frame, quest.impression, function (links) {
                                                            res.render('lol3', {
                                                                usercode: visitor_code,
                                                                top_question: quest,
                                                                yes_votes: yes_vote,
                                                                no_votes: no_vote,
                                                                link_list: links,
                                                                mm_win_size: quest.mm_win_all_y,
                                                                user_answer: 2 //setting answer in template, but not used later in the program
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
        else {
            // if usercode < 10, pop message that you have to register to get more questions
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
                        res.render('home5', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home11', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home17', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home23', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home29', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                        res.render('home35', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                        res.render('home41', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home47', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home53', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    }
                    else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                        res.render('home59', {
                            usercode: visitor_code,
                            response: user_answer_text,
                            animated_gif: quest.mm,
                            quote: quest.text,
                            quote2: quest.text2,
                            quote3: quest.text3,
                            quote4: quest.text4,
                            top_question: quest.question + "?",
                            choices: ['yes', 'no', 'no opinion', 'next question']
                        });
                    };
                });
            }
            else {
                users.get_userimps_array(visitor_code, function (userimps_array) {
                    questions.get_question(function (quest) {
                        if (quest.length == userimps_array[0].impressions_array.length) { //user already answered all questions
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
                                            res.render('home4', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home10', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home16', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home22', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home28', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                            res.render('home34', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                            res.render('home40', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home46', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home52', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                            res.render('home58', {
                                                usercode: visitor_code,
                                                response: user_answer_text,
                                                animated_gif: user_quest.mm,
                                                quote: user_quest.text,
                                                quote2: user_quest.text2,
                                                quote3: user_quest.text3,
                                                quote4: user_quest.text4,
                                                top_question: user_quest.question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        };
                                    });
                                });
                            });
                        }
                        else {
                            var found = 1;
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
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 == "")) {
                                            res.render('home72', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                            res.render('home73', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm != "") && (quest[question_index].text != "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                            res.render('home74', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm != "") && (quest[question_index].text == "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                            res.render('home75', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 != "")) {
                                            res.render('home76', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 != "") && (quest[question_index].text4 == "")) {
                                            res.render('home77', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 != "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                            res.render('home78', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm == "") && (quest[question_index].text != "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                            res.render('home79', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
                                                top_question: quest[question_index].question + "?",
                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                            });
                                        }
                                        else if ((quest[question_index].mm == "") && (quest[question_index].text == "") && (quest[question_index].text2 == "") && (quest[question_index].text3 == "") && (quest[question_index].text4 == "")) {
                                            res.render('home80', {
                                                usercode: visitor_code,
                                                animated_gif: quest[question_index].mm,
                                                quote: quest[question_index].text,
                                                quote2: quest[question_index].text2,
                                                quote3: quest[question_index].text3,
                                                quote4: quest[question_index].text4,
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
        }; //main conditional
    }); //post call

    app.post('/links2/:visitor', function (req, res, next) {
        var links_res = req.body.answer;
        var user_answer_text = "";
        var visitor_code = 2;
        var question_code = ObjectID.createFromHexString(req.params.visitor);
        if (typeof links_res == 'undefined') {
            var answer = "3";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { //look up question with ID
                if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home3', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home9', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home15', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home21', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home27', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home33', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home39', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home45', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home51', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home57', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
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
                lols.get_lol(quest.frame, quest.impression, function (links) {
                    res.render('lol10', {
                        usercode: question_code,
                        top_question: quest,
                        yes_votes: quest.yes,
                        no_votes: quest.no,
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
        else if (links_res == 'no') {
            var answer = "1";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { //look up with ID
                lols.get_lol(quest.frame, quest.impression, function (links) {
                    res.render('lol11', {
                        usercode: question_code,
                        top_question: quest,
                        yes_votes: quest.yes,
                        no_votes: quest.no,
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
        else if (links_res == 'no opinion') {
            var answer = "2";
            visitor_code = +answer;
            questions.get_user_question(question_code, function (quest) { //look up with ID
                questions.get_yes_votes(quest._id, function (yes_vote) {
                    questions.get_no_votes(quest._id, function (no_vote) {
                        lols.get_lol(quest.frame, quest.impression, function (links) {
                            res.render('lol12', {
                                usercode: question_code,//question code
                                top_question: quest,
                                yes_votes: yes_vote,
                                no_votes: no_vote,
                                link_list: links,
                                mm_win_size: quest.mm_win_all_y,
                                user_answer: answer
                            });
                        });
                    });
                });
            });
        };
    }); //post call

    app.get('/flip/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    if (visitor_code == 0) {
                        visitor_code = 4; //flip
                    }
                    else if (visitor_code == 1) {
                        visitor_code = 5; //flip
                    }
                    else if (visitor_code == 4) {
                        visitor_code = 0; //flip
                    }
                    else if (visitor_code == 5) {
                        visitor_code = 1; //flip
                    };

                    if ((visitor_code == 0) || (visitor_code == 5)) {
                        questions.get_default_question(function (quest) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol6', { //yes template
                                    usercode: visitor_code,
                                    top_question: quest,
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
                    }
                    else if ((visitor_code == 1) || (visitor_code == 4)) {
                        questions.get_default_question(function (quest) {
                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                res.render('lol7', { // no template
                                    usercode: visitor_code,
                                    top_question: quest,
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
                    }
                    else if (visitor_code == 2) {
                        questions.get_default_question(function (quest) {
                            questions.get_yes_votes(quest._id, function (yes_vote) {
                                questions.get_no_votes(quest._id, function (no_vote) {
                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                        res.render('lol5', {
                                            usercode: visitor_code,
                                            top_question: quest,
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
                    else if (visitor_code == 3) {
                        questions.get_default_question(function (quest) {
                            questions.get_yes_votes(quest._id, function (yes_vote) {
                                questions.get_no_votes(quest._id, function (no_vote) {
                                    lols.get_lol(quest.frame, quest.impression, function (links) {
                                        res.render('lol4', {
                                            usercode: visitor_code,
                                            top_question: quest,
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
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/flip2/:visitor', function (req, res, next) { //still need to display default if not valid question code (error)
        "use strict";
        var question_code = ObjectID.createFromHexString(req.params.visitor);
        questions.get_user_question(question_code, function (quest) {
            questions.get_yes_votes(question_code, function (yes_vote) {
                questions.get_no_votes(question_code, function (no_vote) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol9', {
                            usercode: question_code,
                            top_question: quest,
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

    app.get('/flip3/:visitor', function (req, res, next) {
        "use strict";
        var question_code = ObjectID.createFromHexString(req.params.visitor);
        questions.get_user_question(question_code, function (quest) {
            lols.get_lol(quest.frame, quest.impression, function (links) {
                res.render('lol11', {
                    usercode: question_code,
                    top_question: quest,
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

    app.get('/flip4/:visitor', function (req, res, next) {
        "use strict";
        var question_code = ObjectID.createFromHexString(req.params.visitor);
        questions.get_user_question(question_code, function (quest) {
            lols.get_lol(quest.frame, quest.impression, function (links) {
                res.render('lol10', {
                    usercode: question_code,
                    top_question: quest,
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

    app.get('/flip5/:visitor', function (req, res, next) {
        "use strict";
        var question_code = ObjectID.createFromHexString(req.params.visitor);
        questions.get_user_question(question_code, function (quest) {
            questions.get_yes_votes(question_code, function (yes_vote) {
                questions.get_no_votes(question_code, function (no_vote) {
                    lols.get_lol(quest.frame, quest.impression, function (links) {
                        res.render('lol12', {
                            usercode: question_code,
                            top_question: quest,
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

    app.get('/links/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = parseInt(req.params.visitor);
        var new_visitor = false;
        if ((visitor_code > -1) && (visitor_code < 10)) {
            new_visitor = true;
        };
        if ((visitor_code > -1) && (visitor_code < 100000000)) {         //max 100,000,000 visitors
            users.check_valid_usercode(visitor_code, function (valid) {
                if (valid || new_visitor) {
                    questions.get_question(function (quest) {
                        res.render('visitor_info3', {
                            usercode: visitor_code,
                            questions_list: quest
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
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });

    app.get('/links2/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = 2;
        questions.get_question(function (quest) {
            res.render('visitor_info3', {
                usercode: visitor_code,
                questions_list: quest
            });
        });
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
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                };
            });
        };
    });


    app.get('/search2/:visitor', function (req, res, next) {
        "use strict";
        var visitor_code = 3;
        res.render('search', {
            usercode: visitor_code
        });
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
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home7', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home13', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home19', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home25', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                            res.render('home31', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                            res.render('home37', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home43', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home49', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
                                top_question: quest.question + "?",
                                choices: ['yes', 'no', 'no opinion']
                            });
                        }
                        else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                            res.render('home55', {
                                usercode: visitor_code,
                                animated_gif: quest.mm,
                                quote: quest.text,
                                quote2: quest.text2,
                                quote3: quest.text3,
                                quote4: quest.text4,
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
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home7', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home13', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home19', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm != "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home25', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 != "")) {
                    res.render('home31', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 != "") && (quest.text4 == "")) {
                    res.render('home37', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 != "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home43', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text != "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home49', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
                        top_question: quest.question + "?",
                        choices: ['yes', 'no', 'no opinion']
                    });
                }
                else if ((quest.mm == "") && (quest.text == "") && (quest.text2 == "") && (quest.text3 == "") && (quest.text4 == "")) {
                    res.render('home55', {
                        usercode: visitor_code,
                        animated_gif: quest.mm,
                        quote: quest.text,
                        quote2: quest.text2,
                        quote3: quest.text3,
                        quote4: quest.text4,
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
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                                res.render('home12', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home18', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home24', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home30', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                                                res.render('home36', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                                res.render('home42', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home48', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home54', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
                                                                                    top_question: user_quest.question + "?",
                                                                                    choices: ['yes', 'no', 'no opinion', 'next question']
                                                                                });
                                                                            }
                                                                            else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                                res.render('home60', {
                                                                                    usercode: visitor_code,
                                                                                    response: user_answer_text,
                                                                                    animated_gif: user_quest.mm,
                                                                                    quote: user_quest.text,
                                                                                    quote2: user_quest.text2,
                                                                                    quote3: user_quest.text3,
                                                                                    quote4: user_quest.text4,
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
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                            res.render('home12', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home18', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home24', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home30', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                                            res.render('home36', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                                            res.render('home42', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home48', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home54', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
                                                                                top_question: user_quest.question + "?",
                                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                                            });
                                                                        }
                                                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                                            res.render('home60', {
                                                                                usercode: visitor_code,
                                                                                response: user_answer_text,
                                                                                animated_gif: user_quest.mm,
                                                                                quote: user_quest.text,
                                                                                quote2: user_quest.text2,
                                                                                quote3: user_quest.text3,
                                                                                quote4: user_quest.text4,
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
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                            res.render('home12', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home18', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home24', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm != "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home30', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 != "")) {
                                                            res.render('home36', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 != "") && (user_quest.text4 == "")) {
                                                            res.render('home42', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 != "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home48', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text != "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home54', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
                                                                top_question: user_quest.question + "?",
                                                                choices: ['yes', 'no', 'no opinion', 'next question']
                                                            });
                                                        }
                                                        else if ((user_quest.mm == "") && (user_quest.text == "") && (user_quest.text2 == "") && (user_quest.text3 == "") && (user_quest.text4 == "")) {
                                                            res.render('home60', {
                                                                usercode: visitor_code,
                                                                response: user_answer_text,
                                                                animated_gif: user_quest.mm,
                                                                quote: user_quest.text,
                                                                quote2: user_quest.text2,
                                                                quote3: user_quest.text3,
                                                                quote4: user_quest.text4,
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
                lols.get_lol(quest.frame, quest.impression, function (links) {
                    if (visitor_code == 0) {
                        res.render('lol13', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if (visitor_code == 1) {
                        res.render('lol14', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if ((visitor_code == 2) || (visitor_code == 3)) {
                        res.render('lol15', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if (visitor_code == 4) {
                        res.render('lol14', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if (visitor_code == 5) {
                        res.render('lol13', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    };
                });
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
                                                        res.render('lol2', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
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
                                                                res.render('lol3', {
                                                                    usercode: visitor_code,
                                                                    top_question: quest,
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
                                                        res.render('lol3', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
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
                                                    res.render('lol3', {
                                                        usercode: visitor_code,
                                                        top_question: quest,
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
                lols.get_lol(quest.frame, quest.impression, function (links) {
                    if (visitor_code == 0) {
                        res.render('lol13', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if (visitor_code == 1) {
                        res.render('lol14', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if ((visitor_code == 2) || (visitor_code == 3)) {
                        res.render('lol15', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if (visitor_code == 4) {
                        res.render('lol14', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y,
                        });
                    }
                    else if (visitor_code == 5) {
                        res.render('lol13', {
                            usercode: visitor_code,
                            top_question: quest,
                            yes_votes: quest.yes,
                            no_votes: quest.no,
                            link_list: links,
                            x: quest.mm_yes_x,
                            y: quest.mm_yes_y,
                            file: quest.mm_file_yes,
                            mm_win_size: quest.mm_win_yes_y
                        });
                    };
                });
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
                        lols.check_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (found) {
                            if (found) {
                                lols.delete_dislike_already_in_flip_dislikes_array(visitor_code, links_res, function (result) {
                                    lols.decrement_flip_dislikes(links_res, function (result) {
                                        questions.get_user_question(question_res, function (quest) {
                                            lols.get_lol(quest.frame, quest.impression, function (links) {
                                                res.render('lol2', {
                                                    usercode: visitor_code,
                                                    top_question: quest,
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
                                                        res.render('lol2', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
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
                                                        res.render('lol3', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
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
                                                        res.render('lol3', {
                                                            usercode: visitor_code,
                                                            top_question: quest,
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
                    };
                } //end if valid
                else {
                  //no op
                }; //end not valid
            });
        };//end else
    });

    app.use(errorHandler);

    var server = app.listen(3000, function () {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });

});

