from django.urls import path
from .views import RecipeView, RecipeCreate

urlpatterns = [

    path('recipes', RecipeView.as_view()),
    path("recipesCreate", RecipeCreate.as_view())
]