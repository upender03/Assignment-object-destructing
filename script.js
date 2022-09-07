const employees = {
    engineers: {
        0: {
            id: 1,
            name: "chharan",
            occupation: "Back-end Engineer"
        },
        1: {
            id: 2,
            name: "mohan",
            occupation: "Front-end Engineer"
        },
    }
};
const {
    engineers: {
        1: {
            id,
            name,
            occupation,
        },
    },
} = employees;

console.log(id);
console.log(name);
console.log(occupation);
