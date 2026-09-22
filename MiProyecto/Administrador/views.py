from django.shortcuts import render, redirect
from django.contrib import messages
from Administrador.models import *
from .forms import CrearUsuariosForm, CrearLibrosForm

def mostrar_index(request):
    libros = Libros.objects.all()
    context = {'libros': libros}
    return render(request, 'Administrador/index.html', context=context)

def mostrar_quienes_somos(request):
    return render(request, 'Administrador/quienes_somos.html')

def mostrar_registro(request):
    return render(request, 'Administrador/registro.html')

def mostrar_accesibilidad(request):
    return render(request, 'Administrador/accesibilidad.html')


def mostrar_libros(request):
    libros = Libros.objects.all()
    context = {'libros': libros}
    return render(request, 'Administrador/libros.html', context=context)

def buscar_libros(request):
    termino = request.GET.get('buscar', '')
    libros = Libros.objects.filter(titulo_libro__icontains=termino)

    return render(
        request,
        'Administrador/buscar_libros.html',
        {'libros': libros}
    )

def editar_libro(request, id):
    libro = Libros.objects.get(id=id)

    if request.method == 'POST':
        form = CrearLibrosForm(request.POST, instance=libro)

        if form.is_valid():
            form.save()
            return redirect('libros')
    else:
        form = CrearLibrosForm(instance=libro)

    return render(
        request,
        'Administrador/editar_libro.html',
        {'form': form, 'libro': libro}
    )

def eliminar_libro(request, id):
    libro = Libros.objects.get(id=id)

    if request.method == 'POST':
        libro.delete()
        return redirect('libros')

    return render(
        request,
        'Administrador/eliminar_libro.html',
        {'libro': libro}
    )

def mostrar_usuarios(request):
    usuario = Usuarios.objects.all()

    context = {'usuario': usuario}

    return render(request, 'Administrador/usuarios.html', context=context)


def crear_libro(request):
    """
    Vista para procesar la creación de un nuevo Libro.
    """

    if request.method == 'POST':
        # Instanciamos el formulario con los datos enviados en la petición POST
        form = CrearLibrosForm(request.POST)

        if form.is_valid():
            # Al usar ModelForm, save() crea y guarda la instancia directamente en la BD
            libro_creado = form.save()

            # Notificamos al usuario del éxito de la operación
            messages.success(request, f'Libro "{libro_creado.titulo_libro}" creado con éxito.')

            # Redirigimos a la página principal para evitar reenvíos del formulario
            return redirect('libros')

    else:
        # Petición GET: creamos una instancia vacía del formulario
        form = CrearLibrosForm()

    # Renderizamos la plantilla pasando el formulario como contexto
    return render(request, 'Administrador/crear_libros.html', {'form': form})

def crear_usuario(request):
    """
    Vista para procesar el registro de un nuevo Usuario.
    """

    if request.method == 'POST':
        form = CrearUsuariosForm(request.POST)

        if form.is_valid():
            usuario_creado = form.save()

            messages.success(
                request,
                f'Usuario "{usuario_creado.nombre_usuario}" registrado con éxito.'
            )

            return redirect('usuarios')

    else:
        form = CrearUsuariosForm()

    return render(
        request,
        'Administrador/registro.html',
        {'form': form}
    )

