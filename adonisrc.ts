import { defineConfig } from '@adonisjs/core/app'

export default defineConfig({
  commands: [() => import('@adonisjs/core/commands'), () => import('@adonisjs/lucid/commands')],

  providers: [
    () => import('@adonisjs/core/providers/app_provider'),
    () => import('@adonisjs/core/providers/hash_provider'),
    () => import('@adonisjs/core/providers/repl_provider'),
    () => import('@adonisjs/session/session_provider'),
    () => import('@adonisjs/lucid/database_provider'),
    () => import('@adonisjs/view/view_provider'),
  ],

  preloads: [() => import('./start/routes.js')],

  tests: {
    suites: [
      {
        name: 'functional',
        files: ['tests/functional/**/*.spec.ts'],
        timeout: 30000,
      },
    ],
  },

  metaFiles: [
    {
      pattern: 'resources/views/**/*.edge',
      reloadServer: true,
    },
  ],
})
