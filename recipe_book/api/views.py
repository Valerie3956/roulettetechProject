from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, status
from .serializers import RecipeSerializer
from .models import Recipe
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


# get all recipes
# class RecipeView(generics.ListAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer


@api_view(["GET", "POST"])
def recipes_list(request):
        
        if request.method == "GET":
            recipes = Recipe.objects.all()
            serializer = RecipeSerializer(recipes, many = True)
            return JsonResponse(serializer.data, safe = False)
        if request.method == "POST":
            serializer = RecipeSerializer(data = request.data)
            if serializer.is_valid():
                  serializer.save()
                  return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(["GET"])
def recipes_by_difficulty(request, difficulty):
        recipes = Recipe.objects.filter(difficulty = difficulty)
        if not recipes.exists():
            return Response(status = status.HTTP_404_NOT_FOUND)
    
        serializer = RecipeSerializer(recipes, many = True)
        return Response(serializer.data)
