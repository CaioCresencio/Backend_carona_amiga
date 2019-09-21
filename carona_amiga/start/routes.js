'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users','UserController.store').validator('User/Create')
Route.post('sessions','SessionController.store')
Route.post('passwords','ForgotPasswordController.store')
Route.put('passwords','ForgotPasswordController.update')
Route.get('users/:email','UserController.show')
Route.get('users','UserController.listAll')


Route.group( () => {
    Route.resource('users.cars','CarController').apiOnly()
    Route.post('users/:id','UserController.update').validator('User/Update')
}).middleware(['auth'])
