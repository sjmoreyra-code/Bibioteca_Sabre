from django.urls import path
from Usuario import views

urlpatterns = [
    path('', views.mostrar_index, name='usuario_index'),
    path('prestamos/', views.mostrar_prestamos, name='usuario_prestamos'),
    path('perfil/', views.mostrar_perfil, name='usuario_perfil'),
]