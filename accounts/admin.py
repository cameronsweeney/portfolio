from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import myUser

admin.site.register(myUser, UserAdmin)

admin.site.site_title = 'Student Portal'
admin.site.site_header = 'Student Portal login'
admin.site_index_title = 'Index Title'