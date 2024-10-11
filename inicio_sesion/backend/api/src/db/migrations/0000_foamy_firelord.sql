CREATE TABLE IF NOT EXISTS "habitaciones" (
	"id" serial PRIMARY KEY NOT NULL,
	"numero" varchar(10) NOT NULL,
	"tipo" varchar(50) NOT NULL,
	"descripcion" text,
	"precio_noche" numeric(10, 2) NOT NULL,
	"max_ocupantes" integer NOT NULL,
	"disponible" integer DEFAULT 1,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "habitaciones_numero_unique" UNIQUE("numero")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "huespedes" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(255) NOT NULL,
	"documento_identidad" varchar(50) NOT NULL,
	"telefono" varchar(20),
	"email" varchar(255),
	"fecha_nacimiento" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pagos" (
	"id" serial PRIMARY KEY NOT NULL,
	"reserva_id" integer NOT NULL,
	"monto" numeric(10, 2) NOT NULL,
	"metodo_pago" integer NOT NULL,
	"estado" integer NOT NULL,
	"fecha_pago" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reservaciones_habitaciones" (
	"id" serial PRIMARY KEY NOT NULL,
	"habitacion_id" integer NOT NULL,
	"usuario_id" integer NOT NULL,
	"fecha_entrada" timestamp NOT NULL,
	"fecha_salida" timestamp NOT NULL,
	"estado" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reservaciones_servicios" (
	"id" serial PRIMARY KEY NOT NULL,
	"servicio_id" integer NOT NULL,
	"usuario_id" integer NOT NULL,
	"fecha_reserva" timestamp NOT NULL,
	"estado" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	CONSTRAINT "roles_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "servicios" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(255) NOT NULL,
	"descripcion" text,
	"precio" integer NOT NULL,
	"stock" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usuarios" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"salt" varchar(64),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"role_id" serial NOT NULL,
	CONSTRAINT "usuarios_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reservaciones_habitaciones" ADD CONSTRAINT "reservaciones_habitaciones_habitacion_id_habitaciones_id_fk" FOREIGN KEY ("habitacion_id") REFERENCES "public"."habitaciones"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reservaciones_habitaciones" ADD CONSTRAINT "reservaciones_habitaciones_usuario_id_usuarios_id_fk" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reservaciones_servicios" ADD CONSTRAINT "reservaciones_servicios_servicio_id_servicios_id_fk" FOREIGN KEY ("servicio_id") REFERENCES "public"."servicios"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reservaciones_servicios" ADD CONSTRAINT "reservaciones_servicios_usuario_id_usuarios_id_fk" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
