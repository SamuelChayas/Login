import { pgTable, serial, text, timestamp, varchar, integer, decimal } from 'drizzle-orm/pg-core';

export const usuarios = pgTable('usuarios', {
    id: serial('id').primaryKey(),
    nombre: varchar('nombre', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    salt: varchar('salt', { length: 64 }),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
    roleId: serial('role_id').references(() => roles.id),
});

export const roles = pgTable('roles', {
    id: serial('id').primaryKey(),
    rolename: varchar('rolename', 50).unique(),
});


export const servicios = pgTable('servicios', {
    id: serial('id').primaryKey(),
    nombre: varchar('nombre', { length: 255 }).notNull(),
    descripcion: text('descripcion'),
    precio: integer('precio').notNull(),
    stock: integer('stock').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});

export const reservacionesServicios = pgTable('reservaciones_servicios', {
    id: serial('id').primaryKey(),
    servicio_id: integer('servicio_id').references(() => servicios.id).notNull(),
    usuario_id: integer('usuario_id').references(() => usuarios.id).notNull(),
    fecha_reserva: timestamp('fecha_reserva').notNull(),
    estado: integer('estado').notNull(), 
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const habitaciones = pgTable('habitaciones', {
    id: serial('id').primaryKey(),
    numero: varchar('numero', { length: 10 }).notNull().unique(),
    tipo: varchar('tipo', { length: 50 }).notNull(),
    descripcion: text('descripcion'),
    precio_noche: decimal('precio_noche', { precision: 10, scale: 2 }).notNull(),
    max_ocupantes: integer('max_ocupantes').notNull(),
    disponible: integer('disponible').default(1),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});


export const reservacionesHabitaciones = pgTable('reservaciones_habitaciones', {
    id: serial('id').primaryKey(),
    habitacion_id: integer('habitacion_id').references(() => habitaciones.id).notNull(),
    usuario_id: integer('usuario_id').references(() => usuarios.id).notNull(),
    fecha_entrada: timestamp('fecha_entrada').notNull(),
    fecha_salida: timestamp('fecha_salida').notNull(),
    estado: integer('estado').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});


export const huespedes = pgTable('huespedes', {
    id: serial('id').primaryKey(),
    nombre: varchar('nombre', { length: 255 }).notNull(),
    documento_identidad: varchar('documento_identidad', { length: 50 }).notNull(),
    telefono: varchar('telefono', { length: 20 }),
    email: varchar('email', { length: 255 }),
    fecha_nacimiento: timestamp('fecha_nacimiento').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});


export const pagos = pgTable('pagos', {
    id: serial('id').primaryKey(),
    reserva_id: integer('reserva_id').notNull(),
    monto: decimal('monto', { precision: 10, scale: 2 }).notNull(),
    metodo_pago: integer('metodo_pago').notNull(), 
    estado: integer('estado').notNull(), 
    fecha_pago: timestamp('fecha_pago').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});
