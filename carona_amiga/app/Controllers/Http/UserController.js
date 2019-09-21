'use strict'

const User = use('App/Models/User')
const Database = use('Database')
class UserController {
    async store ({ request }) {
        const data = request.only(['username','email','password','university_id']);

        const user = await User.create(data)

        return user
    }

    async show({ params }){
        
        const user = await User.findByOrFail('email',params.email)
        return user
    }
    async update( {params, request}){
        const user = await User.findOrFail(params.id)
        const data = await request.only(['username'])

        user.merge(data)
        await user.save()
    }
    async listAll(){
        const data = await Database.select('username', 'email').from('users')
        return data
    }
}

module.exports = UserController
