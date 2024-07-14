from django.urls import path
# from .views import recipes_list, RecipeCreate
from api import views

urlpatterns = [

    # path('recipes', RecipeView.as_view()),

    path("recipes/", views.recipes_list),
    path('recipes/<str:difficulty>', views.recipes_by_difficulty)
]