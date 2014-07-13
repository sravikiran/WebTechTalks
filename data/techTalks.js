var techTalks=[{ "title": "Getting started with jQuery", "speaker": "John Resig", "category": "jQuery", "duration": "2", "level": "Beginner", "rating": "Very Good" },
    { "title": "Responsive design using CSS3", "speaker": "Shawn Wildermuth", "category": "CSS3", "duration": "3", "level": "Intermediate", "rating": "Good" },
    { "title": "Abstractions in Angular JS", "speaker": "Scott Allen", "category": "JavaScript", "duration": "1", "level": "Jump Start", "rating": "Excellent" },
    { "title": "Test first front-end development", "speaker": "Elijah Manor", "category": "JavaScript", "duration": "2", "level": "Advanced", "rating": "Very Good" },
    { "title": "Designing made easy with Twitter Bootstrap", "speaker": "Mark Otto", "category": "CSS3", "duration": "2", "level": "Beginner", "rating": "Very Good" }];

exports.getAllTalks=function(){
    return techTalks;
};

exports.addTalk = function(talk){
    techTalks.push(talk);
};

exports.editTalk = function(talk){
    var counter=0;
    for(counter=0;counter<techTalks.length; counter++){
        console.log(techTalks[counter].title +'   '+ talk.title);
        if(techTalks[counter].title === talk.title){
            break;
        }
    }
    console.log(counter + '   '+ techTalks.length);
    if(counter === techTalks.length){
        return -1;
    }
    else{
        console.log(techTalks[counter]);
        techTalks[counter] = talk;
        return 0;
    }
};

exports.deleteTalk=function(title){
    var counter=-0;
    for(counter=0;counter<techTalks.length; counter++){
        if(techTalks[counter].title === title){
            break;
        }
    }

    if(counter === techTalks.length){
        return -1;
    }
    else{
        techTalks.splice(counter,1);
        return 0;
    }
};

exports.getATalk = function (title) {
    var counter=-0;
    for(counter=0;counter<techTalks.length; counter++){
        if(techTalks[counter].title === title){
            return techTalks[counter];
        }
    }
    return {};
};