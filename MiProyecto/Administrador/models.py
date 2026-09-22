from django.db import models

# Create your models here.


class Usuarios(models.Model):
    nombre_usuario = models.CharField(max_length=30)
    email_usuario = models.EmailField()

    def __str__(self):
        return f'Nombre_usuario: {self.nombre_usuario}, Email_usuario: {self.email_usuario}'


class Libros(models.Model):
    titulo_libro = models.CharField(max_length=100)
    autor = models.CharField(max_length=100)
    anio = models.IntegerField()
    genero_categoria = models.CharField(max_length=50)
    editorial = models.CharField(max_length=100)
    isbn = models.CharField(max_length=20, blank=True)
    disponibilidad = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.titulo_libro} - {self.autor} ({self.anio})'


