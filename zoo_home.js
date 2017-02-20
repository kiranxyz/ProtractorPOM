var zoo_home = function(){
    // var name = "person.name";
    var name = element(by.model("person.name"));

    this.enterName =  function(value){
        name.sendKeys(value);
    };


};

module.exports = new zoo_home();