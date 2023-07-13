from django.urls import path

from django.shortcuts import render

def render_react(request):
    return render(request, "index.html")

urlpatterns = [
    path('', render_react)
]