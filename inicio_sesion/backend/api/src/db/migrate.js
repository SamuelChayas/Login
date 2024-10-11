import postgres from 'postgres';
import{migrate} from 'drizzle-orm/postgres-js/migrator';
import{drizzle} from 'drizzle-orm/postgres-js';

const migrationcLient= postgres(process.env.CONNECTION_STRING,{
    max:1
})

const db= drizzle(migrationcLient);
const main= async()=>{
    try {
        await migrate(db, {
            migrationsFolder:'./src/db/migrations',
        })
        console.log('FINALIZADO EXITOSAMENTE😘');
        process.exit(0);
    } catch (error) {
        console.log('ERROR😣', error);
        process.exit(1);
    }
}
main();