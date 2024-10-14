<div style="display: contents"></div>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			class="mx-auto h-10 w-auto"
			src="grano-de-cafe.png"
			alt="Tu Posada"
		/>
		<h2
			class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
		>
			Iniciar Sesión
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="/login" method="POST">
			<div>
				<label
					for="email"
					class="block text-sm font-medium leading-6 text-gray-900"
					>Correo Electronico</label
				>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label
						for="password"
						class="block text-sm font-medium leading-6 text-gray-900"
						>Contraseña</label
					>
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<button
					class="w-[385px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
				>
					Iniciar
				</button>
			</div>

			<div class="flex justify-center text-sm mt-4">
				<a
					href="/register"
					class="font-semibold text-indigo-600 hover:text-indigo-500"
					>¿No tiene una cuenta?</a
				>
			</div>

			<div>
				<form action="/login" method="POST">
					<input
						type="text"
						name="username"
						placeholder="Nombre de usuario"
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Contraseña"
						required
					/>
					<button type="submit">Iniciar sesión</button>
				</form>
			</div>
		</form>
	</div>
</div>
