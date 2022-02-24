// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(first, last) {
    return {
        firstName: first,
        lastName: last
    }
}

function setAge(user, userAge) {
    user.age = userAge
    return user
}

function incrementAge(user) {
    user.age = user.age + 1
    return user
}

function fixCar(car) {
    car.needsMaintenance = false
    return car
}

function addGrades(student, newGrades) {
    student.grades = student.grades.concat(newGrades)
    return student
}

function getDataType(object, key) {
    return typeof object[key]
}

function addTodo(todos, newTodo) {
    todos.push(newTodo)
    return todos
}

function addSong(playlist, song) {
    playlist.duration += song.duration
    playlist.songs.push(song)
    return playlist
}

function updateReportCard(reportCard, newGrade) {
    reportCard.grades.push(newGrade)
    reportCard.lowestGrade = Math.min(...reportCard.grades)
    reportCard.highestGrade = Math.max(...reportCard.grades)

    let sum = 0
    for (let grade of reportCard.grades) {
        sum += grade
    }

    reportCard.averageGrade = sum / reportCard.grades.length

    return reportCard
}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
