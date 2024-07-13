from django.db import models

# Create your models here.


class Recipe(models.Model):

    title = models.CharField(max_length=200)
    ingredients = models.TextField()
    instructions = models.TextField()
    imgURL = models.URLField(blank=True, null=True)
    time = models.PositiveIntegerField(help_text="Time in minutes")
    servings = models.PositiveIntegerField()
    difficulty = models.CharField(max_length=50, choices=[
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard')
    ]) 
    notes = models.TextField(blank=True, null=True)