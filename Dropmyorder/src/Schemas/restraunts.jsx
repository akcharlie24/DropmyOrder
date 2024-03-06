import { Dexie } from 'dexie';

const db = new Dexie('RestaurantDB');

db.version(1).stores({
    restraunts: '++id, name, starRating, timeToDeliver, priceForTwo'
});

export default db;