//  Due: Fri (Oct 21)

/**
 * Q1. Print the object data as mentioned above.
 */
 let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

 for (prop in student1_1) {
    if (prop !== 'pastJobs' && prop !== 'knownSkills') {
        console.log(`${prop} : ${student1_1[prop]}`);
    } else if (prop === 'pastJobs') {
        let pastJobsStatus = ''
        if (student1_1.anyExperience) {
            pastJobsStatus = `Yes (${student1_1[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${pastJobsStatus}`);
        for (exp of student1_1[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    } else {
        
    }
 }

 let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

 for (prop in student1_2) {
    if (prop !== 'pastJobs' && prop !== 'knownSkills') {
        console.log(`${prop} : ${student1_2[prop]}`);
    } else if (prop === 'pastJobs') {
        let pastJobsStatus = ''
        if (student1_2.anyExperience) {
            pastJobsStatus = `Yes (${student1_2[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${pastJobsStatus}`);
        for (exp of student1_2[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    } else {
        
    }
 }

/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
const isIncludes_Baseball = favSports_1.includes('Baseball');
console.log(`\n"Baseball" is not present in the given array -> ${isIncludes_Baseball}`);

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
const isIncludes_Baseball2 = favSports_2.includes('Baseball');
console.log(`\n"Baseball" is present only once in the given array-> ${isIncludes_Baseball2}`);

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
const isIncludes_Baseball3 = favSports_3.includes('Baseball');
console.log(`\n"Baseball" has second occurrence at index 4 ->${isIncludes_Baseball3}`);

/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */

 let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

/**
 * student1.pastJobs = [{}, {}, {}]
 * totalExp = 0;
 * 
    [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ]

        obj = {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        }

        obj.numOfYears -> 2
        total = total + obj.numOfYears

        obj = {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        }

        obj.numOfYears -> 3
        total = total + obj.numOfYears

        obj = {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }

        obj.numOfYears -> 4
        total = total + obj.numOfYears

        for (obj of student1.pastJobs) {
            total = total + obj.numOfYears
        }

        if (anyExperience) {
            log(studentName has total X-years of experience)
        } else {
            log(studentName has no past experience)
        }

 * 
 */

 for (prop in student3_1) {
    if (prop !== 'pastJobs' && prop !== 'knownSkills') {
        console.log(`${prop} : ${student3_1[prop]}`);
    } else if (prop === 'pastJobs') {
        let pastJobsStatus = ''
        if (student3_1.anyExperience) {
            pastJobsStatus = `Yes (${student3_1[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${pastJobsStatus}`);
        for (exp of student3_1[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    } else {
        let knownSkills = ''
        if (student3_1.anyExperience) {
            knownskillsStatus = `Yes (${student3_1[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${knownskillsStatus}`);
        for (exp of student3_1[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    }
 }

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

for (prop in student3_2) {
    if (prop !== 'pastJobs' && prop !== 'knownSkills') {
        console.log(`${prop} : ${student3_2[prop]}`);
    } else if (prop === 'pastJobs') {
        let pastJobsStatus = ''
        if (student3_2.anyExperience) {
            pastJobsStatus = `Yes (${student3_2[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${pastJobsStatus}`);
        for (exp of student3_2[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    } else {
        let knownSkills = ''
        if (student3_2.anyExperience) {
            knownskillsStatus = `Yes (${student3_2[prop].length})`
        } else {
            pastJobsStatus = 'No'
        }
        console.log(`${prop} : ${knownskillsStatus}`);
        for (exp of student3_2[prop]) {
            for (jobProp in exp) {
                console.log(`\t${jobProp} : ${exp[jobProp]}`);
            }
            console.log('\n');
        }
    }
 }
