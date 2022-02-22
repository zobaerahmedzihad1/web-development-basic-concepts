// common class
class Support {
    name;
    id;
    address= "Bangladesh";
    designation= 'support web dev';
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}

// web support dev
class WebSupport extends Support {
    groupSupportTime ;
    constructor(name, id,time){
       super(name,id)
        this.groupSupportTime = time;
    }
    startSassion(){
        console.log(`Hey ${this.name} your Id ${this.id} please start a session from ${this.address}.`);
    }
}

// student care class
class StudentCare extends Support {
    appVersion;
    constructor(id, name, version){
        super(id, name)
        this.appVersion = version;
    }

    buildARoutine(){
        console.log(`Please build a rouitine for ${this.name}`);
    }
}


// calling support dev
const zihad = new WebSupport('zihad', 1, 12)
console.log(zihad);
// zihad.startSassion()
// const karima = new WebSupport('karima', 2)
// console.log(karima);

// calling student care
const alia = new StudentCare('alia',7,"9.3.4")
console.log(alia);