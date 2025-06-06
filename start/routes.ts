/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@adonisjs/core/services/router'
import ExplorersController from '#controllers/explorers_controller'

Route.get('/', async () => {
  return 'Galactic Explorer Registry'
})

Route.get('/register', [ExplorersController, 'showForm'])
Route.post('/register', [ExplorersController, 'store'])
Route.get('/explorers', [ExplorersController, 'list'])
