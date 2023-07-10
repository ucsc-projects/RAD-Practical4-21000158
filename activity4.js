class Employee {
    empNo
    name
    address
    contact
    nic
    joinDate
    designation
    salary

    arriveDuty() {
        console.log("Arrives at " + new Date().getTime())
    }

    leaveDuty() {
        console.log("Leaves at " + new Date().getTime())
    }

    informLunchPreference(lunch) {
        console.log("I prefer " + lunch + " for lunch")
    }

    informLeave(date, noOfDays, reason) {
        console.log(`I want to get leave on ${date} for ${noOfDays} days because of ${reason}`)
    }
}

class Contract extends Employee {
    duration = "1 Year"
}

class Temporary extends Employee {
    duration = "6 Months"
}


