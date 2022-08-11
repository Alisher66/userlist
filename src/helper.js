export const roles = [
    {role: 'teacher', order: 2},
    {role: 'moderator', order: 1},
    {role: 'admin', order: 0},
]

export const sortOf = (users, asc, key) => {
    let tempArr = [...users];
    if (asc) {
        tempArr.sort((a, b) => {
            if (a[key] > b[key]) {
                return 1
            } else if (a[key] < b[key]) {
                return -1
            } else return 0;
        })
        return tempArr
    } else {
        tempArr.sort((a, b) => {
            if (a[key] > b[key]) {
                return -1
            } else if (a[key] < b[key]) {
                return 1
            } else return 0;
        })
        return tempArr
    }
}

export const sortOfRole = (users, asc) => {
    let tempUsers = [...users];
    if (asc) {
        tempUsers.sort((a, b) => {
            let first = roles.find(item => item.role == a.role)
            let second = roles.find(item => item.role == b.role)
            if (first.order > second.order) {
                return 1
            } else if (first.order < second.order) {
                return -1
            } else return 0;
        })
        return tempUsers
    } else {
        tempUsers.sort((a, b) => {
            let first = roles.find(item => item.role == a.role)
            let second = roles.find(item => item.role == b.role)
            if (first.order > second.order) {
                return -1
            } else if (first.order < second.order) {
                return 1
            } else return 0;
        })
        return tempUsers
    }
}