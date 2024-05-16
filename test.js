function decorator(a,b) {
    console.log(a,b)
}


const test =  @decorator() (aze) => {
    console.log(aze)
}

test("lol")