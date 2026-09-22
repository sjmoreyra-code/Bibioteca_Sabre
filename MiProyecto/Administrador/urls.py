from django.urls import path
from Administrador import views

urlpatterns = [
    path('', views.mostrar_index, name='index'),
    path('libros/', views.mostrar_libros, name='libros'),
    path('usuarios/', views.mostrar_usuarios, name='usuarios'),
    path('accesibilidad/', views.mostrar_accesibilidad, name='accesibilidad'),
    path('registro/', views.mostrar_registro, name='registro'),
    path('quienes-somos/', views.mostrar_quienes_somos, name='quienes_somos'),
    path('crear_usuarios/', views.crear_usuario, name='crear_usuarios'),
    path('crear_libros/', views.crear_libro, name='crear_libros'),
    path('buscar-libros/', views.buscar_libros, name='buscar_libros'),
    path('editar-libro/<int:id>/', views.editar_libro, name='editar_libro'),
    path('eliminar-libro/<int:id>/', views.eliminar_libro, name='eliminar_libro'),
]