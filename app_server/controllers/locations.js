/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Deepika hospital - 24/7 services',
        pageHeader: {
            title: 'Deepika hospital',
            strapline: '24/7 services'
        },
        sidebar: "Welcome to Deepika hospital, a leading healthcare hospital dedicated to providing high-quality and compassionate medical services.we offer a comprehensive range of medical services.",
        locations: [{
            name: 'Medical and Surgical Services',
            rating: 3,
            facilities: [ 'medical diagnoses', 'surgeries','Primary care','Pharmacy Services'],
            href: '/location/1'
        }, {
            name: 'Emergency and Urgent Care',
            rating: 4,
            facilities: ['Emergency room', 'Urgent care center', 'primary care clinics'],
            href: '/location/2'
        }, {
            name: 'Laboratory Services',
            rating: 2,
            facilities: ['Blood test', 'Urin test','Metabolic test','Thyroid test'],
            href: '/location/3'
        }]
    });
  };
  
  /* GET 'Location info' page */
  module.exports.locationInfo1 = function(req, res) {
    res.render('location-info1', {
        title: 'Medical and Surgical Services',
        pageHeader: {
            title: 'Medical and Surgical Services'
        },
        sidebar: {
            context: 'Medical services encompass a broad range of preventive, diagnostic, therapeutic, and supportive services provided by healthcare professionals.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Medical and Surgical Services',
            rating: 3,
            facilities: ['medical diagnoses', 'surgeries','Primary care','Pharmacy Services'],
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '10:00am',
                closing: '12:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '10:00am',
                closing: '3:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Ajay',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'Services are good.'
            }, {
                author: 'Ramya',
                rating: 3,
                timestamp: '30 Feb 2013',
                reviewText: 'It was okay.'
            }]
        }
    });
  };

    /* GET 'Location info' page */
    module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'Emergency and Urgent Care',
            pageHeader: {
                title: 'Emergency and Urgent Care'
            },
            sidebar: {
                context: 'Emergency care is designed for situations that pose an immediate threat to life or limb.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Emergency and Urgent Care',
                rating: 4,
                facilities: ['Emergency room', 'Urgent care center', 'primary care clinics'],
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: false
                }],
                reviews: [{
                    author: 'Swetha',
                    rating: 5,
                    timestamp: '02 July 2013',
                    reviewText: 'Nice.'
                }, {
                    author: 'Charlie',
                    rating: 3,
                    timestamp: '19 June 2013',
                    reviewText: 'It was okay.'
                }]
            }
        });
      };

        /* GET 'Location info' page */
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', {
        title: 'Laboratory Services',
        pageHeader: {
            title: 'Laboratory Services'
        },
        sidebar: {
            context: ' Laboratories perform various tests on samples such as blood, urine, tissues, and other bodily fluids to assist in diagnosing and monitoring medical conditions..',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Laboratory Services',
            rating: 2,
            facilities: ['Blood test', 'Urin test','Metabolic test','Thyroid test'],
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview1 = function(req, res) {
    res.render('location-review-form1', {
        title: 'Review Medical and Surgical Services',
        pageHeader: {
            title: 'Review Medical and Surgical Services'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review Emergency and Urgent Care',
        pageHeader: {
            title: 'Review Emergency and Urgent Care'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review Laboratory Services',
        pageHeader: {
            title: 'Review Laboratory Services'
        }
    });
  };