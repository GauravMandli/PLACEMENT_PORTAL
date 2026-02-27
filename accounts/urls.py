from django.urls import path
from . import views

urlpatterns = [
    path("student/login/", views.student_login, name="student_login"),
    path("company/login/", views.company_login, name="company_login"),
    path("placement_cell/login/", views.pc_login, name="pc_login"),


    path("logout/",views.logout_view,name="student_logout"),
]
