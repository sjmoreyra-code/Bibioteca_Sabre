from django.db import models

# Create your models here.

from django.db import models


class PerfilUsuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    alias = models.CharField(max_length=50)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=150)
    avatar = models.CharField(max_length=200, blank=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.alias
