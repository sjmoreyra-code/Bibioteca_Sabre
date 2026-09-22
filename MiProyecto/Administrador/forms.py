from django import forms
from .models import Usuarios, Libros


class CrearUsuariosForm(forms.ModelForm):
    """
    Formulario para la creación de usuarios basado en el modelo Usuarios.
    """

    class Meta:
        model = Usuarios
        fields = ['nombre_usuario', 'email_usuario']

        labels = {
            'nombre_usuario': 'Nombre de Usuario',
            'email_usuario': 'Correo Electrónico',
        }

        widgets = {
            'nombre_usuario': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ingrese el nombre'
            }),

            'email_usuario': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'ejemplo@correo.com'
            }),
        }


class CrearLibrosForm(forms.ModelForm):
    """
    Formulario para la creación de libros basado en el modelo Libros.
    """

    class Meta:
        model = Libros
        fields = [
    'titulo_libro',
    'autor',
    'anio',
    'genero_categoria',
    'editorial',
    'isbn',
    'disponibilidad'
]

        labels = {
    'titulo_libro': 'Título del Libro',
    'autor': 'Autor',
    'anio': 'Año',
    'genero_categoria': 'Género / Categoría',
    'editorial': 'Editorial',
    'isbn': 'ISBN',
    'disponibilidad': 'Disponibilidad',
}

        widgets = {
    'titulo_libro': forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Ej. Don Quijote de la Mancha'
    }),

    'autor': forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Ej. Miguel de Cervantes'
    }),

    'anio': forms.NumberInput(attrs={
        'class': 'form-control',
        'placeholder': 'Ej. 1605'
    }),

    'genero_categoria': forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Ej. Literatura clásica'
    }),

    'editorial': forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Ej. Editorial Planeta'
    }),

    'isbn': forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Ej. 978-950-04-1234-5'
    }),

    'disponibilidad': forms.CheckboxInput(attrs={
        'class': 'form-check-input'
    }),
}

