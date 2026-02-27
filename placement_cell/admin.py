from django.contrib import admin

# Register your models here.
from .models import JobApplication, ShortlistedStudent
admin.site.register(JobApplication)
admin.site.register(ShortlistedStudent)
