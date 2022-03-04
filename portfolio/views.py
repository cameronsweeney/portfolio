from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class HomePageView(TemplateView):
    template_name = 'home.html'
    
class AboutPageView(TemplateView):
    template_name = 'about.html'
    
class ProjectsPageView(TemplateView):
    template_name = 'projects.html'

class CodingPageView(TemplateView):
    template_name = 'coding.html'
    
class ContactPageView(TemplateView):
    template_name = 'contact.html'