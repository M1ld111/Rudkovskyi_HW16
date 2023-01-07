// Написати функцію isEmpty яка буде приймати в параметри обʼєкт і перевіряти чи він пустий. 
// Виводитиме "object is empty" або "object is full of properties" (якщо знайшли більше одної властивості) :)

const object = {
    name: 'Object',
    value: 'no value',
}

function isEmpty(obj) {
    if (Object.keys(obj) == 0) {
        return 'object is empty'
    } else {
        return 'object is full of properties'
    }
}

console.log(isEmpty(object));

// Написати функцію hireNewEmployee, яка прийматиме в параметри обʼєкт employee та вертатиме 
// 'You're Hired! Congrats!' чи 'Not hired: sorry we cannot hire you. Here is why: ', reason). 
// Де в reason буде масив властивостей по яким не підійшов працівник.



const academyStudent001 = {};
Object.defineProperty(academyStudent001, 'name', {value: 'Shikamaru Nara', writable: true});
Object.defineProperty(academyStudent001, 'age', {value: 12, writable: true});
Object.defineProperty(academyStudent001, 'techniques', {value: 15, writable: true});
Object.defineProperty(academyStudent001, 'ninjutsu', {value: 64, writable: true});
Object.defineProperty(academyStudent001, 'taijutsu', {value: 81, writable: true});
Object.defineProperty(academyStudent001, 'genjutsu', {value: 34, writable: true});

function genin(obj, func) {
    const lieFunc = func;
    const reason = [];
    if (obj.age < 12) {
        reason.push('you have to be 12 to be a ninja')   
    }
    if (obj.techniques <= 10) {
        reason.push('you have to know at least 10 techniques to be a ninja')
    }
    if (obj.ninjusu <= 20 || obj.taijutsu <= 20 || obj.genjutsu <= 20) {
        reason.push('you have not enought skills to be a ninja')
    }

    if (reason.length != 0) {
        return (`${obj.name}, sorry, but ${reason}`)
    } else {
        return (`${obj.name}! Today You can call yourself a ninja. Find your ninja way!`)
    }
}

console.log(genin(academyStudent001));

// Advanced: отримати користь з дескрипторів. Під час перевірки працівника намагатись викликати функцію lieToEmployer 
// в якій будете намагатись напряму змінити властивості обʼєкта працівника(employee). 
// Емулюйте випадки коли збрехати вдалось а коли ні.

const academyStudent002 = {};
Object.defineProperty(academyStudent002, 'name', {value: 'Naruto Uzumaki', writable: true});
Object.defineProperty(academyStudent002, 'age', {value: 12, writable: true});
Object.defineProperty(academyStudent002, 'techniques', {value: 6, writable: true});
Object.defineProperty(academyStudent002, 'ninjutsu', {value: 64, writable: true});
Object.defineProperty(academyStudent002, 'taijutsu', {value: 81, writable: true});
Object.defineProperty(academyStudent002, 'genjutsu', {value: 7, writable: true});

function lie(obj) {
    if (Math.random() <= 0.5) {
        return (obj.age = 12,
        obj.techniques = 20,
        obj.ninjutsu = 100,
        obj.taijutsu = 100,
        obj.genjutsu = 100)
    }
}

console.log(genin(academyStudent002, lie(academyStudent002)))