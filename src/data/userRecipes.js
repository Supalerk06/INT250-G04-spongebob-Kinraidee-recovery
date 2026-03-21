import Dexie from 'dexie'

export const db = new Dexie('RecipeDB')

db.version(1).stores({
  recipes: '++id, name'
})