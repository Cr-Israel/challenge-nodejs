import { randomUUID } from "node:crypto"

import { Database } from "../database/database.js"
import { buildRoutePath } from "../utils/build-route-path.js"

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      const { search } = request.query

      const tasks = database.select('tasks', search ? {
        title: search,
        description: search
      } : null)

      return response.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      const { title, description } = request.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }

      database.insert('tasks', task)

      return response.writeHead(201).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params
      const { title, description } = request.body

      database.update('tasks', id, {
        title,
        description,
        updated_at: new Date()
      })

      return response.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (request, response) => {
      const { id } = request.params

      const [task] = database.select('tasks', { id })

      if(!task) {
        return response.writeHead(404).end()
      }

      const taskCompleted = !!task.completed_at
      const completed_at = taskCompleted ? null : new Date()

      database.update('tasks', id, { completed_at })

      return response.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params

      database.delete('tasks', id)

      response.writeHead(204).end()
    }
  },
]