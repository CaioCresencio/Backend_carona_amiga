'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Car = use('App/Models/Car')

/**
 * Resourceful controller for interacting with cars
 */
class CarController {
  /**
   * Show a list of all cars.
   * GET cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params }) {
    const cars = await Car.query().where('user_id',params.users_id).with('user').fetch()
    return cars
  }



  /**
   * Create/save a new car.
   * POST cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, params, auth }) {
    const data = request.only(['model','color','plate'])
    const car = await Car.create({...data, user_id: params.users_id})
    return car
  }

  /**
   * Display a single car.
   * GET cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const car = await Car.findOrFail(params.id)
  
    return car
  }


  /**
   * Update car details.
   * PUT or PATCH cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const car = await Car.findOrFail(params.id)
    const data = request.only(['model','color','plate'])

    car.merge(data)
    await car.save()

    return car

  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const car = await Car.findOrFail(params.id)
    
    await car.delete()
  }
}

module.exports = CarController
