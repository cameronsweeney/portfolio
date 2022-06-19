## tree_editor/urls.py

from django.urls import path
from .views import TreePageView

urlpatterns = [
    path('tree/', TreePageView.as_view(), name = 'tree_editor'),
]