from django.urls import path
from . import views

app_name = "placement_cell"


urlpatterns = [
    path("dashboard/",views.pc_dashboard,name="pc_dashboard"), 
    path("students/", views.view_students, name="view_students"),
    path("companies/", views.view_company, name="view_company"),
    path("approve-company/", views.approve_company, name="approve_company"),
    path("requirements/", views.view_requirements, name="view_requirements"),
    path("shortlisted/", views.shortlisted_Students, name="shortlisted_students"),
    path("selected/", views.selected_students, name="selected_students"),
    path("contact/", views.view_contacts, name="view_contacts"),

    path("delete-student/<int:pk>/", views.delete_student, name="delete_student"),


]

