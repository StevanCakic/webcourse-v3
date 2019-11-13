// overriding original Promise.prototype.then/catch just to add some logs
(function (Promise) {
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;

    Promise.prototype.then = function () {
        console.log('> > > > > > called .then on %o with arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function () {
        console.log('> > > > > > called .catch on %o with arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);



// calling catch on an already resolved promise
Promise.resolve().catch(function XXX() { });

// logs:
// > > > > > > called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// > > > > > > called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]

// Zakomentarisati dio iznad da bi ostalo radilo!

function primjer1() {
    var p1 = new Promise(function (resolve, reject) {
        resolve('Success');
    });

    p1.then(function (value) {
        console.log(value); // "Success!"
        throw 'oh, no!';
    }).catch(function (e) {
        console.log(e); // "oh, no!"
    }).then(function () {
        console.log('after a catch the chain is restored');
    }, function () {
        console.log('Not fired due to the catch');
    });

    // The following behaves the same as above
    p1.then(function (value) {
        console.log(value); // "Success!"
        return Promise.reject('oh, no!');
    }).catch(function (e) {
        console.log(e); // "oh, no!"
    }).then(function () {
        console.log('after a catch the chain is restored');
    }, function () {
        console.log('Not fired due to the catch');
    });
}

function primjer2() {
    // Throwing an error will call the catch method most of the time
    var p1 = new Promise(function (resolve, reject) {
        throw 'Uh-oh!';
    });

    p1.catch(function (e) {
        console.log(e); // "Uh-oh!"
    });

    // Errors thrown inside asynchronous functions will act like uncaught errors
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            throw 'Uncaught Exception!';
        }, 1000);
    });

    p2.catch(function (e) {
        console.log(e); // This is never called
    });

    // Errors thrown after resolve is called will be silenced
    var p3 = new Promise(function (resolve, reject) {
        resolve();
        throw 'Silenced Exception!';
    });

    p3.catch(function (e) {
        console.log(e); // This is never called
    });
}

function primjer3() {
    //Create a promise which would not call onReject
    var p1 = Promise.resolve("calling next");

    var p2 = p1.catch(function (reason) {
        //This is never called
        console.log("catch p1!");
        console.log(reason);
    });

    p2.then(function (value) {
        console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
        console.log(value); /* calling next */
    }, function (reason) {
        console.log("next promise's onRejected");
        console.log(reason);
    });
}

primjer3()