const users = [
    {
        name: 'hyune',
        age: 20,
        gender: 'male'
    },
    {
        name: 'suhyune',
        age: 20,
        gender: 'female'
    },
    {
        name: 'minseok',
        age: 21,
        gender: 'male' 
    }
]

const resolvers = {
    Query: {
        name: () => 'Hyune',
        users: () => users,
        user: (_, {name}) => users.filter(user => user.name === name)[0]
    }
}

export default resolvers