class Dog{
    breed
    age
    color


    constructor(breed, age, color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    eat(){
        console.log(`${this.breed} is Eating`)
    }
    sleep(){
        console.log(`${this.breed} is Sleeping`)
    }
    sit(){
        console.log(`${this.breed} is Sitting`)
    }
    run(){
        console.log(`${this.breed} is Running`)
    }
}

dog1 = new Dog("Pug","3 Years","Black")
dog2 = new Dog("Boxer","2 Years","White")
dog3 = new Dog("Poodle","1 Years","Brown")

console.log(dog1.breed)
dog1.sleep()

console.log("\n"+dog2.breed)
dog2.sleep()

console.log("\n"+dog3.breed)
dog3.sleep()
