<!-- <script lang="ts">
    import type { ActionData } from "./$types";

    export let form: ActionData;
    
</script> -->

<div
    class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
>
    <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-6">
            <img
                class="mx-auto h-12 w-auto"
                src="grano-de-cafe.png"
                alt="Logo"
            />

            <h3
                class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900"
            >
                Registrarse para una cuenta
            </h3>

            <form class="space-y-6" method="POST" action="/register">
                <div>
                    <label
                        for="new-password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Nombre de usuario
                    </label>
                    <div class="mt-1">
                        <input
                            name="username"
                            type="text"
                            required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            placeholder="Ingrese su nombre de usuario"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Correo electrónico
                    </label>
                    <div class="mt-1">
                        <input
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            placeholder="nombre@ejemplo.com"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Contraseña
                    </label>
                    <div class="mt-1">
                        <input
                            name="password"
                            type="password"
                            autocomplete="new-password"
                            required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Confirmar contraseña
                    </label>
                    <div class="mt-1">
                        <input
                            name="confirm_password"
                            type="password"
                            required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            placeholder="Confirme su contraseña"
                        />
                    </div>
                        
                </div>
                
            

                <div>
                    
                    <div>
                        <!-- {#if form?.error}
                    <p class="text-red-500 text-sm mb-4">{form.error}</p>
                {/if} -->
                        <button
                            class="w-[385px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        >
                            Registrar Cuenta
                        </button>
                    </div>
                </div>

                
                <div class="flex justify-center text-sm mt-4">
                    <a
                        href="/"
                        class="font-semibold text-indigo-600 hover:text-indigo-500"
                        >Volver al Inicio</a
                    >
                </div>
            </form>
        </div>
    </div>
</div>
