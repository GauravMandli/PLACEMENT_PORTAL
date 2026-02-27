from django.urls import path
from . import views

urlpatterns = [
    path("register/",views.company_register,name="company_register"),     
    path("dashboard/",views.company_dashboard,name="company_dashboard"), 

]