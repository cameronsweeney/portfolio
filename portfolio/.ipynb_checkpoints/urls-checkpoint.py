from django.urls import path
from .views import HomePageView, AboutPageView, ProjectsPageView, CodingPageView, ContactPageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about', AboutPageView.as_view(), name='about'),
    path('projects', ProjectsPageView.as_view(), name='projects'),
    path('coding', CodingPageView.as_view(), name='coding'),
    path('contact', ContactPageView.as_view(), name='contact'),
]