from django.shortcuts import render

# Create your views here.

def mostrar_index(request):
    return render(request, 'Usuario/index.html')

def mostrar_prestamos(request):
    return render(request, 'Usuario/prestamos.html')

def mostrar_perfil(request):
    return render(request, 'Usuario/perfil.html')