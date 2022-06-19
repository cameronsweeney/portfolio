from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class TreePageView(TemplateView):
    template_name = 'tree.html'